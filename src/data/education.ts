export type CourseProject = {
  projectType: "Team" | "Single";
  project: string;
  description: string;
  techStack: string[];
  githubLink: string | string[];
};

export const courseProjects: CourseProject[] = [
  {
    projectType: "Single",
    project: "NoteApp (Android)",
    description:
      "A simple Android note-taking app to create, organize, edit, and manage daily notes with a clean and user-friendly interface.",
    techStack: ["Java", "XML", "Android Studio"],
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
    githubLink: [
      "https://github.com/Mahfuz2411/survey-sync-client",
      "https://github.com/Mahfuz2411/survey-sync-server",
    ],
  },
];
