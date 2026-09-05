# Dubai Travel Planner

A beautiful 10-day Dubai travel itinerary web app with budget tracker, packing checklist, visa info, restaurant recommendations, and emergency contacts.

## Features

- **10-Day Itinerary**: Day-by-day guide to Dubai's top attractions
- **Budget Tracker**: Monitor expenses across transport, accommodation, food, activities, and miscellaneous
- **Packing Checklist**: Essential items for your Dubai trip
- **Visa Information**: Up-to-date visa requirements
- **Restaurant Recommendations**: Top dining spots with cuisine and ratings
- **Emergency Contacts**: Important phone numbers for safety
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Dark Desert Theme**: Warm sand tones with glassmorphism effects

## Tech Stack

- **Framework**: React 18
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite 4
- **Language**: TypeScript 5
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd dubai-travel-planner

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### Building for Production

```bash
# Build for production
npm run build
# or
yarn build
```

### Preview Production Build

```bash
# Preview the production build
npm run preview
# or
yarn preview
```

## Deployment to Vercel

The app is configured for easy deployment to Vercel:

1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Import the project in Vercel
3. Vercel will automatically detect the Vite configuration and deploy the app
4. No additional configuration needed - the `vercel.json` file handles routing

## Design System

### Colors

- Primary Sand: `#D2B48C` (Desert sand)
- Accent Gradient: Terracotta to Sunset (`#E2725B` to `#FF6B35`)
- Dark Background: `#121212` (Tailwind's `gray-900`)
- Card Background: `rgba(30, 30, 30, 0.7)` (Glassmorphism effect)
- Text: `gray-100` with `gray-300` for secondary text

### Components

All components use:
- Glassmorphism cards with sand-colored borders
- Rounded shadows (`shadow-xl`)
- Subtle fade-in animations
- Responsive grid layouts
- Warm desert tones throughout

## Project Structure

```
src/
├── components/
│   ├── BudgetTracker.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Itinerary.tsx
│   ├── PackingChecklist.tsx
│   ├── RestaurantRecommendations.tsx
│   ├── VisaInfo.tsx
│   └── EmergencyContacts.tsx
├── App.tsx
├── main.tsx
├── index.css
└── vite.config.ts
```

## Customization

### Adding More Restaurant Recommendations

Edit `src/components/RestaurantRecommendations.tsx` to add more restaurant cards following the existing pattern.

### Modifying the Itinerary

Edit `src/components/Itinerary.tsx` to change day titles, icons, or add descriptions.

### Changing Colors

Update the color variables in `src/index.css` or modify the Tailwind configuration in `tailwind.config.cjs`.

## License

MIT

## Acknowledgments

- Dubai Tourism for attraction information
- Tailwind CSS for the utility-first framework
- Vercel for seamless deployment
- Vite for fast development experience
- React team for the powerful UI library

Enjoy planning your Dubai adventure! 🏜️🏙️