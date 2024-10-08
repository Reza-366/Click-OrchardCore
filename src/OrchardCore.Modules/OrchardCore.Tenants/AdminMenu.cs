using Microsoft.Extensions.Localization;
using OrchardCore.Environment.Shell;
using OrchardCore.Navigation;

namespace OrchardCore.Tenants;

public sealed class AdminMenu : INavigationProvider
{
    private readonly ShellSettings _shellSettings;

    internal readonly IStringLocalizer S;

    public AdminMenu(IStringLocalizer<AdminMenu> localizer, ShellSettings shellSettings)
    {
        _shellSettings = shellSettings;
        S = localizer;
    }

    public ValueTask BuildNavigationAsync(string name, NavigationBuilder builder)
    {
        if (!NavigationHelper.IsAdminMenu(name))
        {
            return ValueTask.CompletedTask;
        }

        // Don't add the menu item on non-default tenants
        if (!_shellSettings.IsDefaultShell())
        {
            return ValueTask.CompletedTask;
        }

        builder
            .Add(S["Multi-Tenancy"], "after", tenancy => tenancy
                .AddClass("menu-multitenancy")
                .Id("multitenancy")
                .Add(S["Tenants"], S["Tenants"].PrefixPosition(), tenant => tenant
                    .Action("Index", "Admin", "OrchardCore.Tenants")
                    .Permission(Permissions.ManageTenants)
                    .LocalNav()
                ),
                priority: 1);

        return ValueTask.CompletedTask;
    }
}
