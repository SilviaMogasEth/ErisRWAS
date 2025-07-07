import React from 'react';
import { Shield, Award, CheckCircle, Globe, FileText, Users } from 'lucide-react';

const Compliance: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 mr-3" />
              <h1 className="text-4xl font-bold">Compliance Framework</h1>
            </div>
            <p className="text-xl text-indigo-100">
              Our commitment to regulatory excellence and investor protection
            </p>
            <p className="text-sm text-indigo-200 mt-2">
              Last updated: January 1, 2025
            </p>
          </div>

          {/* Content */}
          <div className="px-8 py-12 space-y-12">
            {/* Overview */}
            <section>
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Regulatory Compliance</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Eris RWA operates under a comprehensive compliance framework designed to meet the highest 
                standards of regulatory requirements across multiple jurisdictions. Our commitment to 
                compliance ensures investor protection and platform integrity.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">SEC Compliant</h3>
                  <p className="text-gray-700 text-sm">
                    Full compliance with U.S. Securities and Exchange Commission regulations
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <Globe className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">MiFID II</h3>
                  <p className="text-gray-700 text-sm">
                    European Markets in Financial Instruments Directive compliance
                  </p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <Shield className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">GDPR Ready</h3>
                  <p className="text-gray-700 text-sm">
                    Full compliance with European data protection regulations
                  </p>
                </div>
              </div>
            </section>

            {/* KYC/AML Framework */}
            <section>
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">KYC/AML Framework</h2>
              </div>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures are designed 
                  to prevent financial crimes and ensure platform security.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Identity Verification</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Government-issued ID verification</li>
                      <li>• Biometric authentication</li>
                      <li>• Address verification</li>
                      <li>• Enhanced due diligence for high-risk profiles</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Ongoing Monitoring</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Transaction pattern analysis</li>
                      <li>• Sanctions list screening</li>
                      <li>• Suspicious activity reporting</li>
                      <li>• Regular compliance reviews</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Investor Protection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Investor Protection Measures</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Accredited Investor Verification</h3>
                  <p className="text-gray-700">
                    Rigorous verification of accredited investor status in accordance with local regulations, 
                    ensuring only qualified investors access appropriate investment opportunities.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Disclosure</h3>
                  <p className="text-gray-700">
                    Comprehensive risk disclosure documents provided for all investment opportunities, 
                    ensuring investors understand potential risks and rewards.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Segregated Assets</h3>
                  <p className="text-gray-700">
                    Client assets are held in segregated accounts with qualified custodians, providing 
                    additional protection and transparency.
                  </p>
                </div>
              </div>
            </section>

            {/* Regulatory Partnerships */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Regulatory Partnerships</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  We work closely with leading regulatory bodies and compliance partners to ensure 
                  our platform meets the highest standards of financial regulation.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Partners</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Top-tier international law firms</li>
                      <li>• Regulatory compliance specialists</li>
                      <li>• Securities law experts</li>
                      <li>• Cross-border legal coordination</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technology Partners</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Persona for KYC verification</li>
                      <li>• Leading AML screening providers</li>
                      <li>• Blockchain compliance tools</li>
                      <li>• Regulatory reporting systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Audit and Certification */}
            <section>
              <div className="flex items-center mb-6">
                <FileText className="h-6 w-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Audit and Certification</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">SOC 2 Type II</h3>
                  <p className="text-gray-700 mb-4">
                    Independently audited security controls and operational procedures
                  </p>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Certified</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">ISO 27001</h3>
                  <p className="text-gray-700 mb-4">
                    Information security management system certification
                  </p>
                  <div className="flex items-center text-blue-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">In Progress</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Reporting and Transparency */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reporting and Transparency</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Regular Reporting</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Quarterly compliance reports to regulators</li>
                    <li>• Annual third-party security audits</li>
                    <li>• Monthly investor updates and disclosures</li>
                    <li>• Real-time transaction monitoring and reporting</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Public Disclosures</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Annual compliance and audit reports</li>
                    <li>• Material change notifications</li>
                    <li>• Regulatory filing updates</li>
                    <li>• Security incident disclosures (if applicable)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Contact</h2>
              <p className="text-gray-700 mb-4">
                For compliance-related inquiries or to report concerns, please contact our compliance team:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> compliance@erisrwa.com</p>
                <p><strong>Compliance Officer:</strong> Available for direct consultation</p>
                <p><strong>Response Time:</strong> All compliance inquiries addressed within 24 hours</p>
                <p><strong>Whistleblower Hotline:</strong> Anonymous reporting available</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;