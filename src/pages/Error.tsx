import { useHelmet } from "@/hooks/Helmet";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { Home, ArrowLeft, Lightbulb } from "lucide-react";

const Error = () => {
  useHelmet("404 - Page Not Found");

  return (
    <section className="min-h-screen relative overflow-hidden px-4 sm:px-8 py-4 sm:py-8 lg:py-16 animate-fade-in flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating particles */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/3 left-10 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-10 w-2.5 h-2.5 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        {/* 404 Number with animation - Horizontal */}
        <div className="mb-8 sm:mb-12">
          <div className="text-9xl sm:text-[140px] lg:text-[180px] font-black bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg animate-bounce leading-none">
            404
          </div>
        </div>

        {/* Lightbulb Icon with animation */}
        {/* <div className="mb-10 sm:mb-14 flex justify-center">
          <div className="relative">
            <Lightbulb className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-400 animate-pulse" />
            <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-300 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          </div>
        </div> */}

        {/* Error Message */}
        <div className="space-y-4 mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100">
            Oops! Page Not Found
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            It seems you've wandered into uncharted territory in my digital garden. 🌿
            The page you're looking for doesn't exist (yet), but don't worry—there's plenty to explore elsewhere!
          </p>
        </div>


        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
          <Button asChild size="lg" className="bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to="/">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-slate-300 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>
        </div> */}

        {/* Fun Footer Message */}
        <p className="mt-8 text-sm text-slate-500 dark:text-slate-400 italic">
          "Even the best gardens have some hidden corners!" 🌻
        </p>
      </div>
      
      
    </section>
  );
};

export default Error;