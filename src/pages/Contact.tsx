import { useHelmet } from "@/hooks/Helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 24 24" 
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const Contact = () => {
    useHelmet("Contact - Portfolio");

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch('https://formspree.io/f/mjgejwop', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus('idle'), 5000);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            link: 'https://github.com/mahfuz2411',
            color: 'from-slate-700 to-slate-900',
            handle: '@mahfuz2411'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            link: 'https://www.linkedin.com/in/mahfuz-ibne-syful/',
            color: 'from-blue-600 to-blue-800',
            handle: 'Mahfuz Ibne Syful'
        },
        {
            name: 'X',
            icon: XIcon,
            link: 'https://x.com/mahfuz_avi',
            color: 'from-slate-800 to-black',
            handle: '@mahfuz_avi'
        }
    ];

    return (
        <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden animate-fade-in">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-left mb-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                            Let's Connect
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                        Have a project in mind or just want to say hi? Feel free to reach out!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Contact Form */}
                    <Card className="p-6 sm:p-8 border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                            🌱 Plant a Seed
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-6">
                            Every great collaboration starts with a message
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Your Name
                                </label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Email Address
                                </label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Your Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="resize-none"
                                    placeholder="Tell me about your project or idea..."
                                />
                            </div>

                            {/* Success/Error Messages */}
                            {submitStatus === 'success' && (
                                <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-lg text-emerald-700">
                                    ✅ Thank you for planting a seed! 🌱 Message sent successfully.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700">
                                    ❌ Oops! Something went wrong. Please try again or email directly.
                                </div>
                            )}

                            <Button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </Card>

                    {/* Contact Info & Social Links */}
                    <div className="space-y-6">
                        {/* Contact Info */}
                        <Card className="p-6 sm:p-8 border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                                📍 Contact Information
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Location</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <a href="mailto:mahfuzibnesyflu24@gmail.com" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                            mahfuzibnesyflu24@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Phone</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">+8801732389350</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Social Links */}
                        <Card className="p-6 sm:p-8 border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                                🔗 Connect With Me
                            </h2>
                            <div className="space-y-3">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 bg-white dark:bg-slate-900 hover:shadow-lg transition-all duration-300 group"
                                        >
                                            <div className={`w-12 h-12 bg-linear-to-br ${social.color} rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-slate-800 dark:text-slate-100">{social.name}</p>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">{social.handle}</p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;