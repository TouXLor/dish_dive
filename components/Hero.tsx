
import React from 'react';
import { PlayCircle, Star } from 'lucide-react';

interface HeroProps {
  onOpenAiModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAiModal }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center overflow-hidden">
        {/* Left: Typography */}
        <div className="space-y-8 animate-fade-in relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                #1 Cooking Community
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                DELICIOUS <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                    FOOD RECIPES
                </span>
            </h1>
            
            <p className="text-xl text-slate-400 font-light max-w-lg leading-relaxed">
                Discover the best recipes packed with flavor and nutrition. Join a community of creators sharing their culinary masterpieces.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
                <button 
                  onClick={onOpenAiModal}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-base font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-1 active:translate-y-0"
                >
                    Magic Recipe Maker ✨
                </button>
                <button className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
                    <PlayCircle className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-base font-medium">Watch Demo</span>
                </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                    <img className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover" src="https://picsum.photos/id/64/100/100" alt="User" />
                    <img className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover" src="https://picsum.photos/id/65/100/100" alt="User" />
                    <img className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover" src="https://picsum.photos/id/66/100/100" alt="User" />
                    <div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-xs font-medium text-white">2k+</div>
                </div>
                <div className="text-sm text-slate-400">
                    <span className="text-cyan-400 font-semibold">4.9/5</span> rating from our users
                </div>
            </div>
        </div>

        {/* Right: Premium Bento Strip Layout */}
        <div className="relative h-[500px] w-full flex justify-center items-center gap-3 perspective-1000">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/20 blur-[100px] -z-10 rounded-full"></div>

            {/* Strip 1 */}
            <div className="w-16 h-[60%] rounded-full overflow-hidden border border-white/10 shadow-2xl relative animate-float-delayed mt-12 hover:w-24 transition-all duration-500 cursor-pointer group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Pizza" />
            </div>
            
            {/* Strip 2 */}
            <div className="w-16 h-[80%] rounded-full overflow-hidden border border-white/10 shadow-2xl relative animate-float hover:w-24 transition-all duration-500 cursor-pointer group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Salad" />
            </div>

            {/* Strip 3 (Center - Wide) */}
            <div className="w-24 h-full rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl relative z-20 hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                    <p className="text-white text-xs font-semibold text-center">Featured</p>
                </div>
                <img src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Steak" />
            </div>

            {/* Strip 4 */}
            <div className="w-16 h-[80%] rounded-full overflow-hidden border border-white/10 shadow-2xl relative animate-float hover:w-24 transition-all duration-500 cursor-pointer group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Eggs" />
            </div>

            {/* Strip 5 */}
            <div className="w-16 h-[60%] rounded-full overflow-hidden border border-white/10 shadow-2xl relative animate-float-delayed mt-12 hover:w-24 transition-all duration-500 cursor-pointer group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="French Toast" />
            </div>
        </div>
    </section>
  );
};

export default Hero;
