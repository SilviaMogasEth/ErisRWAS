import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send, Award, Users, Trophy, CheckCircle, AlertCircle } from 'lucide-react';
import ApiClient from '../../utils/api';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Use our Resend API instead of mailto
      await ApiClient.sendContactForm({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        userType: 'general' // Footer form is for general inquiries
      });

      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Footer contact form error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="bg-slate-900 text-white pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* About Us Section */}
          <div>
            <div className="space-y-8">
              {/* About Us */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-2 text-yellow-400" />
                  About Us
                </h3>
                <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-6 border border-indigo-800/30">
                  <div className="flex items-center mb-4">
                    <Trophy className="h-6 w-6 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-semibold">Permissionless 2025</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    We participated in the hackathon during Permissionless 2025 with Flow Passport and won a prize pool. 
                    Our commitment to democratizing access to premium investments has positioned us as leaders in the RWA space.
                  </p>
                </div>
              </div>

              {/* Team */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-indigo-400" />
                  Our Team
                </h3>
                <div className="space-y-4">
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">Silvia Mogas</h4>
                        <p className="text-indigo-400 font-medium mb-2">CEO & Co-Founder</p>
                        <p className="text-gray-400 text-sm">Leading the vision for democratized RWA investing</p>
                      </div>
                      <a 
                        href="https://linkedin.com/in/silviamogas" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        Connect
                      </a>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">Julio M Cruz</h4>
                        <p className="text-purple-400 font-medium mb-2">CTO & Co-Founder</p>
                        <p className="text-gray-400 text-sm">Architecting the future of blockchain-based asset tokenization</p>
                      </div>
                      <a 
                        href="https://www.linkedin.com/in/juliomcruz/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        Connect
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Mail className="h-6 w-6 mr-2 text-purple-400" />
              Contact Us
            </h3>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
              <div className="flex items-center mb-4">
                <Mail className="h-5 w-5 text-purple-400 mr-3" />
                <a href="mailto:silviam@bmbweb3.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  silviam@bmbweb3.com
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Get in touch with our team for partnerships, investments, or general inquiries.
              </p>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-900/50 border border-green-600 rounded-lg p-4 flex items-center mb-4">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <p className="text-green-200">Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-900/50 border border-red-600 rounded-lg p-4 flex items-center mb-4">
                <AlertCircle className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                <p className="text-red-200">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Platform</h4>
              <ul className="space-y-3">
                <li><Link to="/marketplace-landing" className="text-gray-400 hover:text-white transition-colors">Marketplace</Link></li>
                <li><Link to="/academy-landing" className="text-gray-400 hover:text-white transition-colors">Education</Link></li>
                <li><Link to="/dashboard-landing" className="text-gray-400 hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about-us" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/about-us#team" className="text-gray-400 hover:text-white transition-colors">Team</Link></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/compliance" className="text-gray-400 hover:text-white transition-colors">Compliance</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 BMBWeb3 Global – FZCO. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-500 text-sm">Powered by Eris RWA Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;