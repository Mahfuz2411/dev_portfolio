import { useHelmet } from "@/hooks/Helmet";
import { Code2, MonitorSmartphone, Wrench } from "lucide-react";
import { skillCategories, technologies, tools } from "@/data/skills";

const backgroundDots = Array.from({ length: 15 }, (_, index) => ({
  id: index,
  size: `${3 + Math.random() * 6}px`,
  color: `rgba(${Math.random() > 0.5 ? "99,102,241" : "139,92,246"}, ${0.15 + Math.random() * 0.15})`,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${6 + Math.random() * 12}s`,
}));

const Skills = () => {
  useHelmet("Skills - Portfolio");

  return (
    <section className="min-h-screen relative overflow-hidden px-4 sm:px-8 py-4 sm:py-8 lg:py-16 animate-fade-in">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] animate-float" style={{ animationDuration: '15s' }} />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)] animate-float" style={{ animationDuration: '20s', animationDelay: '5s' }} />
        {backgroundDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full animate-float"
            style={{
              width: dot.size,
              height: dot.size,
              background: dot.color,
              left: dot.left,
              top: dot.top,
              animationDelay: dot.delay,
              animationDuration: dot.duration,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-14">
        {/* Header */}
        <div className="text-left">
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
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <MonitorSmartphone className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">What I Can Do</h2>
          </div>
          <div className="space-y-10">
            {skillCategories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div
                  key={category.title}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-slate-100 dark:bg-slate-800/80`}>
                      <CategoryIcon className={`w-4 h-4 ${category.iconClass}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${category.dotClass}`} />
                        <h3 className={`text-base font-semibold uppercase tracking-wider ${category.headingClass}`}>
                          {category.title}
                        </h3>
                      </div>
                      <div className={`mt-2 h-px bg-linear-to-r ${category.lineClass}`} />
                    </div>
                  </div>

                  <div className="space-y-3 pl-12 sm:pl-12">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-3 pb-3 border-b border-slate-200/70 dark:border-slate-700/70 last:border-b-0 last:pb-0"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center shrink-0">
                            <SkillIcon className={`w-4 h-4 ${category.iconClass}`} />
                          </div>
                          <span className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 leading-snug">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Technologies */}
        <div>
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
                    className="group flex items-center gap-3 p-4 bg-slate-800/40 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center shrink-0 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors duration-300">
                      <Icon className="text-xl text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {tech.name}
                    </span>
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
                    className="group flex items-center gap-3 p-4 bg-slate-800/40 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center shrink-0 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors duration-300">
                      <Icon className="text-xl text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section 3: Tools */}
        <div>
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
                  className="group flex items-center gap-3 p-4 bg-slate-800/40 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center shrink-0 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors duration-300">
                    <Icon className="text-xl text-teal-600 dark:text-teal-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {tool.name}
                  </span>
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