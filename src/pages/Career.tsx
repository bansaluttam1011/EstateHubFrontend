import React, { useState } from 'react';
import { MapPin, Clock, Users, Briefcase, Send, CheckCircle, Star, TrendingUp } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FloatingElements from '../components/FloatingElements';

const Career = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null as File | null,
    coverLetter: ''
  });

  const jobOpenings = [
    {
      id: '1',
      title: 'Senior Real Estate Consultant',
      department: 'Sales',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹8-12 LPA',
      description: 'We are looking for an experienced real estate consultant to join our sales team. The ideal candidate will have strong communication skills and a proven track record in property sales.',
      requirements: [
        'Bachelor\'s degree in Business, Marketing, or related field',
        '3+ years of experience in real estate sales',
        'Excellent communication and negotiation skills',
        'Knowledge of local property market',
        'Valid real estate license preferred'
      ],
      responsibilities: [
        'Generate leads and convert them into sales',
        'Conduct property viewings and presentations',
        'Negotiate deals and close transactions',
        'Maintain client relationships',
        'Achieve monthly sales targets'
      ]
    },
    {
      id: '2',
      title: 'Property Manager',
      department: 'Operations',
      location: 'Delhi NCR',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹6-9 LPA',
      description: 'Join our operations team as a Property Manager to oversee property maintenance, tenant relations, and ensure optimal property performance.',
      requirements: [
        'Bachelor\'s degree in Property Management or related field',
        '2+ years of property management experience',
        'Strong organizational and problem-solving skills',
        'Knowledge of property laws and regulations',
        'Proficiency in property management software'
      ],
      responsibilities: [
        'Manage day-to-day property operations',
        'Handle tenant inquiries and complaints',
        'Coordinate maintenance and repairs',
        'Conduct property inspections',
        'Prepare financial reports'
      ]
    },
    {
      id: '3',
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      experience: '2-3 years',
      salary: '₹5-8 LPA',
      description: 'We\'re seeking a creative Digital Marketing Specialist to develop and execute digital marketing strategies for our real estate properties.',
      requirements: [
        'Bachelor\'s degree in Marketing, Communications, or related field',
        '2+ years of digital marketing experience',
        'Proficiency in Google Ads, Facebook Ads, and SEO',
        'Experience with marketing automation tools',
        'Strong analytical and creative skills'
      ],
      responsibilities: [
        'Develop and execute digital marketing campaigns',
        'Manage social media accounts and content',
        'Optimize website for search engines',
        'Analyze campaign performance and ROI',
        'Create engaging marketing content'
      ]
    },
    {
      id: '4',
      title: 'Business Development Executive',
      department: 'Business Development',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹4-7 LPA',
      description: 'Looking for a dynamic Business Development Executive to identify new business opportunities and build strategic partnerships.',
      requirements: [
        'Bachelor\'s degree in Business Administration or related field',
        '1+ years of business development experience',
        'Strong networking and relationship-building skills',
        'Excellent presentation and communication skills',
        'Knowledge of real estate industry preferred'
      ],
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Build relationships with potential partners',
        'Prepare and deliver business proposals',
        'Attend industry events and networking sessions',
        'Achieve business development targets'
      ]
    },
    {
      id: '5',
      title: 'Customer Support Executive',
      department: 'Customer Service',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
      experience: '0-2 years',
      salary: '₹3-5 LPA',
      description: 'Join our customer service team to provide exceptional support to our clients and ensure their satisfaction with our services.',
      requirements: [
        'Bachelor\'s degree in any field',
        'Excellent communication skills in English and Hindi',
        'Customer service experience preferred',
        'Problem-solving and multitasking abilities',
        'Proficiency in CRM software'
      ],
      responsibilities: [
        'Handle customer inquiries via phone, email, and chat',
        'Resolve customer complaints and issues',
        'Maintain customer records and documentation',
        'Follow up on customer satisfaction',
        'Escalate complex issues to senior team members'
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses'
    },
    {
      icon: Users,
      title: 'Team Environment',
      description: 'Collaborative and supportive work culture with experienced professionals'
    },
    {
      icon: Star,
      title: 'Career Growth',
      description: 'Clear career progression paths with regular training and development'
    },
    {
      icon: CheckCircle,
      title: 'Benefits Package',
      description: 'Health insurance, paid time off, and flexible working arrangements'
    }
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationForm);
    alert('Thank you for your application! We will review it and get back to you soon.');
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: null,
      coverLetter: ''
    });
    setSelectedJob(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplicationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setApplicationForm(prev => ({
      ...prev,
      resume: file
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        <FloatingElements />
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedText
            text="Join Our Team"
            className="text-5xl md:text-6xl font-bold mb-6"
          />
          <AnimatedText
            text="Build Your Career in Real Estate"
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
            delay={300}
          />
          <AnimatedText
            text="Be part of India's leading real estate platform and help millions find their dream homes while growing your own career."
            className="text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed"
            delay={600}
          />
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Why Work With Us?"
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            />
            <AnimatedText
              text="Discover the benefits of joining EstateHub's growing team"
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              delay={300}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Current Openings"
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            />
            <AnimatedText
              text="Find your perfect role and start your journey with us"
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              delay={300}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
                    <p className="text-blue-600 font-medium">{job.department}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-sm">{job.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setSelectedJob(job.id)}
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    Apply Now
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Apply for Position</h2>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={applicationForm.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={applicationForm.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={applicationForm.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position *
                    </label>
                    <select
                      name="position"
                      required
                      value={applicationForm.position}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select position</option>
                      {jobOpenings.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    required
                    value={applicationForm.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume *
                  </label>
                  <input
                    type="file"
                    name="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">Upload your resume (PDF, DOC, DOCX)</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    name="coverLetter"
                    rows={4}
                    value={applicationForm.coverLetter}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit Application</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <AnimatedText
                text="Our Culture"
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              />
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <AnimatedText
                  text="At EstateHub, we believe that our people are our greatest asset. We foster a culture of innovation, collaboration, and continuous learning where every team member can thrive and make a meaningful impact."
                  className="text-lg"
                  delay={300}
                />
                <AnimatedText
                  text="We encourage creativity, embrace diversity, and provide opportunities for professional growth. Our open and inclusive environment ensures that everyone's voice is heard and valued."
                  className="text-lg"
                  delay={600}
                />
                <AnimatedText
                  text="Join us in our mission to transform the real estate industry while building a rewarding career with endless possibilities."
                  className="text-lg"
                  delay={900}
                />
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our Culture"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;