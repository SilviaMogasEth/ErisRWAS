import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Linkedin, Globe, Award, Users, Target, TrendingUp, Shield, Star, Heart, Zap } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
              From a chance meeting in Bangkok to building the future of real-world asset investing
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                A Dream Born in Bangkok
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  It was during a bustling Web3 conference in Bangkok where two passionate minds collided. 
                  Silvia, with her deep understanding of traditional finance and investment strategies, 
                  met Julio, a blockchain architect with a vision for decentralized systems.
                </p>
                <p>
                  Over late-night conversations about the future of finance, we realized that the world 
                  was on the brink of a massive transformation. Real-world assets were about to be 
                  tokenized, and we wanted to be at the forefront of this revolution.
                </p>
                <p>
                  We believe that <strong>everything will be tokenized</strong> – from real estate and 
                  commodities to art and intellectual property. Our mission became clear: help people 
                  improve their wealth while investing in the future of asset ownership.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Target className="h-6 w-6 mr-3 mt-1 text-indigo-200" />
                    <div>
                      <h4 className="font-semibold mb-2">Democratize Access</h4>
                      <p className="text-indigo-100">Make premium investments accessible to everyone, not just the ultra-wealthy.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 mr-3 mt-1 text-indigo-200" />
                    <div>
                      <h4 className="font-semibold mb-2">Ensure Security</h4>
                      <p className="text-indigo-100">Build enterprise-grade security and compliance into every aspect of our platform.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="h-6 w-6 mr-3 mt-1 text-indigo-200" />
                    <div>
                      <h4 className="font-semibold mb-2">Drive Innovation</h4>
                      <p className="text-indigo-100">Pioneer the future of asset tokenization and blockchain-based investing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Eris RWA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600">
                Complete transparency in all our operations, from fees to investment performance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security</h3>
              <p className="text-gray-600">
                Bank-level security and regulatory compliance to protect our investors.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Pushing the boundaries of what's possible in blockchain-based investing.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                Building a global community of informed and empowered investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Founders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complementary team with the skills and vision to revolutionize RWA investing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Silvia Mogas */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg" 
                    alt="Silvia Mogas"
                    className="w-32 h-32 rounded-xl object-cover shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Silvia Mogas</h3>
                  <p className="text-indigo-600 font-semibold mb-4">CEO & Co-Founder</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Silvia brings over a decade of experience in traditional finance and investment management. 
                    Her expertise in regulatory compliance and institutional investing has been instrumental 
                    in building Eris RWA's enterprise-grade platform. She's passionate about democratizing 
                    access to premium investment opportunities.
                  </p>
                  <div className="flex items-center space-x-4">
                    <a 
                      href="https://linkedin.com/in/silviamogas" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-gray-600">Finance Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Julio M Cruz */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.pexels.com/photos/3760068/pexels-photo-3760068.jpeg" 
                    alt="Julio M Cruz"
                    className="w-32 h-32 rounded-xl object-cover shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Julio M Cruz</h3>
                  <p className="text-purple-600 font-semibold mb-4">CTO & Co-Founder</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Julio is a blockchain architect with extensive experience in building scalable 
                    decentralized systems. His technical vision and deep understanding of smart contracts 
                    and tokenization protocols form the backbone of our platform's innovative technology stack.
                  </p>
                  <div className="flex items-center space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/juliomcruz/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-gray-600">Blockchain Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-12 w-12 text-yellow-400 mr-4" />
              <h2 className="text-4xl font-bold">Recognition & Achievements</h2>
            </div>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Our commitment to innovation has been recognized by the industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-yellow-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Permissionless 2025 Winner</h3>
              <p className="text-indigo-200">
                Won prize pool at the prestigious Permissionless hackathon with our Flow Passport integration
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
              <div className="bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">SOC 2 Certified</h3>
              <p className="text-indigo-200">
                Achieved enterprise-grade security certification for our platform infrastructure
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
              <div className="bg-green-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-green-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Industry Leaders</h3>
              <p className="text-indigo-200">
                Positioned as thought leaders in the RWA space with innovative tokenization solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Future We're Building</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our roadmap for revolutionizing how the world invests in real-world assets
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-12 border border-indigo-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Everything Will Be Tokenized</h3>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    We're not just building a platform – we're architecting the future of asset ownership. 
                    In the coming years, every valuable asset will exist on the blockchain.
                  </p>
                  <p>
                    From skyscrapers in Manhattan to renewable energy farms in California, from rare art 
                    collections to intellectual property rights – everything will be fractionalized, 
                    tokenized, and accessible to investors worldwide.
                  </p>
                  <p>
                    <strong>Join us in building this future.</strong> Together, we're creating a world where 
                    geographic boundaries don't limit investment opportunities, where transparency is the 
                    norm, and where everyone has access to wealth-building assets.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">2025: Foundation</h4>
                  <p className="text-gray-600">Launch core platform with premium real estate and energy assets</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">2026: Expansion</h4>
                  <p className="text-gray-600">Add commodities, art, and intellectual property tokenization</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">2027: Global</h4>
                  <p className="text-gray-600">International expansion with multi-jurisdiction compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Be part of the revolution that's democratizing access to premium investments. 
            The future of asset ownership starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register?type=investor"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-indigo-600 hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Investing
            </Link>
            <Link
              to="/register?type=rwa-project"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-indigo-600 transition-colors"
            >
              List Your Assets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;