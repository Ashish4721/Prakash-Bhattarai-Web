import React from 'react';

const SignatureProgram = () => {
  const weeks = [
    {
      num: "Week 1",
      title: "Awakening the Breath",
      desc: "Learn the ancient art of Prana control to stabilize your energy field.",
      days: ["Day 1: Finding Your Center", "Day 2: The Cosmic Anchor", "Day 3: Returning to Source", "Day 4: Alignment & Flow", "Day 5: Dissolving Distraction", "Day 6: Micro Meditations", "Day 7: Integration"]
    },
    {
      num: "Week 2",
      title: "Somatic Intelligence",
      desc: "Shift focus from the mind to the subtle energy body (Subtle Body Awareness).",
      days: ["Day 8: The Energy Scan", "Day 9: Releasing Blockages", "Day 10: Transmuting Pain", "Day 11: Kinetic Meditation", "Day 12: Whispers of the Body", "Day 13: Temple Gratitude", "Day 14: Integration"]
    },
    {
      num: "Week 3",
      title: "Emotional Alchemy",
      desc: "Transform heavy emotions into fuel for your spiritual ascent.",
      days: ["Day 15: Naming the Shadow", "Day 16: The Guest House", "Day 17: Dissolving Fear", "Day 18: Invoking Joy", "Day 19: Metta Love", "Day 20: Radical Forgiveness", "Day 21: Integration"]
    },
    {
      num: "Week 4",
      title: "Living in Flow",
      desc: "Merging the meditative state with your daily reality. The Awakened Life.",
      days: ["Day 22: Conscious Consumption", "Day 23: Deep Listening", "Day 24: Digital Detox", "Day 25: Work as Worship", "Day 26: Traveling Light", "Day 27: The Sacred Pause", "Day 28-30: Eternal Now"]
    }
  ];

  return (
    <div className="bg-[#05010d]">
      {/* 30-DAY ASCENSION SECTION */}
      <section className="py-32 px-10 md:px-24 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-20 items-start">
          
          <div className="lg:sticky lg:top-36 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#FFB800] text-sm">✦</span>
                <span className="text-[#FFB800] text-[13px] font-black uppercase tracking-[0.4em]">MY SIGNATURE PROGRAM</span>
              </div>
              <h2 className="text-[64px] md:text-[76px] font-serif font-bold text-[#FFB800] leading-[1.0] mb-8">
                Soham:<br /> The 30-Day<br /> Ascension
              </h2>
              <p className="text-slate-400 text-[22px] max-w-md leading-relaxed font-medium mb-12">
                A structured journey from simple awareness to profound spiritual awakening. Each day unlocks a new portal.
              </p>
            </div>

            <div className="bg-[#0c081a] border border-white/10 rounded-[40px] p-10 max-w-[420px]">
              <h4 className="text-white font-black mb-8 text-xl">What you receive:</h4>
              <ul className="space-y-6">
                {["30 Guided Journeys", "Daily Soul Inquiries", "Aura Progress Tracking", "Global Soul Community"].map((item, i) => (
                  <li key={i} className="flex items-center gap-5 text-slate-200 text-[18px] font-bold">
                    <div className="w-7 h-7 rounded-full border border-teal-500/40 flex items-center justify-center bg-teal-500/5">
                      <span className="text-teal-400 text-[12px]">✓</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-10">
            {weeks.map((week, idx) => (
              <div key={idx} className="bg-[#0c081a] border border-white/5 rounded-[50px] p-12 hover:border-white/20 transition-all duration-500">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-[#FFB800] font-black text-2xl uppercase tracking-tighter">{week.num}:</span>
                  <h3 className="text-white text-[42px] font-serif font-bold leading-none">{week.title}</h3>
                </div>
                <p className="text-slate-400 text-xl mb-10 leading-relaxed font-medium">
                  {week.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {week.days.map((day, dIdx) => (
                    <span key={dIdx} className="bg-white/[0.05] border border-white/10 text-slate-300 text-[14px] px-6 py-2.5 rounded-full font-bold">
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE EXPERIENCE SECTION */}
      <section className="py-32 px-10 md:px-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-center">
          
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 bg-indigo-500/10 border border-indigo-500/20 px-5 py-2 rounded-full">
              <span className="text-indigo-400 text-sm">📱</span>
              <span className="text-indigo-400 text-[12px] font-black uppercase tracking-widest">MOBILE EXPERIENCE</span>
            </div>

            <h2 className="text-[64px] md:text-[76px] font-serif font-bold text-[#FFB800] leading-[1.1]">
              Peace in Your Pocket.<br /> Anytime. Anywhere.
            </h2>

            <p className="text-slate-400 text-[22px] leading-relaxed font-medium max-w-2xl">
              I built the <span className="text-white font-bold">Soham Inner Calm</span> app to solve a simple but profound problem: most meditation apps offer generic content that ignores your current state.
            </p>

            <p className="text-slate-500 text-[20px] leading-relaxed max-w-2xl">
              Using advanced AI, the Soham app reads your energy, goals, and daily context to generate personalized sessions instantly.
            </p>

            {/* DOWNLOAD BUTTONS */}
            <div className="flex flex-wrap gap-5 pt-4">
              <button className="bg-white text-black px-8 py-4 rounded-2xl flex items-center gap-4 hover:bg-slate-200 transition-colors">
                <span className="text-3xl">🍏</span>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold">Download on the</div>
                  <div className="text-xl font-black leading-none">App Store</div>
                </div>
              </button>
              <button className="bg-[#1a1529] border border-white/10 text-white px-8 py-4 rounded-2xl flex items-center gap-4 hover:bg-[#251e3b] transition-colors">
                <span className="text-3xl">🤖</span>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold">Get it on</div>
                  <div className="text-xl font-black leading-none">Google Play</div>
                </div>
              </button>
            </div>

            {/* RATING */}
            <div className="flex items-center gap-4">
              <div className="flex text-[#FFB800] text-xl">★★★★★</div>
              <span className="text-slate-400 font-bold text-sm tracking-widest">4.9/5 FROM 10K+ USERS</span>
            </div>
          </div>

          {/* PHONE MOCKUP WITH CAROUSEL */}
          <div className="relative flex flex-col items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/10 blur-[120px] rounded-full"></div>
            
            {/* PHONE CASE */}
            <div className="relative w-[360px] h-[720px] bg-[#0c081a] border-[12px] border-[#1a1529] rounded-[60px] shadow-2xl overflow-hidden mb-10">
                <div className="p-8 space-y-8">
                    <div className="text-center pt-12">
                        <h4 className="text-white text-[28px] font-bold leading-tight">What brings you here?</h4>
                        <p className="text-slate-400 text-sm mt-3">Select all that apply to personalize your journey</p>
                    </div>
                    <div className="space-y-4">
                        {["Reduce Stress", "Better Sleep", "Improve Focus", "Personal Growth", "Anxiety Relief"].map((goal, i) => (
                            <div key={i} className={`p-5 rounded-2xl border transition-all ${goal === 'Better Sleep' ? 'bg-indigo-600/20 border-indigo-500/50 scale-[1.02]' : 'bg-white/5 border-white/10 opacity-60'} flex items-center justify-between`}>
                                <div className="flex items-center gap-4">
                                  <span className="text-xl">{i === 1 ? '🌙' : '✨'}</span>
                                  <span className="text-white font-semibold">{goal}</span>
                                </div>
                                {goal === 'Better Sleep' && <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white">✓</div>}
                            </div>
                        ))}
                    </div>
                    <button className="w-full bg-[#1a1529] text-slate-300 py-4 rounded-2xl font-bold mt-4">Continue</button>
                </div>
            </div>

            {/* CAROUSEL NAV */}
            <div className="flex items-center gap-10">
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-all">←</button>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5, 6].map((dot, i) => (
                  <div key={i} className={`w-2.5 h-2.5 rounded-full ${i === 1 ? 'bg-indigo-500 w-8' : 'bg-white/20'}`}></div>
                ))}
              </div>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-all">→</button>
            </div>
            <div className="mt-4 text-[12px] font-black tracking-[0.3em] text-slate-500 uppercase">Viewing: Goals</div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default SignatureProgram;