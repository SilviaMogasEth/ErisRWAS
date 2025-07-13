import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { useAccount } from 'wagmi';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, type: 'investor' | 'rwa-project', isDemo?: boolean) => Promise<void>;
  loginWithPrivy: () => void;
  logout: () => void;
  isLoading: boolean;
  isPrivyAuthenticated: boolean;
  privyUser: any;
  walletAddress: string | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Check if Privy is available
  const appId = import.meta.env.VITE_PRIVY_APP_ID;
  const isPrivyAvailable = appId && appId !== 'dummy-build-value';
  
  // Conditionally use Privy hooks
  let privyLogin: (() => void) | undefined;
  let privyLogout: (() => void) | undefined;
  let isPrivyAuthenticated = false;
  let privyUser: any = null;
  let walletAddress: string | undefined;
  
  try {
    if (isPrivyAvailable) {
      const privyHooks = usePrivy();
      const accountHooks = useAccount();
      
      privyLogin = privyHooks.login;
      privyLogout = privyHooks.logout;
      isPrivyAuthenticated = privyHooks.authenticated;
      privyUser = privyHooks.user;
      walletAddress = accountHooks.address;
    }
  } catch (error) {
    // Fallback if hooks fail
    console.warn('Privy hooks not available:', error);
  }

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('rwa-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    // If Privy is authenticated but we don't have a local user, create one
    if (isPrivyAuthenticated && privyUser && !savedUser) {
      const privyBasedUser: User = {
        id: privyUser.id,
        email: privyUser.email?.address || privyUser.wallet?.address || 'unknown@privy.com',
        name: privyUser.email?.address?.split('@')[0] || 'Privy User',
        type: 'investor', // Default to investor for Privy users
        kycStatus: 'pending',
        profileCompleted: false,
        subscriptionTier: 'free',
        walletAddress: walletAddress,
        isPrivyUser: true,
      };
      setUser(privyBasedUser);
      localStorage.setItem('rwa-user', JSON.stringify(privyBasedUser));
    }
    
    setIsLoading(false);
  }, [isPrivyAuthenticated, privyUser]);

  const login = async (email: string, password: string, type: 'investor' | 'rwa-project', isDemo: boolean = false) => {
    let mockUser: User;

    if (isDemo) {
      // Demo accounts with pre-filled data
      if (type === 'investor') {
        mockUser = {
          id: 'demo-investor-1',
          email: 'investor@demo.com',
          name: 'Michael Harrison',
          type: 'investor',
          kycStatus: 'approved',
          profileCompleted: true,
          subscriptionTier: 'premium',
        };
      } else {
        mockUser = {
          id: 'demo-originator-1',
          email: 'originator@demo.com',
          name: 'Sarah Chen',
          type: 'rwa-project',
          kycStatus: 'approved',
          profileCompleted: true,
          subscriptionTier: 'premium',
        };
      }
    } else {
      // New user accounts with empty profiles
      mockUser = {
        id: `new-${type}-${Date.now()}`,
        email,
        name: email.split('@')[0],
        type,
        kycStatus: type === 'investor' ? 'pending' : undefined,
        profileCompleted: false,
        subscriptionTier: type === 'investor' ? 'free' : undefined,
      };
    }
    
    setUser(mockUser);
    localStorage.setItem('rwa-user', JSON.stringify(mockUser));
  };

  const loginWithPrivy = () => {
    if (privyLogin) {
      privyLogin();
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rwa-user');
    if (privyLogout && isPrivyAuthenticated) {
      privyLogout();
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      loginWithPrivy,
      logout, 
      isLoading,
      isPrivyAuthenticated,
      privyUser,
      walletAddress
    }}>
      {children}
    </AuthContext.Provider>
  );
};