import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustStrip } from './components/TrustStrip.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { InteriorBreakdown } from './components/InteriorBreakdown.tsx';
import { VisitSection } from './components/VisitSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { salonData } from './data/salonData.ts';

export default function App() {
  // Arabic default as requested
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  const toggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  useEffect(() => {
    // Synchronize HTML attributes for document direction, language code, and page title
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    if (lang === 'ar') {
      document.title = `${salonData.identity.nameAr} | صالون حلاقة وعناية رجالية بمدينة نصر`;
    } else {
      document.title = `${salonData.identity.nameEn} | Contemporary Barber in Nasr City, Cairo`;
    }
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#1B1D1E]">
      {/* Top Header with Brand Wordmark, Nav links, Language Toggle, and Primary CTA */}
      <Header lang={lang} onToggleLang={toggleLang} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Verified Interior Photo and Primary/Secondary CTAs */}
        <Hero lang={lang} />

        {/* Trust Strip with Sourced Google Rating (4.7 / 5.0, 135 reviews) and Factual Pillars */}
        <TrustStrip lang={lang} />

        {/* Review-Reported Services with Call-to-Confirm Pricing */}
        <ServicesSection lang={lang} />

        {/* The Wagdy Experience: Customer feedback themes without fabricated claims */}
        <ExperienceSection lang={lang} />

        {/* Architectural breakdown of the authentic salon space */}
        <InteriorBreakdown lang={lang} />

        {/* Visit Us: Verified Schedule, Cairo Timezone Status, Phone, and Maps Navigation */}
        <VisitSection lang={lang} />

        {/* Frequently Asked Questions with Verified Answers */}
        <FaqSection lang={lang} />
      </main>

      {/* Clean Footer with Verified Details */}
      <Footer lang={lang} />
    </div>
  );
}
