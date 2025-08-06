import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, MapPin, Bed, Bath, Square, Car, Wifi, Shield, Droplets, Phone, Mail, MessageCircle } from 'lucide-react';
import { useProperty } from '../context/PropertyContext';
import ContactModal from '../components/ContactModal';

const PropertyDetails = () => {
  const { id } = useParams();
  const { properties } = useProperty();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Property not found</h2>
          <Link to="/search" className="text-blue-600 hover:text-blue-700">
            Back to search
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)}Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    } else {
      return `₹${price.toLocaleString()}`;
    }
  };

  const amenityIcons: { [key: string]: React.ElementType } = {
    'Parking': Car,
    'Wi-Fi': Wifi,
    'Security': Shield,
    'Water Supply': Droplets,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/search" 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to search</span>
            </Link>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-red-100 transition-colors duration-200">
                <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-200">
                <Share2 className="h-5 w-5 text-gray-600 hover:text-blue-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {property.images.length}
                </div>
              </div>
              <div className="flex space-x-2 mt-4 overflow-x-auto">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === currentImageIndex ? 'border-blue-500' : 'border-gray-300'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-600">
                    {formatPrice(property.price)}
                    {property.type === 'rent' && <span className="text-lg text-gray-600">/month</span>}
                  </p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mt-2 ${
                    property.type === 'rent' ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                    For {property.type === 'rent' ? 'Rent' : 'Sale'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <Bed className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">{property.bedrooms}</p>
                  <p className="text-sm text-gray-600">Bedrooms</p>
                </div>
                <div className="text-center">
                  <Bath className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">{property.bathrooms}</p>
                  <p className="text-sm text-gray-600">Bathrooms</p>
                </div>
                <div className="text-center">
                  <Square className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">{property.area}</p>
                  <p className="text-sm text-gray-600">Sq Ft</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-xs font-semibold text-gray-600">F</span>
                  </div>
                  <p className="font-semibold text-gray-800 capitalize">{property.furnishing}</p>
                  <p className="text-sm text-gray-600">Furnishing</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {property.amenities.map((amenity, index) => {
                  const IconComponent = amenityIcons[amenity] || Wifi;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Location Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Location</h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive map would be displayed here</p>
                  <p className="text-sm text-gray-500 mt-1">{property.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-blue-600">JD</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">John Doe</h4>
                <p className="text-gray-600">Property Agent</p>
              </div>

              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </button>
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </button>
              </div>

              <div className="text-center text-sm text-gray-500">
                <p>Response rate: 95%</p>
                <p>Typically responds within 2 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showContactModal && (
        <ContactModal
          propertyTitle={property.title}
          onClose={() => setShowContactModal(false)}
        />
      )}
    </div>
  );
};

export default PropertyDetails;