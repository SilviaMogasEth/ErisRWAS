import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, type: 'investor' | 'rwa-project', isDemo?: boolean) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
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

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('rwa-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

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

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rwa-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};