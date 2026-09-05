```tsx
import React, { useState, useEffect, useRef } from 'react';

const VisaInfo: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 px-4 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight">
          Visa Information
        </h2>
        <div className="bg-white/10 backdrop-blur-[8px] border border-white/20 rounded-xl p-6 md:p-8 shadow-xl hover:scale-[1.05] transition-transform duration-300">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Most nationalities receive a 30‑day visa on arrival (free). Check latest rules at{' '}
            <a
              href="https://www.ica.gov.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4a373] hover:text-[#e8b98a] underline underline-offset-4 transition-colors font-medium"
            >
              https://www.ica.gov.ae
            </a>
            . Ensure passport validity ≥6 months.
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <span className="inline-block w-2 h-2 rounded-full bg-[#d4a373] animate-pulse"></span>
            <span className="text-sm text-gray-400">Always verify requirements before travel</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaInfo;
