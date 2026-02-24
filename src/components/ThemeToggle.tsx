import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const themes = [
        { value: 'light' as const, icon: Sun, label: 'Light' },
        { value: 'dark' as const, icon: Moon, label: 'Dark' },
        { value: 'system' as const, icon: Monitor, label: 'System' }
    ];

    return (
        <div className="flex items-center gap-1 p-1 bg-slate-200 dark:bg-slate-700 rounded-lg w-full">
            {themes.map(({ value, icon: Icon, label }) => (
                <button
                    key={value}
                    onClick={() => setTheme(value)}
                    className={`
                        flex items-center justify-center gap-1.5 px-2 py-2 rounded-md transition-all duration-200 flex-1 min-w-0
                        ${theme === value 
                            ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                        }
                    `}
                    title={label}
                    aria-label={label}
                >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-medium hidden md:inline">{label}</span>
                </button>
            ))}
        </div>
    );
};
