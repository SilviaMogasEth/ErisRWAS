import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Search, Filter, MapPin, TrendingUp, Clock, Shield, Star, Award } from 'lucide-react';
import { RWA } from '../types';

const Marketplace: React.FC = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock RWA data with partner rankings
  const mockRWAs: (RWA & { partnerRanking?: { partner: string; rank: string; score: number; } })[] = [
    {
      id: '1',
      title: 'Premium Office Building - Manhattan',
      description: 'Grade A office building in prime Manhattan location with long-term tenants',
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
      partnerRanking: {
        partner: 'Particula',
        rank: 'AAA',
        score: 9.2
      }
    },
    {
      id: '2',
      title: 'Renewable Energy Solar Farm',
      description: '100MW solar farm with 25-year power purchase agreements',
      category: 'Energy',
      value: 45000000,
      currency: 'USD',
      imageUrl: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
      projectId: 'proj-2',
      projectName: 'GreenPower Renewables',
      location: 'California, USA',
      expectedReturn: 8.5,
      minInvestment: 25000,
      totalValue: 45000000,
      fundedPercentage: 40,
      risk: 'low',
      duration: '10 years'
    },
    {
      id: '3',
      title: 'Luxury Resort Development',
      description: 'Boutique beach resort in premium Caribbean location',
      category: 'Hospitality',
      value: 25000000,
      currency: 'USD',
      imageUrl: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
      projectId: 'proj-3',
      projectName: 'Paradise Resorts Group',
      location: 'Barbados',
      expectedReturn: 15.2,
      minInvestment: 50000,
      totalValue: 25000000,
      fundedPercentage: 60,
      risk: 'high',
      duration: '7 years',
      partnerRanking: {
        partner: 'Particula',
        rank: 'AA',
        score: 8.7
      }
    }
  ];

  const categories = ['all', 'Real Estate', 'Energy', 'Hospitality', 'Infrastructure', 'Agriculture'];

  const filteredRWAs = mockRWAs.filter(rwa => {
    const matchesSearch = rwa.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         rwa.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || rwa.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'high': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
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

  if (!user || user.type !== 'investor') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Restricted</h2>
          <p className="text-gray-600">This marketplace is only available to registered investors.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">RWA Marketplace</h1>
        <p className="text-gray-600">Discover and invest in tokenized real-world assets</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search assets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Categories</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Access Limitation Banner for Free Users */}
      {user.subscriptionTier === 'free' && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-center">
            <Star className="h-6 w-6 text-blue-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Limited Access</h3>
              <p className="text-gray-600">
                As a free user, you can view {filteredRWAs.length > 2 ? 2 : filteredRWAs.length} assets. 
                Complete your KYC and upgrade to access all {mockRWAs.length}+ investment opportunities.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* RWA Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRWAs.slice(0, user.subscriptionTier === 'free' ? 2 : filteredRWAs.length).map((rwa) => (
          <div key={rwa.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
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
              
              {/* Partner Ranking Badge */}
              {rwa.partnerRanking && (
                <div className="absolute bottom-4 left-4">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 py-1 rounded-lg text-xs font-semibold flex items-center">
                    <Award className="h-3 w-3 mr-1" />
                    {rwa.partnerRanking.partner} {rwa.partnerRanking.rank}
                  </div>
                </div>
              )}
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
                  <span className="text-sm text-gray-500">Min. Investment</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(rwa.minInvestment)}</span>
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
              
              <Link 
                to={`/property/${rwa.id}`}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredRWAs.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No assets found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
        </div>
      )}

      {/* Load More for Free Users */}
      {user.subscriptionTier === 'free' && filteredRWAs.length > 2 && (
        <div className="text-center mt-8">
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-8">
            <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Unlock {filteredRWAs.length - 2} More Assets
            </h3>
            <p className="text-gray-600 mb-4">
              Complete your KYC verification to access all investment opportunities
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Complete KYC
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;