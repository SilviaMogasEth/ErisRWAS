import React, { useState } from 'react';
import { Shield, CheckCircle, AlertCircle, ExternalLink, X } from 'lucide-react';

interface KYCModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const KYCModal: React.FC<KYCModalProps> = ({ isOpen, onClose, onComplete }) => {
  const [step, setStep] = useState<'intro' | 'persona' | 'complete'>('intro');

  if (!isOpen) return null;

  const startPersonaKYC = () => {
    setStep('persona');
    // In a real implementation, this would initialize Persona SDK
    // For demo purposes, we'll simulate the process
    setTimeout(() => {
      setStep('complete');
      setTimeout(() => {
        onComplete();
        onClose();
      }, 2000);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Identity Verification</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {step === 'intro' && (
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure KYC Verification</h3>
              <p className="text-gray-600 mb-6">
                We use Persona to verify your identity securely. This process typically takes 2-3 minutes 
                and helps us comply with regulatory requirements.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">You'll need:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Government-issued photo ID</li>
                  <li>• Clear lighting for photos</li>
                  <li>• 2-3 minutes of your time</li>
                </ul>
              </div>
              <button
                onClick={startPersonaKYC}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Start Verification with Persona
              </button>
            </div>
          )}

          {step === 'persona' && (
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Verification in Progress</h3>
              <p className="text-gray-600 mb-6">
                Please complete the verification process in the Persona window. 
                This may take a few moments.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  Don't close this window while verification is in progress.
                </p>
              </div>
            </div>
          )}

          {step === 'complete' && (
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Verification Complete!</h3>
              <p className="text-gray-600 mb-6">
                Your identity has been successfully verified. You now have full access to all platform features.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KYCModal;