import { useHelmet } from "@/hooks/Helmet";
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

import achievementImage01 from "@/assets/achievements/bubt-baps-camp-2025-certificate-.jpeg";
import achievementImage02 from "@/assets/achievements/contest-judges.jpg";

interface AchievementItem {
    id: number;
    image: string;
    title: string;
    year: string;
}

const Achievements = () => {
    useHelmet("Achievements - Portfolio");

    const achievements: AchievementItem[] = [
        {
            id: 1,
            image: achievementImage01,
            title: "Certificate of Participation - BUET-BAPS National Programming Camp 2025",
            year: "2025"
        },
        {
            id: 2,
            image: achievementImage02,
            title: "Contest Judge - NEUB ICT Fest 2025",
            year: "2025"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800",
            title: "Best Project Award - Tech Fest",
            year: "2023"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
            title: "Dean's List Recognition",
            year: "2023"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800",
            title: "CodeChef 5-Star Rating",
            year: "2023"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
            title: "Open Source Contributor Badge",
            year: "2022"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
            title: "Best Presentation Award",
            year: "2022"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
            title: "Scholarship for Academic Excellence",
            year: "2022"
        }
    ];

    return (
        <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden animate-fade-in">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-left mb-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                            Achievements
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                        Milestones and recognition earned along my journey
                    </p>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((item) => (
                        <Card 
                            key={item.id}
                            className="group relative overflow-hidden cursor-pointer border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl h-80"
                        >
                            {/* Image */}
                            <img 
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            
                            {/* Overlay with Details */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-start gap-3 text-white">
                                        <Award className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-bold text-xl">{item.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Top Badge - Always Visible */}
                            <div className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                                <Award className="w-4 h-4" />
                                <span>{item.year}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;