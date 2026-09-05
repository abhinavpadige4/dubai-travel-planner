```tsx
import React, { useEffect, useRef } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Itinerary from './components/Itinerary';
import BudgetTracker from './components/BudgetTracker';
import PackingChecklist from './components/PackingChecklist';
import VisaInfo from './components/VisaInfo';
import RestaurantRecs from './components/RestaurantRecs';
import EmergencyContacts from './components/EmergencyContacts';
import Footer from './components/Footer';

const useIntersectionObserver = (options = {}) => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set([...prev, entry.target.id]));
        }
      });
    }, { threshold: 0.1, ...options });

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  return visibleSections;
};

import { useState } from 'react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const visibleSections = useIntersectionObserver();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <Layout>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-amber-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏜️</span>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Dubai Planner
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'itinerary', label: 'Itinerary' },
                { id: 'budget', label: 'Budget' },
                { id: 'packing', label: 'Packing' },
                { id: 'visa', label: 'Visa' },
                { id: 'restaurants', label: 'Restaurants' },
                { id: 'emergency', label: 'Emergency' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-amber-400 ${
                    activeSection === item.id ? 'text-amber-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('hero')}
              className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm font-semibold rounded-lg hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-amber-900/30"
            >
              Start Planning
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section id="hero" data-animate>
          <Hero />
        </section>

        <section id="itinerary" data-animate>
          <Itinerary isVisible={visibleSections.has('itinerary')} />
        </section>

        <section id="budget" data-animate>
          <BudgetTracker isVisible={visibleSections.has('budget')} />
        </section>

        <section id="packing" data-animate>
          <PackingChecklist isVisible={visibleSections.has('packing')} />
        </section>

        <section id="visa" data-animate>
          <VisaInfo isVisible={visibleSections.has('visa')} />
        </section>

        <section id="restaurants" data-animate>
          <RestaurantRecs isVisible={visibleSections.has('restaurants')} />
        </section>

        <section id="emergency" data-animate>
          <EmergencyContacts isVisible={visibleSections.has('emergency')} />
        </section>

        <Footer />
      </main>
    </Layout>
  );
};

export default App;
