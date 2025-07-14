import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';
import { User } from '../types';

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// User document interface for Firebase
export interface FirebaseUser {
  id: string;
  email: string;
  name: string;
  type: 'investor' | 'rwa-project';
  walletAddress?: string;
  kycStatus?: 'pending' | 'approved' | 'rejected';
  profileCompleted?: boolean;
  subscriptionTier?: 'free' | 'premium';
  isPrivyUser?: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  lastLoginAt?: Timestamp;
  // Additional role-specific fields
  investorProfile?: {
    riskTolerance?: 'low' | 'medium' | 'high';
    investmentExperience?: 'beginner' | 'intermediate' | 'advanced';
    preferredAssetTypes?: string[];
    totalInvested?: number;
  };
  originatorProfile?: {
    companyName?: string;
    companySize?: 'startup' | 'small' | 'medium' | 'large';
    industry?: string;
    totalProjectsListed?: number;
    totalFundsRaised?: number;
  };
}

// Firebase service class
export class FirebaseUserService {
  private static instance: FirebaseUserService;
  
  static getInstance(): FirebaseUserService {
    if (!FirebaseUserService.instance) {
      FirebaseUserService.instance = new FirebaseUserService();
    }
    return FirebaseUserService.instance;
  }

  // Get user by ID
  async getUserById(userId: string): Promise<FirebaseUser | null> {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (userDoc.exists()) {
        return userDoc.data() as FirebaseUser;
      }
      return null;
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw error;
    }
  }

  // Get user by email
  async getUserByEmail(email: string): Promise<FirebaseUser | null> {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        return userDoc.data() as FirebaseUser;
      }
      return null;
    } catch (error) {
      console.error('Error fetching user by email:', error);
      throw error;
    }
  }

  // Get user by wallet address
  async getUserByWalletAddress(walletAddress: string): Promise<FirebaseUser | null> {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('walletAddress', '==', walletAddress));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        return userDoc.data() as FirebaseUser;
      }
      return null;
    } catch (error) {
      console.error('Error fetching user by wallet address:', error);
      throw error;
    }
  }

  // Create new user
  async createUser(userData: Omit<FirebaseUser, 'createdAt' | 'updatedAt'>): Promise<FirebaseUser> {
    try {
      const userRef = doc(db, 'users', userData.id);
      const newUser: FirebaseUser = {
        ...userData,
        createdAt: serverTimestamp() as Timestamp,
        updatedAt: serverTimestamp() as Timestamp,
      };
      
      await setDoc(userRef, newUser);
      return newUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  // Update user
  async updateUser(userId: string, updates: Partial<FirebaseUser>): Promise<void> {
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        ...updates,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  // Update user role and create role-specific profile
  async updateUserRole(userId: string, role: 'investor' | 'rwa-project'): Promise<void> {
    try {
      const updates: Partial<FirebaseUser> = {
        type: role,
        updatedAt: serverTimestamp() as Timestamp,
      };

      // Initialize role-specific profile
      if (role === 'investor') {
        updates.investorProfile = {
          riskTolerance: 'medium',
          investmentExperience: 'beginner',
          preferredAssetTypes: [],
          totalInvested: 0,
        };
        updates.kycStatus = 'pending';
        updates.subscriptionTier = 'free';
      } else {
        updates.originatorProfile = {
          companyName: '',
          companySize: 'startup',
          industry: '',
          totalProjectsListed: 0,
          totalFundsRaised: 0,
        };
      }

      await this.updateUser(userId, updates);
    } catch (error) {
      console.error('Error updating user role:', error);
      throw error;
    }
  }

  // Record last login
  async recordLastLogin(userId: string): Promise<void> {
    try {
      await this.updateUser(userId, {
        lastLoginAt: serverTimestamp() as Timestamp,
      });
    } catch (error) {
      console.error('Error recording last login:', error);
      throw error;
    }
  }

  // Convert Firebase user to local User interface
  convertToLocalUser(firebaseUser: FirebaseUser): User {
    return {
      id: firebaseUser.id,
      email: firebaseUser.email,
      name: firebaseUser.name,
      type: firebaseUser.type,
      walletAddress: firebaseUser.walletAddress,
      kycStatus: firebaseUser.kycStatus,
      profileCompleted: firebaseUser.profileCompleted,
      subscriptionTier: firebaseUser.subscriptionTier,
      isPrivyUser: firebaseUser.isPrivyUser,
    };
  }

  // Check if user needs role selection
  async userNeedsRoleSelection(userId: string, email?: string, walletAddress?: string): Promise<boolean> {
    try {
      let user: FirebaseUser | null = null;

      // Try to find user by ID first
      if (userId) {
        user = await this.getUserById(userId);
      }

      // Fallback to email
      if (!user && email) {
        user = await this.getUserByEmail(email);
      }

      // Fallback to wallet address
      if (!user && walletAddress) {
        user = await this.getUserByWalletAddress(walletAddress);
      }

      // If no user exists or user doesn't have a role, they need role selection
      return !user || !user.type;
    } catch (error) {
      console.error('Error checking if user needs role selection:', error);
      return true; // Default to showing role selection on error
    }
  }

  // Create user with role selection
  async createUserWithRole(
    userData: {
      id: string;
      email: string;
      name: string;
      walletAddress?: string;
      isPrivyUser?: boolean;
    },
    role: 'investor' | 'rwa-project'
  ): Promise<FirebaseUser> {
    try {
      const newUserData: Omit<FirebaseUser, 'createdAt' | 'updatedAt'> = {
        ...userData,
        type: role,
        profileCompleted: false,
      };

      // Add role-specific defaults
      if (role === 'investor') {
        newUserData.kycStatus = 'pending';
        newUserData.subscriptionTier = 'free';
        newUserData.investorProfile = {
          riskTolerance: 'medium',
          investmentExperience: 'beginner',
          preferredAssetTypes: [],
          totalInvested: 0,
        };
      } else {
        newUserData.originatorProfile = {
          companyName: '',
          companySize: 'startup',
          industry: '',
          totalProjectsListed: 0,
          totalFundsRaised: 0,
        };
      }

      return await this.createUser(newUserData);
    } catch (error) {
      console.error('Error creating user with role:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const firebaseUserService = FirebaseUserService.getInstance();