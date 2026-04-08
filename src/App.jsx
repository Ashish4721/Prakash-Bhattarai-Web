import React from 'react';
import Navbar from './UI/Navbar';
import Hero from './UI/Hero';
import Philosophy from './UI/Philosophy';
import Mentorship from './UI/Mentorship'; 
import SignatureProgram from './UI/SignatureProgram';

function App() {
  return (
    <div className="bg-[#05010d] min-h-screen relative overflow-x-hidden">
      <Navbar />
      <main>
        {/* Top Sections */}
        <Hero />
        <Philosophy />
        
        {/* Signature & Mobile App comes first now */}
        <SignatureProgram />
        
        {/* Mentorship & Guidance moved to the bottom */}
        <Mentorship key="mentorship-section" /> 
      </main>
    </div>
  );
}

export default App;