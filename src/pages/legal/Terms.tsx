import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle, Users, Shield } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Scale className="h-8 w-8 mr-3" />
              <h1 className="text-4xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-xl text-indigo-100">
              Legal terms and conditions for using the Eris RWA platform
            </p>
            <p className="text-sm text-indigo-200 mt-2">
              Last updated: January 1, 2025
            </p>
          </div>

          {/* Content */}
          <div className="px-8 py-12 space-y-12">
            {/* Introduction */}
            <section>
              <div className="flex items-center mb-6">
                <FileText className="h-6 w-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the Eris RWA platform, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                prohibited from using or accessing this platform.
              </p>
            </section>

            {/* Platform Description */}
            <section>
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Platform Description</h2>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Eris RWA is a digital platform that facilitates investment in tokenized real-world assets. 
                  Our services include:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Access to curated real-world asset investment opportunities</li>
                  <li>• Asset tokenization and blockchain-based transaction processing</li>
                  <li>• Educational resources and market analysis</li>
                  <li>• Portfolio management and reporting tools</li>
                </ul>
              </div>
            </section>

            {/* User Eligibility */}
            <section>
              <div className="flex items-center mb-6">
                <CheckCircle className="h-6 w-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">User Eligibility</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">General Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Must be at least 18 years of age</li>
                    <li>• Legal capacity to enter into contracts</li>
                    <li>• Compliance with local laws and regulations</li>
                    <li>• Successful completion of KYC verification</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Investor Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Accredited investor status (where required)</li>
                    <li>• Minimum investment thresholds</li>
                    <li>• Risk tolerance assessment</li>
                    <li>• Ongoing compliance monitoring</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Investment Risks */}
            <section>
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Investment Risks</h2>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="text-red-800 font-semibold mb-4">
                  IMPORTANT: All investments carry risk of loss
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Real-world asset investments involve significant risks, including but not limited to:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Market volatility and economic downturns</li>
                    <li>• Liquidity constraints and exit limitations</li>
                    <li>• Regulatory changes and compliance risks</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Technology and cybersecurity risks</li>
                    <li>• Asset-specific operational risks</li>
                    <li>• Potential total loss of investment</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Platform Rules */}
            <section>
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Platform Rules</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 text-green-800">Permitted Activities</h3>
                  <ul className="space-y-1 text-gray-700 mt-2">
                    <li>• Legitimate investment activities</li>
                    <li>• Educational content consumption</li>
                    <li>• Platform feature utilization</li>
                  </ul>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-900 text-red-800">Prohibited Activities</h3>
                  <ul className="space-y-1 text-gray-700 mt-2">
                    <li>• Money laundering or terrorist financing</li>
                    <li>• Market manipulation or fraud</li>
                    <li>• Unauthorized access or system interference</li>
                    <li>• Violation of applicable laws or regulations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Fees and Payments */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Fees and Payments</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Platform Fees</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Subscription fees for premium access</li>
                      <li>• Transaction fees for investments</li>
                      <li>• Management fees for ongoing services</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Terms</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Fees are non-refundable unless specified</li>
                      <li>• Payment due upon service activation</li>
                      <li>• Currency conversion at prevailing rates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  To the maximum extent permitted by law, Eris RWA and its affiliates shall not be liable 
                  for any indirect, incidental, special, consequential, or punitive damages, including but 
                  not limited to loss of profits, data, or other intangible losses resulting from your use 
                  of the platform.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the laws of the 
                jurisdiction where BMBWeb3 Global – FZCO is incorporated, without regard to conflict of 
                law principles.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact our legal team:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@erisrwa.com</p>
                <p><strong>Address:</strong> BMBWeb3 Global – FZCO</p>
                <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM UTC</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;