import { useHelmet } from "@/hooks/Helmet";
import { Card } from "@/components/ui/card";
import { Tag } from "lucide-react";

interface GalleryItem {
    id: number;
    image: string;
    tag: string;
    size: 'small' | 'medium' | 'large';
}

const Gallery = () => {
    useHelmet("Gallery - Portfolio");

    const galleryItems: GalleryItem[] = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
            tag: "ICPC Dhaka Regional 2024",
            size: 'large'
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
            tag: "Hackathon Winner 2023",
            size: 'small'
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
            tag: "Tech Conference 2024",
            size: 'small'
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500",
            tag: "Team Building Event",
            size: 'small'
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800",
            tag: "Workshop on AI/ML",
            size: 'small'
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500",
            tag: "Coding Bootcamp",
            size: 'small'
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600",
            tag: "Project Presentation",
            size: 'small'
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800",
            tag: "University Fest 2023",
            size: 'small'
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500",
            tag: "Study Session",
            size: 'small'
        }
    ];

    const getSizeClass = (size: string) => {
        switch(size) {
            case 'large':
                return 'md:col-span-2 md:row-span-2';
            case 'medium':
                return 'md:col-span-1 md:row-span-1';
            case 'small':
                return 'md:col-span-1 md:row-span-1';
            default:
                return 'md:col-span-1 md:row-span-1';
        }
    };

    return (
        <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Floating Particles Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-indigo-400/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-left mb-12 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                            Gallery
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                        Moments captured from competitions, events, and achievements
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
                    {galleryItems.map((item, index) => (
                        <Card 
                            key={item.id}
                            className={`${getSizeClass(item.size)} group relative overflow-hidden cursor-pointer border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl`}
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            {/* Image */}
                            <img 
                                src={item.image}
                                alt={item.tag}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            
                            {/* Overlay with Tag */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-2 text-white">
                                        <Tag className="w-5 h-5 text-indigo-400" />
                                        <span className="font-semibold text-lg">{item.tag}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Top Tag Badge - Always Visible */}
                            <div className="absolute top-4 left-4 bg-indigo-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                                <Tag className="w-4 h-4" />
                                <span>{item.tag}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;