import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, CreditCard, Wallet, ArrowRight } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparent Pricing for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              All Investors
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your investment strategy. No hidden fees, complete transparency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Access - Free */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Access</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-gray-900">Free</span>
                <span className="text-gray-500 ml-2">/ month</span>
              </div>
              <p className="text-gray-600">Perfect for exploring RWA investment opportunities</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">View up to 3 RWA projects per month</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Access beginner-level Education modules</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Basic market insights and reports</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Community forum access</span>
              </div>
            </div>

            <Link
              to="/register?type=investor"
              className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <p className="text-center text-sm text-gray-500 mt-4">
              No payment needed. Just sign up and start exploring!
            </p>
          </div>

          {/* Premium Subscription */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white relative">
            <div className="absolute top-4 right-4">
              <span className="bg-yellow-400 text-indigo-900 px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Premium Subscription</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold">$25</span>
                <span className="text-indigo-200 ml-2">/ month</span>
              </div>
              <div className="text-sm text-indigo-200 mb-4">
                Or $23/month when billed annually (save $24/year)
              </div>
              <p className="text-indigo-100">Full access to premium RWA investments</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">Unlock full access to 100+ RWA projects</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">Advanced analytics & portfolio tools</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">AI-generated investment plans based on your profile</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">Earn rewards by completing Education challenges</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">Priority customer support</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white">Exclusive investment opportunities</span>
              </div>
            </div>

            <Link
              to="/register?type=investor"
              className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-white text-indigo-700 hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Premium Trial
              <Star className="ml-2 h-5 w-5" />
            </Link>

            <div className="mt-6 pt-6 border-t border-indigo-500">
              <p className="text-indigo-100 text-sm font-medium mb-3">Payment Methods:</p>
              <div className="flex items-center space-x-4 text-sm text-indigo-200">
                <div className="flex items-center">
                  <CreditCard className="h-4 w-4 mr-1" />
                  <span>Stripe (Cards)</span>
                </div>
                <div className="flex items-center">
                  <Wallet className="h-4 w-4 mr-1" />
                  <span>Crypto (USDC, ETH)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;