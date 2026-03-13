import { useHelmet } from "@/hooks/Helmet";
import { Card } from "@/components/ui/card";
import type { ComponentType, SVGProps } from "react";
import { ExternalLink } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiCodechef,
  SiCodeforces,
  SiHackerrank,
  SiLeetcode,
} from "react-icons/si";

type LogoComponent = IconType | ComponentType<{ className?: string }>;

const AtCoderLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M12 3 4.75 20.5h3.45l1.45-3.6h4.7l1.42 3.6h3.48L12 3Zm-1.2 10.98L12 10.8l1.18 3.18H10.8Z"
      fill="currentColor"
    />
  </svg>
);

type Platform = {
  name: string;
  icon: LogoComponent;
  color: string;
  border: string;
  badge: string;
  problemsSolved: string;
  rating: string;
  profileLink: string;
};

const platforms: Platform[] = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    color: "from-yellow-500 to-orange-500",
    border: "hover:border-yellow-400 dark:hover:border-yellow-500",
    badge: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
    problemsSolved: "330+",
    rating: "1,471",
    profileLink: "https://leetcode.com/u/mahfuz2411/",
  },
  {
    name: "Codeforces",
    icon: SiCodeforces,
    color: "from-blue-500 to-cyan-500",
    border: "hover:border-blue-400 dark:hover:border-blue-500",
    badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    problemsSolved: "650+",
    rating: "1272",
    profileLink: "https://codeforces.com/profile/Mahfuz2411",
  },
  {
    name: "AtCoder",
    icon: AtCoderLogo,
    color: "from-slate-500 to-slate-700",
    border: "hover:border-slate-400 dark:hover:border-slate-400",
    badge: "bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300",
    problemsSolved: "60+",
    rating: "556",
    profileLink: "https://atcoder.jp/users/Mahfuz2411",
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    color: "from-green-500 to-emerald-600",
    border: "hover:border-green-400 dark:hover:border-green-500",
    badge: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    problemsSolved: "100+",
    rating: "",
    profileLink: "https://www.hackerrank.com/profile/Mahfuz2411",
  },
  {
    name: "CodeChef",
    icon: SiCodechef,
    color: "from-amber-600 to-orange-700",
    border: "hover:border-amber-400 dark:hover:border-amber-500",
    badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
    problemsSolved: "240+",
    rating: "1513",
    profileLink: "https://www.codechef.com/users/mahfuz2411",
  },
];

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
            const Icon = platform.icon;
            return (
              <Card
                key={platform.name}
                className={`p-4 sm:p-5 border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${platform.border}`}
              >
                {/* Platform Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg bg-linear-to-br ${platform.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-5 h-5 text-white" />
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
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
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
