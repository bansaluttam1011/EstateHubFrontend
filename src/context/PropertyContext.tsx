import React, { createContext, useContext, useState } from 'react';
import { Property } from '../types/Property';

interface PropertyContextType {
  properties: Property[];
  addProperty: (property: Property) => void;
  updateProperty: (id: string, property: Partial<Property>) => void;
  deleteProperty: (id: string) => void;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'Luxury 3BHK Apartment in Bandra',
    description: 'Beautiful spacious apartment with modern amenities and great city views. Perfect for families looking for comfort and luxury.',
    price: 8500000,
    location: 'Bandra West, Mumbai',
    type: 'sale',
    propertyType: 'apartment',
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    furnishing: 'semi-furnished',
    amenities: ['Parking', 'Wi-Fi', 'Security', 'Water Supply', 'Elevator'],
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    featured: true,
    approved: true
  },
  {
    id: '2',
    title: 'Modern 2BHK for Rent in Pune',
    description: 'Fully furnished apartment in prime location with all modern facilities. Close to IT parks and shopping centers.',
    price: 25000,
    location: 'Koregaon Park, Pune',
    type: 'rent',
    propertyType: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    area: 900,
    furnishing: 'furnished',
    amenities: ['Parking', 'Wi-Fi', 'Security', 'Gym', 'Swimming Pool'],
    images: [
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    featured: false,
    approved: true
  },
  {
    id: '3',
    title: 'Spacious Villa with Garden',
    description: 'Independent villa with private garden, perfect for large families. Premium location with excellent connectivity.',
    price: 15000000,
    location: 'Whitefield, Bangalore',
    type: 'sale',
    propertyType: 'villa',
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    furnishing: 'unfurnished',
    amenities: ['Parking', 'Security', 'Garden', 'Power Backup'],
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    featured: true,
    approved: true
  },
  {
    id: '4',
    title: 'Commercial Office Space',
    description: 'Prime commercial space in business district. Ideal for startups and established businesses. Fully equipped with modern facilities.',
    price: 45000,
    location: 'Connaught Place, New Delhi',
    type: 'rent',
    propertyType: 'commercial',
    bedrooms: 0,
    bathrooms: 2,
    area: 800,
    furnishing: 'furnished',
    amenities: ['Parking', 'Wi-Fi', 'Security', 'Elevator', 'Air Conditioning'],
    images: [
      'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    featured: false,
    approved: true
  },
  {
    id: '5',
    title: 'Cozy 1BHK Studio Apartment',
    description: 'Perfect for young professionals or students. Compact yet comfortable living space with all essential amenities.',
    price: 18000,
    location: 'Indiranagar, Bangalore',
    type: 'rent',
    propertyType: 'apartment',
    bedrooms: 1,
    bathrooms: 1,
    area: 450,
    furnishing: 'furnished',
    amenities: ['Wi-Fi', 'Security', 'Water Supply'],
    images: [
      'https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    featured: false,
    approved: false
  },
  {
    id: '6',
    title: 'Luxury Penthouse with Terrace',
    description: 'Exclusive penthouse with private terrace and panoramic city views. Premium amenities and world-class facilities.',
    price: 25000000,
    location: 'Marine Drive, Mumbai',
    type: 'sale',
    propertyType: 'apartment',
    bedrooms: 4,
    bathrooms: 4,
    area: 3000,
    furnishing: 'furnished',
    amenities: ['Parking', 'Wi-Fi', 'Security', 'Elevator', 'Swimming Pool', 'Gym', 'Garden'],
    images: [
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    featured: true,
    approved: true
  }
];

export const PropertyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [properties, setProperties] = useState<Property[]>(sampleProperties);

  const addProperty = (property: Property) => {
    setProperties(prev => [...prev, property]);
  };

  const updateProperty = (id: string, updatedProperty: Partial<Property>) => {
    setProperties(prev =>
      prev.map(property =>
        property.id === id ? { ...property, ...updatedProperty } : property
      )
    );
  };

  const deleteProperty = (id: string) => {
    setProperties(prev => prev.filter(property => property.id !== id));
  };

  const value = {
    properties,
    addProperty,
    updateProperty,
    deleteProperty,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error('useProperty must be used within a PropertyProvider');
  }
  return context;
};