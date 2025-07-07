import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Mail, Lock, User, Users, Shield, ArrowRight, Play, Star } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'investor' | 'rwa-project'>('investor');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(email, password, userType, false); // Regular login
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async (demoType: 'investor' | 'rwa-project') => {
    setIsLoading(true);
    
    try {
      const demoEmail = demoType === 'investor' ? 'investor@demo.com' : 'originator@demo.com';
      await login(demoEmail, 'password', demoType, true); // Demo login
      navigate('/dashboard');
    } catch (error) {
      console.error('Demo login failed:', error);
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Access your platform</p>
          </div>

          {/* Demo Login Section */}
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
            <div className="flex items-center mb-4">
              <Play className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Try Demo Accounts</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Explore the platform with pre-filled demo data
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleDemoLogin('investor')}
                disabled={isLoading}
                className="flex items-center justify-center p-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-colors text-sm font-medium disabled:opacity-50"
              >
                <User className="h-4 w-4 mr-1" />
                Demo Investor
              </button>
              <button
                onClick={() => handleDemoLogin('rwa-project')}
                disabled={isLoading}
                className="flex items-center justify-center p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors text-sm font-medium disabled:opacity-50"
              >
                <Users className="h-4 w-4 mr-1" />
                Demo Originator
              </button>
            </div>
            <div className="mt-3 text-xs text-gray-500 text-center">
              <strong>Demo Credentials:</strong> investor@demo.com / originator@demo.com (password: password)
            </div>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign in with your account</span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* User Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Platform Access</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUserType('investor')}
                  className={`flex items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 ${
                    userType === 'investor'
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <User className="h-5 w-5 mr-2" />
                  <div className="text-left">
                    <div className="font-medium">Investor</div>
                    <div className="text-xs opacity-75">Investment Platform</div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('rwa-project')}
                  className={`flex items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 ${
                    userType === 'rwa-project'
                      ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-sm'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Users className="h-5 w-5 mr-2" />
                  <div className="text-left">
                    <div className="font-medium">Originator</div>
                    <div className="text-xs opacity-75">Asset Platform</div>
                  </div>
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
                  placeholder="Enter your email address"
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
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Keep me signed in
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                  Forgot password?
                </a>
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
                'Signing in...'
              ) : (
                <>
                  Sign In
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <div className="text-center pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                  Request Access
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
              <Shield className="h-4 w-4" />
              <span>SOC 2 Certified • Bank-Level Security</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;