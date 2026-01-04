
import React from 'react';
import { ArrowRight } from 'lucide-react';
import RecipeCard from './RecipeCard';

const TRENDING_RECIPES = [
  {
    id: 1,
    title: "Grilled Salmon with Veggies",
    description: "A healthy and delicious dinner option rich in Omega-3 fatty acids, served with seasonal greens.",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    time: "35 min",
    rating: 4,
    reviews: 128,
    author: { name: "Emma W.", avatar: "https://picsum.photos/id/10/50/50" }
  },
  {
    id: 2,
    title: "Spicy Beef Stir Fry",
    description: "Quick, spicy, and savory beef stir fry that packs a punch with fresh peppers and garlic sauce.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    time: "20 min",
    rating: 4.5,
    reviews: 342,
    author: { name: "Mark T.", avatar: "https://picsum.photos/id/11/50/50" }
  },
  {
    id: 3,
    title: "Summer Berry Salad",
    description: "Refreshing mix of strawberries, blueberries, feta cheese, and balsamic vinaigrette.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    time: "45 min",
    rating: 4.5,
    reviews: 89,
    author: { name: "Sarah J.", avatar: "https://picsum.photos/id/12/50/50" }
  }
];

const Trending: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
            <div>
                <h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Trending Now</h2>
                <p className="text-slate-400 text-lg">Curated top picks from this week</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                View all <ArrowRight className="w-4 h-4" />
            </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRENDING_RECIPES.map(recipe => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
        </div>
    </section>
  );
};

export default Trending;
