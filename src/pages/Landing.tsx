import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, GraduationCap, Building2, Users, DollarSign, Globe, Award, CheckCircle, ArrowRight, BarChart3, Lock, Star, Quote } from 'lucide-react';
import PricingSection from '../components/PricingSection';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Premium
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Real World Assets
              </span>
              Ecosystem
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-3xl leading-relaxed">
              The comprehensive RWA ecosystem where premium assets and qualified investors converge. 
              Democratizing access to institutional-grade investments through blockchain innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/register?type=investor"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Investing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/register?type=rwa-project"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-slate-600 text-white hover:bg-slate-800 transition-all duration-200"
              >
                List Assets
                <Building2 className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
              Trusted by Leading Financial Organizations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">Goldman Sachs</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">BlackRock</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">JP Morgan</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">Vanguard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The RWA Ecosystem Where
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Assets and Investors Converge
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A unified platform connecting premium real-world assets with qualified investors, 
              powered by enterprise-grade security and regulatory compliance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Investor Platform */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 h-full">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-xl">
                    <TrendingUp className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">Investor Platform</h3>
                    <p className="text-gray-600">Premium investment access</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Professional KYC/AML</h4>
                      <p className="text-gray-600">Bank-grade identity verification and compliance screening</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">AI-Powered Portfolio Management</h4>
                      <p className="text-gray-600">Personalized investment strategies based on risk profile</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Professional Education Hub</h4>
                      <p className="text-gray-600">Advanced RWA investment education and market insights</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Curated Asset Selection</h4>
                      <p className="text-gray-600">Access to pre-vetted, high-quality assets</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Link
                    to="/register?type=investor"
                    className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-colors"
                  >
                    Access Investor Platform
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Asset Originator Platform */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 h-full">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl">
                    <Building2 className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">Asset Originator Platform</h3>
                    <p className="text-gray-600">Enterprise tokenization solutions</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Global Investor Network</h4>
                      <p className="text-gray-600">Access to verified and accredited investors</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Tokenization Infrastructure</h4>
                      <p className="text-gray-600">End-to-end asset tokenization and management tools</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Regulatory Compliance</h4>
                      <p className="text-gray-600">Built-in compliance frameworks for multiple jurisdictions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Analytics & Reporting</h4>
                      <p className="text-gray-600">Real-time performance tracking and investor relations</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Link
                    to="/register?type=rwa-project"
                    className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-colors"
                  >
                    Launch Asset Platform
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what investors and asset originators are saying about our platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 shadow-lg border border-indigo-100">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-4 text-sm text-indigo-600 font-medium">Verified</span>
              </div>
              <Quote className="h-8 w-8 text-indigo-300 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Eris RWA has revolutionized our investment strategy. The platform's 
                compliance framework and asset quality are unmatched in the market."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  MH
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Michael Harrison</div>
                  <div className="text-sm text-gray-600">CIO, Meridian Capital Partners</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-4 text-sm text-purple-600 font-medium">Verified</span>
              </div>
              <Quote className="h-8 w-8 text-purple-300 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The tokenization process was seamless, and we've seen unprecedented investor 
                engagement. The platform's analytics provide invaluable insights."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  SC
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Sarah Chen</div>
                  <div className="text-sm text-gray-600">Founder, GreenTech Properties</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg border border-pink-100">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-4 text-sm text-pink-600 font-medium">Verified</span>
              </div>
              <Quote className="h-8 w-8 text-pink-300 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Outstanding platform for RWA investing. The education hub and 
                AI-powered recommendations have significantly improved our portfolio performance."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  DK
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">David Kim</div>
                  <div className="text-sm text-gray-600">Portfolio Manager, Apex Investments</div>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-4 text-sm text-orange-600 font-medium">Verified</span>
              </div>
              <Quote className="h-8 w-8 text-orange-300 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The compliance framework saved us months of regulatory work. Professional service 
                and exceptional support throughout the entire tokenization process."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  ER
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Elena Rodriguez</div>
                  <div className="text-sm text-gray-600">CEO, Urban Development Corp</div>
                </div>
              </div>
            </div>

            {/* Review 5 */}
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 shadow-lg border border-teal-100">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-4 text-sm text-teal-600 font-medium">Verified</span>
              </div>
              <Quote className="h-8 w-8 text-teal-300 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Impressive platform with enterprise-grade security. The curated asset selection 
                and due diligence process gives us complete confidence in our investments."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  JW
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">James Wilson</div>
                  <div className="text-sm text-gray-600">Managing Director, Sterling Fund</div>
                </div>
              </div>
            </div>

            {/* Review 6 */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-lg border border-emerald-100">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-4 text-sm text-emerald-600 font-medium">Verified</span>
              </div>
              <Quote className="h-8 w-8 text-emerald-300 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The global investor network access has been transformative for our fundraising. 
                We connected with qualified investors we never would have reached otherwise."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  AL
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Amanda Liu</div>
                  <div className="text-sm text-gray-600">CFO, Renewable Energy Solutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Metrics */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">4.9/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">2,400+</div>
                <div className="text-sm text-gray-600">Verified Reviews</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">850+</div>
                <div className="text-sm text-gray-600">Active Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Market Statistics */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Market-Leading Performance
            </h2>
            <p className="text-xl text-slate-300">
              Trusted by organizations managing billions in real-world assets
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">$12.8B+</div>
              <div className="text-slate-300 font-medium">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">2,400+</div>
              <div className="text-slate-300 font-medium">Active Investors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">850+</div>
              <div className="text-slate-300 font-medium">Tokenized Assets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">99.7%</div>
              <div className="text-slate-300 font-medium">Platform Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built to meet the highest standards of security and regulatory compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gray-50">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SOC 2 Type II Certified</h3>
              <p className="text-gray-600">
                Independently audited security controls and data protection measures
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gray-50">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bank-Level Encryption</h3>
              <p className="text-gray-600">
                End-to-end encryption with multi-signature wallet security
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gray-50">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Jurisdiction Compliance</h3>
              <p className="text-gray-600">
                SEC, MiFID II, and GDPR compliant across major markets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Investment Strategy?
            </span>
          </h2>
          <p className="text-xl mb-12 text-slate-300 max-w-3xl mx-auto">
            Join the revolution in real-world asset investing. 
            Access premium opportunities with enterprise-grade infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/register?type=investor"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <BarChart3 className="h-5 w-5 mr-2" />
              Start Investing Today
            </Link>
            <Link
              to="/register?type=rwa-project"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-slate-600 text-white hover:bg-slate-800 transition-all duration-200"
            >
              <Building2 className="h-5 w-5 mr-2" />
              List Your Assets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;