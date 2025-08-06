import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag, TrendingUp } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FloatingElements from '../components/FloatingElements';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const blogPosts = [
    {
      id: '1',
      title: 'Top 10 Real Estate Investment Tips for 2024',
      excerpt: 'Discover the most effective strategies for real estate investment in the current market. Learn from industry experts about maximizing returns and minimizing risks.',
      content: 'Real estate investment continues to be one of the most reliable ways to build wealth...',
      author: 'Rajesh Kumar',
      date: '2024-01-15',
      category: 'Investment',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min read',
      featured: true
    },
    {
      id: '2',
      title: 'Understanding RERA: A Complete Guide for Property Buyers',
      excerpt: 'Everything you need to know about the Real Estate Regulation and Development Act and how it protects your interests as a property buyer.',
      content: 'The Real Estate Regulation and Development Act (RERA) has revolutionized the Indian real estate sector...',
      author: 'Priya Sharma',
      date: '2024-01-12',
      category: 'Legal',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read',
      featured: false
    },
    {
      id: '3',
      title: 'Mumbai vs Pune: Which City Offers Better Real Estate Opportunities?',
      excerpt: 'A comprehensive comparison of real estate markets in Mumbai and Pune, analyzing price trends, growth potential, and investment opportunities.',
      content: 'When it comes to real estate investment in Maharashtra, Mumbai and Pune are the top contenders...',
      author: 'Amit Patel',
      date: '2024-01-10',
      category: 'Market Analysis',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '10 min read',
      featured: true
    },
    {
      id: '4',
      title: 'Home Loan Interest Rates: Current Trends and Predictions',
      excerpt: 'Stay updated with the latest home loan interest rates and understand how they impact your property purchase decisions.',
      content: 'Home loan interest rates play a crucial role in determining the affordability of your dream home...',
      author: 'Sneha Gupta',
      date: '2024-01-08',
      category: 'Finance',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read',
      featured: false
    },
    {
      id: '5',
      title: 'Sustainable Living: Eco-Friendly Features in Modern Homes',
      excerpt: 'Explore the latest eco-friendly features and sustainable technologies that are transforming modern residential properties.',
      content: 'Sustainability is no longer just a buzzword in real estate; it has become a necessity...',
      author: 'Rajesh Kumar',
      date: '2024-01-05',
      category: 'Lifestyle',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min read',
      featured: false
    },
    {
      id: '6',
      title: 'Commercial Real Estate: Opportunities in Post-Pandemic Era',
      excerpt: 'Analyze the commercial real estate landscape and discover new opportunities emerging in the post-pandemic business environment.',
      content: 'The pandemic has significantly reshaped the commercial real estate sector...',
      author: 'Priya Sharma',
      date: '2024-01-03',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '9 min read',
      featured: true
    }
  ];

  const categories = ['All', 'Investment', 'Legal', 'Market Analysis', 'Finance', 'Lifestyle', 'Commercial'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        <FloatingElements />
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedText
            text="Real Estate Blog"
            className="text-5xl md:text-6xl font-bold mb-6"
          />
          <AnimatedText
            text="Insights, Tips, and Market Updates"
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
            delay={300}
          />
          <AnimatedText
            text="Stay informed with the latest trends, expert advice, and market analysis from our real estate professionals."
            className="text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed"
            delay={600}
          />
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex-1 relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    (selectedCategory === category || (selectedCategory === '' && category === 'All'))
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {searchTerm === '' && selectedCategory === '' && (
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Articles</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredPosts.slice(0, 2).map((post, index) => (
                    <article
                      key={post.id}
                      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    >
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            <Tag className="h-3 w-3 mr-1" />
                            {post.category}
                          </span>
                          <Link
                            to={`/blog/${post.id}`}
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                          >
                            Read More
                            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* All Posts */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                {searchTerm || selectedCategory ? 'Search Results' : 'Latest Articles'}
              </h2>
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            <Tag className="h-3 w-3 mr-1" />
                            {post.category}
                          </span>
                          <Link
                            to={`/blog/${post.id}`}
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                          >
                            Read More
                            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search criteria</p>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 mt-12 lg:mt-0">
            {/* Recent Posts */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group block"
                  >
                    <div className="flex space-x-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(post.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Categories</h3>
              <div className="space-y-2">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-4">Get the latest real estate insights delivered to your inbox.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;