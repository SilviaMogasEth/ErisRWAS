import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 mr-3" />
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl text-indigo-100">
              Your privacy and data security are our top priorities
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
                <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Eris RWA ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you use our 
                real-world asset investment platform and related services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <div className="flex items-center mb-6">
                <Database className="h-6 w-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Name, email address, and contact information</li>
                    <li>• Government-issued identification documents</li>
                    <li>• Financial information and investment history</li>
                    <li>• Professional background and accreditation status</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• IP address and device information</li>
                    <li>• Browser type and operating system</li>
                    <li>• Usage patterns and platform interactions</li>
                    <li>• Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <div className="flex items-center mb-6">
                <UserCheck className="h-6 w-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Platform Operations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Account creation and management</li>
                    <li>• Investment processing and tracking</li>
                    <li>• Customer support and communications</li>
                    <li>• Platform security and fraud prevention</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Compliance & Legal</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• KYC/AML verification processes</li>
                    <li>• Regulatory reporting requirements</li>
                    <li>• Legal compliance and investigations</li>
                    <li>• Risk assessment and monitoring</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <div className="flex items-center mb-6">
                <Lock className="h-6 w-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
              </div>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement industry-leading security measures to protect your personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• End-to-end encryption for all data transmission</li>
                    <li>• SOC 2 Type II certified infrastructure</li>
                    <li>• Multi-factor authentication requirements</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Regular security audits and penetration testing</li>
                    <li>• Secure data centers with 24/7 monitoring</li>
                    <li>• Employee background checks and training</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <div className="flex items-center mb-6">
                <Eye className="h-6 w-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information only in the following circumstances:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Service Providers</h3>
                  <p className="text-gray-700">Trusted third-party services that help us operate our platform</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Legal Requirements</h3>
                  <p className="text-gray-700">When required by law, regulation, or legal process</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Business Transfers</h3>
                  <p className="text-gray-700">In connection with mergers, acquisitions, or asset sales</p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Access & Control</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Request access to your personal data</li>
                    <li>• Update or correct your information</li>
                    <li>• Delete your account and data</li>
                    <li>• Export your data in a portable format</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication Preferences</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Opt out of marketing communications</li>
                    <li>• Manage notification preferences</li>
                    <li>• Control cookie settings</li>
                    <li>• Request information about data processing</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@erisrwa.com</p>
                <p><strong>Address:</strong> BMBWeb3 Global – FZCO</p>
                <p><strong>Response Time:</strong> We will respond to your inquiry within 30 days</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;