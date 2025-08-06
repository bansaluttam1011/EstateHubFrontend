import React from 'react';
import { Users, Award, Target, Heart, CheckCircle, TrendingUp, Shield, Star } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import AnimatedCounter from '../components/AnimatedCounter';
import FloatingElements from '../components/FloatingElements';

const AboutUs = () => {
  const stats = [
    { number: 3546, label: 'Happy Customers', icon: Users, suffix: '+' },
    { number: 4665, label: 'Properties Sold', icon: TrendingUp, suffix: '+' },
    { number: 214, label: 'Projects Completed', icon: Award, suffix: '+' },
    { number: 118, label: 'Commercial Deals', icon: Star, suffix: '+' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize the real estate industry by providing transparent, efficient, and customer-centric property solutions that help people find their perfect homes and make smart investment decisions.'
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'To become the most trusted and innovative real estate platform in India, connecting millions of property seekers with their dream homes while empowering property owners with cutting-edge technology.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Integrity, transparency, innovation, and customer satisfaction are at the core of everything we do. We believe in building lasting relationships based on trust and delivering exceptional value.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '15+ years in real estate industry with expertise in property development and investment strategies.'
    },
    {
      name: 'Priya Sharma',
      position: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Operations expert with 12+ years of experience in streamlining business processes and customer service.'
    },
    {
      name: 'Amit Patel',
      position: 'Technology Director',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Tech innovator with 10+ years in developing cutting-edge real estate technology solutions.'
    },
    {
      name: 'Sneha Gupta',
      position: 'Marketing Head',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Marketing strategist with 8+ years of experience in digital marketing and brand building.'
    }
  ];

  const achievements = [
    { title: 'Best Real Estate Platform 2023', organization: 'Property Awards India' },
    { title: 'Customer Choice Award', organization: 'Real Estate Excellence' },
    { title: 'Innovation in PropTech', organization: 'Tech Innovation Awards' },
    { title: 'Trusted Brand of the Year', organization: 'Business Excellence Awards' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        <FloatingElements />
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedText
            text="About EstateHub"
            className="text-5xl md:text-6xl font-bold mb-6"
          />
          <AnimatedText
            text="Your Trusted Partner in Real Estate Journey"
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
            delay={300}
          />
          <AnimatedText
            text="Since 2010, we've been helping thousands of families find their dream homes and make smart property investments across India."
            className="text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed"
            delay={600}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2500}
                />
                <AnimatedText
                  text={stat.label}
                  className="text-lg text-gray-600 mt-2 font-medium"
                  delay={index * 200}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <AnimatedText
                text="Our Story"
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              />
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <AnimatedText
                  text="EstateHub was founded in 2010 with a simple yet powerful vision: to make real estate transactions transparent, efficient, and accessible to everyone. What started as a small team of passionate real estate professionals has grown into one of India's most trusted property platforms."
                  className="text-lg"
                  delay={300}
                />
                <AnimatedText
                  text="Over the years, we've helped thousands of families find their perfect homes, assisted investors in making profitable decisions, and enabled property owners to reach the right buyers. Our commitment to innovation and customer satisfaction has made us a leader in the PropTech industry."
                  className="text-lg"
                  delay={600}
                />
                <AnimatedText
                  text="Today, we continue to evolve and adapt to the changing needs of the real estate market, leveraging cutting-edge technology to provide unparalleled service to our customers across India."
                  className="text-lg"
                  delay={900}
                />
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our Story"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Our Foundation"
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            />
            <AnimatedText
              text="The principles that guide everything we do"
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              delay={300}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Meet Our Team"
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            />
            <AnimatedText
              text="The passionate professionals behind EstateHub's success"
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              delay={300}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Awards & Recognition"
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            />
            <AnimatedText
              text="Honored for our excellence and innovation in real estate"
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              delay={300}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group flex items-center space-x-4 bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">{achievement.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <FloatingElements />
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Why Choose EstateHub?"
              className="text-4xl md:text-5xl font-bold mb-4"
            />
            <AnimatedText
              text="Experience the difference with our comprehensive real estate solutions"
              className="text-xl text-blue-100 max-w-2xl mx-auto"
              delay={300}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Verified Properties',
                description: 'All listings are thoroughly verified for authenticity and legal compliance'
              },
              {
                icon: Users,
                title: 'Expert Guidance',
                description: 'Professional real estate experts to guide you through every step'
              },
              {
                icon: TrendingUp,
                title: 'Market Insights',
                description: 'Data-driven market analysis and investment recommendations'
              },
              {
                icon: CheckCircle,
                title: 'Transparent Process',
                description: 'Complete transparency in pricing, documentation, and transactions'
              },
              {
                icon: Award,
                title: 'Proven Track Record',
                description: 'Over a decade of excellence with thousands of successful deals'
              },
              {
                icon: Heart,
                title: 'Customer First',
                description: 'Your satisfaction is our priority with 24/7 customer support'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-blue-100 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;