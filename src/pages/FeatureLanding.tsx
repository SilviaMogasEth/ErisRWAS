import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  ArrowLeft, 
  Building2, 
  GraduationCap, 
  BarChart3, 
  TrendingUp, 
  Shield, 
  Star, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Globe,
  DollarSign
} from 'lucide-react';

const FeatureLanding: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();
  
  const getFeatureContent = () => {
    const path = location.pathname;
    
    if (path === '/marketplace-landing') {
      return {
        title: 'RWA Marketplace',
        subtitle: 'Discover Premium Real-World Asset Investment Opportunities',
        description: 'Access curated, institutional-grade real-world assets from around the globe. Our marketplace connects qualified investors with premium opportunities in real estate, energy, infrastructure, and more.',
        icon: Building2,
        color: 'from-blue-600 to-indigo-600',
        features: [
          {
            icon: Shield,
            title: 'Vetted Assets Only',
            description: 'Every asset undergoes rigorous due diligence and compliance review before listing'
          },
          {
            icon: Globe,
            title: 'Global Opportunities',
            description: 'Access premium assets from major markets across North America, Europe, and Asia-Pacific'
          },
          {
            icon: TrendingUp,
            title: 'Performance Tracking',
            description: 'Real-time portfolio monitoring with detailed analytics and reporting'
          },
          {
            icon: DollarSign,
            title: 'Fractional Ownership',
            description: 'Invest in high-value assets with lower minimum investments through tokenization'
          }
        ],
        benefits: [
          'Access to $12.8B+ in premium assets',
          'Minimum investments starting from $10,000',
          'Expected returns of 8-18% annually',
          'Professional asset management',
          'Transparent fee structure',
          'Regulatory compliance guaranteed'
        ],
        cta: user ? 'Access Full Marketplace' : 'Sign Up to Explore Assets',
        ctaLink: user ? '/marketplace' : '/register?type=investor'
      };
    }
    
    if (path === '/academy-landing') {
      return {
        title: 'RWA Education Hub',
        subtitle: 'Learn, Earn, and Master Real-World Asset Investing',
        description: 'Our comprehensive education platform helps investors understand Web3, earn rewards for learning, and build wealth through informed RWA investing. From beginner basics to advanced strategies.',
        icon: GraduationCap,
        color: 'from-purple-600 to-pink-600',
        features: [
          {
            icon: Award,
            title: 'Earn While Learning',
            description: 'Complete courses and challenges to earn NFT certificates and platform rewards'
          },
          {
            icon: Target,
            title: 'Personalized Learning',
            description: 'AI-powered curriculum tailored to your experience level and investment goals'
          },
          {
            icon: Users,
            title: 'Expert Instructors',
            description: 'Learn from industry professionals and successful RWA investors'
          },
          {
            icon: Zap,
            title: 'Interactive Content',
            description: 'Hands-on simulations, case studies, and real-world investment scenarios'
          }
        ],
        benefits: [
          'Comprehensive Web3 and RWA curriculum',
          'NFT certificates for completed courses',
          'Exclusive access to market insights',
          'Community of like-minded investors',
          'Regular live Q&A sessions',
          'Investment strategy workshops'
        ],
        cta: user ? 'Start Learning Now' : 'Join the Academy',
        ctaLink: user ? '/academy' : '/register?type=investor'
      };
    }
    
    if (path === '/dashboard-landing') {
      return {
        title: 'Investor & Originator Dashboards',
        subtitle: 'Powerful Tools for Every Type of User',
        description: 'Whether you\'re an investor building wealth or an asset originator raising capital, our platform provides the tools and insights you need to succeed in the RWA ecosystem.',
        icon: BarChart3,
        color: 'from-emerald-600 to-teal-600',
        features: [
          {
            icon: TrendingUp,
            title: 'Portfolio Analytics',
            description: 'Advanced performance tracking, risk analysis, and portfolio optimization tools'
          },
          {
            icon: Shield,
            title: 'KYC & Compliance',
            description: 'Streamlined identity verification and regulatory compliance management'
          },
          {
            icon: Building2,
            title: 'Asset Management',
            description: 'Complete lifecycle management for tokenized real-world assets'
          },
          {
            icon: Users,
            title: 'Investor Relations',
            description: 'Professional tools for managing investor communications and reporting'
          }
        ],
        benefits: [
          'Real-time portfolio monitoring',
          'Professional KYC with Persona',
          'AI-powered investment recommendations',
          'Institutional-grade reporting',
          'Multi-signature wallet security',
          'Dedicated relationship management'
        ],
        cta: user ? 'Access Your Dashboard' : 'Create Your Account',
        ctaLink: user ? '/dashboard' : '/register'
      };
    }
    
    return null;
  };

  const content = getFeatureContent();
  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700">Return Home</Link>
        </div>
      </div>
    );
  }

  const IconComponent = content.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${content.color} text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-2xl">
                <IconComponent className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              {content.subtitle}
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              {content.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our platform the premier choice for RWA investing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <FeatureIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our Platform?
              </h2>
              <div className="space-y-4">
                {content.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`bg-gradient-to-br ${content.color} rounded-2xl p-8 text-white`}>
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                {user 
                  ? `Welcome back! Access your ${content.title.toLowerCase()} to continue your RWA investment journey.`
                  : `Join thousands of investors who are already building wealth through our platform. Create your account today and start exploring premium RWA opportunities.`
                }
              </p>
              <div className="space-y-4">
                <Link
                  to={content.ctaLink}
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-colors shadow-lg"
                >
                  {content.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                {!user && (
                  <p className="text-white/80 text-sm text-center">
                    Already have an account?{' '}
                    <Link to="/login" className="text-white font-semibold hover:underline">
                      Sign In
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Platform Performance</h2>
            <p className="text-xl text-slate-300">
              Trusted by investors and asset originators worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">$12.8B+</div>
              <div className="text-slate-300 font-medium">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">2,400+</div>
              <div className="text-slate-300 font-medium">Active Investors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">850+</div>
              <div className="text-slate-300 font-medium">Tokenized Assets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">14.2%</div>
              <div className="text-slate-300 font-medium">Average Returns</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Investment Strategy?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the revolution in real-world asset investing. Access premium opportunities 
            with enterprise-grade infrastructure and professional support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={content.ctaLink}
              className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r ${content.color} text-white hover:opacity-90 transition-opacity shadow-lg`}
            >
              {content.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            {!user && (
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureLanding;