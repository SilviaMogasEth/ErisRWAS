import React, { useState } from 'react';
import { X, DollarSign, CreditCard, Wallet, CheckCircle, Clock, ArrowRight, ArrowLeft, Shield, Award } from 'lucide-react';
import { RWA } from '../types';

interface InvestmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  rwa: RWA;
}

const InvestmentModal: React.FC<InvestmentModalProps> = ({ isOpen, onClose, rwa }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [investmentAmount, setInvestmentAmount] = useState(rwa.minInvestment);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'crypto'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInvest = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep(3);
    }, 3000);
  };

  const handleClose = () => {
    setCurrentStep(1);
    setInvestmentAmount(rwa.minInvestment);
    setPaymentMethod('card');
    setIsProcessing(false);
    onClose();
  };

  const steps = [
    { number: 1, title: 'Investment Amount', description: 'Choose your investment amount' },
    { number: 2, title: 'Payment Method', description: 'Select payment method' },
    { number: 3, title: 'Confirmation', description: 'Investment confirmation' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Invest in {rwa.title}</h2>
            <p className="text-sm text-gray-600">Step {currentStep} of 3</p>
          </div>
          <button 
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="flex items-center justify-between mb-2">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step.number 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    step.number
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-gray-900">{steps[currentStep - 1].title}</h3>
            <p className="text-sm text-gray-600">{steps[currentStep - 1].description}</p>
          </div>
        </div>

        <div className="p-6">
          {/* Step 1: Investment Amount */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Expected Return:</span>
                    <div className="font-semibold text-green-600">{rwa.expectedReturn}%</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Duration:</span>
                    <div className="font-semibold text-gray-900">{rwa.duration}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Minimum Investment:</span>
                    <div className="font-semibold text-gray-900">{formatCurrency(rwa.minInvestment)}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Risk Level:</span>
                    <div className={`font-semibold ${
                      rwa.risk === 'low' ? 'text-green-600' :
                      rwa.risk === 'medium' ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {rwa.risk.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="investment-amount" className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    id="investment-amount"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    min={rwa.minInvestment}
                    step={1000}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-semibold"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Minimum investment: {formatCurrency(rwa.minInvestment)}
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-800">Investment Risk Disclosure</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      All investments carry risk of loss. Past performance does not guarantee future results. 
                      Please review all investment documents before proceeding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Payment Method */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Investment Summary</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Investment Amount:</span>
                  <span className="text-2xl font-bold text-gray-900">{formatCurrency(investmentAmount)}</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Payment Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      paymentMethod === 'card'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <CreditCard className="h-8 w-8 text-gray-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Credit/Debit Card</h4>
                    <p className="text-sm text-gray-600">Secure payment via Stripe</p>
                  </button>

                  <button
                    onClick={() => setPaymentMethod('crypto')}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      paymentMethod === 'crypto'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Wallet className="h-8 w-8 text-gray-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Cryptocurrency</h4>
                    <p className="text-sm text-gray-600">USDC, USDT, ETH accepted</p>
                  </button>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVC</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'crypto' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Cryptocurrency</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>USDC</option>
                      <option>USDT</option>
                      <option>ETH</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Wallet Address</label>
                    <input
                      type="text"
                      placeholder="0x..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && !isProcessing && (
            <div className="text-center space-y-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Investment Successful!</h3>
                <p className="text-gray-600">
                  Your investment of {formatCurrency(investmentAmount)} in {rwa.title} has been processed successfully.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                <div className="flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="font-semibold text-gray-900">Investment NFT Minted!</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  A unique NFT representing your investment has been minted to your wallet. 
                  This serves as proof of ownership and can be viewed in your digital passport.
                </p>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-xs text-gray-500 mb-1">Investment NFT ID</div>
                  <div className="font-mono text-sm text-gray-900">INV-{rwa.id.toUpperCase()}-{Date.now()}</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Investment Amount:</span>
                  <span className="font-semibold">{formatCurrency(investmentAmount)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Expected Annual Return:</span>
                  <span className="font-semibold text-green-600">{rwa.expectedReturn}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Investment Duration:</span>
                  <span className="font-semibold">{rwa.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-semibold">{paymentMethod === 'card' ? 'Credit Card' : 'Cryptocurrency'}</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View in Dashboard
              </button>
            </div>
          )}

          {/* Processing State */}
          {isProcessing && (
            <div className="text-center space-y-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Processing Investment</h3>
                <p className="text-gray-600">
                  Please wait while we process your investment of {formatCurrency(investmentAmount)}...
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-semibold">Processing Payment</span>
                </div>
                <div className="space-y-2 text-sm text-blue-700">
                  <p>✓ Validating payment information</p>
                  <p>✓ Verifying investment eligibility</p>
                  <p className="animate-pulse">⏳ Processing transaction...</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {currentStep < 3 && !isProcessing && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentStep === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </button>

              <button
                onClick={currentStep === 2 ? handleInvest : handleNext}
                disabled={currentStep === 1 && investmentAmount < rwa.minInvestment}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  (currentStep === 1 && investmentAmount < rwa.minInvestment)
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {currentStep === 2 ? 'Confirm Investment' : 'Next'}
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestmentModal;