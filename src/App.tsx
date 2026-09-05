import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Itinerary from './components/Itinerary';
import BudgetTracker from './components/BudgetTracker';
import PackingChecklist from './components/PackingChecklist';
import VisaInfo from './components/VisaInfo';
import RestaurantRecommendations from './components/RestaurantRecommendations';
import EmergencyContacts from './components/EmergencyContacts';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/budget" element={<BudgetTracker />} />
          <Route path="/packing" element={<PackingChecklist />} />
          <Route path="/visa" element={<VisaInfo />} />
          <Route path="/restaurants" element={<RestaurantRecommendations />} />
          <Route path="/emergency" element={<EmergencyContacts />} />
          <Route path="*" element={<Hero />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;