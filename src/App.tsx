import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { SeparateCharges } from './components/SeparateCharges';
import { Process } from './components/Process';
import { ExperienceSection } from './components/ExperienceSection';
import { WhyUs } from './components/WhyUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [selectedPricingCategory, setSelectedPricingCategory] = useState<string>('all');

  const handleSelectServiceCategory = (categoryId: string) => {
    setSelectedPricingCategory(categoryId);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F5F7FA] text-[#263247] flex flex-col relative selection:bg-[#F4B400]/25 selection:text-[#0D1B3D]">
      {/* Main Navigation */}
      <Navbar />

      {/* Main Website Sections */}
      <main className="flex-1">
        <Hero />
        <Portfolio />
        <Services onSelectCategory={handleSelectServiceCategory} />
        <Pricing
          selectedCategory={selectedPricingCategory}
          onCategoryChange={setSelectedPricingCategory}
        />
        <SeparateCharges />
        <Process />
        <ExperienceSection />
        <WhyUs />
        <ContactSection />
      </main>

      {/* Website Footer */}
      <Footer />

      {/* Floating Action WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

