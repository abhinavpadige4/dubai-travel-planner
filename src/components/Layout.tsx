import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2D1B17] to/#1A0F08 text-white">
      <main className="container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;