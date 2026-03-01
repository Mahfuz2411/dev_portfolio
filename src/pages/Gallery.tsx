import { useHelmet } from "@/hooks/Helmet";
import { Card } from "@/components/ui/card";
import { Tag, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import buetIupcImage from "@/assets/gallery/buet-iupc-2024.jpg";
import icpcDhakaImage2024 from "@/assets/gallery/ICPC-dhaka-regional-2024.jpg";
import icpcDhakaImage2025 from "@/assets/gallery/ICPC-dhaka-regional-2025.jpg";
import duetIupcImage from "@/assets/gallery/duet-iupc-2025.jpg";
import deptPicnicImage from "@/assets/gallery/dept-picnic-2025.jpeg";
import bubtBapsCampImage from "@/assets/gallery/bubt-baps-camp-2025.jpg";

import pracContestImage01 from "@/assets/gallery/prac-contest-01.jpg";
import pracContestImage02 from "@/assets/gallery/prac-contest-02.jpg";
import pracContestImage03 from "@/assets/gallery/prac-contest-03.jpg";

interface GalleryItem {
    id: number;
    image: string;
    tag: string;
    size: 'small' | 'medium' | 'large';
}

const Gallery = () => {
    useHelmet("Gallery - Portfolio");
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    // Lock scroll when popup is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    const galleryItems: GalleryItem[] = [
        {
            id: 1,
            image: icpcDhakaImage2025,
            tag: "ICPC Dhaka Regional 2025",
            size: 'large'
        },
        {
            id: 2,
            image: buetIupcImage,
            tag: "BUET IUPC 2024",
            size: 'small'
        },
        {
            id: 3,
            image: icpcDhakaImage2024,
            tag: "ICPC Dhaka Regional 2024",
            size: 'small'
        },
        {
            id: 4,
            image: duetIupcImage,
            tag: "DUET IUPC 2025",
            size: 'small'
        },
        {
            id: 5,
            image: deptPicnicImage,
            tag: "Department Picnic 2025",
            size: 'small'
        },
        {
            id: 6,
            image: bubtBapsCampImage,
            tag: "BUBT-BAPS National Programming Camp 2025",
            size: 'small'
        },
        {
            id: 7,
            image: pracContestImage01,
            tag: "Warmup Contest for ICPC Dhaka Regional 2024",
            size: 'small'
        },
        {
            id: 8,
            image: pracContestImage02,
            tag: "BUBT ICPC Preliminary Contest 2025",
            size: 'small'
        },
        {
            id: 9,
            image: pracContestImage03,
            tag: "Warmup Contest for ICPC Dhaka Regional 2024",
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
        <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden animate-fade-in">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-left mb-12">
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
                    {galleryItems.map((item) => (
                        <Card 
                            key={item.id}
                            onClick={() => setSelectedImage(item)}
                            className={`${getSizeClass(item.size)} group relative overflow-hidden cursor-pointer border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl`}
                        >
                            {/* Image */}
                            <img 
                                // src="../assets/gallery/buet-iupc-2024.jpg"
                                src={item.image}
                                alt={item.tag}
                                className="w-full h-full object-contain bg-slate-100 dark:bg-slate-900 transition-transform duration-500 group-hover:scale-105"
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
                        </Card>
                    ))}
                </div>

                {/* Image Popup Modal */}
                {selectedImage && createPortal(
                    <div 
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div 
                            className="flex flex-col items-center gap-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img 
                                src={selectedImage.image}
                                alt={selectedImage.tag}
                                className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
                            />
                            <div className="text-white text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <Tag className="w-5 h-5 text-indigo-400" />
                                    <h3 className="text-xl font-bold">{selectedImage.tag}</h3>
                                </div>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
            </div>
        </section>
    );
};

export default Gallery;