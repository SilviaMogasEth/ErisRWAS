import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContextUpdated';
import RoleSelection from '../../components/RoleSelection';

const RoleSelectionPage: React.FC = () => {
  const { setUserRole, privyUser, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleRoleSelect = async (role: 'investor' | 'rwa-project') => {
    try {
      await setUserRole(role);
      // Navigate to dashboard after successful role selection
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to set user role:', error);
      // You could show an error toast here
    }
  };

  const userEmail = privyUser?.email?.address || privyUser?.wallet?.address || undefined;

  return (
    <RoleSelection
      onRoleSelect={handleRoleSelect}
      userEmail={userEmail}
      isLoading={isLoading}
    />
  );
};

export default RoleSelectionPage;