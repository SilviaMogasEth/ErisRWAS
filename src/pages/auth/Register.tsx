import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Mail, Lock, User, Users, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const Register: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') as 'investor' | 'rwa-project' || 'investor';
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState<'investor' | 'rwa-project'>(initialType);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Always create new user accounts (isDemo = false)
      await login(email, password, userType, false);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const LogoComponent = () => (
    <div className="relative w-12 h-12">
      {/* Outer cosmic ring */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-400/20 to-pink-500/30 rounded-full blur-md"></div>
      
      {/* Main celestial body */}
      <div className="relative w-12 h-12 bg-gradient-to-br from-indigo-800 via-purple-900 to-pink-900 rounded-full overflow-hidden border border-indigo-600/50">
        {/* Surface texture gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/15 via-transparent to-purple-900/30"></div>
        
        {/* Cosmic features */}
        <div className="absolute top-2 left-3 w-2.5 h-2.5 bg-indigo-500/60 rounded-full shadow-inner"></div>
        <div className="absolute bottom-2.5 right-1.5 w-1.5 h-1.5 bg-purple-400/50 rounded-full shadow-inner"></div>
        <div className="absolute top-4 right-3 w-1 h-1 bg-pink-500/40 rounded-full"></div>
        <div className="absolute bottom-4 left-2 w-0.5 h-0.5 bg-indigo-400/60 rounded-full"></div>
        
        {/* Bright cosmic highlight */}
        <div className="absolute top-2.5 left-4 w-3.5 h-3.5 bg-gradient-to-br from-white/50 via-indigo-100/40 to-transparent rounded-full blur-sm"></div>
        <div className="absolute top-3 left-4.5 w-2 h-2 bg-gradient-to-br from-white/70 to-indigo-200/50 rounded-full"></div>
        
        {/* Eris aura effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400/20 via-purple-300/10 to-pink-400/20 rounded-full animate-pulse"></div>
      </div>
      
      {/* Orbital ring */}
      <div className="absolute -inset-2 border border-indigo-400/20 rounded-full"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <Link to="/" className="flex items-center justify-center space-x-3 mb-6">
              <LogoComponent />
              <div>
                <span className="text-xl font-bold text-gray-900">Eris RWA</span>
                <div className="text-xs text-gray-500 -mt-1">Asset Platform</div>
              </div>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Request Platform Access</h2>
            <p className="text-gray-600">Join the RWA ecosystem</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* User Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Platform Type</label>
              <div className="grid grid-cols-1 gap-3">
                <button
                  type="button"
                  onClick={() => setUserType('investor')}
                  className={`flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${
                    userType === 'investor'
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <User className="h-6 w-6 mr-3" />
                  <div className="text-left flex-1">
                    <div className="font-semibold">Investor Platform</div>
                    <div className="text-sm opacity-75">Access curated RWA investment opportunities</div>
                  </div>
                  {userType === 'investor' && <CheckCircle className="h-5 w-5 text-indigo-600" />}
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('rwa-project')}
                  className={`flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${
                    userType === 'rwa-project'
                      ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-sm'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Users className="h-6 w-6 mr-3" />
                  <div className="text-left flex-1">
                    <div className="font-semibold">Asset Originator Platform</div>
                    <div className="text-sm opacity-75">Tokenize and list your real-world assets</div>
                  </div>
                  {userType === 'rwa-project' && <CheckCircle className="h-5 w-5 text-purple-600" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Create a secure password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  id="agree-terms"
                  name="agree-terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the{' '}
                  <Link to="/terms" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  id="accredited-investor"
                  name="accredited-investor"
                  type="checkbox"
                  required={userType === 'investor'}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="accredited-investor" className="ml-2 block text-sm text-gray-900">
                  {userType === 'investor' 
                    ? 'I confirm I am an accredited investor'
                    : 'I represent a legitimate asset origination entity'
                  }
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ${
                userType === 'investor'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:ring-indigo-500 shadow-lg hover:shadow-xl'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:ring-purple-500 shadow-lg hover:shadow-xl'
              } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                'Submitting Request...'
              ) : (
                <>
                  Request Platform Access
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <div className="text-center pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                  Sign In
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 mb-2">
                <Shield className="h-4 w-4" />
                <span>Enterprise Security & Compliance</span>
              </div>
              <p className="text-xs text-gray-400">
                All applications are subject to verification and approval
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;