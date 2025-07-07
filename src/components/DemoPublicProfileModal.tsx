import React from 'react';
import { X, Building2, MapPin, Calendar, Users, Award, Star, TrendingUp, DollarSign } from 'lucide-react';

interface DemoPublicProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoPublicProfileModal: React.FC<DemoPublicProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const companyData = {
    name: 'GreenTech Properties',
    description: 'Leading sustainable real estate development company specializing in eco-friendly commercial and residential projects.',
    founded: '2018',
    location: 'San Francisco, CA',
    employees: '150-200',
    totalAssets: 12,
    totalRaised: 85000000,
    averageReturn: 14.2,
    successfulProjects: 8,
    rating: 4.8,
    certifications: [
      'LEED Platinum Certified',
      'B-Corp Certified',
      'ISO 14001 Environmental Management'
    ],
    recentProjects: [
      {
        name: 'EcoTower Downtown',
        type: 'Commercial Office',
        value: 25000000,
        status: 'Completed',
        return: 16.5
      },
      {
        name: 'Green Residential Complex',
        type: 'Residential',
        value: 18000000,
        status: 'Active',
        return: 12.8
      },
      {
        name: 'Solar Business Park',
        type: 'Mixed Use',
        value: 32000000,
        status: 'Funding',
        return: 15.2
      }
    ]
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Building2 className="h-6 w-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Public Profile</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Company Header */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{companyData.name}</h1>
                <p className="text-gray-700 text-lg mb-4">{companyData.description}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Founded {companyData.founded}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {companyData.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {companyData.employees} employees
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < Math.floor(companyData.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{companyData.rating}/5</span>
                </div>
                <p className="text-sm text-gray-600">Investor Rating</p>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{companyData.totalAssets}</div>
              <div className="text-sm text-gray-600">Total Assets Listed</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">${(companyData.totalRaised / 1000000).toFixed(0)}M</div>
              <div className="text-sm text-gray-600">Total Capital Raised</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{companyData.averageReturn}%</div>
              <div className="text-sm text-gray-600">Average Return</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{companyData.successfulProjects}</div>
              <div className="text-sm text-gray-600">Successful Projects</div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications & Awards</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {companyData.certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <Award className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-green-800 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Projects */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Projects</h3>
            <div className="space-y-4">
              {companyData.recentProjects.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{project.name}</h4>
                      <p className="text-gray-600">{project.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">
                        ${(project.value / 1000000).toFixed(1)}M
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        project.status === 'Active' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Expected Return</span>
                    <div className="flex items-center text-green-600 font-semibold">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {project.return}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Business Development</h4>
                <p className="text-gray-700">partnerships@greentechproperties.com</p>
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Investor Relations</h4>
                <p className="text-gray-700">investors@greentechproperties.com</p>
                <p className="text-gray-700">+1 (555) 123-4568</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPublicProfileModal;