import React from 'react';

const Philosophy = () => {
  const cards = [
    {
      title: "Strategic Clarity",
      desc: "Using mental models to transcend the ego-mind and access universal intelligence for business and life.",
      icon: "🧠", // Matches original icon intent
      iconBg: "bg-cyan-950/40",
      iconColor: "text-cyan-400"
    },
    {
      title: "Emotional Alchemy",
      desc: "Aligning chakras and emotional frequencies to vibrate at the level of compassion and resilience.",
      icon: "💖",
      iconBg: "bg-pink-950/40",
      iconColor: "text-pink-400"
    },
    {
      title: "Cosmic Connection",
      desc: "Releasing the illusion of separation. Feeling the energy of the universe flowing through your work.",
      icon: "💫",
      iconBg: "bg-amber-950/40",
      iconColor: "text-amber-400"
    }
  ];

  return (
    <section className="py-32 px-10 bg-[#05010d] text-center">
      {/* 100% Matching Title: Serif, Gold, Large */}
      <h2 className="text-[52px] md:text-[72px] title-gold mb-6 tracking-tight leading-tight">
        My Philosophy of Growth
      </h2>
      
      <p className="max-w-3xl mx-auto text-xl text-slate-400 mb-24 font-light leading-relaxed">
        I believe that true success is not just about financial gain, but about the integration of inner peace and outer impact.
      </p>

      {/* Grid with exact box proportions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="philosophy-card p-12 rounded-[48px] text-left transition-all duration-500 hover:scale-[1.02]"
          >
            {/* The Icon Box: Specifically rounded like Figma */}
            <div className={`w-16 h-16 ${card.iconBg} rounded-[20px] flex items-center justify-center text-3xl mb-10`}>
              <span className={card.iconColor}>{card.icon}</span>
            </div>
            
            <h3 className="text-white text-3xl font-bold mb-6 tracking-tight font-serif">
              {card.title}
            </h3>
            
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;