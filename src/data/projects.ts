import quickshort01 from "../assets/projects/quickshort01.png";

import numerica01 from "../assets/projects/numerica01.png";

import streakzilla01 from "../assets/projects/streakzilla01.png";

// Project data type
export interface Project {
  id: number;
  name: string;
  description: string;
  githubLink: string;
  liveLink: string;
  image: string;
  tags: string[];
}

// Projects data - sorted by id for priority
export const projectsData: Project[] = [
  {
    id: 1,
    name: "QuickShort - URL Shortener",
    description: "A full-stack URL shortening service with analytics and custom domains. Built with React, Node.js, and MongoDB.",
    githubLink: "https://github.com/Mahfuz2411/url_shortener",
    liveLink: "https://quickshort24.netlify.app/",
    image: quickshort01,
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"]
  },
  {
    id: 2,
    name: "Numerica - Gaming platform",
    description: "Experience smooth, engaging logical games with beautiful animations. No downloads required - play instantly in your browser!",
    githubLink: "https://github.com/Mahfuz2411/numerica",
    liveLink: "https://numerica247.vercel.app/",
    image: numerica01,
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "PWA", "IndexDB"]
  },
  {
    id: 3,
    name: "StreakZilla - Habit Tracker",
    description: "An intelligent habit tracking application with streaks and progress analytics. Features include custom goals, social sharing, and motivational insights.",
    githubLink: "https://github.com/Mahfuz2411/streakzilla",
    liveLink: "https://streak-zilla.web.app/",
    image: streakzilla01,
    tags: ["React", "TailwindCSS", "Firebase", "PWA"]
  },
  // {
  //   id: 4,
  //   name: "Weather Dashboard",
  //   description: "A beautiful weather dashboard with 7-day forecast, hourly updates, and weather maps. Integrates with OpenWeatherMap API for real-time data.",
  //   githubLink: "https://github.com/Mahfuz2411/weather-dashboard",
  //   liveLink: "https://weather-dashboard-demo.vercel.app",
  //   image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1366&h=768&fit=crop",
  //   tags: ["React", "Chart.js", "OpenWeatherMap API", "CSS3", "Geolocation"]
  // },
  // {
  //   id: 5,
  //   name: "Portfolio CMS",
  //   description: "A headless CMS for managing portfolio content with a modern admin panel. Built with React admin dashboard and Strapi backend.",
  //   githubLink: "https://github.com/Mahfuz2411/portfolio-cms",
  //   liveLink: "https://portfolio-cms-demo.vercel.app",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1366&h=768&fit=crop",
  //   tags: ["Strapi", "React", "PostgreSQL", "GraphQL", "AWS S3"]
  // },
  // {
  //   id: 6,
  //   name: "Fitness Tracker",
  //   description: "A comprehensive fitness tracking app with workout plans, progress charts, and calorie counter. Features social sharing and achievement system.",
  //   githubLink: "https://github.com/Mahfuz2411/fitness-tracker",
  //   liveLink: "https://fitness-tracker-demo.vercel.app",
  //   image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1366&h=768&fit=crop",
  //   tags: ["React Native", "Redux", "Firebase", "Chart.js", "Expo"]
  // },
  // {
  //   id: 7,
  //   name: "Social Media Analytics",
  //   description: "Analytics dashboard for social media metrics with beautiful data visualizations. Track engagement, followers, and post performance across multiple platforms.",
  //   githubLink: "https://github.com/yourusername/social-analytics",
  //   liveLink: "https://social-analytics-demo.vercel.app",
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1366&h=768&fit=crop",
  //   tags: ["Vue.js", "D3.js", "Node.js", "MongoDB", "Social Media APIs"]
  // }
];
