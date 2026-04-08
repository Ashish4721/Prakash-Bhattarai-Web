import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-16 py-7 bg-[#05010d] border-b border-white/10 backdrop-blur-md">
      {/* Left: Branding - Bold & Thick */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#5844ED] rounded-full flex items-center justify-center font-black text-white text-xl">P</div>
        <div className="flex flex-col">
          <span className="text-white font-black text-xl leading-none tracking-tight">Prakash Bhattarai</span>
          <span className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mt-1">Entrepreneur & Creator</span>
        </div>
      </div>

      {/* Center: Links - Large Font & Perfectly Centered */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-12 text-lg font-bold text-slate-300">
        <a href="#" className="hover:text-white transition-colors">About</a>
        <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
        <a href="#" className="hover:text-white transition-colors">Programs</a>
        <a href="#" className="hover:text-white transition-colors">Mentorship</a>
      </div>

      {/* Right: Actions - Bigger Buttons */}
      <div className="flex items-center gap-8">
        <button className="text-slate-400 hover:text-white cursor-pointer p-2">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        </button>
        <button className="text-lg font-bold text-slate-200 hover:text-white cursor-pointer">Log In</button>
        <button className="px-8 py-3 bg-[#5844ED] hover:bg-[#4735d1] text-white text-lg font-black rounded-full shadow-[0_0_20px_rgba(88,68,237,0.3)] transition-all flex items-center gap-2 cursor-pointer">
          Start Challenge <span>→</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;