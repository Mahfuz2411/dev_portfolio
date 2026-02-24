import { useHelmet } from "@/hooks/Helmet";
import { FileUser } from "lucide-react";
import downloadResume from "@/utils/Download";
import { Button } from "@/components/ui/button";

const Home = () => {
    useHelmet("Home - Portfolio");

    return (
        <section className="min-h-screen relative overflow-hidden px-4 sm:px-8 py-4 sm:py-8 lg:py-16">
            {/* Floating Particles Background */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-indigo-400/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            {/* Hero Container */}
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                {/* Hero Content */}
                <div className="space-y-4 sm:space-y-6 animate-fade-in">
                    <h1 className="font-extrabold text-5xl sm:text-6xl text-slate-800 leading-tight">
                        Welcome to My{" "}<br />
                        
                        <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Digital Garden
                        </span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed">
                        Where creativity blooms and projects grow into beautiful experiences
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                        <Button
                            onClick={downloadResume}
                            size="lg"
                            className="bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                        >
                            <FileUser className="w-4 h-4 sm:w-5 sm:h-5" />
                            Download Resume
                        </Button>
                    </div>

                    {/* Weather Widget */}
                    <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md border border-slate-200">
                        <span className="text-xl sm:text-2xl">☀️</span>
                        <span className="text-xs sm:text-sm font-medium text-slate-700">Perfect day for coding • 22°C</span>
                    </div>
                </div>

                {/* Hero Garden - Animated Plant */}
                <div className="hidden lg:flex relative h-125 items-end justify-center">
                    {/* Main Plant */}
                    <div className="relative transition-all duration-300">
                        {/* Pot */}
                        <div className="w-40 h-28 rounded-b-2xl relative z-10" 
                             style={{
                                 background: 'linear-gradient(to bottom, #78350f, #451a03)',
                                 boxShadow: 'inset 0 -6px 12px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.15)'
                             }}>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-5 rounded-t-md border-b-2 border-stone-900" 
                                 style={{ background: '#292524' }}></div>
                        </div>

                        {/* Stem */}
                        <div 
                            className="absolute bottom-24 left-1/2 -translate-x-1/2 w-5 h-36 rounded-t-full animate-grow"
                            style={{ 
                                zIndex: 5,
                                background: 'linear-gradient(to top, #10b981, #34d399)',
                                boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.2), 0 2px 8px rgba(16, 185, 129, 0.3)'
                            }}>
                        </div>

                        {/* Leaves - Left Side */}
                        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 -ml-8">
                            <div 
                                className="w-16 h-9 rounded-full animate-sway"
                                style={{ 
                                    animationDelay: '0s',
                                    transformOrigin: 'right center',
                                    background: 'linear-gradient(135deg, #6ee7b7, #34d399)',
                                    boxShadow: '0 2px 8px rgba(110, 231, 183, 0.5)'
                                }}></div>
                        </div>
                        
                        {/* Leaves - Right Side */}
                        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 ml-8">
                            <div 
                                className="w-16 h-9 rounded-full animate-sway"
                                style={{ 
                                    animationDelay: '0.5s',
                                    transformOrigin: 'left center',
                                    background: 'linear-gradient(135deg, #6ee7b7, #34d399)',
                                    boxShadow: '0 2px 8px rgba(110, 231, 183, 0.5)'
                                }}></div>
                        </div>

                        {/* Flower */}
                        <div className="absolute -top-47 left-1/2 -translate-x-1/2 animate-bloom z-20">
                            {/* Petals */}
                            <div className="relative w-28 h-28">
                                {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation) => (
                                    <div
                                        key={rotation}
                                        className="absolute top-1/2 left-1/2 w-10 h-14 -mt-7 -ml-5"
                                        style={{ transform: `rotate(${rotation}deg) translateY(-14px)` }}
                                    >
                                        <div 
                                            className="w-full h-full rounded-full opacity-95"
                                            style={{
                                                background: 'linear-gradient(to bottom, #c084fc, #a855f7)',
                                                boxShadow: '0 2px 8px rgba(168, 85, 247, 0.4)'
                                            }}></div>
                                    </div>
                                ))}
                                {/* Center */}
                                <div 
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full"
                                    style={{
                                        background: 'linear-gradient(to bottom, #fbbf24, #f59e0b)',
                                        boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.2), 0 0 12px rgba(251, 191, 36, 0.5)'
                                    }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;