import React, { useState } from 'react';

const VisaInfo: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  const faq = [
    {
      title: 'Do I need a visa?',
      content: 'Most nationalities receive a 30\u2011day visa on arrival. Check latest rules at <a href="https://www.ica.gov.ae" target="_blank" rel="noopener noreferrer" className="text-[#D4A373] hover:underline">www.ica.gov.ae</a>'
    },
    {
      title: 'Passport validity',
      content: 'Must be valid for at least 6 months from travel date.'
    },
    {
      title: 'Entry requirements',
      content: 'Proof of onward/return travel and sufficient funds may be required. Check with your airline.'
    }
  ];

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#D4A373] to-[#E8C29A]">
        Visa & Entry Information
      </h2>
      <div className="max-w-xl mx-auto space-y-4">
        {faq.map((item, index) => (
          <div key={index} className="bg-[#2D1B17]/80 backdrop-blur-sm border border-[#D4A373]/30 rounded-xl overflow-hidden">
            <div
              className={`flex items-center justify-between p-5 cursor-pointer hover:bg-[#1A0F08]/50 transition-colors duration-200`}
              onClick={() => toggleAccordion(item.title)}
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <svg
                className={`w-5 h-5 text-[#D4A373] transition-transform duration-200 ${openAccordion === item.title ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {openAccordion === item.title && (
              <div className="p-5 text-[#E8C29A]/90 border-t border-[#D4A373]/30">
                <p className="whitespace-pre-line">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisaInfo;