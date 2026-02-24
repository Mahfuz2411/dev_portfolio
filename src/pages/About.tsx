import { useHelmet } from "@/hooks/Helmet";
import { Card } from "@/components/ui/card";
import { Code2, Rocket, Award, Heart, Calendar, MapPin } from "lucide-react";

const About = () => {
    useHelmet("About Me - Portfolio");

    const skills = [
        { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"] },
        { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"] },
        { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma", "Postman"] },
        { category: "Others", items: ["REST APIs", "GraphQL", "Responsive Design", "Agile/Scrum"] }
    ];

    const timeline = [
        { year: "2022", event: "Started coding journey", icon: Code2 },
        { year: "2023", event: "Started competitive programming", icon: Award },
        { year: "2024", event: "Started web development", icon: Rocket },
        { year: "2025", event: "The journey continues...", icon: Heart }
    ];

    return (
        <section className="min-h-screen relative overflow-hidden px-4 sm:px-8 py-4 sm:py-8 lg:py-16">
            {/* Floating Particles Background */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-indigo-400/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-8 sm:mb-12 text-left">
                    <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-800 dark:text-slate-100 mb-4">
                        About{" "}
                        <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            The Gardener
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
                        Get to know the person behind the projects
                    </p>
                </div>

                {/* Main Content */}
                <div className="space-y-8 mb-8">
                    {/* Profile Card */}
                    <Card className="p-6 sm:p-8 text-center border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                        <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-200 dark:border-indigo-800 shadow-xl">
                            <img 
                                src="/dev_portfolio/mahfuz_image.jpeg" 
                                alt="Mahfuz"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                            Mahfuz Ibne Syful
                        </h2>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                            Full Stack Developer
                        </p>
                        
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Bangladesh</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Available for work</span>
                            </div>
                        </div>
                    </Card>

                    {/* Bio */}
                    <Card className="p-6 sm:p-8 border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                            👋 Hello There!
                        </h3>
                        <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>
                                Hi! I'm a passionate developer who believes in cultivating digital experiences 
                                that grow and flourish over time. Just like a garden, each project needs care, 
                                attention, and the right environment to bloom.
                            </p>
                            <p>
                                My specialty lies in creating interactive web applications that not only function 
                                beautifully but also provide delightful user experiences. I love transforming ideas 
                                into elegant, scalable solutions.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new technologies, contributing to 
                                open-source projects, or helping others learn to code.
                            </p>
                        </div>
                    </Card>

                    {/* Skills Section */}
                    <div>
                        <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-left">
                            💻 Skills & Technologies
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {skills.map((skillGroup, index) => (
                                <Card 
                                    key={index}
                                    className="p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                                >
                                    <h4 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                                        {skillGroup.category}
                                    </h4>
                                    <div className="space-y-2">
                                        {skillGroup.items.map((skill, idx) => (
                                            <div 
                                                key={idx}
                                                className="text-sm text-slate-700 dark:text-slate-300 py-1.5 px-3 bg-slate-100 dark:bg-slate-700 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors"
                                            >
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Journey Timeline */}
                    <Card className="p-6 sm:p-8 border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                            🌱 My Growth Journey
                        </h3>
                        <div className="space-y-4">
                            {timeline.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div 
                                        key={index}
                                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-indigo-50 dark:hover:bg-slate-700 transition-colors duration-200"
                                    >
                                        <div className="shrink-0 w-12 h-12 bg-linear-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3">
                                                <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                                                    {item.year}
                                                </span>
                                                <span className="text-slate-700 dark:text-slate-300">
                                                    {item.event}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Card>
                </div>

            </div>
        </section>
    );
};

export default About;