```tsx
import React, { useState, useEffect, useRef } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Itinerary from './components/Itinerary';
import BudgetTracker from './components/BudgetTracker';
import PackingChecklist from './components/PackingChecklist';
import VisaInfo from './components/VisaInfo';
import RestaurantRecs from './components/RestaurantRecs';
import EmergencyContacts from './components/EmergencyContacts';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const itineraryRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);
  const packingRef = useRef<HTMLDivElement>(null);
  const visaRef = useRef<HTMLDivElement>(null);
  const restaurantRef = useRef<HTMLDivElement>(null);
  const emergencyRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', ref: heroRef },
        { id: 'itinerary', ref: itineraryRef },
        { id: 'budget', ref: budgetRef },
        { id: 'packing', ref: packingRef },
        { id: 'visa', ref: visaRef },
        { id: 'restaurant', ref: restaurantRef },
        { id: 'emergency', ref: emergencyRef },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', ref: heroRef },
    { id: 'itinerary', label: 'Itinerary', ref: itineraryRef },
    { id: 'budget', label: 'Budget', ref: budgetRef },
    { id: 'packing', label: 'Packing', ref: packingRef },
    { id: 'visa', label: 'Visa', ref: visaRef },
    { id: 'restaurant', label: 'Restaurants', ref: restaurantRef },
    { id: 'emergency', label: 'Emergency', ref: emergencyRef },
  ];

  return (
    <Layout>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-amber-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏜️</span>
              <span className="text-lg font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Dubai Planner
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref as React.RefObject<HTMLDivElement>)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-amber-500/20 text-amber-300'
                      : 'text-gray-400 hover:text-amber-300 hover:bg-amber-500/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-amber-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-amber-800/20">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref as React.RefObject<HTMLDivElement>)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-amber-500/20 text-amber-300'
                      : 'text-gray-400 hover:text-amber-300 hover:bg-amber-500/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={itineraryRef}>
        <Itinerary />
      </div>
      <div ref={budgetRef}>
        <BudgetTracker />
      </div>
      <div ref={packingRef}>
        <PackingChecklist />
      </div>
      <div ref={visaRef}>
        <VisaInfo />
      </div>
      <div ref={restaurantRef}>
        <RestaurantRecs />
      </div>
      <div ref={emergencyRef}>
        <EmergencyContacts />
      </div>
      <Footer />
    </Layout>
  );
};

export default App;
