import { Award, Contact, House, Images, Sprout, Menu, Trophy } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const Sidebar = ({ isCollapsed, setIsCollapsed }: SidebarProps) => {
  const navItems = [
    { path: "/", label: "Home", icon: House, tooltip: "Homepage" },
    { path: "/projects", label: "Garden", icon: Sprout, tooltip: "My Projects" },
    { path: "/about", label: "About Me", icon: Award, tooltip: "About Me" },
    { path: "/achievements", label: "Achievements", icon: Trophy, tooltip: "Achievements" },
    { path: "/gallery", label: "Gallery", icon: Images, tooltip: "Gallery" },
    { path: "/contact", label: "Contact", icon: Contact, tooltip: "Contact" },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen transition-all duration-300 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-r border-slate-200 dark:border-slate-700 shadow-lg",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-full flex-col">
        {/* Logo & Toggle */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {!isCollapsed && (
            <h1 className="text-lg font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
              ✨ Portfolio
            </h1>
          )}
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="ml-auto"
          >
            <Menu className="size-4" />
          </Button>
        </div>

        <Separator />

        {/* Navigation */}
        <nav className="flex-1 py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group relative",
                        "hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-700 dark:hover:text-indigo-300",
                        isActive
                          ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                          : "text-slate-700 dark:text-slate-300"
                      )
                    }
                    title={isCollapsed ? item.tooltip : undefined}
                  >
                    <Icon className="size-4 shrink-0" />
                    {!isCollapsed && (
                      <span className="text-sm font-medium">{item.label}</span>
                    )}
                    
                    {/* Tooltip for collapsed state */}
                    {isCollapsed && (
                      <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {item.tooltip}
                      </span>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Theme Toggle */}
        {!isCollapsed && (
          <div className="px-4 py-3">
            <ThemeToggle />
          </div>
        )}

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          {!isCollapsed ? (
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
              Crafting digital experiences ✨
            </p>
          ) : (
            <div className="text-center">
              <span className="text-lg">✨</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
