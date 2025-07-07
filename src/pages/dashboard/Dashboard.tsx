import React from 'react';
import { useAuth } from '../../context/AuthContext';
import InvestorDashboard from './InvestorDashboard';
import RWAProjectDashboard from './RWAProjectDashboard';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600">Please log in to access your dashboard.</p>
        </div>
      </div>
    );
  }

  return user.type === 'investor' ? <InvestorDashboard /> : <RWAProjectDashboard />;
};

export default Dashboard;