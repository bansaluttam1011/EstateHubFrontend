import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, Star, TrendingUp, Users, Award, ArrowRight, Play, CheckCircle, Home as HomeIcon } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import AnimatedCounter from '../components/AnimatedCounter';
import AnimatedText from '../components/AnimatedText';
import FloatingElements from '../components/FloatingElements';
import { useProperty } from '../context/PropertyContext';

const HomePage = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const { properties } = useProperty();
  const navigate = useNavigate();

  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
      title: 'Find Your Perfect Dream Home',
      subtitle: 'Discover amazing properties for rent and sale with the best deals in town',
      cta: 'Explore Properties'
    },
    {
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
      title: 'Luxury Living Awaits You',
      subtitle: 'Premium properties with world-class amenities and stunning locations',
      cta: 'View Luxury Homes'
    },
    {
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
      title: 'Your Investment Journey Starts Here',
      subtitle: 'Smart property investments with guaranteed returns and expert guidance',
      cta: 'Start Investing'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?location=${encodeURIComponent(searchLocation)}`);
  };

  const featuredProperties = properties.slice(0, 6);

  const stats = [
    { number: 10000, label: 'Happy Customers', icon: Users, suffix: '+' },
    { number: 15000, label: 'Properties Sold', icon: TrendingUp, suffix: '+' },
    { number: 500, label: 'Projects Completed', icon: Award, suffix: '+' },
    { number: 1000, label: 'Commercial Deals', icon: Star, suffix: '+' },
  ];

  const features = [
    {
      icon: HomeIcon,
      title: 'Premium Properties',
      description: 'Handpicked selection of the finest properties in prime locations'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Professional real estate experts to guide you through every step'
    },
    {
      icon: Award,
      title: 'Trusted Service',
      description: 'Over a decade of excellence in real estate services'
    },
    {
      icon: CheckCircle,
      title: 'Verified Listings',
      description: 'All properties are thoroughly verified for authenticity'
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <FloatingElements />
        
        {/* Background Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <AnimatedText
              text={heroSlides[currentSlide].title}
              className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-white"
              duration={800}
            />
            <AnimatedText
              text={heroSlides[currentSlide].subtitle}
              className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto"
              delay={300}
              duration={800}
            />

            {/* Enhanced Search Bar */}
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-8">
              <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-2xl border border-white/20">
                <div className="flex items-center px-6 flex-1">
                  <MapPin className="h-6 w-6 text-gray-400 mr-4" />
                  <input
                    type="text"
                    placeholder="Enter city, area or locality..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full py-4 px-2 text-gray-700 placeholder-gray-400 focus:outline-none text-lg bg-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg"
                >
                  <Search className="h-6 w-6" />
                  <span className="font-semibold text-lg">Search</span>
                </button>
              </div>
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/search"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-xl"
              >
                <span className="font-semibold text-lg">{heroSlides[currentSlide].cta}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <button className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center space-x-3">
                <Play className="h-5 w-5" />
                <span className="font-semibold text-lg">Watch Video</span>
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <FloatingElements />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Our Success in Numbers"
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            />
            <AnimatedText
              text="Trusted by thousands of satisfied customers across the country"
              className="text-xl text-blue-100 max-w-2xl mx-auto"
              delay={300}
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2500}
                />
                <AnimatedText
                  text={stat.label}
                  className="text-lg text-blue-100 mt-2 font-medium"
                  delay={index * 200}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Why Choose EstateHub"
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            />
            <AnimatedText
              text="Experience the difference with our premium real estate services"
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              delay={300}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Featured Properties"
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            />
            <AnimatedText
              text="Discover our handpicked selection of premium properties"
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              delay={300}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property, index) => (
              <div
                key={property.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/search"
              className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg"
            >
              <span>View All Properties</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <FloatingElements />
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedText
            text="Ready to Find Your Dream Property?"
            className="text-4xl md:text-5xl font-bold mb-6"
          />
          <AnimatedText
            text="Join thousands of satisfied customers who found their perfect home with us"
            className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto"
            delay={300}
          />
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/search"
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-xl"
            >
              Explore Properties
            </Link>
            <Link
              to="/post-property"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 font-medium text-lg"
            >
              List Your Property
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;