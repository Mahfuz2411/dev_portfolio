import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { useState, useEffect } from "react";

const particleDots = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 5}s`,
  duration: `${5 + Math.random() * 5}s`,
}));

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Show intro splash once when app starts.
  useEffect(() => {
    const hideSplash = setTimeout(() => setShowSplash(false), 1800);

    return () => {
      clearTimeout(hideSplash);
    };
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-purple-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Global Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particleDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-2 h-2 bg-indigo-400/20 rounded-full animate-float"
            style={{
              left: dot.left,
              top: dot.top,
              animationDelay: dot.delay,
              animationDuration: dot.duration,
            }}
          />
        ))}
      </div>

      {showSplash && (
        <div className="fixed inset-0 z-120 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-purple-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
          <div className="absolute inset-0 pointer-events-none">
            {particleDots.map((dot) => (
              <div
                key={`splash-${dot.id}`}
                className="absolute w-2 h-2 bg-indigo-400/20 rounded-full animate-float"
                style={{
                  left: dot.left,
                  top: dot.top,
                  animationDelay: dot.delay,
                  animationDuration: dot.duration,
                }}
              />
            ))}
          </div>

          <div className="relative w-full max-w-2xl rounded-2xl border border-indigo-400/20 bg-white/70 dark:bg-slate-900/55 px-5 py-6 sm:px-8 sm:py-8 shadow-2xl backdrop-blur-md">

            <p className="text-[11px] tracking-[0.3em] text-indigo-600/90 dark:text-indigo-300/90 font-semibold">PORTFOLIO</p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
              Welcome to <span className="text-indigo-400">Digital Garden</span>
            </h2>
            <p className="mt-3 text-xs sm:text-lg text-slate-700 dark:text-slate-300/90">
              Crafted by Mahfuz Ibne Syful - Software Developer
            </p>

            <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-slate-300/70 dark:bg-slate-700/60">
              <div className="h-full rounded-full bg-linear-to-r from-indigo-400 via-indigo-500 to-purple-500 splash-progress" />
            </div>
          </div>
        </div>
      )}

      {!showSplash && (
        <>
          <MobileNav />
          <div className="hidden lg:block">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          </div>
          <main className={`transition-all duration-300 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'} relative z-10`}>
            <Outlet />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
