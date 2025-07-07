import React, { useState } from 'react';
import { User, X, ChevronRight, ChevronLeft } from 'lucide-react';

interface InvestorProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (profile: InvestorProfile) => void;
}

export interface InvestorProfile {
  investmentGoals: string[];
  riskTolerance: string;
  investmentHorizon: string;
  preferredRegions: string[];
  assetTypes: string[];
  investmentExperience: string;
  portfolioSize: string;
  liquidityNeeds: string;
  esgPreferences: string;
  communicationFrequency: string;
}

const InvestorProfileModal: React.FC<InvestorProfileModalProps> = ({ isOpen, onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [profile, setProfile] = useState<Partial<InvestorProfile>>({});

  if (!isOpen) return null;

  const questions = [
    {
      id: 'investmentGoals',
      title: 'What are your primary investment goals?',
      type: 'multiple',
      options: [
        'Capital appreciation',
        'Regular income generation',
        'Portfolio diversification',
        'Inflation protection',
        'Tax optimization',
        'Legacy building'
      ]
    },
    {
      id: 'riskTolerance',
      title: 'How would you describe your risk tolerance?',
      type: 'single',
      options: [
        'Conservative - Prefer stable, low-risk investments',
        'Moderate - Balanced approach to risk and return',
        'Aggressive - Comfortable with high-risk, high-reward investments',
        'Very Aggressive - Seeking maximum returns despite high volatility'
      ]
    },
    {
      id: 'investmentHorizon',
      title: 'What is your typical investment time horizon?',
      type: 'single',
      options: [
        'Short-term (1-3 years)',
        'Medium-term (3-7 years)',
        'Long-term (7-15 years)',
        'Very long-term (15+ years)'
      ]
    },
    {
      id: 'preferredRegions',
      title: 'Which geographic regions interest you most?',
      type: 'multiple',
      options: [
        'North America',
        'Europe',
        'Asia-Pacific',
        'Latin America',
        'Middle East & Africa',
        'Global/Diversified'
      ]
    },
    {
      id: 'assetTypes',
      title: 'Which types of real-world assets interest you?',
      type: 'multiple',
      options: [
        'Commercial Real Estate',
        'Residential Real Estate',
        'Renewable Energy Projects',
        'Infrastructure',
        'Agriculture & Commodities',
        'Art & Collectibles'
      ]
    },
    {
      id: 'investmentExperience',
      title: 'How would you rate your investment experience?',
      type: 'single',
      options: [
        'Beginner - New to investing',
        'Intermediate - Some experience with traditional investments',
        'Advanced - Experienced with alternative investments',
        'Expert - Professional investor or financial advisor'
      ]
    },
    {
      id: 'portfolioSize',
      title: 'What is your approximate investable portfolio size?',
      type: 'single',
      options: [
        'Under $50,000',
        '$50,000 - $250,000',
        '$250,000 - $1,000,000',
        '$1,000,000 - $5,000,000',
        'Over $5,000,000'
      ]
    },
    {
      id: 'liquidityNeeds',
      title: 'How important is liquidity to you?',
      type: 'single',
      options: [
        'Very Important - Need quick access to funds',
        'Moderately Important - Some liquidity preferred',
        'Less Important - Can lock up funds for better returns',
        'Not Important - Focused on long-term growth'
      ]
    },
    {
      id: 'esgPreferences',
      title: 'How important are ESG (Environmental, Social, Governance) factors?',
      type: 'single',
      options: [
        'Very Important - Only ESG-compliant investments',
        'Important - Strong preference for ESG investments',
        'Somewhat Important - Consider ESG when possible',
        'Not Important - Focus purely on financial returns'
      ]
    },
    {
      id: 'communicationFrequency',
      title: 'How often would you like to receive investment updates?',
      type: 'single',
      options: [
        'Weekly updates',
        'Monthly updates',
        'Quarterly updates',
        'Annual updates only',
        'On-demand only'
      ]
    }
  ];

  const currentQuestion = questions[currentStep];

  const handleAnswer = (answer: string | string[]) => {
    setProfile(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(profile as InvestorProfile);
      onClose();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isAnswered = () => {
    const answer = profile[currentQuestion.id as keyof InvestorProfile];
    if (currentQuestion.type === 'multiple') {
      return Array.isArray(answer) && answer.length > 0;
    }
    return !!answer;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <User className="h-6 w-6 text-blue-600 mr-3" />
            <div>
              <h2 className="text-xl font-bold text-gray-900">Investor Profile</h2>
              <p className="text-sm text-gray-600">Question {currentStep + 1} of {questions.length}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{currentQuestion.title}</h3>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = currentQuestion.type === 'multiple' 
                  ? (profile[currentQuestion.id as keyof InvestorProfile] as string[] || []).includes(option)
                  : profile[currentQuestion.id as keyof InvestorProfile] === option;

                return (
                  <button
                    key={index}
                    onClick={() => {
                      if (currentQuestion.type === 'multiple') {
                        const current = (profile[currentQuestion.id as keyof InvestorProfile] as string[]) || [];
                        const updated = isSelected 
                          ? current.filter(item => item !== option)
                          : [...current, option];
                        handleAnswer(updated);
                      } else {
                        handleAnswer(option);
                      }
                    }}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      {isSelected && (
                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {currentQuestion.type === 'multiple' && (
              <p className="text-sm text-gray-500 mt-4">
                You can select multiple options
              </p>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Previous
            </button>

            <button
              onClick={nextStep}
              disabled={!isAnswered()}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                isAnswered()
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {currentStep === questions.length - 1 ? 'Complete Profile' : 'Next'}
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorProfileModal;