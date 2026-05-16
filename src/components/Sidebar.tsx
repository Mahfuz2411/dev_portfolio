import { Award, Contact, House, Images, Sprout, Menu, Code2, Binary, GraduationCap } from "lucide-react";
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
    { path: "/about", label: "About Me", icon: Award, tooltip: "About Me" },
    { path: "/education", label: "Education", icon: GraduationCap, tooltip: "Education" },
    { path: "/projects", label: "Project Garden", icon: Sprout, tooltip: "My Projects" },
    { path: "/skills", label: "Skills", icon: Code2, tooltip: "Skills" },
    { path: "/cp-journey", label: "CP Journey", icon: Binary, tooltip: "CP Journey" },
    { path: "/gallery", label: "Gallery", icon: Images, tooltip: "Gallery" },
    { path: "/contact", label: "Contact", icon: Contact, tooltip: "Contact" },
  ];

  return (
    <aside
      className={cn(
        "fixed right-0 top-0 z-40 h-screen bg-slate-950/95 text-slate-100 backdrop-blur-sm border-l border-cyan-400/15 shadow-[0_0_0_1px_rgba(34,211,238,0.06),-24px_0_80px_rgba(0,0,0,0.35)] transition-[width] duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-full flex-col">
        {/* Logo & Toggle */}
        <div className="flex items-center justify-between p-4 border-b border-cyan-400/15">
          <h1
            className={cn(
              "text-lg font-bold bg-linear-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent flex items-center gap-2 transition-all duration-200 overflow-hidden whitespace-nowrap",
              isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
            )}
          >
             Portfolio
          </h1>

          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="ml-auto cursor-pointer"
          >
            <Menu className="size-5" />
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
                        "flex items-center transition-colors duration-200 group relative py-2 border border-transparent",
                        isCollapsed ? "justify-center px-0" : "px-3",
                        "hover:bg-cyan-400/10 hover:text-cyan-200",
                        isActive
                          ? "bg-linear-to-r from-cyan-500/25 via-sky-500/20 to-indigo-500/25 text-white shadow-[inset_0_0_0_1px_rgba(34,211,238,0.18)]"
                          : "text-slate-300"
                      )
                    }
                  >
                    <Icon className="size-5 shrink-0 self-center" />

                    <span
                      className={cn(
                        "text-sm font-medium transition-all duration-200 overflow-hidden whitespace-nowrap ",
                        isCollapsed
                          ? "opacity-0 w-0 ml-0"
                          : "opacity-100 w-auto ml-3"
                      )}
                    >
                      {item.label}
                    </span>

                    {isCollapsed && (
                      <span className="absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-xs border border-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {item.tooltip}
                      </span>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Theme Toggle at Bottom */}
        <div className="p-4 border-t border-cyan-400/15 overflow-hidden">
          <ThemeToggle compact={isCollapsed} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
