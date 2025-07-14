import React, { useState } from 'react';
import { User, Users, TrendingUp, Building, ArrowRight, CheckCircle } from 'lucide-react';

interface RoleSelectionProps {
  onRoleSelect: (role: 'investor' | 'rwa-project') => Promise<void>;
  userEmail?: string;
  isLoading?: boolean;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ 
  onRoleSelect, 
  userEmail,
  isLoading = false 
}) => {
  const [selectedRole, setSelectedRole] = useState<'investor' | 'rwa-project' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!selectedRole) return;
    
    setIsSubmitting(true);
    try {
      await onRoleSelect(selectedRole);
    } catch (error) {
      console.error('Role selection failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const roleOptions = [
    {
      id: 'investor' as const,
      title: 'Investor',
      subtitle: 'Investment Platform',
      description: 'Discover and invest in tokenized real-world assets',
      icon: User,
      gradient: 'from-blue-600 to-indigo-600',
      hoverGradient: 'from-blue-700 to-indigo-700',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      features: [
        'Browse premium RWA opportunities',
        'Access educational academy',
        'Portfolio tracking & analytics',
        'Participate in exclusive investments'
      ]
    },
    {
      id: 'rwa-project' as const,
      title: 'Asset Originator',
      subtitle: 'Asset Platform',
      description: 'List and manage your real-world asset projects',
      icon: Users,
      gradient: 'from-purple-600 to-pink-600',
      hoverGradient: 'from-purple-700 to-pink-700',
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      features: [
        'List your RWA projects',
        'Manage investor relations',
        'Access origination tools',
        'Track funding progress'
      ]
    }
  ];

  const LogoComponent = () => (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-400/20 to-pink-500/30 rounded-full blur-md"></div>
      <div className="relative w-12 h-12 bg-gradient-to-br from-indigo-800 via-purple-900 to-pink-900 rounded-full overflow-hidden border border-indigo-600/50">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/15 via-transparent to-purple-900/30"></div>
        <div className="absolute top-2 left-3 w-2.5 h-2.5 bg-indigo-500/60 rounded-full shadow-inner"></div>
        <div className="absolute bottom-2.5 right-1.5 w-1.5 h-1.5 bg-purple-400/50 rounded-full shadow-inner"></div>
        <div className="absolute top-4 right-3 w-1 h-1 bg-pink-500/40 rounded-full"></div>
        <div className="absolute bottom-4 left-2 w-0.5 h-0.5 bg-indigo-400/60 rounded-full"></div>
        <div className="absolute top-2.5 left-4 w-3.5 h-3.5 bg-gradient-to-br from-white/50 via-indigo-100/40 to-transparent rounded-full blur-sm"></div>
        <div className="absolute top-3 left-4.5 w-2 h-2 bg-gradient-to-br from-white/70 to-indigo-200/50 rounded-full"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400/20 via-purple-300/10 to-pink-400/20 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute -inset-2 border border-indigo-400/20 rounded-full"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-8 text-white text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <LogoComponent />
              <div>
                <span className="text-xl font-bold">Eris RWA</span>
                <div className="text-sm opacity-90 -mt-1">Asset Platform</div>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">Choose Your Platform</h1>
            <p className="text-indigo-100 text-lg">
              Select how you'd like to use the Eris RWA platform
            </p>
            {userEmail && (
              <p className="text-indigo-200 text-sm mt-3">
                Welcome, {userEmail}
              </p>
            )}
          </div>

          {/* Role Selection */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {roleOptions.map((role) => {
                const Icon = role.icon;
                const isSelected = selectedRole === role.id;
                
                return (
                  <div
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`relative cursor-pointer group transition-all duration-300 ${
                      isSelected ? 'transform scale-105' : 'hover:scale-102'
                    }`}
                  >
                    <div className={`bg-white rounded-2xl border-3 p-8 shadow-lg transition-all duration-300 ${
                      isSelected 
                        ? `${role.borderColor} shadow-xl ${role.bgColor}` 
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                    }`}>
                      {/* Selection Indicator */}
                      {isSelected && (
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                      )}

                      {/* Icon & Title */}
                      <div className="text-center mb-6">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${role.gradient} flex items-center justify-center shadow-lg`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{role.title}</h3>
                        <p className="text-gray-600 font-medium">{role.subtitle}</p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-center mb-6">{role.description}</p>

                      {/* Features */}
                      <div className="space-y-3">
                        {role.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${role.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Specialized Icons */}
                      <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center space-x-4">
                        {role.id === 'investor' ? (
                          <>
                            <TrendingUp className="h-5 w-5 text-gray-400" />
                            <Building className="h-5 w-5 text-gray-400" />
                          </>
                        ) : (
                          <>
                            <Building className="h-5 w-5 text-gray-400" />
                            <Users className="h-5 w-5 text-gray-400" />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Continue Button */}
            <div className="text-center">
              <button
                onClick={handleSubmit}
                disabled={!selectedRole || isSubmitting || isLoading}
                className={`px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center mx-auto space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  selectedRole 
                    ? 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700' 
                    : 'bg-gray-400 cursor-not-allowed'
                } ${isSubmitting || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting || isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Setting up your account...</span>
                  </>
                ) : (
                  <>
                    <span>Continue to Platform</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
              
              {!selectedRole && (
                <p className="text-gray-500 text-sm mt-3">
                  Please select your platform role to continue
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;