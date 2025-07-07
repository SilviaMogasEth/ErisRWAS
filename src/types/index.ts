export interface User {
  id: string;
  email: string;
  name: string;
  type: 'investor' | 'rwa-project';
  kycStatus?: 'pending' | 'approved' | 'rejected';
  profileCompleted?: boolean;
  subscriptionTier?: 'free' | 'premium';
}

export interface RWA {
  id: string;
  title: string;
  description: string;
  category: string;
  value: number;
  currency: string;
  imageUrl: string;
  projectId: string;
  projectName: string;
  location: string;
  expectedReturn: number;
  minInvestment: number;
  totalValue: number;
  fundedPercentage: number;
  risk: 'low' | 'medium' | 'high';
  duration: string;
}

export interface InvestedRWA {
  id: string;
  title: string;
  imageUrl: string;
  investedAmount: number;
  currentValue: number;
  investmentDate: string;
  status: 'active' | 'completed' | 'pending';
  returnPercentage: number;
  category: string;
  location: string;
  projectName: string;
}

export interface AcademyLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  isPremium: boolean;
}