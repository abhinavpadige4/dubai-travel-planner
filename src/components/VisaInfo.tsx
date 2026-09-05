```tsx
import React, { useState, useEffect, useRef } from 'react';

const VisaInfo: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const visaTypes = [
    {
      title: 'Visa on Arrival',
      icon: '✈️',
      description: 'Citizens of the US, UK, EU, Australia, Canada, and many other countries receive a free 30-day visa on arrival.',
      duration: '30 days',
      cost: 'Free',
    },
    {
      title: 'Pre-Arrival Visa',
      icon: '📋',
      description: 'Some nationalities need to apply for a visa before traveling. Apply through the UAE ICP portal or a UAE-based sponsor.',
      duration: '30-90 days',
      cost: 'Varies',
    },
    {
      title: 'Visa Extension',
      icon: '🔄',
      description: 'You can extend your visa for an additional 30 days through the General Directorate of Residency and Foreigners Affairs.',
      duration: '+30 days',
      cost: 'AED 650',
    },
  ];

  const requirements = [
    'Passport valid for at least 6 months',
    'Confirmed return ticket',
    'Hotel booking confirmation',
    'Proof of sufficient funds',
    'Travel insurance (recommended)',
    'Yellow fever vaccination certificate (if applicable)',
  ];

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            🛂 Travel Requirements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Visa Information
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Most nationalities receive a 30-day visa on arrival. Check latest requirements before travel.
          </p>
        </div>

        {/* Visa Types */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {visaTypes.map((visa, index) => (
            <div
              key={visa.title}
              className="group rounded-2xl bg-white/5 border border-amber-500/20 backdrop-blur-sm p-6 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-4">{visa.icon}</div>
              <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-amber-300 transition-colors">
                {visa.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{visa.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5 text-gray-500">
                  <svg className="w-4 h-4 text-amber-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {visa.duration}
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <svg className="w-4 h-4 text-amber-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {visa.cost}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements Card */}
        <div
          className={`rounded-2xl bg-white/5 border border-amber-500/20 backdrop-blur-sm overflow-hidden transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">📝</span>
              <h3 className="text-xl font-bold text-gray-100">Entry Requirements</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-6 p-6 rounded-2xl bg-amber-500/5 border border-amber-500/15">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <div>
              <h4 className="font-semibold text-amber-300 mb-2">Important Note</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Visa regulations can change. Always verify the latest requirements on the official
                <a
                  href="https://icp.gov.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 underline ml-1"
                >
                  UAE ICP website
                </a>
                before your trip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaInfo;
