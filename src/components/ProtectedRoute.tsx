import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContextUpdated';

interface ProtectedRouteProps {
  children: React.ReactNode;
  userType?: 'investor' | 'rwa-project';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, userType }) => {
  const { user, isLoading, needsRoleSelection } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (needsRoleSelection) {
    return <Navigate to="/role-selection" replace />;
  }

  if (userType && user.type !== userType) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;