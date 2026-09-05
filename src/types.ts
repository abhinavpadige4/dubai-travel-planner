export interface ItineraryDay {
  id: number;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface BudgetCategory {
  name: string;
  amount: number;
}

export interface PackingItem {
  id: number;
  item: string;
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
  name: string;
  number: string;
}

export interface VisaInfo {
  title: string;
  content: string;
}

export interface FooterLink {
  name: string;
  href: string;
}