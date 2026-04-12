import { Award, Book, Code2, Coffee, Heart, MapPin, Rocket, Target } from "lucide-react";

export const timeline = [
  {
    year: "2022",
    event: "Started coding journey",
    icon: Code2,
    color: "from-blue-500 to-cyan-600",
  },
  {
    year: "2023",
    event: "Started competitive programming",
    icon: Award,
    color: "from-amber-500 to-orange-600",
  },
  {
    year: "2024",
    event: "Started web development",
    icon: Rocket,
    color: "from-purple-500 to-pink-600",
  },
  {
    year: "2025",
    event: "The journey continues...",
    icon: Heart,
    color: "from-rose-500 to-red-600",
  },
];

export const quickFacts = [
  { label: "Location", value: "Bangladesh", icon: MapPin },
  { label: "Focus", value: "Backend | DevOps", icon: Target },
  { label: "Learning", value: "Always Something New", icon: Book },
  { label: "Fuel", value: "Coffee & Code", icon: Coffee },
];
