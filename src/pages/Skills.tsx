import { useHelmet } from "@/hooks/Helmet";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Code2, Database, Palette, GitBranch, Zap, FileCode, Boxes } from "lucide-react";
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
    SiCplusplus,
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
import { BsCupHotFill } from "react-icons/bs";

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
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
            { name: "Express", icon: SiExpress, color: "text-slate-600 dark:text-slate-400" },
            { name: "React", icon: SiReact, color: "text-cyan-500" },
            { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
            { name: "Mongoose", icon: SiMongoose, color: "text-red-600" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" }
        ],
        secondary: [
            { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900 dark:text-white" },
            { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
            { name: "Supabase", icon: SiSupabase, color: "text-green-600" },
            { name: "Discord.js", icon: SiDiscord, color: "text-indigo-600" },
            { name: "Python", icon: SiPython, color: "text-blue-500" },
            { name: "Pygame", icon: SiPython, color: "text-blue-500" }
        ]
    };

    const tools = [
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "GitHub", icon: SiGithub, color: "text-slate-900 dark:text-white" },
        { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-600" },
        { name: "GitHub Copilot", icon: SiGithubcopilot, color: "text-purple-600" },
        { name: "Notion", icon: SiNotion, color: "text-slate-900 dark:text-white" },
        { name: "Figma", icon: SiFigma, color: "text-purple-500" },
        { name: "VS Code", icon: Code2, color: "text-blue-600" },
        { name: "Vercel", icon: SiVercel, color: "text-slate-900 dark:text-white" },
        { name: "Netlify", icon: SiNetlify, color: "text-cyan-600" },
        { name: "Render", icon: SiRender, color: "text-indigo-600" }
    ];

    return (
        <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Floating Particles Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-indigo-400/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10 space-y-12">
                {/* Header */}
                <div className="text-left animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                            Skills & Technologies
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                        The tools and technologies I use to bring ideas to life
                    </p>
                </div>

                {/* Section 1: What I Can Do */}
                <Card className="p-6 sm:p-8 border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm animate-fade-in">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                        <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-md">
                            <CheckCircle2 className="w-5 h-5" />
                        </div>
                        What I Can Do
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {skillsList.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <div 
                                    key={index}
                                    className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-indigo-50 dark:hover:bg-slate-600 transition-colors duration-200 border border-slate-200 dark:border-slate-600"
                                >
                                    <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                                    <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                        {skill.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </Card>

                {/* Section 2: Technologies */}
                <Card className="p-6 sm:p-8 border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm animate-fade-in">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                        <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-md">
                            <Code2 className="w-5 h-5" />
                        </div>
                        Technologies
                    </h2>

                    {/* Primary Stack */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                            Primary - MERN Stack
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {technologies.primary.map((tech, index) => {
                                const Icon = tech.icon;
                                return (
                                    <div 
                                        key={index}
                                        className="p-6 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-indigo-50 dark:hover:bg-slate-600 border-2 border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
                                    >
                                        <div className="text-center">
                                            <Icon className={`text-5xl mb-3 mx-auto ${tech.color}`} />
                                            <p className="font-semibold text-sm text-slate-800 dark:text-slate-100">{tech.name}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Secondary Stack */}
                    <div>
                        <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4">
                            Secondary
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {technologies.secondary.map((tech, index) => {
                                const Icon = tech.icon;
                                return (
                                    <div 
                                        key={index}
                                        className="p-6 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-indigo-50 dark:hover:bg-slate-600 border-2 border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
                                    >
                                        <div className="text-center">
                                            <Icon className={`text-5xl mb-3 mx-auto ${tech.color}`} />
                                            <p className="font-semibold text-sm text-slate-800 dark:text-slate-100">{tech.name}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Card>

                {/* Section 3: Tools */}
                <Card className="p-6 sm:p-8 border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm animate-fade-in">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                        <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-md">
                            <Boxes className="w-5 h-5" />
                        </div>
                        Tools I Use
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {tools.map((tool, index) => {
                            const Icon = tool.icon;
                            return (
                                <div 
                                    key={index}
                                    className="group relative p-6 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-indigo-50 dark:hover:bg-slate-600 border-2 border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer hover:scale-105"
                                >
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <Icon className={`text-4xl ${tool.color}`} />
                                        <p className="font-semibold text-sm text-slate-800 dark:text-slate-100">
                                            {tool.name}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Skills;