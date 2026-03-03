import { useHelmet } from "@/hooks/Helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Send, Facebook, Instagram, Link2 } from "lucide-react";
import { useState } from "react";

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
            label: 'GITHUB',
            name: 'GitHub',
            icon: Github,
            link: 'https://github.com/mahfuz2411',
            value: 'github.com/mahfuz2411',
            iconColor: 'text-indigo-500'
        },
        {
            label: 'LINKEDIN',
            name: 'LinkedIn',
            icon: Linkedin,
            link: 'https://www.linkedin.com/in/mahfuz-ibne-syful/',
            value: 'linkedin.com/in/mahfuz-ibne-syful',
            iconColor: 'text-blue-500'
        },
        {
            label: 'FACEBOOK',
            name: 'Facebook',
            icon: Facebook,
            link: '#',
            value: 'facebook.com/yourprofile',
            iconColor: 'text-blue-600'
        },
        {
            label: 'INSTAGRAM',
            name: 'Instagram',
            icon: Instagram,
            link: '#',
            value: 'instagram.com/yourprofile',
            iconColor: 'text-pink-500'
        }
    ];

    return (
        <section className="min-h-screen relative overflow-hidden px-4 sm:px-8 py-4 sm:py-8 lg:py-16 animate-fade-in">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-left mb-8 sm:mb-12">
                    <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-800 dark:text-slate-100 mb-4">
                        Get In{" "}
                        <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                            Touch
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
                        Have a project in mind or just want to say hi? Feel free to reach out!
                    </p>
                </div>

                {/* Contact Form - Full Width */}
                <Card className="p-6 sm:p-8 border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm mb-8">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                        🌱 Plant a Seed
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                        Every great collaboration starts with a message
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
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

                {/* Social Links Section */}
                <Card className="p-6 sm:p-8 border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                            <Link2 className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                            Social Links
                        </h2>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 border border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center shrink-0 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors duration-300">
                                        <Icon className={`w-6 h-6 ${social.iconColor} dark:text-indigo-400`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                                            {social.label}
                                        </p>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
                                            {social.value}
                                        </p>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Contact;