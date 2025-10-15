import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KeyFindings from './components/KeyFindings';
import Pillars from './components/Pillars';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#F7F9FA]">
      <Header />
      <main>
        <Hero />
        <KeyFindings />
        <Pillars />
        <Recommendations />
      </main>
      <Footer />
    </div>
  );
};

export default App;