export interface Platform {
  name: string;
  logo: string;
  color: string;
  border: string;
  badge: string;
  problemsSolved: string;
  rating: string;
  profileLink: string;
}

export const platforms: Platform[] = [
  {
    name: "LeetCode",
    logo: "/platform-logos/leetcode.png",
    color: "from-yellow-500 to-orange-500",
    border: "hover:border-yellow-400 dark:hover:border-yellow-500",
    badge: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
    problemsSolved: "330+",
    rating: "1400+",
    profileLink: "https://leetcode.com/u/mahfuz2411/",
  },
  {
    name: "Codeforces",
    logo: "/platform-logos/codeforces.png",
    color: "from-blue-500 to-cyan-500",
    border: "hover:border-blue-400 dark:hover:border-blue-500",
    badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    problemsSolved: "650+",
    rating: "1200+",
    profileLink: "https://codeforces.com/profile/Mahfuz2411",
  },
  {
    name: "AtCoder",
    logo: "/platform-logos/atcoder.png",
    color: "from-slate-500 to-slate-700",
    border: "hover:border-slate-400 dark:hover:border-slate-400",
    badge: "bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300",
    problemsSolved: "60+",
    rating: "550+",
    profileLink: "https://atcoder.jp/users/Mahfuz2411",
  },
  {
    name: "HackerRank",
    logo: "/platform-logos/hackerrank.png",
    color: "from-green-500 to-emerald-600",
    border: "hover:border-green-400 dark:hover:border-green-500",
    badge: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    problemsSolved: "100+",
    rating: "",
    profileLink: "https://www.hackerrank.com/profile/Mahfuz2411",
  },
  {
    name: "CodeChef",
    logo: "/platform-logos/codechef.jpg",
    color: "from-amber-600 to-orange-700",
    border: "hover:border-amber-400 dark:hover:border-amber-500",
    badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
    problemsSolved: "240+",
    rating: "1500+",
    profileLink: "https://www.codechef.com/users/mahfuz2411",
  },
  {
    name: "Virtual Judge",
    logo: "/platform-logos/vjudge.png",
    color: "from-violet-500 to-purple-600",
    border: "hover:border-violet-400 dark:hover:border-violet-500",
    badge: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300",
    problemsSolved: "100+",
    rating: "",
    profileLink: "https://vjudge.net/user/Mahfuz2411",
  },
];
