import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-[rgba(210,180,140,0.1)] to-[rgba(210,180,140,0.05)] backdrop-blur-sm border-b border-[rgba(210,180,140,0.2)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-[var(--primary-color, #D2B48C)] bg-gradient-to-r from-[var(--primary-color, #D2B48C)] to-[var(--accent-color, #E07A5F)] bg-clip-text text-transparent">
                Dubai Travel Planner
              </span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="#itinerary" className="text-[var(--text-color, #F5F5DC)] hover:text-[var(--accent-color, #E07A5F)] transition-colors duration-300 font-medium">
              Itinerary
            </Link>
            <Link href="#budget" className="text-[var(--text-color, #F5F5DC)] hover:text-[var(--accent-color, #E07A5F)] transition-colors duration-300 font-medium">
              Budget
            </Link>
            <Link href="#packing" className="text-[var(--text-color, #F5F5DC)] hover:text-[var(--accent-color, #E07A5F)] transition-colors duration-300 font-medium">
              Packing
            </Link>
            <Link href="#visa" className="text-[var(--text-color, #F5F5DC)] hover:text-[var(--accent-color, #E07A5F)] transition-colors duration-300 font-medium">
              Visa
            </Link>
            <Link href="#restaurants" className="text-[var(--text-color, #F5F5DC)] hover:text-[var(--accent-color, #E07A5F)] transition-colors duration-300 font-medium">
              Restaurants
            </Link>
            <Link href="#emergency" className="text-[var(--text-color, #F5F5DC)] hover:text-[var(--accent-color, #E07A5F)] transition-colors duration-300 font-medium">
              Emergency
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-[var(--text-color, #F5F5DC)] hover:text-[var(--accent-color, #E07A5F)]" aria-label="Open menu">
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};