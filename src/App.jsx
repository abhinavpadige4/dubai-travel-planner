import React from 'react';
import { BudgetProvider } from './context/BudgetContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Itinerary from './components/Itinerary';
import BudgetTracker from './components/BudgetTracker';
import PackingList from './components/PackingList';
import VisaInfo from './components/VisaInfo';
import RestaurantSection from './components/RestaurantSection';
import MetroMap from './components/MetroMap';
import EmergencyContacts from './components/EmergencyContacts';
import Footer from './components/Footer';

function App() {
  return (
    <BudgetProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <div className="container mx-auto px-4 py-12 space-y-24">
            <section id="itinerary">
              <Itinerary />
            </section>
            <section id="budget">
              <BudgetTracker />
            </section>
            <section id="packing">
              <PackingList />
            </section>
            <section id="visa">
              <VisaInfo />
            </section>
            <section id="restaurants">
              <RestaurantSection />
            </section>
            <section id="map">
              <MetroMap />
            </section>
            <section id="emergency">
              <EmergencyContacts />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </BudgetProvider>
  );
}

export default App;