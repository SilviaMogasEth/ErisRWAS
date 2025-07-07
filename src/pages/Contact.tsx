import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Users, Building2 } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Our Expert Team
            </span>
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Whether you're an investor looking for premium opportunities or an asset originator 
            ready to tokenize, we're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Investors */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Investors</h3>
              <p className="text-gray-600 mb-6">
                Discover premium RWA investment opportunities and get personalized guidance from our investment specialists.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-2" />
                  investors@erisrwa.com
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (555) 123-4567
                </div>
              </div>
            </div>

            {/* Originators */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Asset Originators</h3>
              <p className="text-gray-600 mb-6">
                Learn how to tokenize your assets and access our global network of qualified investors.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-2" />
                  originators@erisrwa.com
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (555) 234-5678
                </div>
              </div>
            </div>

            {/* General Support */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-pink-100 to-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">General Support</h3>
              <p className="text-gray-600 mb-6">
                Questions about our platform, partnerships, or technical support? We're here to help.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-2" />
                  contact@erisrwa.com
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (555) 345-6789
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Office Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-indigo-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">BMBWeb3 Global – FZCO</p>
                      <p className="text-gray-600">
                        Dubai International Financial Centre<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-indigo-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM UTC<br />
                        Weekend: Emergency support only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Response Times</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Investor Inquiries</span>
                    <span className="font-semibold text-indigo-600">Within 4 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Asset Originator Requests</span>
                    <span className="font-semibold text-indigo-600">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Technical Support</span>
                    <span className="font-semibold text-indigo-600">Within 12 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">General Inquiries</span>
                    <span className="font-semibold text-indigo-600">Within 48 hours</span>
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">🔒 Security Notice</h4>
                <p className="text-gray-700 text-sm">
                  ErisRWA will never ask for your private keys, passwords, or sensitive financial 
                  information via email or phone. Always verify communications through our official channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How quickly can I get started as an investor?",
                answer: "Once you complete KYC verification (typically 24-48 hours), you can immediately access our marketplace and start investing in premium RWA opportunities."
              },
              {
                question: "What types of assets can be tokenized on your platform?",
                answer: "We support various real-world assets including real estate, renewable energy projects, art collections, commodities, and other institutional-grade investments."
              },
              {
                question: "Is my investment data secure?",
                answer: "Yes, we maintain SOC 2 Type II certification and use bank-level encryption. All sensitive data is encrypted both in transit and at rest."
              },
              {
                question: "What are the minimum investment amounts?",
                answer: "Minimum investments vary by asset, typically ranging from $10,000 to $50,000. Some premium opportunities may have higher minimums."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;