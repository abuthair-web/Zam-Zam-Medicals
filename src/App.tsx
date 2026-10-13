import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { FounderSection } from './components/FounderSection';
import { BusinessInfo } from './components/BusinessInfo';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F6] text-[#25272A] flex flex-col font-sans selection:bg-[#B51224] selection:text-white">
      {/* Header with Navigation and Call Us Button */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About Zam Zam Medicals */}
        <AboutUs />

        {/* Meet Our Founder: Mr. Faisal Ahamed */}
        <FounderSection />

        {/* Business Information Section */}
        <BusinessInfo />

        {/* Get in Touch (Contact Section) */}
        <ContactSection />
      </main>

      {/* Clean, Premium Footer */}
      <Footer />
    </div>
  );
}
