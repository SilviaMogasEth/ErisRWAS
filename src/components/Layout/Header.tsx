import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogOut, User, Bell, Settings } from 'lucide-react';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [logoClicked, setLogoClicked] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleLogoClick = () => {
    setLogoClicked(true);
    setTimeout(() => setLogoClicked(false), 600);
  };

  const LogoComponent = () => (
    <div 
      className={`relative w-12 h-12 cursor-pointer transition-all duration-300 ${
        logoClicked ? 'scale-110 rotate-12' : 'hover:scale-105'
      }`}
      onClick={handleLogoClick}
    >
      {/* Outer cosmic ring */}
      <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-400/20 to-pink-500/30 rounded-full blur-md transition-all duration-300 ${
        logoClicked ? 'scale-125 opacity-100' : 'opacity-70'
      }`}></div>
      
      {/* Main celestial body */}
      <div className={`relative w-12 h-12 bg-gradient-to-br from-indigo-800 via-purple-900 to-pink-900 rounded-full overflow-hidden border border-indigo-600/50 transition-all duration-300 ${
        logoClicked ? 'shadow-2xl shadow-purple-500/50' : 'shadow-lg'
      }`}>
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
        <div className={`absolute -inset-1 bg-gradient-to-r from-indigo-400/20 via-purple-300/10 to-pink-400/20 rounded-full transition-all duration-300 ${
          logoClicked ? 'animate-pulse scale-110' : 'animate-pulse'
        }`}></div>
      </div>
      
      {/* Orbital ring */}
      <div className={`absolute -inset-2 border border-indigo-400/20 rounded-full transition-all duration-300 ${
        logoClicked ? 'scale-110 border-purple-400/40' : ''
      }`}></div>
    </div>
  );

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <LogoComponent />
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-800 via-purple-900 to-pink-800 bg-clip-text text-transparent">
                Eris RWA
              </span>
              <div className="text-xs text-gray-500 -mt-1 font-medium tracking-wide">Asset Platform</div>
            </div>
          </Link>

          {user && (
            <nav className="hidden md:flex space-x-1">
              <Link
                to="/dashboard"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive('/dashboard')
                    ? 'text-indigo-700 bg-indigo-50 shadow-sm'
                    : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'
                }`}
              >
                Dashboard
              </Link>
              {user.type === 'investor' && (
                <>
                  <Link
                    to="/marketplace"
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive('/marketplace')
                        ? 'text-indigo-700 bg-indigo-50 shadow-sm'
                        : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'
                    }`}
                  >
                    Marketplace
                  </Link>
                  <Link
                    to="/academy"
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive('/academy')
                        ? 'text-indigo-700 bg-indigo-50 shadow-sm'
                        : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'
                    }`}
                  >
                    Education
                  </Link>
                </>
              )}
            </nav>
          )}

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bell className="h-5 w-5" />
                </button>
                
                <div className="flex items-center space-x-3 pl-3 border-l border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-xs text-gray-500">
                        {user.type === 'investor' ? 'Investor' : 'Asset Originator'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                      <Settings className="h-4 w-4" />
                    </button>
                    <button
                      onClick={logout}
                      className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-indigo-700 text-sm font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;