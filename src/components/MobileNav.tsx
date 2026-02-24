import { Award, Contact, House, Images, Sprout, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: House },
    { path: "/projects", label: "Garden", icon: Sprout },
    { path: "/about", label: "About", icon: Award },
    { path: "/gallery", label: "Gallery", icon: Images },
    { path: "/contact", label: "Contact", icon: Contact },
  ];

  return (
    <div className="lg:hidden">
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            ✨ Portfolio
          </h1>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <nav className="fixed top-14.25 left-0 right-0 bg-white border-b border-slate-200 shadow-lg z-40 lg:hidden">
            <ul className="py-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-3 px-4 py-3 transition-colors",
                          "hover:bg-indigo-50",
                          isActive
                            ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white"
                            : "text-slate-700"
                        )
                      }
                    >
                      <Icon className="size-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}

      {/* Spacer for fixed header */}
      <div className="h-14.25" />
    </div>
  );
};

export default MobileNav;
