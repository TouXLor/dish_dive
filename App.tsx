
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trending from './components/Trending';
import Footer from './components/Footer';
import Background from './components/Background';
import MagicRecipeModal from './components/MagicRecipeModal';

const App: React.FC = () => {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <Background />
      <Navbar />
      
      <main className="w-full">
        <Hero onOpenAiModal={() => setIsAiModalOpen(true)} />
        <Trending />
      </main>

      <Footer />

      {/* AI Modal Integration */}
      {isAiModalOpen && (
        <MagicRecipeModal onClose={() => setIsAiModalOpen(false)} />
      )}

      {/* Back to Top Button */}
      <a 
        href="#top" 
        className="fixed bottom-8 right-8 z-40 bg-slate-900 border border-white/10 text-white p-3 rounded-full shadow-xl hover:bg-cyan-500 hover:border-cyan-400 hover:text-slate-900 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-950"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 group-hover:-translate-y-1 transition-transform">
          <path d="m5 12 7-7 7 7"></path>
          <path d="M12 19V5"></path>
        </svg>
      </a>
    </div>
  );
};

export default App;
