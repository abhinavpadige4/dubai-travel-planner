import { useState } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="https://ui-avatars.com/api/?name=Dubai+Travel+Planner&background=fff&color=d4a373&size=128"
                alt="Dubai Travel Planner Logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#itinerary"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  Itinerary
                </a>
                <a
                  href="#budget"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  Budget
                </a>
                <a
                  href="#packing"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  Packing
                </a>
                <a
                  href="#visa"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  Visa
                </a>
                <a
                  href="#restaurants"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  Restaurants
                </a>
                <a
                  href="#emergency"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  Emergency
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="flex items-center p-2 rounded-md text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200 md:hidden"
              aria-label="Open main menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#itinerary"
              className="block px-3 py-2 rounded-md text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
            >
              Itinerary
            </a>
            <a
              href="#budget"
              className="block px-3 py-2 rounded-md text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
            >
              Budget
            </a>
            <a
              href="#packing"
              className="block px-3 py-2 rounded-md text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
            >
              Packing
            </a>
            <a
              href="#visa"
              className="block px-3 py-2 rounded-md text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
            >
              Visa
            </a>
            <a
              href="#restaurants"
              className="block px-3 py-2 rounded-md text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
            >
              Restaurants
            </a>
            <a
              href="#emergency"
              className="block px-3 py-2 rounded-md text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
            >
              Emergency
            </a>
          </div>
        </div>
      )}
    </header>
  );
};