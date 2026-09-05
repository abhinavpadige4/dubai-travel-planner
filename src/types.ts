export interface ItineraryDay {
  id: number;
  title: string;
  description: string;
  icon: string;
  tips?: string[];
}

export interface BudgetCategory {
  name: string;
  amount: number;
}

export interface PackingItem {
  id: number;
  item: string;
  checked: boolean;
}

export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  description: string;
  priceRange: string;
}

export interface EmergencyContact {
  name: string;
  number: string;
}

export interface VisaInfo {
  title: string;
  content: string;
  note: string;
}