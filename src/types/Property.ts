export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: 'rent' | 'sale';
  propertyType: 'apartment' | 'house' | 'villa' | 'commercial';
  bedrooms: number;
  bathrooms: number;
  area: number;
  furnishing: 'furnished' | 'semi-furnished' | 'unfurnished';
  amenities: string[];
  images: string[];
  featured?: boolean;
  approved?: boolean;
}