import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Tag, Heart } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  // Sample blog post data - in a real app, this would come from an API
  const blogPost = {
    id: '1',
    title: 'Top 10 Real Estate Investment Tips for 2024',
    content: `
      <p>Real estate investment continues to be one of the most reliable ways to build wealth in 2024. With changing market dynamics and new opportunities emerging, it's crucial to stay informed about the best strategies for maximizing your returns while minimizing risks.</p>

      <h2>1. Research Market Trends Thoroughly</h2>
      <p>Before making any investment decision, conduct comprehensive research on local market trends, property values, and future development plans in the area. Understanding the market dynamics will help you make informed decisions.</p>

      <h2>2. Location is Everything</h2>
      <p>The old adage "location, location, location" remains true in 2024. Properties in prime locations with good connectivity, infrastructure, and amenities tend to appreciate faster and provide better rental yields.</p>

      <h2>3. Diversify Your Portfolio</h2>
      <p>Don't put all your eggs in one basket. Consider diversifying across different property types, locations, and price ranges to spread risk and maximize potential returns.</p>

      <h2>4. Understand Your Financing Options</h2>
      <p>Explore various financing options available, including traditional bank loans, private lenders, and government schemes. Compare interest rates and terms to find the best deal for your situation.</p>

      <h2>5. Consider Rental Yield Potential</h2>
      <p>If you're buying for rental income, calculate the potential rental yield carefully. Properties in areas with high rental demand and good infrastructure typically offer better yields.</p>

      <h2>6. Factor in All Costs</h2>
      <p>Remember to account for all costs including registration fees, stamp duty, maintenance, property management, and taxes when calculating your investment returns.</p>

      <h2>7. Stay Updated with Legal Requirements</h2>
      <p>Keep yourself informed about RERA regulations, tax implications, and other legal requirements that may affect your investment.</p>

      <h2>8. Consider Long-term Growth Potential</h2>
      <p>Look for areas with planned infrastructure development, upcoming metro lines, or commercial projects that could boost property values in the future.</p>

      <h2>9. Work with Experienced Professionals</h2>
      <p>Partner with experienced real estate agents, lawyers, and financial advisors who can guide you through the investment process and help you avoid common pitfalls.</p>

      <h2>10. Be Patient and Strategic</h2>
      <p>Real estate is typically a long-term investment. Be patient and strategic in your approach, and don't rush into decisions based on short-term market fluctuations.</p>

      <h2>Conclusion</h2>
      <p>Real estate investment in 2024 offers numerous opportunities for those who approach it with the right knowledge and strategy. By following these tips and staying informed about market trends, you can build a successful real estate portfolio that generates consistent returns over time.</p>
    `,
    author: 'Rajesh Kumar',
    date: '2024-01-15',
    category: 'Investment',
    image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '8 min read',
    tags: ['Investment', 'Real Estate', 'Tips', '2024', 'Property']
  };

  const relatedPosts = [
    {
      id: '2',
      title: 'Understanding RERA: A Complete Guide for Property Buyers',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-01-12'
    },
    {
      id: '3',
      title: 'Mumbai vs Pune: Which City Offers Better Real Estate Opportunities?',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-01-10'
    },
    {
      id: '4',
      title: 'Home Loan Interest Rates: Current Trends and Predictions',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2024-01-08'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <Tag className="h-3 w-3 mr-1" />
              {blogPost.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {blogPost.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>{blogPost.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{new Date(blogPost.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>{blogPost.readTime}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-8">
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-red-100 hover:text-red-600 transition-colors duration-200">
              <Heart className="h-4 w-4" />
              <span>Save</span>
            </button>
          </div>

          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </article>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {blogPost.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-blue-600">
                {blogPost.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{blogPost.author}</h3>
              <p className="text-gray-600 mb-4">
                Senior Real Estate Consultant with over 15 years of experience in property investment and market analysis. 
                Passionate about helping clients make informed real estate decisions.
              </p>
              <div className="flex space-x-4">
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  View Profile
                </button>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  More Articles
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;