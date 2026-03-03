import { useHelmet } from "@/hooks/Helmet";
import { Card } from "@/components/ui/card";
import { Code2, Rocket, Award, Heart, MapPin, Sparkles, Target, Coffee, Book, Mail, Phone } from "lucide-react";

const About = () => {
    useHelmet("About Me - Portfolio");

    const timeline = [
        { year: "2022", event: "Started coding journey", icon: Code2, color: "from-blue-500 to-cyan-600" },
        { year: "2023", event: "Started competitive programming", icon: Award, color: "from-amber-500 to-orange-600" },
        { year: "2024", event: "Started web development", icon: Rocket, color: "from-purple-500 to-pink-600" },
        { year: "2025", event: "The journey continues...", icon: Heart, color: "from-rose-500 to-red-600" }
    ];

    const quickFacts = [
        { label: "Location", value: "Bangladesh", icon: MapPin },
        { label: "Focus", value: "Full Stack Development", icon: Target },
        { label: "Learning", value: "Always Something New", icon: Book },
        { label: "Fuel", value: "Coffee & Code", icon: Coffee }
    ];

    return (
        <section className="min-h-screen relative overflow-hidden px-4 sm:px-8 py-4 sm:py-8 lg:py-16 animate-fade-in">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-8 sm:mb-12 text-left">
                    <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-800 dark:text-slate-100 mb-4">
                        About{" "}
                        <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
                        Get to know the person behind the code
                    </p>
                </div>

                {/* Main Grid Layout */}
                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                    {/* Profile Card - Spans 1 column */}
                    <div className="lg:col-span-1">
                        <Card className="p-6 text-center border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm h-full">
                            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-visible border-4 border-indigo-200 dark:border-indigo-800 shadow-xl">
                                <img 
                                    src="/dev_portfolio/mahfuz_image.jpeg" 
                                    alt="Mahfuz"
                                    className="w-full h-full object-cover rounded-full"
                                />
                                {/* Green Dot with Tooltip */}
                                <div className="group absolute -bottom-1 -right-1">
                                    <div className="relative w-7 h-7 bg-green-500 rounded-full border-4 border-white dark:border-slate-800 cursor-pointer">
                                        <span className="absolute inset-0 w-full h-full bg-green-500 rounded-full animate-ping opacity-75" />
                                    </div>
                                    {/* Tooltip - Bottom Position */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block z-50">
                                        <div className="bg-slate-900 dark:bg-slate-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                                            Available for work
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-900 dark:border-b-slate-700" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                                Mahfuz Ibne Syful
                            </h2>
                            <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-4">
                                Full Stack Developer
                            </p>
                            
                            {/* Contact Info */}
                            <div className="space-y-3 mb-4">
                                <div className="flex items-center justify-center gap-3 text-slate-700 dark:text-slate-300">
                                    <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                    <a href="mailto:mahfuzibnesyflu24@gmail.com" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                        mahfuzibnesyflu24@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center justify-center gap-3 text-slate-700 dark:text-slate-300">
                                    <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                    <span className="text-sm">
                                        +8801732389350
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Bio Card - Spans 2 columns */}
                    <div className="lg:col-span-2">
                        <Card className="p-6 sm:p-8 border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm h-full">
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                                    Hello There! 👋
                                </h3>
                            </div>
                            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                                <p>
                                    I'm a <span className="font-semibold text-indigo-600 dark:text-indigo-400">passionate developer</span> who loves 
                                    building creative and functional web applications. My journey in tech started with curiosity and 
                                    evolved into a deep passion for crafting elegant solutions to complex problems.
                                </p>
                                <p>
                                    My specialty lies in creating <span className="font-semibold text-purple-600 dark:text-purple-400">interactive web experiences</span> using 
                                    modern technologies. I believe in writing clean, maintainable code and creating applications 
                                    that users love to interact with.
                                </p>
                                <p>
                                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                                    or sharing knowledge with the developer community. I'm always excited to learn and grow! 🚀
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Quick Facts Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {quickFacts.map((fact, index) => {
                        const Icon = fact.icon;
                        return (
                            <Card 
                                key={index}
                                className="p-4 border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex flex-col items-center text-center gap-2">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">{fact.label}</div>
                                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">{fact.value}</div>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                {/* Journey Timeline */}
                <Card className="p-6 sm:p-8 border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
                        <span className="text-2xl">🌱</span>
                        My Journey
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                        {timeline.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div 
                                    key={index}
                                    className="group relative p-4 sm:p-5 rounded-xl bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-700/50 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 hover:shadow-lg cursor-pointer"
                                >
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br ${item.color} rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xl sm:text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                                                {item.year}
                                            </div>
                                            <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                                {item.event}
                                            </div>
                                        </div>
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

export default About;