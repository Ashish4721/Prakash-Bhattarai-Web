import React from 'react';

const Mentorship = () => {
  const features = [
    { title: "East Meets West", desc: "Ancient Himalayan techniques integrated with modern neuroscience and Silicon Valley strategy.", icon: "M3 20h18L12 4zM12 4v16" },
    { title: "Mental Clarity", desc: "Sharpen decision-making, negotiations, and creativity through rigorous mental training.", icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" },
    { title: "Wealth & Abundance", desc: "Align your mindset with wealth creation. Remove subconscious blocks to manifestation.", icon: "M6 3h12l4 6-10 12L2 9z" },
    { title: "Powerful Presence", desc: "Cultivate a gravitas that commands rooms and inspires leadership in your organization.", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" }
  ];

  const curriculum = [
    {
      phase: "Phase 1: Foundation",
      subtitle: "THE INNER ARCHITECTURE",
      points: ["Breathwork Mastery", "Body Scan & Somatic Awareness", "Creating Sacred Space", "Understanding the Monkey Mind"]
    },
    {
      phase: "Phase 2: Clarity",
      subtitle: "EMOTIONAL INTELLIGENCE",
      points: ["Mindfulness in Action", "Emotional Regulation", "Intuitive Decision Making", "Laser Focus & Flow State"]
    },
    {
      phase: "Phase 3: Manifestation",
      subtitle: "THE ABUNDANCE MINDSET",
      points: ["Vision Crafting", "Removing Limiting Beliefs", "Entrepreneurial Resilience", "Integration into Lifestyle"]
    }
  ];

  const plans = [
    { duration: "12 WEEKS", name: "Seeker", price: "1,500", desc: "Foundation training, group coaching, and digital materials.", points: ["Bi-weekly group coaching calls", "Foundation of Breath & Body", "Digital Workbook & Journals", "Community Access"], popular: false },
    { duration: "6 MONTHS", name: "Practitioner", price: "5,000", desc: "Advanced techniques, 1-on-1 sessions, and virtual retreats.", points: ["6 One-on-One Coaching Sessions", "Advanced Manifestation Techniques", "Virtual Retreat Access", "Priority Support", "Entrepreneurship Alignment"], popular: true },
    { duration: "12 MONTHS", name: "Master", price: "9,999", desc: "Complete mastery, VIP access, and in-person retreats.", points: ["Unlimited 1-on-1 Coaching", "2 In-Person Luxury Retreats", "Lifetime Community & Updates", "Business & Leadership Strategy", "Teacher Training Certification"], popular: false }
  ];

  return (
    <section className="bg-[#05010d] py-24 px-6 md:px-24">
      <div className="max-w-[1400px] mx-auto text-center">
        {/* --- Top Mentorship Grid --- */}
        <div className="inline-block bg-[#FFB800]/10 border border-[#FFB800]/20 px-4 py-1.5 rounded-full mb-8">
          <span className="text-[#FFB800] text-[11px] font-bold tracking-widest uppercase">★ MENTORSHIP & GUIDANCE</span>
        </div>
        <h2 className="text-[64px] md:text-[82px] font-serif-title font-bold text-[#FFB800] leading-none mb-8">Work with Me</h2>
        <p className="text-slate-300 text-2xl max-w-4xl mx-auto mb-20">
          Accelerate your growth. A mentorship program for the <span className="highlight-gold">Seeker</span>, the <span className="highlight-gold">Entrepreneur</span>, and the <span className="highlight-gold">Visionary</span>.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {features.map((card, i) => (
            <div key={i} className="bg-[#0c081a] border border-white/5 p-10 rounded-[32px] text-left hover:border-[#FFB800]/30 transition-all group">
              <div className="mb-6 text-[#FFB800]"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={card.icon} /></svg></div>
              <h3 className="text-white text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-slate-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* --- The 12-Week Curriculum Section --- */}
        <div className="mb-48 relative">
          <h3 className="text-white text-5xl md:text-6xl font-serif-title font-bold mb-6">The 12-Week Curriculum</h3>
          <p className="text-slate-400 text-xl mb-24">A structured journey to rewrite your internal operating system.</p>

          {/* Horizontal Progress Line */}
          <div className="absolute top-[165px] left-[15%] right-[15%] h-[1px] bg-white/10 hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {curriculum.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Number Circle */}
                <div className="w-16 h-16 rounded-full border border-[#FFB800]/40 flex items-center justify-center mb-10 bg-[#05010d] ring-8 ring-[#05010d]">
                  <span className="text-[#FFB800] text-xl font-bold">{i + 1}</span>
                </div>
                <h4 className="text-white text-2xl font-bold mb-2">{item.phase}</h4>
                <span className="text-[#FFB800] text-[10px] font-bold tracking-[0.2em] mb-10">{item.subtitle}</span>
                
                {/* Curriculum Point Cards */}
                <div className="bg-[#120d1d] p-8 rounded-3xl w-full text-left border border-white/5 hover:border-[#FFB800]/20 transition-all">
                  <ul className="space-y-4">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#FF6B00] text-sm mt-1">•</span>
                        <span className="text-slate-300 text-sm font-medium leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Pricing Cards Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div key={i} className={`relative bg-[#0c081a] p-12 rounded-[40px] border ${plan.popular ? 'border-[#FFB800]' : 'border-white/5'} text-left flex flex-col`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B00] px-4 py-1 rounded-full flex items-center gap-1">
                  <span className="text-white text-[10px]">★</span>
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">MOST POPULAR</span>
                </div>
              )}
              <span className="text-indigo-400 text-sm font-bold tracking-widest mb-4">{plan.duration}</span>
              <h4 className="text-white text-4xl font-serif-title font-bold mb-6">{plan.name}</h4>
              <div className="flex items-baseline mb-6">
                <span className="text-[#FFB800] text-5xl font-bold">${plan.price}</span>
                <span className="text-slate-500 ml-2">/ program</span>
              </div>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">{plan.desc}</p>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <span className="text-[#FFB800] mt-1 text-sm font-bold">✓</span>
                    <span className="text-sm font-medium">{point}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-all ${plan.popular ? 'bg-[#FF5C00] text-white hover:bg-[#e65200]' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentorship;