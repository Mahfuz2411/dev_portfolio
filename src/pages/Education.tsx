import { useHelmet } from "@/hooks/Helmet";
import { Card } from "@/components/ui/card";
import { ExternalLink, GraduationCap, CalendarDays, School } from "lucide-react";

type CourseProject = {
  projectType: "Team" | "Single";
  project: string;
  description: string;
  techStack: string[];
  githubLink: string | string[];
};

const courseProjects: CourseProject[] = [
  {
    projectType: "Single",
    project: "NoteApp (Android)",
    description:
      "A simple Android note-taking app to create, organize, edit, and manage daily notes with a clean and user-friendly interface.",
    techStack: ["Java", "XML", "SQLite", "Android Studio"],
    githubLink: "https://github.com/Mahfuz2411/NoteApp",
  },
  {
    projectType: "Team",
    project: "Bondhu (Social Media Platform)",
    description:
      "A social media platform built for sharing posts, connecting with friends, and interacting through common community features.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/GalacticSyntax/bondhu-rework",
  },
  {
    projectType: "Single",
    project: "SurveySync - YES/NO Survey System",
    description:
      "A lightweight YES/NO survey system designed to collect responses quickly and present clear participation results.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: ["https://github.com/Mahfuz2411/survey-sync-client", "https://github.com/Mahfuz2411/survey-sync-server"],
  },
];

const Education = () => {
  useHelmet("Education - Portfolio");

  return (
    <section className="min-h-screen relative overflow-hidden px-4 sm:px-8 py-4 sm:py-8 lg:py-16 animate-fade-in">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-6 sm:space-y-8">
        <div className="mb-2 sm:mb-4">
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-800 dark:text-slate-100 mb-4">
            Academic{" "}
            <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
            Education background and university projects
          </p>
        </div>

        <Card className="p-5 sm:p-7 border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-linear-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
                B.Sc (Engg.) in CSE
              </h2>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-300">
                <span className="inline-flex items-center gap-2 text-sm sm:text-base">
                  <School className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  North East University Bangladesh
                </span>
                <span className="inline-flex items-center gap-2 text-sm sm:text-base">
                  <CalendarDays className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  2021-2025
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100">
              Included Course Projects
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 italic">
              These were my very first attempts at building real projects, simple as they may be, each one holds a great deal of meaning to me.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
            {courseProjects.map((item) => (
              <Card
                key={item.project}
                className="h-full p-5 border-2 border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-900/40 backdrop-blur-sm hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 hover:shadow-lg flex flex-col"
              >
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap gap-2 min-h-7">
                    <span className="px-2 py-1 text-[11px] font-semibold rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                      {item.projectType} Project
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 min-h-16">
                    Project: {item.project}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 min-h-28">
                    {item.description}
                  </p>

                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-700">
                  {Array.isArray(item.githubLink) ? (
                    <div className="flex flex-col gap-1.5">
                      {["Frontend", "Backend"].map((label, i) => (
                        <a
                          key={label}
                          href={(item.githubLink as string[])[i]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          GitHub — {label}
                        </a>
                      ))}
                    </div>
                  ) : item.githubLink ? (
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      GitHub Link
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500">
                      <ExternalLink className="w-4 h-4" />
                      GitHub: Not available
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
