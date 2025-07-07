import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  Plus, 
  Building2, 
  TrendingUp, 
  Users, 
  DollarSign,
  BarChart3,
  Eye,
  Settings,
  FileText,
  CreditCard,
  X,
  MapPin,
  Clock,
  Shield,
  Star
} from 'lucide-react';
import RWAProjectPricing from '../../components/RWAProjectPricing';
import DemoPublicProfileModal from '../../components/DemoPublicProfileModal';
import DemoPerformanceReportsModal from '../../components/DemoPerformanceReportsModal';
import FeatureNotAvailableModal from '../../components/FeatureNotAvailableModal';
import { RWA } from '../../types';

const RWAProjectDashboard: React.FC = () => {
  const { user } = useAuth();
  const [showPricing, setShowPricing] = useState(false);
  const [showDemoPublicProfileModal, setShowDemoPublicProfileModal] = useState(false);
  const [showDemoPerformanceReportsModal, setShowDemoPerformanceReportsModal] = useState(false);
  const [showFeatureNotAvailableModal, setShowFeatureNotAvailableModal] = useState(false);

  // Mock RWA data for demo users
  const mockRWAs: RWA[] = [
    {
      id: 'demo-1',
      title: 'EcoTower Downtown',
      description: 'LEED Platinum certified office building in downtown San Francisco',
      category: 'Commercial Real Estate',
      value: 25000000,
      currency: 'USD',
      imageUrl: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg',
      projectId: 'demo-proj-1',
      projectName: 'GreenTech Properties',
      location: 'San Francisco, CA',
      expectedReturn: 16.5,
      minInvestment: 50000,
      totalValue: 25000000,
      fundedPercentage: 100,
      risk: 'medium',
      duration: '5 years'
    },
    {
      id: 'demo-2',
      title: 'Green Residential Complex',
      description: 'Sustainable residential development with solar panels and smart home technology',
      category: 'Residential Real Estate',
      value: 18000000,
      currency: 'USD',
      imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      projectId: 'demo-proj-2',
      projectName: 'GreenTech Properties',
      location: 'Austin, TX',
      expectedReturn: 12.8,
      minInvestment: 25000,
      totalValue: 18000000,
      fundedPercentage: 85,
      risk: 'low',
      duration: '7 years'
    },
    {
      id: 'demo-3',
      title: 'Solar Business Park',
      description: 'Mixed-use development with integrated solar farm and business facilities',
      category: 'Mixed Use',
      value: 32000000,
      currency: 'USD',
      imageUrl: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
      projectId: 'demo-proj-3',
      projectName: 'GreenTech Properties',
      location: 'Phoenix, AZ',
      expectedReturn: 15.2,
      minInvestment: 75000,
      totalValue: 32000000,
      fundedPercentage: 60,
      risk: 'medium',
      duration: '10 years'
    }
  ];

  const isDemoUser = user?.id?.startsWith('demo-');
  const displayRWAs = isDemoUser ? mockRWAs : [];

  const handleViewPublicProfile = () => {
    if (isDemoUser) {
      setShowDemoPublicProfileModal(true);
    } else {
      setShowFeatureNotAvailableModal(true);
    }
  };

  const handleViewPerformanceReports = () => {
    if (isDemoUser) {
      setShowDemoPerformanceReportsModal(true);
    } else {
      setShowFeatureNotAvailableModal(true);
    }
  };

  const handleViewAnalytics = () => {
    console.log('Analytics feature - coming soon');
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

  // Calculate demo stats
  const demoStats = isDemoUser ? {
    listedAssets: displayRWAs.length,
    totalRaised: displayRWAs.reduce((sum, rwa) => sum + (rwa.totalValue * rwa.fundedPercentage / 100), 0),
    investors: 247,
    avgPerformance: 14.8
  } : {
    listedAssets: 0,
    totalRaised: 0,
    investors: 0,
    avgPerformance: 0
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Asset Originator Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back, {user?.name}!</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-blue-50 p-3 rounded-lg">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Listed Assets</p>
              <p className="text-2xl font-bold text-gray-900">{demoStats.listedAssets}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-green-50 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Raised</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(demoStats.totalRaised)}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-purple-50 p-3 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Investors</p>
              <p className="text-2xl font-bold text-gray-900">{demoStats.investors}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-orange-50 p-3 rounded-lg">
              <BarChart3 className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Avg. Performance</p>
              <p className="text-2xl font-bold text-gray-900">{demoStats.avgPerformance}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Add RWA Card */}
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-xl text-white hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Plus className="h-8 w-8 mr-3" />
            <h3 className="text-xl font-semibold">List New Asset</h3>
          </div>
          <p className="mb-4 text-emerald-100">
            Add a new real-world asset to our marketplace and connect with institutional investors.
          </p>
          <button 
            onClick={() => setShowPricing(true)}
            className="bg-white text-emerald-600 px-6 py-2 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
          >
            View Packages
          </button>
        </div>

        {/* Pricing Information Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <CreditCard className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Listing Packages</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Choose from Basic ($2,500) or VIP ($15,000) packages for comprehensive asset tokenization.
          </p>
          <button 
            onClick={() => setShowPricing(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            View Pricing Details
          </button>
        </div>

        {/* Analytics Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <BarChart3 className="h-8 w-8 text-purple-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Analytics</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Track performance metrics and investor engagement for your listed assets.
          </p>
          <button 
            onClick={handleViewAnalytics}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            View Analytics
          </button>
        </div>
      </div>

      {/* Asset Management */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Listed Assets</h2>
          <button 
            onClick={() => setShowPricing(true)}
            className="flex items-center bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New Asset
          </button>
        </div>

        {displayRWAs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayRWAs.map((rwa) => (
              <div key={rwa.id} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="relative">
                  <img 
                    src={rwa.imageUrl} 
                    alt={rwa.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(rwa.risk)}`}>
                      {rwa.risk.toUpperCase()} RISK
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">{rwa.category}</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {rwa.location}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{rwa.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{rwa.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Expected Return</span>
                      <div className="flex items-center text-green-600 font-semibold">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {rwa.expectedReturn}%
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Total Value</span>
                      <span className="font-semibold text-gray-900">{formatCurrency(rwa.totalValue)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Duration</span>
                      <div className="flex items-center text-gray-700">
                        <Clock className="h-4 w-4 mr-1" />
                        {rwa.duration}
                      </div>
                    </div>
                  </div>
                  
                  {/* Funding Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Funding Progress</span>
                      <span>{rwa.fundedPercentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${rwa.fundedPercentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{formatCurrency(rwa.totalValue * rwa.fundedPercentage / 100)} raised</span>
                      <span>{formatCurrency(rwa.totalValue)} target</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
                      Manage
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Assets Listed Yet</h3>
            <p className="text-gray-600 mb-4">
              Start by listing your first real-world asset to connect with institutional investors.
            </p>
            <button 
              onClick={() => setShowPricing(true)}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              View Listing Packages
            </button>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button 
          onClick={handleViewPublicProfile}
          className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <Eye className="h-5 w-5 text-gray-600 mr-2" />
          <span className="text-gray-700 font-medium">View Public Profile</span>
        </button>
        
        <button 
          onClick={handleViewPerformanceReports}
          className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <TrendingUp className="h-5 w-5 text-gray-600 mr-2" />
          <span className="text-gray-700 font-medium">Performance Reports</span>
        </button>
        
        <button className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
          <Settings className="h-5 w-5 text-gray-600 mr-2" />
          <span className="text-gray-700 font-medium">Account Settings</span>
        </button>
      </div>

      {/* Pricing Modal */}
      {showPricing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Asset Listing Packages</h2>
              <button 
                onClick={() => setShowPricing(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <RWAProjectPricing isOpen={true} onClose={() => setShowPricing(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Demo Modals */}
      <DemoPublicProfileModal 
        isOpen={showDemoPublicProfileModal}
        onClose={() => setShowDemoPublicProfileModal(false)}
      />

      <DemoPerformanceReportsModal 
        isOpen={showDemoPerformanceReportsModal}
        onClose={() => setShowDemoPerformanceReportsModal(false)}
      />

      <FeatureNotAvailableModal 
        isOpen={showFeatureNotAvailableModal}
        onClose={() => setShowFeatureNotAvailableModal(false)}
        featureName="This feature"
      />
    </div>
  );
};

export default RWAProjectDashboard;