import React from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { Wallet, Trash2 } from 'lucide-react';

export function SimplePrivyButton() {
  const appId = import.meta.env.VITE_PRIVY_APP_ID;
  
  // If Privy is not configured, show disabled button
  if (!appId || appId === 'dummy-build-value') {
    return (
      <button 
        disabled
        className="w-full flex items-center justify-center p-4 bg-gray-400 text-white rounded-xl cursor-not-allowed"
      >
        <Wallet className="h-5 w-5 mr-3" />
        Privy Not Configured
      </button>
    );
  }

  const { login, logout, authenticated, user } = usePrivy();

  const handleAuth = () => {
    console.log('SimplePrivyButton clicked, authenticated:', authenticated);
    if (authenticated) {
      logout();
    } else {
      login();
    }
  };

  const forceClearSession = () => {
    console.log('Force clearing all sessions...');
    localStorage.clear();
    sessionStorage.clear();
    // Clear any Privy-specific storage
    Object.keys(localStorage).forEach(key => {
      if (key.includes('privy') || key.includes('wagmi') || key.includes('wallet')) {
        localStorage.removeItem(key);
      }
    });
    window.location.reload();
  };

  if (authenticated) {
    return (
      <div className="w-full p-4 bg-green-50 border border-green-200 rounded-xl">
        <div className="flex items-center justify-center text-green-700 mb-2">
          <Wallet className="h-5 w-5 mr-2" />
          Connected
        </div>
        {user?.email?.address && (
          <div className="text-sm text-green-600 text-center mb-3">
            {user.email.address}
          </div>
        )}
        <button
          onClick={handleAuth}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <button
        onClick={handleAuth}
        className="w-full flex items-center justify-center p-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl hover:from-emerald-700 hover:to-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
      >
        <Wallet className="h-5 w-5 mr-3" />
        Connect with Privy
      </button>
      
      {/* Temporary debug button */}
      <button
        onClick={forceClearSession}
        className="w-full flex items-center justify-center p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
      >
        <Trash2 className="h-4 w-4 mr-2" />
        Clear All Sessions (Debug)
      </button>
    </div>
  );
}