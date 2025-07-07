import React from 'react';
import { X, Lock, Star, ArrowRight } from 'lucide-react';

interface FeatureNotAvailableModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureName?: string;
}

const FeatureNotAvailableModal: React.FC<FeatureNotAvailableModalProps> = ({ 
  isOpen, 
  onClose, 
  featureName = 'This feature' 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Feature Coming Soon</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="h-8 w-8 text-blue-600" />
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {featureName} is not yet available
            </h3>
            
            <p className="text-gray-600 mb-6">
              We're working hard to bring you this feature. In the meantime, you can explore our demo 
              accounts to see how this functionality will work.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-semibold text-gray-900">Try Demo Accounts</span>
              </div>
              <p className="text-sm text-gray-600">
                Experience the full platform functionality with our pre-populated demo data
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={onClose}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Got it
              </button>
              
              <button
                onClick={() => {
                  onClose();
                  // In a real app, this would navigate to demo login
                  window.location.href = '/login';
                }}
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Try Demo Accounts
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureNotAvailableModal;