import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ActiveSupport from './components/ActiveSupport';
import AboutUs from './components/AboutUs';
import HomeServices from './components/HomeServices';
import Testimonials from './components/Testimonials';
import DualCta from './components/DualCta';
import ServicesPage from './components/ServicesPage';
import TeamPage from './components/TeamPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'team' | 'contact'>('team');

  // Smooth scroll to the top of the viewport whenever the active page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentPage]);

  const handlePageChange = (page: 'home' | 'services' | 'team' | 'contact') => {
    if (page === 'home') {
      setCurrentPage('team');
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-800 font-sans selection:bg-[#0b4bce] selection:text-white">
      
      {/* Header Navigation with Frosted Glass & Scroll Timeline */}
      <Navbar
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onAdminToggle={() => {}}
        isAdminOpen={false}
      />

      {/* Main Page Layout Wrapper */}
      <main className="min-h-[70vh]">
        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <Hero onPageChange={handlePageChange} />

            {/* Custom Stats Section directly below Hero */}
            <Stats />

            {/* Complete Services Campaign Overview (Pain Points vs. Solutions) */}
            <HomeServices onPageChange={handlePageChange} />

            {/* Always Active Support Section (Better Retention, Less costs, Available anytime) */}
            <ActiveSupport />

            {/* Why Choose Us Section */}
            <AboutUs />

            {/* About Our Company and Meet Our Core Team (Mr. Ragib & Mr. Shamsheer) */}
            <TeamPage onPageChange={handlePageChange} />

            {/* Social Proof & Partner Testimonials */}
            <Testimonials />

            {/* Dual CTA Section for Businesses */}
            <DualCta onPageChange={handlePageChange} />
          </>
        )}

        {currentPage === 'services' && (
          <ServicesPage onPageChange={handlePageChange} />
        )}

        {currentPage === 'team' && (
          <TeamPage onPageChange={handlePageChange} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Corporate Footer with Updated Logo, Menu, and Socials */}
      <Footer onPageChange={handlePageChange} />

    </div>
  );
}
