import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Shield, User, GraduationCap, Building2, TrendingUp, AlertCircle, CheckCircle, Clock, Star, DollarSign, CreditCard, Zap, Wallet, Award, Trophy, Target, Import as Passport, BookOpen, X, MapPin, Calendar } from 'lucide-react';
import KYCModal from '../../components/KYCModal';
import InvestorProfileModal, { InvestorProfile } from '../../components/InvestorProfileModal';
import { InvestedRWA } from '../../types';

const InvestorDashboard: React.FC = () => {
  const { user } = useAuth();
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [showKYC, setShowKYC] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showPassport, setShowPassport] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');

  // Mock invested assets for demo users
  const mockInvestedRWAs: InvestedRWA[] = [
    {
      id: 'inv-1',
      title: 'Premium Office Building - Manhattan',
      imageUrl: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg',
      investedAmount: 25000,
      currentValue: 27500,
      investmentDate: '2024-01-15',
      status: 'active',
      returnPercentage: 10.0,
      category: 'Real Estate',
      location: 'New York, NY',
      projectName: 'Manhattan Properties LLC'
    },
    {
      id: 'inv-2',
      title: 'Renewable Energy Solar Farm',
      imageUrl: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
      investedAmount: 50000,
      currentValue: 54200,
      investmentDate: '2023-11-20',
      status: 'active',
      returnPercentage: 8.4,
      category: 'Energy',
      location: 'California, USA',
      projectName: 'GreenPower Renewables'
    },
    {
      id: 'inv-3',
      title: 'Luxury Resort Development',
      imageUrl: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
      investedAmount: 75000,
      currentValue: 82125,
      investmentDate: '2023-09-10',
      status: 'completed',
      returnPercentage: 9.5,
      category: 'Hospitality',
      location: 'Barbados',
      projectName: 'Paradise Resorts Group'
    }
  ];

  const getKYCStatus = () => {
    switch (user?.kycStatus) {
      case 'approved':
        return { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', text: 'KYC Approved' };
      case 'rejected':
        return { icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50', text: 'KYC Rejected' };
      default:
        return { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50', text: 'KYC Pending' };
    }
  };

  const handleKYCComplete = () => {
    console.log('KYC completed');
  };

  const handleProfileComplete = (profile: InvestorProfile) => {
    console.log('Profile completed:', profile);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const kycStatus = getKYCStatus();
  const StatusIcon = kycStatus.icon;

  const isDemoUser = user?.id?.startsWith('demo-');
  const displayInvestments = isDemoUser ? mockInvestedRWAs : [];

  // Calculate portfolio stats for demo users
  const portfolioStats = isDemoUser ? {
    totalValue: displayInvestments.reduce((sum, inv) => sum + inv.currentValue, 0),
    totalInvested: displayInvestments.reduce((sum, inv) => sum + inv.investedAmount, 0),
    totalReturns: displayInvestments.reduce((sum, inv) => sum + (inv.currentValue - inv.investedAmount), 0),
    activeInvestments: displayInvestments.filter(inv => inv.status === 'active').length
  } : {
    totalValue: 0,
    totalInvested: 0,
    totalReturns: 0,
    activeInvestments: 0
  };

  const overallReturnPercentage = portfolioStats.totalInvested > 0 
    ? ((portfolioStats.totalReturns / portfolioStats.totalInvested) * 100) 
    : 0;

  // Enhanced passport data with NFT achievements for demo users
  const passportData = {
    digitalId: isDemoUser ? 'ERS-INV-DEMO-001' : 'ERS-INV-2025-001',
    verificationLevel: isDemoUser ? 'Platinum' : 'Bronze',
    memberSince: isDemoUser ? '2023-06-15' : '2025-01-01',
    totalInvestments: displayInvestments.length,
    portfolioValue: portfolioStats.totalValue,
    achievements: [
      { 
        id: 1, 
        name: 'First Steps', 
        description: 'Completed account setup', 
        earned: true, 
        icon: User,
        isNFT: false
      },
      { 
        id: 2, 
        name: 'Knowledge Seeker NFT', 
        description: 'Completed first academy lesson', 
        earned: isDemoUser, 
        icon: BookOpen,
        isNFT: true,
        nftId: isDemoUser ? 'NFT-EDU-001' : null
      },
      { 
        id: 3, 
        name: 'RWA Scholar NFT', 
        description: 'Completed advanced RWA course', 
        earned: isDemoUser, 
        icon: GraduationCap,
        isNFT: true,
        nftId: isDemoUser ? 'NFT-EDU-002' : null
      },
      { 
        id: 4, 
        name: 'Verified Investor', 
        description: 'Completed KYC verification', 
        earned: user?.kycStatus === 'approved', 
        icon: Shield,
        isNFT: false
      },
      { 
        id: 5, 
        name: 'First Investment NFT', 
        description: 'Made first investment', 
        earned: isDemoUser, 
        icon: Building2,
        isNFT: true,
        nftId: isDemoUser ? 'NFT-INV-001' : null
      },
      { 
        id: 6, 
        name: 'Diversified Portfolio NFT', 
        description: 'Invested in 3+ asset types', 
        earned: isDemoUser, 
        icon: TrendingUp,
        isNFT: true,
        nftId: isDemoUser ? 'NFT-PRT-001' : null
      },
      { 
        id: 7, 
        name: 'Premium Member', 
        description: 'Upgraded to premium subscription', 
        earned: user?.subscriptionTier === 'premium', 
        icon: Star,
        isNFT: false
      }
    ],
    learningProgress: {
      completedLessons: isDemoUser ? 4 : 0,
      totalLessons: 6,
      earnedPoints: isDemoUser ? 280 : 0,
      currentLevel: isDemoUser ? 'Advanced' : 'Beginner'
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Investor Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back, {user?.name}!</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-blue-50 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Portfolio Value</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(portfolioStats.totalValue)}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-green-50 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Returns</p>
              <p className="text-2xl font-bold text-gray-900">+{overallReturnPercentage.toFixed(1)}%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-purple-50 p-3 rounded-lg">
              <Building2 className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Active Investments</p>
              <p className="text-2xl font-bold text-gray-900">{portfolioStats.activeInvestments}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className={`${kycStatus.bg} p-3 rounded-lg`}>
              <StatusIcon className={`h-6 w-6 ${kycStatus.color}`} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">KYC Status</p>
              <p className="text-lg font-semibold text-gray-900">{kycStatus.text}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Status */}
      {user?.subscriptionTier === 'free' && !isDemoUser && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Star className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Free Plan Active</h3>
                <p className="text-gray-600">
                  You have access to 3 RWA projects per month and basic education content.
                </p>
              </div>
            </div>
            <button 
              onClick={() => setShowUpgrade(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Upgrade to Premium
            </button>
          </div>
        </div>
      )}

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Passport Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <Passport className="h-8 w-8 text-indigo-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Digital Passport</h3>
          </div>
          <p className="text-gray-600 mb-4">
            View your digital identity, achievements, and investment journey.
          </p>
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-600">
              ID: {passportData.digitalId}
            </span>
            <button 
              onClick={() => setShowPassport(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              View Passport
            </button>
          </div>
        </div>

        {/* KYC Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Complete KYC</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Verify your identity with Persona to unlock full access to premium investment opportunities.
          </p>
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${kycStatus.bg} ${kycStatus.color}`}>
              {kycStatus.text}
            </span>
            {user?.kycStatus !== 'approved' && (
              <button 
                onClick={() => setShowKYC(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Start KYC
              </button>
            )}
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <User className="h-8 w-8 text-green-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Investor Profile</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Create your personalized investment profile with our AI agent for better recommendations.
          </p>
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              user?.profileCompleted || isDemoUser
                ? 'bg-green-50 text-green-600' 
                : 'bg-yellow-50 text-yellow-600'
            }`}>
              {user?.profileCompleted || isDemoUser ? 'Completed' : 'Incomplete'}
            </span>
            {!user?.profileCompleted && !isDemoUser && (
              <button 
                onClick={() => setShowProfile(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
              >
                Create Profile
              </button>
            )}
          </div>
        </div>

        {/* Academy Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <GraduationCap className="h-8 w-8 text-purple-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Education Hub</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Learn about real-world asset investing through our comprehensive educational content.
          </p>
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-50 text-purple-600">
              {user?.subscriptionTier === 'premium' || isDemoUser ? 'Full Access' : 'Limited Access'}
            </span>
            <Link
              to="/academy"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </div>

      {/* My Investments / Featured Investment Opportunities */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {isDemoUser ? 'My Investments' : 'Featured Investment Opportunities'}
          </h2>
          {!isDemoUser && (
            <Link
              to="/marketplace"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              View All →
            </Link>
          )}
        </div>

        {isDemoUser ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayInvestments.map((investment) => (
              <div key={investment.id} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="relative">
                  <img 
                    src={investment.imageUrl} 
                    alt={investment.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      investment.status === 'active' ? 'bg-green-100 text-green-800' :
                      investment.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {investment.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                    <Building2 className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">{investment.category}</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {investment.location}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{investment.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{investment.projectName}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Invested Amount</span>
                      <span className="font-semibold text-gray-900">{formatCurrency(investment.investedAmount)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Current Value</span>
                      <span className="font-semibold text-gray-900">{formatCurrency(investment.currentValue)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Return</span>
                      <div className="flex items-center text-green-600 font-semibold">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        +{investment.returnPercentage.toFixed(1)}%
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Investment Date</span>
                      <div className="flex items-center text-gray-700">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(investment.investmentDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Content</h3>
            <p className="text-gray-600 mb-4">
              Complete your KYC and investor profile to access investment opportunities.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Star className="h-4 w-4" />
              <span>Upgrade to unlock premium features</span>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Upgrade Modal */}
      {showUpgrade && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Upgrade to Premium</h2>
              <button 
                onClick={() => setShowUpgrade(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              {/* Plan Toggle */}
              <div className="flex items-center justify-center mb-8">
                <div className="bg-gray-100 p-1 rounded-lg flex">
                  <button
                    onClick={() => setSelectedPlan('monthly')}
                    className={`px-6 py-2 rounded-md font-medium transition-colors ${
                      selectedPlan === 'monthly'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setSelectedPlan('yearly')}
                    className={`px-6 py-2 rounded-md font-medium transition-colors ${
                      selectedPlan === 'yearly'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Yearly
                    <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Save $24
                    </span>
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">Premium Subscription</h3>
                    <p className="text-indigo-100">Full access to premium RWA investments</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">
                      ${selectedPlan === 'monthly' ? '25' : '23'}
                    </div>
                    <div className="text-indigo-200">per month</div>
                    {selectedPlan === 'yearly' && (
                      <div className="text-sm text-indigo-200">
                        Billed annually ($276/year)
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                      <span>Unlock full access to 100+ RWA projects</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                      <span>Advanced analytics & portfolio tools</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                      <span>AI-generated investment recommendations</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                      <span>Earn rewards through Education challenges</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                      <span>Priority customer support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                      <span>Exclusive investment opportunities</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-semibold text-gray-900 text-lg">Choose Your Payment Method</h4>
                
                {/* Payment Methods */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-500 transition-colors cursor-pointer">
                    <div className="flex items-center mb-4">
                      <CreditCard className="h-8 w-8 text-gray-600 mr-3" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Credit/Debit Card</h5>
                        <p className="text-sm text-gray-600">Secure payment via Stripe</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <input
                          type="text"
                          placeholder="CVC"
                          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
                      Subscribe with Card
                    </button>
                  </div>

                  <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-colors cursor-pointer">
                    <div className="flex items-center mb-4">
                      <Wallet className="h-8 w-8 text-gray-600 mr-3" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Crypto Wallet</h5>
                        <p className="text-sm text-gray-600">Pay with USDC, USDT, or ETH</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                        <option>Select Cryptocurrency</option>
                        <option>USDC</option>
                        <option>USDT</option>
                        <option>ETH</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Wallet Address"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors">
                      Connect Wallet
                    </button>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Shield className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium text-gray-900">Secure Payment</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Your payment information is encrypted and secure. Cancel anytime with no long-term commitments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Digital Passport Modal */}
      {showPassport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <Passport className="h-6 w-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Digital Investor Passport</h2>
              </div>
              <button 
                onClick={() => setShowPassport(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Passport Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{user?.name}</h3>
                    <p className="text-indigo-200">Digital ID: {passportData.digitalId}</p>
                    <p className="text-indigo-200">Member since: {new Date(passportData.memberSince).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/20 rounded-lg p-3 mb-2">
                      <Trophy className="h-8 w-8 mx-auto" />
                    </div>
                    <p className="font-semibold">{passportData.verificationLevel} Member</p>
                  </div>
                </div>
              </div>

              {/* Investment Summary */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{formatCurrency(passportData.portfolioValue)}</div>
                  <div className="text-sm text-gray-600">Portfolio Value</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{passportData.totalInvestments}</div>
                  <div className="text-sm text-gray-600">Total Investments</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <GraduationCap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{passportData.learningProgress.earnedPoints}</div>
                  <div className="text-sm text-gray-600">Learning Points</div>
                </div>
              </div>

              {/* Achievements with NFT indicators */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Achievements & NFTs</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {passportData.achievements.map((achievement) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div 
                        key={achievement.id} 
                        className={`flex items-center p-4 rounded-lg border ${
                          achievement.earned 
                            ? achievement.isNFT 
                              ? 'border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50' 
                              : 'border-green-200 bg-green-50'
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <div className={`p-2 rounded-lg mr-4 ${
                          achievement.earned 
                            ? achievement.isNFT 
                              ? 'bg-purple-100' 
                              : 'bg-green-100'
                            : 'bg-gray-100'
                        }`}>
                          <IconComponent className={`h-6 w-6 ${
                            achievement.earned 
                              ? achievement.isNFT 
                                ? 'text-purple-600' 
                                : 'text-green-600'
                              : 'text-gray-400'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center">
                            <h5 className={`font-semibold ${
                              achievement.earned 
                                ? achievement.isNFT 
                                  ? 'text-purple-900' 
                                  : 'text-green-900'
                                : 'text-gray-500'
                            }`}>
                              {achievement.name}
                            </h5>
                            {achievement.isNFT && achievement.earned && (
                              <span className="ml-2 bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium">
                                NFT
                              </span>
                            )}
                          </div>
                          <p className={`text-sm ${
                            achievement.earned 
                              ? achievement.isNFT 
                                ? 'text-purple-700' 
                                : 'text-green-700'
                              : 'text-gray-500'
                          }`}>
                            {achievement.description}
                          </p>
                          {achievement.isNFT && achievement.earned && achievement.nftId && (
                            <p className="text-xs text-purple-600 font-mono mt-1">
                              NFT ID: {achievement.nftId}
                            </p>
                          )}
                        </div>
                        {achievement.earned && (
                          <CheckCircle className={`h-5 w-5 ${
                            achievement.isNFT ? 'text-purple-600' : 'text-green-600'
                          }`} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Learning Progress */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Learning Progress</h4>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h5 className="font-semibold text-gray-900">Current Level: {passportData.learningProgress.currentLevel}</h5>
                      <p className="text-sm text-gray-600">
                        {passportData.learningProgress.completedLessons} of {passportData.learningProgress.totalLessons} lessons completed
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-indigo-600">{passportData.learningProgress.earnedPoints}</div>
                      <div className="text-sm text-gray-600">Points Earned</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${(passportData.learningProgress.completedLessons / passportData.learningProgress.totalLessons) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* NFT Collection Summary */}
              {isDemoUser && (
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Award className="h-6 w-6 text-purple-600 mr-2" />
                    NFT Collection
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Your achievements have been minted as unique NFTs, representing your journey in the RWA ecosystem.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {passportData.achievements
                      .filter(achievement => achievement.isNFT && achievement.earned)
                      .map((nft, index) => (
                        <div key={index} className="bg-white rounded-lg p-3 border border-purple-200 text-center">
                          <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <nft.icon className="h-6 w-6 text-purple-600" />
                          </div>
                          <div className="text-xs font-medium text-gray-900">{nft.name.replace(' NFT', '')}</div>
                          <div className="text-xs text-purple-600 font-mono">{nft.nftId}</div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <KYCModal 
        isOpen={showKYC}
        onClose={() => setShowKYC(false)}
        onComplete={handleKYCComplete}
      />

      <InvestorProfileModal
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
        onComplete={handleProfileComplete}
      />
    </div>
  );
};

export default InvestorDashboard;