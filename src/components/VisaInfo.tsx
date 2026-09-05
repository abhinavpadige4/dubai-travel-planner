```typescript
import React, { useState } from 'react'

interface VisaCategory {
  title: string
  icon: string
  description: string
  details: string[]
}

const visaCategories: VisaCategory[] = [
  {
    title: 'Visa on Arrival',
    icon: '✈️',
    description: 'Most nationalities receive a 30-day visa on arrival.',
    details: [
      'US, UK, EU, Australian, Canadian citizens',
      'Valid passport (6+ months)',
      'Return ticket required',
      'Free of charge',
    ],
  },
  {
    title: 'E-Visa Required',
    icon: '📱',
    description: 'Some nationalities need to apply for an e-visa before travel.',
    details: [
      'Apply through UAE ICA website',
      'Processing: 3-5 business days',
      'Fee: ~$50-100 USD',
      'Valid for 30 or 90 days',
    ],
  },
  {
    title: 'Visa-Free Entry',
    icon: '🌍',
    description: 'GCC citizens and some other nationalities enter without a visa.',
    details: [
      'GCC nationals (UAE, Saudi, Kuwait, Qatar, Bahrain, Oman)',
      'Valid national ID or passport',
      'No visa fee required',
      'Unlimited stay',
    ],
  },
]

const tips = [
  { icon: '📄', text: 'Ensure your passport is valid for at least 6 months from entry date' },
  { icon: '📸', text: 'Keep digital copies of all travel documents in the cloud' },
  { icon: '💳', text: 'Carry proof of sufficient funds (bank statements or credit cards)' },
  { icon: '🏨', text: 'Have hotel booking confirmation readily available' },
  { icon: '📋', text: 'Check latest requirements on the official UAE ICA website before travel' },
]

const VisaInfo: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <div className="py-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="section-title gradient-text">Visa Information</h2>
        <p className="section-subtitle">
          Everything you need to know about entering the UAE
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-terracotta to-sunset mx-auto rounded-full" />
      </div>

      {/* Main Info Card */}
      <div className="glass-card p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta/10 rounded-full blur-2xl" />
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">🇦🇪</span>
            <div>
              <h3 className="text-xl font-bold text-sand-100 mb-2">
                UAE Entry Requirements
              </h3>
              <p className="text-sand-400 leading-relaxed">
                Most nationalities receive a <strong className="text-sand-200">30-day visa on arrival</strong>. 
                Check latest requirements before travel. The UAE offers visa-free or visa-on-arrival 
                access to citizens of over 180 countries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visa Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {visaCategories.map((cat, index) => (
          <div
            key={index}
            className="glass-card p-6 cursor-pointer"
            onClick={() => setExpandedCard(expandedCard === index ? null : index)}
          >
            <div className="text-3xl mb-3">{cat.icon}</div>
            <h3 className="text-lg font-bold text-sand-100 mb-2">{cat.title}</h3>
            <p className="text-sand-400 text-sm mb-3">{cat.description}</p>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                expandedCard === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="space-y-2 pt-3 border-t border-desert-border">
                {cat.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-sand-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-sunset mt-1.5 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-sand-600 mt-2">
              {expandedCard === index ? 'Click to collapse' : 'Click for details'}
            </p>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-bold text-sand-100 mb-4 flex items-center gap-2">
          <span>💡</span> Travel Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-xl bg-desert-card/50 border border-desert-border/50"
            >
              <span className="text-xl flex-shrink-0">{tip.icon}</span>
              <p className="text-sm text-sand-400 leading-relaxed">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VisaInfo
