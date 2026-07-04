export interface Shipment {
  id: string;
  trackingNumber: string;
  shipperName: string;
  consigneeName: string;
  originCountry: string;
  originCity: string;
  destinationCountry: string;
  destinationCity: string;
  status: 'Picked Up' | 'In Transit' | 'At Port/Hub' | 'Out for Delivery' | 'Delivered' | 'On Hold';
  currentLocation: string;
  weight: number; // in kg
  volume: number; // in CBM
  cargoType: string;
  transportMode: 'Road' | 'Air' | 'Ocean' | 'Rail' | 'Multimodal';
  estimatedDelivery: string;
  history: Array<{
    date: string;
    location: string;
    status: string;
    description: string;
  }>;
}

export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  manager: string;
  capacity: string; // e.g. "50,000 sqm warehouse, Cold chain capable"
  isHQ?: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  imageUrl: string;
}

export interface TransportCorridor {
  id: string;
  name: string;
  route: string;
  transitTime: string;
  description: string;
  keyFacts: string[];
}

export interface IndustryVertical {
  id: string;
  name: string;
  iconName: string;
  description: string;
  challenges: string[];
  solutions: string[];
  caseStudyTitle: string;
  caseStudySnippet: string;
  keyStat: string;
}

export interface QuoteRequest {
  id: string;
  cargoType: string;
  transportMode: string;
  weight: number;
  volume: number;
  specialRequirements: string[];
  originCountry: string;
  originCity: string;
  destinationCountry: string;
  destinationCity: string;
  readyDate: string;
  deadline: string;
  company: string;
  contactName: string;
  email: string;
  phone: string;
  industry: string;
  timestamp: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: string;
}
