import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="Home" className="relative h-screen flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Building Better Global Classrooms
        </h1>
        <h3 className="text-xl md:text-2xl font-light mb-8">
          Insights from a COIL Survey of NNU Teaching Staff
        </h3>
        <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-200">
          This report presents findings from a survey on Collaborative Online International Learning (COIL) conducted with teaching staff at NNU. From an initial pool of 117 participants, 45 provided complete responses, forming the basis of our analysis. This work was completed as an assignment for the "Change and Innovation Management" course (BIS2025) at the Vietnamese-German University (VGU).
        </p>
        <a
          href="#KeyFindings"
          className="bg-[#009688] hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300"
        >
          Explore the Findings
        </a>
      </div>
    </section>
  );
};

export default Hero;