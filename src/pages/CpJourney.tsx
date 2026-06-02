import { useHelmet } from "@/hooks/Helmet";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { platforms } from "@/data/cpJourney";

const CpJourney = () => {
  useHelmet("CP Journey - Portfolio");

  return (
    <section className="min-h-screen relative overflow-hidden px-4 sm:px-8 py-4 sm:py-8 lg:py-16 animate-fade-in">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-800 dark:text-slate-100 mb-4">
            CP{" "}
            <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
            My competitive programming presence across platforms
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {platforms.map((platform) => {
            return (
              <Card
                key={platform.name}
                className={`p-4 sm:p-5 border-t border-r border-cyan-400/30 bg-slate-900/60 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:border-cyan-400/50`}
              >
                {/* Platform Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center shadow-lg p-1.5`}
                  >
                    <img 
                      src={platform.logo} 
                      alt={`${platform.name} logo`}
                      className="w-full h-full object-contain rounded-sm"
                    />
                  </div>
                  <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                    {platform.name}
                  </h2>
                </div>

                {/* Stats */}
                <div className="space-y-2.5 mb-4">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-700">
                    <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                      Problems Solved
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-bold px-2 py-0.5 rounded-full ${platform.badge}`}
                    >
                      {platform.problemsSolved || "—"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-700">
                    <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                      Rating
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-bold px-2 py-0.5 rounded-full ${platform.badge}`}
                    >
                      {platform.rating || "—"}
                    </span>
                  </div>
                </div>

                {/* Profile Link */}
                {platform.profileLink ? (
                  <a
                    href={platform.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors w-min text-nowrap"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Profile
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 dark:text-slate-500">
                    <ExternalLink className="w-4 h-4" />
                    Profile link coming soon
                  </span>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CpJourney;
