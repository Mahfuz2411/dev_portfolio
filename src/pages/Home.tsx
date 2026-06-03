import { useHelmet } from "@/hooks/Helmet";
import { FileUser, TerminalSquare, X } from "lucide-react";
import downloadResume, { viewResume } from "@/utils/Download";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type TerminalLine = {
  type: "input" | "output";
  text: string;
};

const commandHelp = [
  "whoami - see who this is",
  "about - short bio",
  "projects - featured work",
  "skills - tech stack overview",
  "contact - contact details",
  "resume - view or download resume",
  "help - show commands",
  "clear - clear terminal",
];

const Home = () => {
  useHelmet("Home - Portfolio");
  const [isResumePopupOpen, setIsResumePopupOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([]);
  const terminalInputRef = useRef<HTMLInputElement | null>(null);
  const terminalScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isResumePopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isResumePopupOpen]);

  const handleViewResume = () => {
    viewResume();
    setIsResumePopupOpen(false);
  };

  const handleDownloadResume = () => {
    downloadResume();
    setIsResumePopupOpen(false);
  };

  const runCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase();

    if (!command) {
      return;
    }

    setTerminalLines((current) => {
      const nextLines: TerminalLine[] = [...current, { type: "input", text: rawCommand }];

      switch (command) {
        case "help":
          nextLines.push({
            type: "output",
            text: commandHelp.join("\n"),
          });
          break;
        case "whoami":
          nextLines.push({
            type: "output",
            text: "Mahfuz Ibne Syful | Full Stack Developer | Backend focused",
          });
          break;
        case "about":
          nextLines.push({
            type: "output",
            text: "I build web apps, APIs, and systems with a strong focus on backend engineering, scalability, and clean delivery.",
          });
          break;
        case "projects":
          nextLines.push({
            type: "output",
            text: "QuickShort, Numerica, and Streakzilla are my featured projects. Use the Projects page for full details.",
          });
          break;
        case "skills":
          nextLines.push({
            type: "output",
            text: "TypeScript, React, Node.js, Express, MongoDB, Docker, CI/CD, Tailwind CSS.",
          });
          break;
        case "contact":
          nextLines.push({
            type: "output",
            text: "Email: mahfuzibnesyful24@gmail.com | Phone: +8801732389350",
          });
          break;
        case "resume":
          nextLines.push({
            type: "output",
            text: "Use the Resume buttons below to view or download the PDF.",
          });
          break;
        case "clear":
          // Clear all lines silently
          return [];
        default:
          nextLines.push({
            type: "output",
            text: `Unknown command: ${rawCommand}. Type help.`,
          });
      }

      return nextLines;
    });

    setTerminalInput("");
    window.requestAnimationFrame(() => {
      terminalInputRef.current?.focus();
    });
  };

  useEffect(() => {
    // keep terminal scrolled to bottom whenever lines change
    const el = terminalScrollRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [terminalLines]);

  return (
    <section className="min-h-screen relative overflow-hidden px-4 sm:px-8 py-4 sm:py-8 lg:py-16 animate-fade-in">
      {/* Hero Container */}
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Hero Content */}
        <div className="space-y-4 sm:space-y-6 lg:pt-4">
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-slate-800 dark:text-slate-100 leading-tight max-w-xl">
            Welcome to My{" "}<br />

            <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dev. Portfolio
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
            Building reliable software, solving complex problems, and shipping products that scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Button
              onClick={() => setIsResumePopupOpen(true)}
              size="lg"
              className="bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base cursor-pointer"
            >
              <FileUser className="w-4 h-4 sm:w-5 sm:h-5" />
              Resume
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-sm sm:text-base"
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

        </div>

        {/* Hero Terminal Widget */}
        <div className="relative flex h-80 sm:h-88 lg:h-96 items-start justify-center lg:justify-end lg:pt-4">
          <div className="w-full max-w-lg border-t border-r border-cyan-400/35 bg-slate-950/90 backdrop-blur-md shadow-[0_0_0_1px_rgba(34,211,238,0.1),0_30px_60px_rgba(15,23,42,0.5)]">
            <div className="flex items-center justify-between border-b border-cyan-400/20 px-4 py-3 text-slate-200">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-cyan-300">
                  <TerminalSquare className="w-4 h-4" />
                  <span className="uppercase tracking-[0.2em]">mahfuz@portfolio: ~</span>
                </div>
              </div>
              <span className="text-xs text-slate-400">bash</span>
            </div>

            <div className="space-y-3 p-4 sm:p-5 font-mono text-sm text-slate-200">
              <div
                ref={terminalScrollRef}
                className="space-y-2 pr-1 overflow-auto h-40 sm:h-48 md:h-56 lg:h-64"
              >
                {terminalLines.map((line, index) => (
                  <div key={`${line.type}-${index}`} className="whitespace-pre-wrap leading-relaxed">
                    {line.type === "input" ? (
                      <span>
                        <span className="text-cyan-300">mahfuz@portfolio:~$</span> {line.text}
                      </span>
                    ) : (
                      <span className="text-slate-300">{line.text}</span>
                    )}
                  </div>
                ))}

                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    runCommand(terminalInput);
                  }}
                >
                  <label className="sr-only" htmlFor="terminal-input">
                    Terminal command input
                  </label>
                  <div className="flex items-start gap-2 pt-2 text-slate-200">
                    <span className="shrink-0 text-cyan-300">mahfuz@portfolio:~$</span>
                    <input
                      ref={terminalInputRef}
                      id="terminal-input"
                      value={terminalInput}
                      onChange={(event) => setTerminalInput(event.target.value)}
                      placeholder="Type help and press Enter"
                      className="min-w-0 w-full bg-transparent text-slate-100 placeholder:text-slate-500 outline-none caret-cyan-300"
                      autoComplete="off"
                      spellCheck={false}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isResumePopupOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsResumePopupOpen(false)}
          >
            <div
              className="w-full max-w-md border-t border-r border-cyan-400/30 bg-slate-900/80 backdrop-blur-md shadow-2xl p-5 sm:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
                  Resume options
                </h2>
                <button
                  type="button"
                  onClick={() => setIsResumePopupOpen(false)}
                  aria-label="Close"
                  className="p-1 text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  type="button"
                  onClick={handleViewResume}
                  className="flex-1 bg-slate-800 hover:bg-slate-900 text-white cursor-pointer"
                >
                  View
                </Button>
                <Button
                  type="button"
                  onClick={handleDownloadResume}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
                >
                  Download
                </Button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
};

export default Home;