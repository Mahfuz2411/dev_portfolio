import achievementImage01 from "@/assets/achievements/bubt-baps-camp-2025-certificate-.jpeg";
import achievementImage02 from "@/assets/achievements/contest-judges.jpg";

export interface AchievementItem {
  id: number;
  image: string;
  title: string;
  year: string;
}

export const achievements: AchievementItem[] = [
  {
    id: 1,
    image: achievementImage01,
    title: "Certificate of Participation - BUET-BAPS National Programming Camp 2025",
    year: "2025",
  },
  {
    id: 2,
    image: achievementImage02,
    title: "Contest Judge - NEUB ICT Fest 2025",
    year: "2025",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800",
    title: "Best Project Award - Tech Fest",
    year: "2023",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    title: "Dean's List Recognition",
    year: "2023",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800",
    title: "CodeChef 5-Star Rating",
    year: "2023",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    title: "Open Source Contributor Badge",
    year: "2022",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
    title: "Best Presentation Award",
    year: "2022",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    title: "Scholarship for Academic Excellence",
    year: "2022",
  },
];
