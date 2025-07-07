import React, { useState } from 'react';
import { X, BarChart3, TrendingUp, DollarSign, Calendar, Download, FileText } from 'lucide-react';

interface DemoPerformanceReportsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoPerformanceReportsModal: React.FC<DemoPerformanceReportsModalProps> = ({ isOpen, onClose }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('ytd');

  if (!isOpen) return null;

  const performanceData = {
    ytd: {
      totalReturn: 14.2,
      totalRaised: 85000000,
      activeInvestments: 8,
      completedProjects: 5,
      averageHoldingPeriod: '3.2 years',
      topPerformer: 'EcoTower Downtown (16.5%)'
    },
    quarterly: {
      totalReturn: 3.8,
      totalRaised: 22000000,
      activeInvestments: 3,
      completedProjects: 1,
      averageHoldingPeriod: '2.8 years',
      topPerformer: 'Green Residential Complex (4.2%)'
    },
    monthly: {
      totalReturn: 1.2,
      totalRaised: 8500000,
      activeInvestments: 1,
      completedProjects: 0,
      averageHoldingPeriod: '2.5 years',
      topPerformer: 'Solar Business Park (1.8%)'
    }
  };

  const currentData = performanceData[selectedPeriod as keyof typeof performanceData];

  const reports = [
    {
      name: 'Q4 2024 Performance Report',
      date: '2024-12-31',
      type: 'Quarterly',
      size: '2.4 MB'
    },
    {
      name: 'Annual Investment Summary 2024',
      date: '2024-12-31',
      type: 'Annual',
      size: '3.8 MB'
    },
    {
      name: 'Portfolio Risk Assessment',
      date: '2024-12-15',
      type: 'Risk Analysis',
      size: '1.9 MB'
    },
    {
      name: 'ESG Impact Report 2024',
      date: '2024-12-01',
      type: 'ESG',
      size: '2.1 MB'
    },
    {
      name: 'Market Analysis Q4',
      date: '2024-11-30',
      type: 'Market Research',
      size: '1.6 MB'
    }
  ];

  const monthlyPerformance = [
    { month: 'Jan', return: 1.2, raised: 8500000 },
    { month: 'Feb', return: 0.8, raised: 6200000 },
    { month: 'Mar', return: 2.1, raised: 12300000 },
    { month: 'Apr', return: 1.5, raised: 9800000 },
    { month: 'May', return: 1.9, raised: 11200000 },
    { month: 'Jun', return: 1.3, raised: 7900000 },
    { month: 'Jul', return: 2.4, raised: 15600000 },
    { month: 'Aug', return: 1.7, raised: 10400000 },
    { month: 'Sep', return: 1.1, raised: 8100000 },
    { month: 'Oct', return: 2.0, raised: 13700000 },
    { month: 'Nov', return: 1.6, raised: 9500000 },
    { month: 'Dec', return: 2.2, raised: 14800000 }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Performance Reports</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Period Selection */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">Time Period:</span>
            <div className="flex space-x-2">
              {[
                { id: 'monthly', label: 'Monthly' },
                { id: 'quarterly', label: 'Quarterly' },
                { id: 'ytd', label: 'Year to Date' }
              ].map((period) => (
                <button
                  key={period.id}
                  onClick={() => setSelectedPeriod(period.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedPeriod === period.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
              <TrendingUp className="h-6 w-6 text-green-600 mb-2" />
              <div className="text-2xl font-bold text-green-800">{currentData.totalReturn}%</div>
              <div className="text-sm text-green-700">Total Return</div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
              <DollarSign className="h-6 w-6 text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-800">${(currentData.totalRaised / 1000000).toFixed(1)}M</div>
              <div className="text-sm text-blue-700">Capital Raised</div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
              <BarChart3 className="h-6 w-6 text-purple-600 mb-2" />
              <div className="text-2xl font-bold text-purple-800">{currentData.activeInvestments}</div>
              <div className="text-sm text-purple-700">Active Investments</div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
              <Calendar className="h-6 w-6 text-orange-600 mb-2" />
              <div className="text-2xl font-bold text-orange-800">{currentData.completedProjects}</div>
              <div className="text-sm text-orange-700">Completed Projects</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-4 border border-indigo-200">
              <TrendingUp className="h-6 w-6 text-indigo-600 mb-2" />
              <div className="text-lg font-bold text-indigo-800">{currentData.averageHoldingPeriod}</div>
              <div className="text-sm text-indigo-700">Avg. Holding Period</div>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-4 border border-pink-200">
              <div className="text-sm font-bold text-pink-800 mb-1">Top Performer</div>
              <div className="text-xs text-pink-700">{currentData.topPerformer}</div>
            </div>
          </div>

          {/* Performance Chart */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Monthly Performance Trend</h3>
            <div className="h-64 flex items-end space-x-2">
              {monthlyPerformance.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gray-200 rounded-t relative" style={{ height: '200px' }}>
                    <div 
                      className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t absolute bottom-0 w-full"
                      style={{ height: `${(data.return / 2.5) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-2">{data.month}</div>
                  <div className="text-xs font-semibold text-gray-800">{data.return}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Available Reports */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Available Reports</h3>
            <div className="space-y-3">
              {reports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <FileText className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{report.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{report.type}</span>
                        <span>•</span>
                        <span>{new Date(report.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{report.size}</span>
                      </div>
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

          {/* Summary */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Performance Summary</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Exceeded target returns by 2.3% this quarter</li>
                  <li>• Successfully completed 5 major projects</li>
                  <li>• Maintained 95%+ occupancy rates across portfolio</li>
                  <li>• Achieved LEED certification on 3 new properties</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Upcoming Milestones</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Q1 2025: Launch of Solar Business Park</li>
                  <li>• Q2 2025: Completion of Green Residential Complex</li>
                  <li>• Q3 2025: IPO preparation for subsidiary</li>
                  <li>• Q4 2025: Expansion into European markets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPerformanceReportsModal;