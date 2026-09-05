# Dubai Travel Planner

A beautiful 10-day Dubai travel planner web app with budget tracker, packing checklist, visa info, restaurant recommendations, and emergency contacts.

## Features

- **10-Day Itinerary**: Day-by-day guide to Dubai's top attractions
- **Budget Tracker**: Track expenses across transport, accommodation, food, activities, and miscellaneous
- **Packing Checklist**: Essential items to pack for your Dubai trip
- **Visa Information**: Up-to-date visa requirements for Dubai
- **Restaurant Recommendations**: Top dining spots with cuisine types and ratings
- **Emergency Contacts**: Important phone numbers for safety
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Dark Desert Theme**: Warm desert colors with glassmorphism effects

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

1. Clone the repository
```bash
git clone <repository-url>
cd dubai-travel-planner
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Deployment to Vercel

This app is configured for easy deployment to Vercel:

1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Import the project in Vercel
3. Vercel will automatically detect the Vite configuration and deploy your app
4. Visit your deployed URL to see the live app

## Design System

### Colors (Warm Desert Dark Theme)
- Primary: `#D2B48C` (Tan)
- Accent Gradient: `from-[#C1440E] to-[#E07A5F]` (Terracotta to Sunset)
- Background: `#0F172A` (Dark Slate)
- Card Background: `rgba(15, 23, 42, 0.6)` (Glassmorphism)
- Border: `1px solid rgba(210, 180, 140, 0.2)` (Sand)

### Components
All components use:
- Glassmorphism cards with sand borders
- Gradient accents (terracotta to sunset)
- Subtle fade-in animations
- Warm desert tones
- Rounded shadows
- Responsive grid layout

## Project Structure

```
src/
├── components/
│   ├── BudgetTracker.tsx
│   ├── EmergencyContacts.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Itinerary.tsx
│   ├── PackingChecklist.tsx
│   ├── RestaurantRecommendations.tsx
│   └── VisaInfo.tsx
├── App.tsx
├── main.tsx
├── index.css
└── vite.config.ts
```

## Customization

### Changing the Itinerary
Edit the `itineraryData` array in `src/components/Itinerary.tsx` to modify day-by-day activities.

### Updating Restaurant Recommendations
Modify the `restaurants` array in `src/components/RestaurantRecommendations.tsx`.

### Adjusting Budget Categories
Edit the `budgetCategories` array in `src/components/BudgetTracker.tsx`.

### Changing Theme Colors
Update the color values in `src/index.css`:
- `--primary-color`: Main accent color
- `--gradient-start`: Gradient start color
- `--gradient-end`: Gradient end color

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Dubai Tourism for attraction information
- Tailwind CSS for the utility-first framework
- Vercel for seamless deployment
- Vite for fast development experience
- React 18 for modern UI development
- TypeScript for type safety
