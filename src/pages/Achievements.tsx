import { useHelmet } from "@/hooks/Helmet";
import { Card } from "@/components/ui/card";
import { Award, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { achievements, type AchievementItem } from "@/data/achievements";

const Achievements = () => {
  useHelmet("Achievements - Portfolio");
  const [selectedImage, setSelectedImage] = useState<AchievementItem | null>(
    null,
  );

  // Lock scroll when popup is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

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
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden cursor-pointer border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl h-80"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain bg-slate-100 dark:bg-slate-900 transition-transform duration-500 group-hover:scale-105"
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

        {/* Image Popup Modal */}
        {selectedImage &&
          createPortal(
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
                  alt={selectedImage.title}
                  className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
                />
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                  <p className="text-slate-300 mt-1">
                    Year: {selectedImage.year}
                  </p>
                </div>
              </div>
            </div>,
            document.body,
          )}
      </div>
    </section>
  );
};

export default Achievements;
