import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-[rgba(210,33%,31%]/90 to-[210,33%,21%]/90 backdrop-blur-sm border-b border-[210,33%,31%]/20 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[40,75%,60%] to-[30,80%,70%] rounded-xl flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h12" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[210,33%,95%] tracking-tight">Dubai Planner</h1>
              <p className="text-sm text-[210,33%,80%]">Your 10-Day Desert Adventure</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-[210,33%,85%] hover:text-[210,33%,95%] transition-colors duration-200 font-medium">Home</Link>
            <Link to="/itinerary" className="text-[210,33%,85%] hover:text-[210,33%,95%] transition-colors duration-200 font-medium">Itinerary</Link>
            <Link to="/budget" className="text-[210,33%,85%] hover:text-[210,33%,95%] transition-colors duration-200 font-medium">Budget</Link>
            <Link to="/packing" className="text-[210,33%,85%] hover:text-[210,33%,95%] transition-colors duration-200 font-medium">Packing</Link>
          </nav>
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-lg hover:bg-[210,33%,31%]/20 transition-colors duration-200" aria-label="Theme toggle">
              <svg className="w-5 h-5 text-[210,33%,90%]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <Link to="/profile" className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-[210,33%,31%]/20 hover:bg-[210,33%,31%]/30 transition-colors duration-200 text-[210,33%,95%] font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};