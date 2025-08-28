export interface ComparisonData {
  feature: string;
  geminiPro: string;
  competitor: string;
  winner: string;
}

export interface RoutineItem {
  title: string;
  items: string[];
}

export interface PricingData {
  model: string;
  provider: string;
  cost: string;
  subcost?: string;
  note?: string;
}
