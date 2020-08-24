using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using OrchardCore.ContentManagement.Display.ContentDisplay;
using OrchardCore.ContentManagement.Display.Liquid;
using OrchardCore.ContentManagement.Display.Placement;
using OrchardCore.DisplayManagement.Descriptors.ShapePlacementStrategy;
using OrchardCore.Liquid;

namespace OrchardCore.ContentManagement.Display
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddContentManagementDisplay(this IServiceCollection services)
        {
            services.TryAddTransient<IContentItemDisplayManager, ContentItemDisplayManager>();
            services.TryAddEnumerable(new ServiceDescriptor(typeof(IContentDisplayHandler), typeof(ContentItemDisplayCoordinator), ServiceLifetime.Scoped));

            services.AddScoped<IPlacementNodeFilterProvider, ContentTypePlacementNodeFilterProvider>();
            services.AddScoped<IPlacementNodeFilterProvider, ContentPartPlacementNodeFilterProvider>();

            services.AddScoped<IContentPartDisplayDriverResolver, ContentPartDisplayDriverResolver>();
            services.AddScoped<IContentFieldDisplayDriverResolver, ContentFieldDisplayDriverResolver>();

            services.AddOptions<ContentDisplayOptions>();

            services.AddLiquidFilter<ConsoleLogFilter>("console_log");

            services.TryAddTransient<IContentPartComponentManager, ContentPartComponentManager>();
            services.AddScoped<IContentPartDisplayHandler, ContentPartDisplayCoordinator>();

            return services;
        }
    }
}
