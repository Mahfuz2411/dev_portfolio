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
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration with Stripe.",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://ecommerce-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1366&h=768&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"]
  },
  {
    id: 2,
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates using Socket.io. Features drag-and-drop boards, team collaboration, and notifications.",
    githubLink: "https://github.com/yourusername/task-manager",
    liveLink: "https://taskmanager-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1366&h=768&fit=crop",
    tags: ["React", "TypeScript", "Socket.io", "Tailwind CSS", "Firebase"]
  },
  {
    id: 3,
    name: "AI Chat Application",
    description: "An intelligent chatbot application powered by OpenAI GPT-4 API. Features include conversation history, custom prompts, and markdown rendering for responses.",
    githubLink: "https://github.com/yourusername/ai-chat-app",
    liveLink: "https://aichat-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1366&h=768&fit=crop",
    tags: ["Next.js", "OpenAI API", "React", "TailwindCSS", "Vercel AI SDK"]
  },
  {
    id: 4,
    name: "Weather Dashboard",
    description: "A beautiful weather dashboard with 7-day forecast, hourly updates, and weather maps. Integrates with OpenWeatherMap API for real-time data.",
    githubLink: "https://github.com/yourusername/weather-dashboard",
    liveLink: "https://weather-dashboard-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1366&h=768&fit=crop",
    tags: ["React", "Chart.js", "OpenWeatherMap API", "CSS3", "Geolocation"]
  },
  {
    id: 5,
    name: "Portfolio CMS",
    description: "A headless CMS for managing portfolio content with a modern admin panel. Built with React admin dashboard and Strapi backend.",
    githubLink: "https://github.com/yourusername/portfolio-cms",
    liveLink: "https://portfolio-cms-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1366&h=768&fit=crop",
    tags: ["Strapi", "React", "PostgreSQL", "GraphQL", "AWS S3"]
  },
  {
    id: 6,
    name: "Fitness Tracker",
    description: "A comprehensive fitness tracking app with workout plans, progress charts, and calorie counter. Features social sharing and achievement system.",
    githubLink: "https://github.com/yourusername/fitness-tracker",
    liveLink: "https://fitness-tracker-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1366&h=768&fit=crop",
    tags: ["React Native", "Redux", "Firebase", "Chart.js", "Expo"]
  },
  {
    id: 7,
    name: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with beautiful data visualizations. Track engagement, followers, and post performance across multiple platforms.",
    githubLink: "https://github.com/yourusername/social-analytics",
    liveLink: "https://social-analytics-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1366&h=768&fit=crop",
    tags: ["Vue.js", "D3.js", "Node.js", "MongoDB", "Social Media APIs"]
  }
];
