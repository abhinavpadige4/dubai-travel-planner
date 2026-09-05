```tsx
import React, { useState } from 'react';

interface VisaCategory {
  title: string;
  icon: string;
  description: string;
  details: string[];
}

const visaCategories: VisaCategory[] = [
  {
    title: 'Visa on Arrival',
    icon: '✈️',
    description: 'Most nationalities receive a 30-day visa on arrival.',
    details: [
      'US, UK, EU, Australia, Canada citizens',
      'Valid passport (6+ months)',
      'Return ticket required',
      'Free of charge',
    ],
  },
  {
    title: 'E-Visa',
    icon: '📱',
    description: 'Apply online before travel if your nationality requires it.',
    details: [
      'Apply via ICP or GDRFA portal',
      'Processing: 3-5 business days',
      'Cost: ~$50-100 USD',
      'Valid for 30 or 90 days',
    ],
  },
  {
    title: 'Transit Visa',
    icon: '🔄',
    description: 'Short stay visa for layovers at Dubai International Airport.',
    details: [
      '48-hour or 96-hour options',
      'Must be arranged by airline',
      'Valid for transit passengers only',
      'Cannot extend beyond validity',
    ],
  },
  {
    title: 'Important Notes',
    icon: '⚠️',
    description: 'Key things to remember about Dubai visa requirements.',
    details: [
      'Check latest requirements before travel',
      'Passport must be valid 6+ months',
      'Keep return ticket handy',
      'Visa rules may change — verify with UAE embassy',
    ],
  },
];

interface VisaInfoProps {
  isVisible: boolean;
}

const VisaInfo: React.FC<VisaInfoProps> = ({ isVisible }) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 glass-card rounded-full text-amber-400 text-sm font-medium mb-4">
            🛂 Travel Docs
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Visa Information</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about entering Dubai
          </p>
        </div>

        {/* Main Info Card */}
        <div
          className={`glass-card rounded-2xl p-8 mb-8 transition-all duration-500 ${
            isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-3xl flex-shrink-0 shadow-lg shadow-amber-900/30">
              🇦🇪
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Visa on Arrival for Most Nationalities
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Citizens of most countries including the US, UK, EU member states, Australia, Canada,
                and many others receive a <span className="text-amber-400 font-semibold">free 30-day visa on arrival</span> when entering Dubai.
                Your passport must be valid for at least 6 months from the date of entry.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-green-900/30 text-green-400 text-sm rounded-full border border-green-700/30">
                  ✅ Free for most nationalities
                </span>
                <span className="px-3 py-1 bg-amber-900/30 text-amber-400 text-sm rounded-full border border-amber-700/30">
                  📋 30-day validity
                </span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-sm rounded-full border border-blue-700/30">
                  📄 6-month passport validity
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Visa Categories */}
        <div className="space-y-4">
          {visaCategories.map((category, index) => (
            <div
              key={index}
              className={`glass-card glass-card-hover rounded-xl overflow-hidden transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 3) * 150}ms` }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                className="w-full p-5 flex items-center gap-4 text-left"
              >
                <span className="text-2xl">{category.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  <p className="text-sm text-gray-400">{category.description}</p>
                </div>
                <svg
                  className={`w-5 h-5 text-amber-500/50 transition-transform duration-300 flex-shrink-0 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 pt-0">
                  <ul className="space-y-2">
                    {category.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div
          className={`mt-8 glass-card rounded-xl p-5 transition-all duration-500 ${
            isVisible ? 'animate-fade-in-up delay-800' : 'opacity-0'
          }`}
        >
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">⚠️</span>
            <div>
              <p className="text-sm text-gray-400">
                <strong className="text-amber-400">Disclaimer:</strong> Visa requirements are subject to change.
                Always check the latest requirements with the{' '}
                <span className="text-amber-400 underline cursor-pointer">UAE Embassy</span> or{' '}
                <span className="text-amber-400 underline cursor-pointer">ICP website</span> before your trip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaInfo;
