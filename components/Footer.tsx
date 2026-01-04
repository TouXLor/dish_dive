
import React from 'react';
import { ChefHat, Instagram, Youtube, Pin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
                <a href="#" className="flex items-center gap-2 group w-fit">
                    <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-1.5 rounded-md group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-shadow">
                        <ChefHat className="text-white w-5 h-5" />
                    </div>
                    <span className="text-lg font-semibold tracking-tight text-white">Dish Dive</span>
                </a>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                    Discover, share, and savor the world's best recipes. Join our community of food lovers and start your culinary journey today.
                </p>
                <div className="flex items-center gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
                        <Pin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
                        <Youtube className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Explore Column */}
            <div>
                <h4 className="text-white font-semibold mb-6">Explore</h4>
                <ul className="space-y-4 text-sm text-slate-400">
                    <li><a href="#" className="hover:text-cyan-400 transition-colors inline-block">Vegan Recipes</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition-colors inline-block">15-Minute Meals</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition-colors inline-block">Healthy Desserts</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition-colors inline-block">Gluten Free</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition-colors inline-block">Budget Friendly</a></li>
                </ul>
            </div>

            {/* Community Column */}
            <div>
                <h4 className="text-white font-semibold mb-6">Community</h4>
                <ul className="space-y-4 text-sm text-slate-400">
                    <li><a href="#" className="hover:text-cyan-400 transition-colors inline-block">Top Chefs</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition-colors inline-block">Discussion Forum</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition-colors inline-block">Share a Recipe</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition-colors inline-block">Events & Meetups</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition-colors inline-block">Success Stories</a></li>
                </ul>
            </div>

            {/* Newsletter Column */}
            <div>
                <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
                <p className="text-slate-400 text-sm mb-4">Get the latest recipes and cooking tips delivered straight to your inbox.</p>
                <form className="relative group">
                    <input type="email" placeholder="Enter your email" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-4 pr-24 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" />
                    <button type="button" className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-slate-950 hover:bg-cyan-50 text-sm font-semibold px-4 rounded-md transition-colors">
                        Join
                    </button>
                </form>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 bg-slate-950 relative z-10">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-600 font-medium">
                    © 2024 Dish Dive Inc. All rights reserved.
                </p>
                <div className="flex gap-6 text-xs text-slate-500">
                    <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-slate-300 transition-colors">Cookie Settings</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
