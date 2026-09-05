import React from 'react';
import Hero from './components/Hero';
import ItineraryList from './components/ItineraryList';
import BudgetTracker from './components/BudgetTracker';
import PackingChecklist from './components/PackingChecklist';
import VisaInfo from './components/VisaInfo';
import RestaurantRecommendations from './components/RestaurantRecommendations';
import EmergencyContacts from './components/EmergencyContacts';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white font-sans antialiased">
      <Hero />
      <ItineraryList />
      <BudgetTracker />
      <PackingChecklist />
      <VisaInfo />
      <RestaurantRecommendations />
      <EmergencyContacts />
    </div>
  );
}

export default App;