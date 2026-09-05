```typescript
import React, { useState } from 'react'

interface Restaurant {
  name: string
  cuisine: string
  rating: number
  priceRange: string
  location: string
  description: string
  icon: string
  featured?: boolean
}

const restaurants: Restaurant[] = [
  {
    name: 'Al Nafoorah',
    cuisine: 'Lebanese',
    rating: 4.7,
    priceRange: '$$$',
    location: 'Al Fahidi',
    description: 'Authentic Lebanese cuisine in a charming traditional setting with beautiful courtyard.',
    icon: '🍽️',
    featured: true,
  },
  {
    name: 'Nusr-Et Steakhouse',
    cuisine: 'Steakhouse',
    rating: 4.5,
    priceRange: '$$$$',
    location: 'DIFC',
    description: '