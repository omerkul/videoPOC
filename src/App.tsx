import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Phase1Section from './components/Phase1Section';
import PricingSection from './components/PricingSection';
import Phase2Section from './components/Phase2Section';
import Phase2Section2 from './components/Phase2Section2';
import Phase2PricingSection from './components/Phase2PricingSection';
import Phase3Section from './components/Phase3Section';
import Phase3Section2 from './components/Phase3Section2';
import Phase3Section3 from './components/Phase3Section3';
import Phase3Section4 from './components/Phase3Section4';
import Phase3PricingSection from './components/Phase3PricingSection';
import ConclusionSection from './components/ConclusionSection';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Phase1Section />
        <PricingSection />
        <Phase2Section />
        <Phase2Section2 />
        <Phase2PricingSection />
        <Phase3Section />
        <Phase3Section2 />
        <Phase3Section3 />
        <Phase3Section4 />
        <Phase3PricingSection />
        <ConclusionSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
