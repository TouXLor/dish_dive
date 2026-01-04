
import React, { useState } from 'react';
import { X, Sparkles, Loader2, ChefHat } from 'lucide-react';
import { generateRecipe } from '../services/gemini';

interface MagicRecipeModalProps {
  onClose: () => void;
}

const MagicRecipeModal: React.FC<MagicRecipeModalProps> = ({ onClose }) => {
  const [ingredients, setIngredients] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState<any>(null);

  const handleGenerate = async () => {
    if (!ingredients.trim()) return;
    setLoading(true);
    try {
      const result = await generateRecipe(ingredients);
      setRecipe(result);
    } catch (error) {
      console.error(error);
      alert("Failed to generate recipe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-semibold text-white">AI Magic Recipe</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>

          {!recipe ? (
            <div className="space-y-6">
              <p className="text-slate-400 leading-relaxed">
                Tell us what you have in your fridge, and our AI chef will whip up a gourmet recipe just for you.
              </p>
              <textarea 
                placeholder="e.g. 2 eggs, some spinach, half an onion, and cheddar cheese"
                className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-600 resize-none"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
              <button 
                onClick={handleGenerate}
                disabled={loading || !ingredients.trim()}
                className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-700 text-slate-950 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                {loading ? 'Consulting AI Chef...' : 'Generate Recipe'}
              </button>
            </div>
          ) : (
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 no-scrollbar">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-white tracking-tight">{recipe.recipeName}</h3>
                <div className="flex gap-4">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">{recipe.prepTime} Preparation</span>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{recipe.difficulty}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-cyan-400" />
                  Ingredients
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {recipe.ingredients.map((ing: string, i: number) => (
                    <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span> {ing}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-semibold">Instructions</h4>
                <ol className="space-y-4">
                  {recipe.instructions.map((step: string, i: number) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-cyan-400">{i + 1}</span>
                      <p className="text-sm text-slate-400 leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <button 
                onClick={() => setRecipe(null)}
                className="w-full mt-4 bg-white/5 border border-white/10 text-white py-3 rounded-xl hover:bg-white/10 transition-colors text-sm font-semibold"
              >
                Try Another Ingredients List
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MagicRecipeModal;
