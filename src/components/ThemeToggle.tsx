import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/contexts/theme';

interface ThemeToggleProps {
  compact?: boolean;
}

export const ThemeToggle = ({ compact = false }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light' as const, icon: Sun, label: 'Light' },
    { value: 'dark' as const, icon: Moon, label: 'Dark' },
    { value: 'system' as const, icon: Monitor, label: 'System' }
  ];

  const cycleTheme = () => {
    const currentIndex = themes.findIndex(t => t.value === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].value);
  };

  if (compact) {
    const currentTheme = themes.find(t => t.value === theme);
    const Icon = currentTheme?.icon || Sun;

    return (
      <button
        onClick={cycleTheme}
        className="w-full flex items-center justify-center p-2 bg-slate-800/40 border border-cyan-400/20 text-cyan-300 hover:bg-slate-800/60 hover:border-cyan-400/40 transition-all duration-200 cursor-pointer"
        title={`Current: ${currentTheme?.label} (Click to change)`}
        aria-label="Toggle theme"
      >
        <Icon className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="flex items-center gap-1 py-0.5 bg-slate-800/40 border border-cyan-400/20 w-full">
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`
                        flex items-center justify-center gap-1 py-2 transition-all duration-200 flex-1 min-w-0 flex-nowrap cursor-pointer
                        ${theme === value
              ? 'bg-slate-700/60 text-cyan-300 shadow-sm border border-cyan-400/20'
              : 'text-slate-400 hover:text-slate-200'
            }
                    `}
          title={label}
          aria-label={label}
        >
          <Icon className="w-4 h-4 shrink-0" />
          <span className="text-[11px] sm:text-xs font-medium hidden md:inline whitespace-nowrap overflow-hidden">{label}</span>
        </button>
      ))}
    </div>
  );
};
