
import React from 'react';
import { ChefHat, Search, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-2 rounded-lg group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-shadow duration-300">
                    <ChefHat className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-semibold tracking-tight text-white group-hover:text-cyan-400 transition-colors">Dish Dive</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
                <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Explore</a>
                <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Top Rated</a>
                <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">About Us</a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    <Search className="w-4 h-4" />
                    <span>Search</span>
                </button>
                <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/20 flex items-center gap-2 group">
                    <span>Sign In</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
