import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  TrendingUp, 
  Clock, 
  Shield, 
  Star, 
  Users, 
  DollarSign,
  FileText,
  Download,
  ExternalLink,
  Twitter,
  Linkedin,
  Globe,
  Mail,
  Phone,
  Calendar,
  Award,
  CheckCircle,
  Quote,
  BarChart3,
  Building2,
  Target
} from 'lucide-react';
import { RWA } from '../types';
import InvestmentModal from '../components/InvestmentModal';

const PropertyDetails: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [showInvestmentModal, setShowInvestmentModal] = useState(false);

  // Mock detailed RWA data
  const mockRWA: RWA & {
    longDescription: string;
    highlights: string[];
    documents: Array<{ name: string; type: string; size: string; }>;
    team: Array<{ name: string; role: string; bio: string; linkedin?: string; }>;
    socials: { website?: string; twitter?: string; linkedin?: string; };
    news: Array<{ title: string; date: string; source: string; url: string; }>;
    reviews: Array<{ 
      id: string; 
      rating: number; 
      comment: string; 
      author: string; 
      role: string; 
      date: string; 
      verified: boolean; 
    }>;
    partnerRanking?: {
      partner: string;
      rank: string;
      score: number;
      badge: string;
    };
  } = {
    id: '1',
    title: 'Premium Office Building - Manhattan',
    description: 'Grade A office building in prime Manhattan location with long-term tenants',
    longDescription: 'This exceptional Grade A office building represents a premier investment opportunity in the heart of Manhattan\'s Financial District. The 42-story tower features modern amenities, energy-efficient systems, and long-term lease agreements with Fortune 500 companies. With 95% occupancy and an average lease term of 8 years, this asset provides stable, predictable cash flows with significant upside potential.',
    category: 'Real Estate',
    value: 15000000,
    currency: 'USD',
    imageUrl: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg',
    projectId: 'proj-1',
    projectName: 'Manhattan Properties LLC',
    location: 'New York, NY',
    expectedReturn: 12.5,
    minInvestment: 10000,
    totalValue: 15000000,
    fundedPercentage: 75,
    risk: 'medium',
    duration: '5 years',
    highlights: [
      '95% occupancy rate with Fortune 500 tenants',
      'Prime Financial District location',
      'Recently renovated with modern amenities',
      'Energy Star certified building',
      'Average lease term of 8 years',
      'Professional property management'
    ],
    documents: [
      { name: 'Investment Deck', type: 'PDF', size: '2.4 MB' },
      { name: 'Financial Projections', type: 'XLSX', size: '1.2 MB' },
      { name: 'Legal Structure', type: 'PDF', size: '890 KB' },
      { name: 'Property Appraisal', type: 'PDF', size: '3.1 MB' },
      { name: 'Tenant Lease Summary', type: 'PDF', size: '1.8 MB' }
    ],
    team: [
      {
        name: 'Robert Chen',
        role: 'Managing Partner',
        bio: '15+ years in commercial real estate with $2B+ in transactions. Former Goldman Sachs VP.',
        linkedin: 'https://linkedin.com/in/robertchen'
      },
      {
        name: 'Sarah Martinez',
        role: 'Asset Manager',
        bio: 'CFA with expertise in real estate finance and portfolio optimization. Harvard MBA.',
        linkedin: 'https://linkedin.com/in/sarahmartinez'
      },
      {
        name: 'David Kim',
        role: 'Operations Director',
        bio: 'Property management specialist with 20+ years managing premium office buildings.',
        linkedin: 'https://linkedin.com/in/davidkim'
      }
    ],
    socials: {
      website: 'https://manhattanproperties.com',
      twitter: 'https://twitter.com/manhattanprop',
      linkedin: 'https://linkedin.com/company/manhattan-properties'
    },
    news: [
      {
        title: 'Manhattan Properties Completes $50M Renovation',
        date: '2024-01-15',
        source: 'Real Estate Weekly',
        url: '#'
      },
      {
        title: 'New Fortune 500 Tenant Signs 10-Year Lease',
        date: '2024-01-08',
        source: 'Commercial Observer',
        url: '#'
      },
      {
        title: 'Building Receives Energy Star Certification',
        date: '2023-12-20',
        source: 'Green Building News',
        url: '#'
      }
    ],
    reviews: [
      {
        id: '1',
        rating: 5,
        comment: 'Exceptional investment opportunity with strong fundamentals and professional management.',
        author: 'Michael Harrison',
        role: 'CIO, Meridian Capital',
        date: '2024-01-10',
        verified: true
      },
      {
        id: '2',
        rating: 5,
        comment: 'Prime location with excellent tenant quality. Highly recommend for portfolios.',
        author: 'Jennifer Walsh',
        role: 'Portfolio Manager, Sterling Fund',
        date: '2024-01-05',
        verified: true
      },
      {
        id: '3',
        rating: 4,
        comment: 'Solid returns and transparent reporting. Great addition to our real estate allocation.',
        author: 'David Thompson',
        role: 'Investment Director, Apex Capital',
        date: '2023-12-28',
        verified: false
      }
    ],
    partnerRanking: {
      partner: 'Particula',
      rank: 'AAA',
      score: 9.2,
      badge: 'Premium Partner'
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'high': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'team', label: 'Team' },
    { id: 'documents', label: 'Documents' },
    { id: 'news', label: 'News' },
    { id: 'reviews', label: 'Reviews' }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <Link 
        to="/marketplace" 
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Marketplace
      </Link>

      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-8">
        <div className="relative">
          <img 
            src={mockRWA.imageUrl} 
            alt={mockRWA.title}
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Partner Ranking Badge */}
          {mockRWA.partnerRanking && (
            <div className="absolute top-6 left-6">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <div>
                    <div className="text-sm font-bold">{mockRWA.partnerRanking.partner} Partner</div>
                    <div className="text-xs opacity-90">{mockRWA.partnerRanking.rank} Rating • {mockRWA.partnerRanking.score}/10</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">{mockRWA.title}</h1>
                <div className="flex items-center space-x-4 text-lg">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    {mockRWA.location}
                  </div>
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 mr-2" />
                    {mockRWA.category}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{formatCurrency(mockRWA.totalValue)}</div>
                <div className="text-lg opacity-90">Total Value</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center text-green-600 mb-2">
                <TrendingUp className="h-5 w-5 mr-1" />
                <span className="text-2xl font-bold">{mockRWA.expectedReturn}%</span>
              </div>
              <div className="text-sm text-gray-600">Expected Return</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center text-blue-600 mb-2">
                <DollarSign className="h-5 w-5 mr-1" />
                <span className="text-2xl font-bold">{formatCurrency(mockRWA.minInvestment)}</span>
              </div>
              <div className="text-sm text-gray-600">Min Investment</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center text-purple-600 mb-2">
                <Clock className="h-5 w-5 mr-1" />
                <span className="text-2xl font-bold">{mockRWA.duration}</span>
              </div>
              <div className="text-sm text-gray-600">Duration</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center text-orange-600 mb-2">
                <Target className="h-5 w-5 mr-1" />
                <span className="text-2xl font-bold">{mockRWA.fundedPercentage}%</span>
              </div>
              <div className="text-sm text-gray-600">Funded</div>
            </div>
            <div className="text-center">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(mockRWA.risk)}`}>
                <Shield className="h-4 w-4 mr-1" />
                {mockRWA.risk.toUpperCase()} RISK
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Funding Progress */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">Funding Progress</h3>
          <div className="text-2xl font-bold text-blue-600">{mockRWA.fundedPercentage}%</div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div 
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all"
            style={{ width: `${mockRWA.fundedPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{formatCurrency(mockRWA.totalValue * mockRWA.fundedPercentage / 100)} raised</span>
          <span>{formatCurrency(mockRWA.totalValue)} target</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Connect with {mockRWA.projectName}</h3>
        <div className="flex items-center space-x-4">
          {mockRWA.socials.website && (
            <a 
              href={mockRWA.socials.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Globe className="h-5 w-5 mr-2" />
              Website
            </a>
          )}
          {mockRWA.socials.twitter && (
            <a 
              href={mockRWA.socials.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100 transition-colors"
            >
              <Twitter className="h-5 w-5 mr-2" />
              Twitter
            </a>
          )}
          {mockRWA.socials.linkedin && (
            <a 
              href={mockRWA.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Overview</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{mockRWA.longDescription}</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {mockRWA.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Investment Action</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-700 mb-2">Ready to invest in this premium opportunity?</p>
                    <p className="text-sm text-gray-600">Minimum investment: {formatCurrency(mockRWA.minInvestment)}</p>
                  </div>
                  <button 
                    onClick={() => setShowInvestmentModal(true)}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
                  >
                    Invest Now
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Management Team</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockRWA.team.map((member, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        <Linkedin className="h-4 w-4 mr-1" />
                        LinkedIn Profile
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === 'documents' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Documents</h3>
              <div className="space-y-4">
                {mockRWA.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center">
                      <FileText className="h-8 w-8 text-blue-600 mr-4" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                        <p className="text-sm text-gray-600">{doc.type} • {doc.size}</p>
                      </div>
                    </div>
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* News Tab */}
          {activeTab === 'news' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h3>
              <div className="space-y-6">
                {mockRWA.news.map((article, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h4>
                        <div className="flex items-center text-sm text-gray-600 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                          <span className="mx-2">•</span>
                          <span>{article.source}</span>
                        </div>
                      </div>
                      <a 
                        href={article.url} 
                        className="flex items-center text-blue-600 hover:text-blue-700 ml-4"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Investor Reviews</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-gray-900">4.7/5</span>
                  </div>
                  <span className="text-gray-600">({mockRWA.reviews.length} reviews)</span>
                </div>
              </div>

              <div className="space-y-6">
                {mockRWA.reviews.map((review) => (
                  <div key={review.id} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                          {review.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-semibold text-gray-900 mr-2">{review.author}</h4>
                            {review.verified && (
                              <span className="text-xs text-blue-600 font-medium">Verified</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{review.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex text-yellow-400 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <p className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Quote className="h-6 w-6 text-gray-300 mb-2" />
                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Investment Modal */}
      <InvestmentModal
        isOpen={showInvestmentModal}
        onClose={() => setShowInvestmentModal(false)}
        rwa={mockRWA}
      />
    </div>
  );
};

export default PropertyDetails;