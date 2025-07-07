import React, { useState } from 'react';
import { CheckCircle, Star, CreditCard, Wallet, Building2, Shield, Zap, X, Clock } from 'lucide-react';

interface RWAProjectPricingProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const RWAProjectPricing: React.FC<RWAProjectPricingProps> = ({ isOpen = true, onClose }) => {
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [selectedPackage, setSelectedPackage] = useState<'basic' | 'vip' | null>(null);

  const handlePackageSelection = (packageType: 'basic' | 'vip') => {
    setSelectedPackage(packageType);
    setPaymentStatus('processing');
    
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus('success');
    }, 3000);
  };

  const handleClose = () => {
    setPaymentStatus('idle');
    setSelectedPackage(null);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  // Success State
  if (paymentStatus === 'success') {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
        <div className="text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Package Selected Successfully!</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {selectedPackage === 'basic' ? 'Basic Package' : 'VIP Package'} - Selected
            </h3>
            <p className="text-gray-700 mb-4">
              Thank you for choosing our {selectedPackage === 'basic' ? 'Basic' : 'VIP'} asset listing package. 
              Our team will contact you within 24-48 hours to begin the onboarding process.
            </p>
            <div className="text-2xl font-bold text-green-600">
              {selectedPackage === 'basic' ? '$2,500' : '$15,000'}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-4">What happens next?</h4>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Onboarding Call</p>
                  <p className="text-sm text-gray-600">Our team will schedule a call within 24-48 hours</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Documentation Review</p>
                  <p className="text-sm text-gray-600">We'll review your asset documentation and legal structure</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Payment Processing</p>
                  <p className="text-sm text-gray-600">Invoice will be sent for wire transfer or crypto payment</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-bold">4</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Asset Tokenization</p>
                  <p className="text-sm text-gray-600">Begin the tokenization and marketplace listing process</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-600">
              <strong>Contact Information:</strong> Our team will reach out to you at your registered email address. 
              If you have any immediate questions, please contact us at{' '}
              <a href="mailto:listings@erisrwa.com" className="text-blue-600 hover:text-blue-700">
                listings@erisrwa.com
              </a>
            </p>
          </div>

          <button
            onClick={handleClose}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Continue to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // Processing State
  if (paymentStatus === 'processing') {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
        <div className="text-center">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Processing Your Request</h2>
          
          <p className="text-xl text-gray-600 mb-6">
            We're setting up your {selectedPackage === 'basic' ? 'Basic' : 'VIP'} package...
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-blue-800 font-semibold">Please wait</span>
            </div>
            <p className="text-blue-700">
              This may take a few moments while we prepare your asset listing package.
            </p>
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <p>✓ Validating package selection</p>
            <p>✓ Preparing documentation templates</p>
            <p className="animate-pulse">⏳ Setting up your account...</p>
          </div>
        </div>
      </div>
    );
  }

  // Default Pricing State
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Asset Listing Packages</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the right package to tokenize and list your real-world assets on our institutional platform
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Basic Package */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-xl font-bold text-gray-900">Basic Package</h3>
              <p className="text-gray-600 text-sm">Essential listing services</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-900">$2,500</span>
              <span className="text-gray-500 ml-2">one-time</span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Compliance review & documentation</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">On-chain asset tokenization</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Standard smart contract deployment</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Marketplace listing for 12 months</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Basic investor dashboard</span>
            </div>
          </div>

          <button 
            onClick={() => handlePackageSelection('basic')}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Choose Basic
          </button>
        </div>

        {/* VIP Package */}
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl shadow-xl p-6 text-white relative">
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-400 text-emerald-900 px-3 py-1 rounded-full text-sm font-semibold">
              Recommended
            </span>
          </div>

          <div className="flex items-center mb-4">
            <div className="bg-white/20 p-3 rounded-lg">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div className="ml-3">
              <h3 className="text-xl font-bold">VIP Package</h3>
              <p className="text-emerald-100 text-sm">Full-service premium listing</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">$15,000</span>
              <span className="text-emerald-200 ml-2">one-time</span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-300 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-white">Everything in Basic Package</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-300 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-white">Full legal advisory & structuring</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-300 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-white">Custom smart contract development</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-300 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-white">Priority marketplace placement</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-300 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-white">Dedicated relationship manager</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-300 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-white">Advanced analytics & reporting</span>
            </div>
          </div>

          <button 
            onClick={() => handlePackageSelection('vip')}
            className="w-full bg-white text-emerald-700 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
          >
            Choose VIP
          </button>
        </div>
      </div>

      {/* Payment Process */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">How to Get Started</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 font-bold">1</span>
            </div>
            <p className="text-sm text-gray-700">Select your preferred package above</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 font-bold">2</span>
            </div>
            <p className="text-sm text-gray-700">Receive confirmation and onboarding details</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 font-bold">3</span>
            </div>
            <p className="text-sm text-gray-700">Complete payment via wire transfer or crypto</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 font-bold">4</span>
            </div>
            <p className="text-sm text-gray-700">Begin asset tokenization and listing process</p>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-gray-50 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Methods</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-center">
            <CreditCard className="h-8 w-8 text-gray-600 mr-3" />
            <div>
              <h4 className="font-semibold text-gray-900">Wire Transfer</h4>
              <p className="text-sm text-gray-600">Invoice will be sent upon package selection</p>
            </div>
          </div>
          <div className="flex items-center">
            <Wallet className="h-8 w-8 text-gray-600 mr-3" />
            <div>
              <h4 className="font-semibold text-gray-900">Cryptocurrency</h4>
              <p className="text-sm text-gray-600">USDC, USDT, ETH accepted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Fee */}
      <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6">
        <div className="flex items-center mb-4">
          <Zap className="h-6 w-6 text-blue-600 mr-3" />
          <h3 className="text-lg font-bold text-gray-900">Success Fee Structure</h3>
        </div>
        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>Standard Rate:</strong> 2% of funds raised goes to RWA Capital</p>
          <p><strong>Early Adopter Discount:</strong> 1.5% for projects launching in Year 1</p>
          <p><strong>Premium Projects:</strong> 1.0% for AAA-rated projects (Year 2+)</p>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          All commissions are transparently handled via smart contracts
        </p>
      </div>
    </div>
  );
};

export default RWAProjectPricing;