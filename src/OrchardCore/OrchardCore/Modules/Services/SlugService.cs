using System;
using System.Globalization;
using System.Text;
using Cysharp.Text;
using OrchardCore.Autoroute.Abstractions.Services;

namespace OrchardCore.Modules.Services
{
    public class SlugService : ISlugService
    {
        private const char Hyphen = '-';
        private const int MaxLength = 1000;

        public string Slugify(string text)
        {
            return Slugify(text, Hyphen);
        }

        /// <summary>
        /// Transforms specified text to a custom form generally not suitable for URL slugs.
        /// Allows you to use a specified separator char.
        /// </summary>
        /// <param name="text">The text to transform.</param>
        /// <param name="hyphen">The separator char</param>
        /// <returns>The slug created from the input text.</returns>
        public string Slugify(string text, char hyphen)
        {
            if (String.IsNullOrEmpty(text))
            {
                return text;
            }

            var appendHyphen = false;
            var normalizedText = text.Normalize(NormalizationForm.FormKD);

            using var slug = ZString.CreateStringBuilder();

            for (var i = 0; i < normalizedText.Length; i++)
            {
                var currentChar = Char.ToLowerInvariant(normalizedText[i]);

                if (CharUnicodeInfo.GetUnicodeCategory(currentChar) == UnicodeCategory.NonSpacingMark)
                {
                    continue;
                }

                if (Char.IsLetterOrDigit(currentChar))
                {
                    slug.Append(currentChar);

                    appendHyphen = true;
                }
                else if (currentChar == hyphen)
                {
                    if (appendHyphen && i != normalizedText.Length - 1)
                    {
                        slug.Append(currentChar);
                        appendHyphen = false;
                    }
                }
                else if (currentChar == '_' || currentChar == '~')
                {
                    slug.Append(currentChar);
                }
                else
                {
                    if (appendHyphen)
                    {
                        slug.Append(hyphen);

                        appendHyphen = false;
                    }
                }
            }

            return new string(slug.AsSpan()[..Math.Min(slug.Length, MaxLength)]).Normalize(NormalizationForm.FormC);
        }
    }
}
