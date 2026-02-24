import { useHelmet } from "@/hooks/Helmet";
import { useState } from "react";
import { projectsData } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, ChevronDown } from "lucide-react";

const PROJECTS_PER_PAGE = 3;

const Projects = () => {
    useHelmet("Projects - Portfolio");
    const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

    const visibleProjects = projectsData.slice(0, visibleCount);
    const hasMore = visibleCount < projectsData.length;

    const handleSeeMore = () => {
        setVisibleCount(prev => Math.min(prev + PROJECTS_PER_PAGE, projectsData.length));
    };

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

            {/* Header */}
            <div className="max-w-6xl mx-auto mb-8 sm:mb-12 relative z-10 text-left">
                <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-800 dark:text-slate-100 mb-4">
                    Project{" "}
                    <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Garden
                    </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
                    Explore my growing collection of projects - each one cultivated with care 🌱
                </p>
            </div>

            {/* Projects Grid */}
            <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 relative z-10">
                {visibleProjects.map((project) => (
                    <Card 
                        key={project.id}
                        className="overflow-hidden border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                    >
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Project Image */}
                            <div className="relative h-56 sm:h-72 md:h-auto overflow-hidden bg-slate-100 dark:bg-slate-900">
                                <img 
                                    src={project.image} 
                                    alt={project.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent md:hidden" />
                            </div>

                            {/* Project Info */}
                            <div className="p-6 sm:p-8 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
                                            {project.name}
                                        </h3>
                                        <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                                            #{project.id}
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, index) => (
                                            <span 
                                                key={index}
                                                className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex flex-wrap gap-3">
                                    <Button
                                        asChild
                                        className="bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                                    >
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-4 h-4" />
                                            Live Demo
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="border-2 border-slate-300 hover:border-indigo-400 hover:bg-indigo-50"
                                    >
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-4 h-4" />
                                            Source Code
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}

                {/* See More Button */}
                {hasMore && (
                    <div className="flex justify-center pt-4">
                        <Button
                            onClick={handleSeeMore}
                            size="lg"
                            variant="outline"
                            className="border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
                            See More Projects ({projectsData.length - visibleCount} remaining)
                        </Button>
                    </div>
                )}

                {/* End Message */}
                {!hasMore && projectsData.length > PROJECTS_PER_PAGE && (
                    <div className="text-center py-8">
                        <p className="text-slate-500 text-lg">
                            🌸 You've reached the end of the garden! 🌸
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
