import { useHelmet } from "@/hooks/Helmet";
import { CheckCircle2, Code2, Database, Palette, GitBranch, Zap, FileCode, Boxes, Sparkles, Wrench } from "lucide-react";
import { 
    SiTypescript,
    SiMongodb, 
    SiMongoose,
    SiExpress, 
    SiReact, 
    SiNodedotjs,
    SiTailwindcss,
    SiNextdotjs, 
    SiPython,
    SiFirebase,
    SiSupabase,
    SiDiscord,
    SiGit,
    SiGithub,
    SiGithubactions,
    SiGithubcopilot,
    SiNotion,
    SiFigma,
    SiVercel,
    SiNetlify,
    SiRender
} from "react-icons/si";

const Skills = () => {
    useHelmet("Skills - Portfolio");

    const skillsList = [
        { name: "RESTful API Design & Integration", icon: Zap },
        { name: "JWT & OAuth Authentication", icon: CheckCircle2 },
        { name: "Database Design & Optimization", icon: Database },
        { name: "Responsive Web Design", icon: Palette },
        { name: "Version Control & Git Workflows", icon: GitBranch },
        { name: "State Management (Context API)", icon: Boxes },
        { name: "Server-Side Rendering (SSR)", icon: FileCode },
        { name: "API Testing & Documentation", icon: CheckCircle2 },
        { name: "Agile/Scrum Methodologies", icon: CheckCircle2 },
        { name: "UI/UX Implementation", icon: Palette },
        { name: "Performance Optimization", icon: Zap },
        { name: "Error Handling & Debugging", icon: Code2 }
    ];

    const technologies = {
        primary: [
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30", border: "border-blue-200 dark:border-blue-800", glow: "group-hover:shadow-blue-400/30" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30", border: "border-green-200 dark:border-green-800", glow: "group-hover:shadow-green-400/30" },
            { name: "Express", icon: SiExpress, color: "text-slate-600 dark:text-slate-300", bg: "bg-slate-100 dark:bg-slate-700/50", border: "border-slate-200 dark:border-slate-600", glow: "group-hover:shadow-slate-400/30" },
            { name: "React", icon: SiReact, color: "text-cyan-500", bg: "bg-cyan-100 dark:bg-cyan-900/30", border: "border-cyan-200 dark:border-cyan-800", glow: "group-hover:shadow-cyan-400/30" },
            { name: "Node.js", icon: SiNodedotjs, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30", border: "border-green-200 dark:border-green-800", glow: "group-hover:shadow-green-400/30" },
            { name: "Mongoose", icon: SiMongoose, color: "text-red-600", bg: "bg-red-100 dark:bg-red-900/30", border: "border-red-200 dark:border-red-800", glow: "group-hover:shadow-red-400/30" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500", bg: "bg-cyan-100 dark:bg-cyan-900/30", border: "border-cyan-200 dark:border-cyan-800", glow: "group-hover:shadow-cyan-400/30" }
        ],
        secondary: [
            { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900 dark:text-white", bg: "bg-slate-100 dark:bg-slate-700/50", border: "border-slate-200 dark:border-slate-600", glow: "group-hover:shadow-slate-400/30" },
            { name: "Firebase", icon: SiFirebase, color: "text-yellow-500", bg: "bg-yellow-100 dark:bg-yellow-900/30", border: "border-yellow-200 dark:border-yellow-800", glow: "group-hover:shadow-yellow-400/30" },
            { name: "Supabase", icon: SiSupabase, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30", border: "border-green-200 dark:border-green-800", glow: "group-hover:shadow-green-400/30" },
            { name: "Discord.js", icon: SiDiscord, color: "text-indigo-600", bg: "bg-indigo-100 dark:bg-indigo-900/30", border: "border-indigo-200 dark:border-indigo-800", glow: "group-hover:shadow-indigo-400/30" },
            { name: "Python", icon: SiPython, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30", border: "border-blue-200 dark:border-blue-800", glow: "group-hover:shadow-blue-400/30" },
            { name: "Pygame", icon: SiPython, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30", border: "border-blue-200 dark:border-blue-800", glow: "group-hover:shadow-blue-400/30" }
        ]
    };

    const tools = [
        { name: "Git", icon: SiGit, color: "text-orange-600", bg: "bg-orange-100 dark:bg-orange-900/30" },
        { name: "GitHub", icon: SiGithub, color: "text-slate-900 dark:text-white", bg: "bg-slate-100 dark:bg-slate-700/50" },
        { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "GitHub Copilot", icon: SiGithubcopilot, color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-900/30" },
        { name: "Notion", icon: SiNotion, color: "text-slate-900 dark:text-white", bg: "bg-slate-100 dark:bg-slate-700/50" },
        { name: "Figma", icon: SiFigma, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30" },
        { name: "VS Code", icon: Code2, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "Vercel", icon: SiVercel, color: "text-slate-900 dark:text-white", bg: "bg-slate-100 dark:bg-slate-700/50" },
        { name: "Netlify", icon: SiNetlify, color: "text-cyan-600", bg: "bg-cyan-100 dark:bg-cyan-900/30" },
        { name: "Render", icon: SiRender, color: "text-indigo-600", bg: "bg-indigo-100 dark:bg-indigo-900/30" }
    ];

    return (
        <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated Gradient Mesh Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] animate-float" style={{ animationDuration: '15s' }} />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)] animate-float" style={{ animationDuration: '20s', animationDelay: '5s' }} />
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full animate-float"
                        style={{
                            width: `${3 + Math.random() * 6}px`,
                            height: `${3 + Math.random() * 6}px`,
                            background: `rgba(${Math.random() > 0.5 ? '99,102,241' : '139,92,246'}, ${0.15 + Math.random() * 0.15})`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 8}s`,
                            animationDuration: `${6 + Math.random() * 12}s`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10 space-y-14">
                {/* Header */}
                <div className="text-left animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-5 border border-indigo-200 dark:border-indigo-800">
                        <Sparkles className="w-4 h-4" />
                        My Toolkit
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                            Skills & Technologies
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                        The tools and technologies I use to bring ideas to life
                    </p>
                </div>

                {/* Section 1: What I Can Do */}
                <div className="animate-fade-in" style={{ animationDelay: '0.15s' }}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                            <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">What I Can Do</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {skillsList.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <div 
                                    key={index}
                                    className="group flex items-center gap-3 p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 border border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-500/5"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center shrink-0 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors duration-300">
                                        <Icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        {skill.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Section 2: Technologies */}
                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                            <Code2 className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Technologies</h2>
                    </div>

                    {/* Primary Stack */}
                    <div className="mb-10">
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                            <h3 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                                Primary Stack
                            </h3>
                            <div className="flex-1 h-px bg-linear-to-r from-indigo-200 to-transparent dark:from-indigo-800 ml-3" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {technologies.primary.map((tech, index) => {
                                const Icon = tech.icon;
                                return (
                                    <div 
                                        key={index}
                                        className={`group relative p-5 rounded-2xl ${tech.bg} border ${tech.border} hover:scale-[1.04] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl ${tech.glow}`}
                                    >
                                        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/50 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="relative text-center space-y-3">
                                            <div className="inline-flex">
                                                <Icon className={`text-4xl sm:text-5xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                                            </div>
                                            <p className="font-semibold text-sm text-slate-800 dark:text-slate-100">{tech.name}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Secondary Stack */}
                    <div>
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-2 h-2 rounded-full bg-purple-500" />
                            <h3 className="text-base font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                                Secondary
                            </h3>
                            <div className="flex-1 h-px bg-linear-to-r from-purple-200 to-transparent dark:from-purple-800 ml-3" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {technologies.secondary.map((tech, index) => {
                                const Icon = tech.icon;
                                return (
                                    <div 
                                        key={index}
                                        className={`group relative p-5 rounded-2xl ${tech.bg} border ${tech.border} hover:scale-[1.04] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl ${tech.glow}`}
                                    >
                                        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/50 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="relative text-center space-y-3">
                                            <div className="inline-flex">
                                                <Icon className={`text-4xl sm:text-5xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                                            </div>
                                            <p className="font-semibold text-sm text-slate-800 dark:text-slate-100">{tech.name}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Section 3: Tools */}
                <div className="animate-fade-in" style={{ animationDelay: '0.45s' }}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                            <Wrench className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Tools I Use</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {tools.map((tool, index) => {
                            const Icon = tool.icon;
                            return (
                                <div 
                                    key={index}
                                    className={`group relative p-5 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/5 cursor-pointer hover:scale-[1.04]`}
                                >
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <div className={`w-12 h-12 ${tool.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className={`text-2xl ${tool.color}`} />
                                        </div>
                                        <p className="font-medium text-sm text-slate-700 dark:text-slate-300">
                                            {tool.name}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;