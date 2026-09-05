export interface ItineraryItem {
  id: number;
  day: number;
  title: string;
  description: string;
  icon: string;
  tips: string;
}

export interface BudgetFormValues {
  transport: number;
  accommodation: number;
  food: number;
  activities: number;
  miscellaneous: number;
}

export interface PackingItem {
  id: number;
  name: string;
  packed: boolean;
}

export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  description: string;
}

export interface EmergencyContact {
  id: number;
  name: string;
  number: string;
  description?: string;
}