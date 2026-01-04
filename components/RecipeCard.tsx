
import React from 'react';
import { Clock, Star, Bookmark } from 'lucide-react';

interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
  time: string;
  rating: number;
  reviews: number;
  author: { name: string; avatar: string };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, description, image, time, rating, reviews, author }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="group relative bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1">
        <div className="h-56 overflow-hidden relative">
            <div className="absolute top-4 right-4 z-10 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                <Clock className="w-3 h-3 text-white" />
                <span className="text-xs font-medium text-white">{time}</span>
            </div>
            <img src={image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={title} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
        </div>
        <div className="p-6">
            <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < fullStars ? 'text-amber-400 fill-amber-400' : (i === fullStars && hasHalfStar ? 'text-amber-400 fill-amber-400' : 'text-slate-600')}`} 
                  />
                ))}
                <span className="text-xs text-slate-400 ml-2">({reviews} reviews)</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">{title}</h3>
            <p className="text-slate-400 text-sm font-light line-clamp-2">{description}</p>
            
            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src={author.avatar} className="w-6 h-6 rounded-full border border-white/10" alt={author.name} />
                    <span className="text-xs text-slate-300">{author.name}</span>
                </div>
                <button className="text-cyan-400 hover:text-white transition-colors">
                    <Bookmark className="w-5 h-5" />
                </button>
            </div>
        </div>
    </div>
  );
};

export default RecipeCard;
