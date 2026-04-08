import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 pt-24 text-center">
      <div className="inline-flex items-center gap-3 px-6 py-2 mb-10 text-xs font-black tracking-[0.25em] text-[#fef3c7] uppercase border border-[#fef3c7]/20 rounded-full bg-white/5">
        <span className="text-lg">✨</span> 
        Silicon Valley Strategy Meets Himalayan Wisdom
      </div>

      <h1 className="mb-6 text-[85px] md:text-[135px] font-bold tracking-tighter figma-glow leading-[0.85] font-serif">
        Prakash Bhattarai
      </h1>

      <p className="mb-10 text-2xl md:text-4xl font-light uppercase text-slate-300 tracking-hero">
        Entrepreneur • Creator • Seeker
      </p>

      <p className="max-w-3xl mb-16 text-xl md:text-2xl leading-relaxed text-slate-500 font-medium">
        Building scalable systems with human depth. Bridging the gap between 
        external ambition and internal peace.
      </p>

      <div className="flex flex-col items-center gap-8 sm:flex-row">
        <button className="px-14 py-5 text-xl font-black text-white bg-[#5844ED] rounded-full hover:scale-105 hover:shadow-[0_0_60px_rgba(88,68,237,0.6)] transition-all cursor-pointer">
          Join My Challenge →
        </button>
        <button className="px-14 py-5 text-xl font-black text-white border-2 border-slate-800 rounded-full hover:bg-white/5 transition-all cursor-pointer">
          About Me
        </button>
      </div>
    </section>
  );
};

export default Hero;