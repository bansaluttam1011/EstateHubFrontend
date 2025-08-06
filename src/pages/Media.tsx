import React, { useState } from 'react';
import { Play, Download, Calendar, Eye, Share2, Filter } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FloatingElements from '../components/FloatingElements';

const Media = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const mediaItems = [
    {
      id: '1',
      type: 'video',
      title: 'EstateHub Company Overview 2024',
      description: 'Get to know EstateHub - India\'s leading real estate platform helping millions find their dream homes.',
      thumbnail: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: '#',
      date: '2024-01-15',
      category: 'Company',
      duration: '3:45',
      views: '12.5K'
    },
    {
      id: '2',
      type: 'image',
      title: 'Mumbai Office Launch Event',
      description: 'Grand opening of our new Mumbai headquarters with industry leaders and partners.',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      date: '2024-01-12',
      category: 'Events',
      views: '8.2K'
    },
    {
      id: '3',
      type: 'video',
      title: 'Customer Success Stories',
      description: 'Real stories from satisfied customers who found their perfect homes through EstateHub.',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: '#',
      date: '2024-01-10',
      category: 'Testimonials',
      duration: '5:20',
      views: '15.8K'
    },
    {
      id: '4',
      type: 'image',
      title: 'Award Ceremony - Best PropTech Company',
      description: 'EstateHub receives the prestigious Best PropTech Company award at Real Estate Excellence Awards 2024.',
      thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
      date: '2024-01-08',
      category: 'Awards',
      views: '6.7K'
    },
    {
      id: '5',
      type: 'video',
      title: 'Property Investment Webinar',
      description: 'Expert insights on real estate investment strategies and market trends for 2024.',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: '#',
      date: '2024-01-05',
      category: 'Educational',
      duration: '45:30',
      views: '22.1K'
    },
    {
      id: '6',
      type: 'image',
      title: 'Team Building Retreat 2024',
      description: 'Our annual team building retreat bringing together teams from across India.',
      thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
      date: '2024-01-03',
      category: 'Company',
      views: '4.3K'
    },
    {
      id: '7',
      type: 'video',
      title: 'Virtual Property Tour Technology',
      description: 'Discover how our cutting-edge VR technology is revolutionizing property viewing experiences.',
      thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: '#',
      date: '2024-01-01',
      category: 'Technology',
      duration: '7:15',
      views: '18.9K'
    },
    {
      id: '8',
      type: 'image',
      title: 'Charity Drive - Homes for All',
      description: 'EstateHub\'s initiative to provide affordable housing solutions for underprivileged families.',
      thumbnail: 'https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1200',
      date: '2023-12-28',
      category: 'CSR',
      views: '9.1K'
    }
  ];

  const categories = ['All', 'Company', 'Events', 'Testimonials', 'Awards', 'Educational', 'Technology', 'CSR'];

  const filteredMedia = mediaItems.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  const handleMediaClick = (media: any) => {
    setSelectedMedia(media);
  };

  const handleDownload = (url: string, title: string) => {
    // In a real application, this would trigger a download
    console.log(`Downloading: ${title}`);
    alert('Download started!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        <FloatingElements />
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedText
            text="Media Center"
            className="text-5xl md:text-6xl font-bold mb-6"
          />
          <AnimatedText
            text="Videos, Images & Press Resources"
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
            delay={300}
          />
          <AnimatedText
            text="Explore our collection of company videos, event photos, press releases, and downloadable resources."
            className="text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed"
            delay={600}
          />
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMedia.map((media) => (
              <div
                key={media.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleMediaClick(media)}
              >
                <div className="relative">
                  <img
                    src={media.thumbnail}
                    alt={media.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  
                  {/* Media Type Indicator */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                      media.type === 'video' ? 'bg-red-500' : 'bg-green-500'
                    }`}>
                      {media.type === 'video' ? 'Video' : 'Image'}
                    </span>
                  </div>

                  {/* Play Button for Videos */}
                  {media.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Duration for Videos */}
                  {media.type === 'video' && media.duration && (
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {media.duration}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded-full">
                      {media.category}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-500 text-xs">
                      <Eye className="h-3 w-3" />
                      <span>{media.views}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {media.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {media.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-gray-500 text-xs">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(media.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.share ? navigator.share({
                            title: media.title,
                            text: media.description,
                            url: window.location.href
                          }) : alert('Share functionality would be implemented here');
                        }}
                        className="p-1 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                      >
                        <Share2 className="h-4 w-4" />
                      </button>
                      {media.type === 'image' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(media.url, media.title);
                          }}
                          className="p-1 text-gray-400 hover:text-green-600 transition-colors duration-200"
                        >
                          <Download className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden">
            <div className="relative">
              {selectedMedia.type === 'video' ? (
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4" />
                    <p>Video player would be implemented here</p>
                    <p className="text-sm text-gray-300 mt-2">{selectedMedia.title}</p>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              )}
              
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{selectedMedia.title}</h2>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => navigator.share ? navigator.share({
                      title: selectedMedia.title,
                      text: selectedMedia.description,
                      url: window.location.href
                    }) : alert('Share functionality would be implemented here')}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                  {selectedMedia.type === 'image' && (
                    <button
                      onClick={() => handleDownload(selectedMedia.url, selectedMedia.title)}
                      className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{selectedMedia.description}</p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(selectedMedia.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{selectedMedia.views} views</span>
                </div>
                <span className="bg-gray-100 px-2 py-1 rounded-full">
                  {selectedMedia.category}
                </span>
                {selectedMedia.duration && (
                  <span>{selectedMedia.duration}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Press Kit Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Press Kit & Resources"
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            />
            <AnimatedText
              text="Download our official logos, brand guidelines, and press materials"
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              delay={300}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Brand Assets</h3>
              <p className="text-gray-600 mb-6">Official logos, brand colors, and typography guidelines</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Download Kit
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Press Releases</h3>
              <p className="text-gray-600 mb-6">Latest company announcements and news updates</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200">
                View Releases
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Media Contact</h3>
              <p className="text-gray-600 mb-6">Get in touch with our media relations team</p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;