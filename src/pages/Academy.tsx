import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { GraduationCap, Clock, Star, Play, Lock, BookOpen, TrendingUp, Shield, CheckCircle, Award, Trophy } from 'lucide-react';
import { AcademyLesson } from '../types';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface LessonContent {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  isPremium: boolean;
  quiz: QuizQuestion[];
}

const Academy: React.FC = () => {
  const { user } = useAuth();
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    // Demo users have some completed lessons
    if (user?.id?.startsWith('demo-')) {
      return ['1', '2']; // Demo users have completed first two lessons
    }
    return [];
  });

  // Comprehensive lesson content with all quiz questions
  const lessonContent: LessonContent[] = [
    {
      id: '1',
      title: 'Introduction to Real World Assets',
      description: 'Learn the fundamentals of RWA investing and tokenization',
      duration: '25 min',
      level: 'beginner',
      category: 'Fundamentals',
      isPremium: false,
      quiz: [
        {
          id: 'q1',
          question: 'What defines a real-world asset (RWA)?',
          options: [
            'Digital tokens native to blockchain',
            'Traditional financial instruments only',
            'Physical or tangible assets represented on-chain',
            'Virtual goods in gaming'
          ],
          correctAnswer: 2,
          explanation: 'RWAs are physical or tangible assets that are represented on blockchain through tokenization.'
        },
        {
          id: 'q2',
          question: 'Which of the following is not typically considered an RWA?',
          options: [
            'Real estate',
            'Tokenized art',
            'A DeFi lending protocol',
            'Commodities'
          ],
          correctAnswer: 2,
          explanation: 'DeFi lending protocols are native blockchain applications, not real-world assets.'
        },
        {
          id: 'q3',
          question: 'How does tokenization enhance the liquidity of traditionally illiquid assets?',
          options: [
            'By locking assets indefinitely',
            'By creating fractional ownership',
            'By converting to fiat currency',
            'By eliminating regulatory requirements'
          ],
          correctAnswer: 1,
          explanation: 'Tokenization allows fractional ownership, making it easier to buy and sell portions of assets.'
        },
        {
          id: 'q4',
          question: 'What is the primary benefit of fractional ownership in RWA investing?',
          options: [
            'Increases access for small investors',
            'Guarantees fixed returns',
            'Ensures asset depreciation',
            'Simplifies legal structure'
          ],
          correctAnswer: 0,
          explanation: 'Fractional ownership allows smaller investors to participate in high-value asset investments.'
        },
        {
          id: 'q5',
          question: 'Which stakeholder verifies the authenticity of an underlying asset before tokenization?',
          options: [
            'Oracle provider',
            'Asset custodian',
            'Smart contract developer',
            'Decentralized exchange'
          ],
          correctAnswer: 1,
          explanation: 'Asset custodians are responsible for verifying and holding the physical assets.'
        },
        {
          id: 'q6',
          question: 'What role does an asset custodian play in RWA platforms?',
          options: [
            'Provides liquidity',
            'Oversees KYC',
            'Holds the physical asset',
            'Mints tokens'
          ],
          correctAnswer: 2,
          explanation: 'Asset custodians are responsible for securely holding and managing the physical assets.'
        },
        {
          id: 'q7',
          question: 'Which of these is a common use case for RWA tokenization?',
          options: [
            'Supply chain tracking',
            'Fractional real estate',
            'Decentralized identity',
            'Social media advertising'
          ],
          correctAnswer: 1,
          explanation: 'Fractional real estate is one of the most popular and practical applications of RWA tokenization.'
        },
        {
          id: 'q8',
          question: 'How does blockchain immutability contribute to investor trust in RWAs?',
          options: [
            'Allows changes to transaction history',
            'Prevents unauthorized modifications',
            'Speeds up transaction times',
            'Lowers asset valuation'
          ],
          correctAnswer: 1,
          explanation: 'Blockchain immutability ensures that transaction records cannot be altered, building trust.'
        },
        {
          id: 'q9',
          question: 'Why might institutional investors be attracted to tokenized RWAs?',
          options: [
            'Unlimited leverage',
            '24/7 global trading',
            'Lack of regulation',
            'Guaranteed profits'
          ],
          correctAnswer: 1,
          explanation: 'The ability to trade assets 24/7 globally provides flexibility and liquidity benefits.'
        },
        {
          id: 'q10',
          question: 'What is the difference between a security token and a utility token in the context of RWAs?',
          options: [
            'Security tokens grant asset ownership rights; utility tokens provide platform access',
            'Security tokens are used for voting; utility tokens for dividends',
            'Both are identical',
            'Utility tokens represent equity'
          ],
          correctAnswer: 0,
          explanation: 'Security tokens represent ownership or investment rights, while utility tokens provide access to platform services.'
        }
      ]
    },
    {
      id: '2',
      title: 'Understanding Tokenization',
      description: 'How physical assets are converted into digital tokens',
      duration: '30 min',
      level: 'beginner',
      category: 'Fundamentals',
      isPremium: false,
      quiz: [
        {
          id: 'q1',
          question: 'What does "tokenization" mean in finance?',
          options: [
            'Converting physical assets into digital tokens',
            'Printing physical coins',
            'Developing decentralized applications',
            'Issuing debt certificates'
          ],
          correctAnswer: 0,
          explanation: 'Tokenization is the process of converting physical assets into digital tokens on a blockchain.'
        },
        {
          id: 'q2',
          question: 'How is the value of a tokenized asset represented on-chain?',
          options: [
            'Via market capitalization',
            'Embedded in token metadata',
            'Through off-chain fiat reserves',
            'Via user consensus'
          ],
          correctAnswer: 1,
          explanation: 'Asset value and details are typically embedded in token metadata for transparency.'
        },
        {
          id: 'q3',
          question: 'What is the typical first step in the tokenization process?',
          options: [
            'Secondary market trading',
            'Asset valuation and legal structuring',
            'Marketing campaign',
            'Smart contract audit'
          ],
          correctAnswer: 1,
          explanation: 'Asset valuation and legal structuring must be completed before tokenization can begin.'
        },
        {
          id: 'q4',
          question: 'Which standard is commonly used for fungible RWA tokens?',
          options: [
            'ERC-721',
            'ERC-20',
            'ERC-1155',
            'ERC-777'
          ],
          correctAnswer: 1,
          explanation: 'ERC-20 is the standard for fungible tokens, while ERC-721 is for non-fungible tokens.'
        },
        {
          id: 'q5',
          question: 'How do non-fungible tokens (NFTs) differ from fungible tokens in RWA applications?',
          options: [
            'NFTs are identical units; fungible tokens are unique',
            'NFTs represent unique assets; fungible tokens are interchangeable',
            'NFTs are cheaper',
            'Fungible tokens cannot be traded'
          ],
          correctAnswer: 1,
          explanation: 'NFTs represent unique, non-interchangeable assets, while fungible tokens are identical and interchangeable.'
        },
        {
          id: 'q6',
          question: 'What is a minting smart contract?',
          options: [
            'A contract that validates legal documents',
            'A contract that issues new tokens',
            'A contract that trades tokens',
            'A contract that locks tokens'
          ],
          correctAnswer: 1,
          explanation: 'Minting smart contracts are responsible for creating and issuing new tokens.'
        }
      ]
    },
    {
      id: '3',
      title: 'Risk Assessment in RWA Investing',
      description: 'Advanced techniques for evaluating investment risks',
      duration: '45 min',
      level: 'intermediate',
      category: 'Risk Management',
      isPremium: true,
      quiz: [
        {
          id: 'q1',
          question: 'What are the three core types of risk in RWA investments?',
          options: [
            'Market, credit, and operational',
            'Liquidity, legal, and reputational',
            'Operational, strategic, and model',
            'Technology, currency, and compliance'
          ],
          correctAnswer: 0,
          explanation: 'The three core risk types are market risk, credit risk, and operational risk.'
        },
        {
          id: 'q2',
          question: 'How is market risk quantified for a tokenized real estate asset?',
          options: [
            'Debt-to-equity ratio',
            'Beta relative to a real estate index',
            'Node consensus time',
            'Token velocity'
          ],
          correctAnswer: 1,
          explanation: 'Beta measures how much an asset moves relative to a benchmark index, quantifying market risk.'
        },
        {
          id: 'q3',
          question: 'What is counterparty risk in the context of RWA platforms?',
          options: [
            'Risk of blockchain forks',
            'Risk that a transaction party defaults',
            'Risk of price volatility',
            'Risk of smart contract bugs'
          ],
          correctAnswer: 1,
          explanation: 'Counterparty risk is the risk that one party in a transaction will default on their obligations.'
        },
        {
          id: 'q4',
          question: 'How can smart-contract vulnerability affect RWA investments?',
          options: [
            'Increases performance',
            'Leads to unauthorized fund withdrawals',
            'Improves liquidity',
            'Ensures compliance'
          ],
          correctAnswer: 1,
          explanation: 'Smart contract vulnerabilities can be exploited to steal funds or manipulate the system.'
        },
        {
          id: 'q5',
          question: 'What is liquidity risk, and how can it be measured on secondary markets?',
          options: [
            'Difficulty converting an asset to cash; measured via bid-ask spreads and volume',
            'Gas price fluctuations; measured via block time',
            'Counterparty default; measured via credit rating',
            'Legal issues; measured via document count'
          ],
          correctAnswer: 0,
          explanation: 'Liquidity risk is the difficulty of converting assets to cash, measured by bid-ask spreads and trading volume.'
        }
      ]
    },
    {
      id: '4',
      title: 'Portfolio Diversification Strategies',
      description: 'Building a balanced RWA investment portfolio',
      duration: '40 min',
      level: 'intermediate',
      category: 'Portfolio Management',
      isPremium: true,
      quiz: [
        {
          id: 'q1',
          question: 'Why is diversification important in an RWA portfolio?',
          options: [
            'It guarantees profits always',
            'It reduces unsystematic risk by spreading investments',
            'It increases fees',
            'It restricts asset choices'
          ],
          correctAnswer: 1,
          explanation: 'Diversification helps reduce unsystematic risk by spreading investments across different assets.'
        },
        {
          id: 'q2',
          question: 'How many assets should a beginner RWA portfolio ideally contain?',
          options: [
            'One asset',
            '5–10 assets',
            '50 assets',
            '100 assets'
          ],
          correctAnswer: 1,
          explanation: 'A beginner portfolio should contain 5-10 assets to achieve diversification without over-complexity.'
        },
        {
          id: 'q3',
          question: 'What is the difference between correlation and covariance in portfolio theory?',
          options: [
            'Correlation is normalized covariance; covariance measures joint variability',
            'They are identical',
            'Covariance is always positive',
            'Correlation ignores market risk'
          ],
          correctAnswer: 0,
          explanation: 'Correlation is normalized covariance, making it easier to interpret the relationship between assets.'
        },
        {
          id: 'q4',
          question: 'How can Modern Portfolio Theory be adapted for RWAs?',
          options: [
            'By ignoring risk',
            'By optimizing asset weights based on expected return and covariance',
            'By using only one asset',
            'By focusing only on digital tokens'
          ],
          correctAnswer: 1,
          explanation: 'Modern Portfolio Theory optimizes asset allocation based on expected returns and risk relationships.'
        }
      ]
    },
    {
      id: '5',
      title: 'Legal Framework and Compliance',
      description: 'Understanding regulatory aspects of RWA investments',
      duration: '50 min',
      level: 'advanced',
      category: 'Legal & Compliance',
      isPremium: true,
      quiz: [
        {
          id: 'q1',
          question: 'Which global regulator classification applies to security tokens?',
          options: [
            'Securities regulator (e.g., SEC, ESMA under MiCA)',
            'Commodity futures regulator',
            'Consumer protection agency',
            'Health regulator'
          ],
          correctAnswer: 0,
          explanation: 'Security tokens fall under securities regulations like SEC in the US and MiCA in Europe.'
        },
        {
          id: 'q2',
          question: 'What are the key requirements of the Markets in Crypto-Assets (MiCA) regulation?',
          options: [
            'Issuers must register whitepapers, maintain capital, and implement investor protections',
            'Only AML rules',
            'Only taxation rules',
            'Only KYC procedures'
          ],
          correctAnswer: 0,
          explanation: 'MiCA requires comprehensive compliance including whitepaper registration, capital requirements, and investor protections.'
        },
        {
          id: 'q3',
          question: 'How does KYC/AML compliance integrate with RWA platforms?',
          options: [
            'Through on-chain anonymization',
            'Via off-chain procedures feeding smart contract whitelist',
            'It is not required',
            'Only uses token burning'
          ],
          correctAnswer: 1,
          explanation: 'KYC/AML is typically done off-chain, with results feeding into smart contract whitelists for compliance.'
        }
      ]
    },
    {
      id: '6',
      title: 'Market Analysis and Trends',
      description: 'Advanced market analysis for RWA opportunities',
      duration: '55 min',
      level: 'advanced',
      category: 'Market Analysis',
      isPremium: true,
      quiz: [
        {
          id: 'q1',
          question: 'Which macroeconomic indicators most affect RWA valuations?',
          options: [
            'Unemployment rate',
            'Interest rates and inflation',
            'Server uptime',
            'Token velocity'
          ],
          correctAnswer: 1,
          explanation: 'Interest rates and inflation are key macroeconomic factors affecting asset valuations.'
        },
        {
          id: 'q2',
          question: 'How do you perform a SWOT analysis for a new tokenized asset platform?',
          options: [
            'Evaluate strengths, weaknesses, opportunities, and threats',
            'Only strengths and threats',
            'Only focus on tokenomics',
            'Only competitor analysis'
          ],
          correctAnswer: 0,
          explanation: 'SWOT analysis evaluates all four components: Strengths, Weaknesses, Opportunities, and Threats.'
        },
        {
          id: 'q3',
          question: 'What trend data would you track for tokenized real-estate markets?',
          options: [
            'Twitter mentions',
            'Transaction volume, price trends, and new listings',
            'Number of smart contracts',
            'Number of developers'
          ],
          correctAnswer: 1,
          explanation: 'Key metrics include transaction volume, price trends, and new listings to understand market health.'
        }
      ]
    }
  ];

  const categories = ['all', 'Fundamentals', 'Risk Management', 'Portfolio Management', 'Legal & Compliance', 'Market Analysis'];

  const filteredLessons = lessonContent.filter(lesson => {
    const matchesLevel = selectedLevel === 'all' || lesson.level === selectedLevel;
    const matchesCategory = selectedCategory === 'all' || lesson.category === selectedCategory;
    return matchesLevel && matchesCategory;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'text-green-600 bg-green-50';
      case 'intermediate': return 'text-yellow-600 bg-yellow-50';
      case 'advanced': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Fundamentals': return BookOpen;
      case 'Risk Management': return Shield;
      case 'Portfolio Management': return TrendingUp;
      case 'Legal & Compliance': return Shield;
      case 'Market Analysis': return TrendingUp;
      default: return BookOpen;
    }
  };

  const startLesson = (lessonId: string) => {
    setSelectedLesson(lessonId);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const selectAnswer = (questionId: string, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const nextQuestion = () => {
    const lesson = lessonContent.find(l => l.id === selectedLesson);
    if (lesson && currentQuestionIndex < lesson.quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const completeLesson = () => {
    if (selectedLesson && !completedLessons.includes(selectedLesson)) {
      setCompletedLessons(prev => [...prev, selectedLesson]);
    }
    setSelectedLesson(null);
  };

  const calculateScore = () => {
    const lesson = lessonContent.find(l => l.id === selectedLesson);
    if (!lesson) return 0;
    
    let correct = 0;
    lesson.quiz.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    
    return Math.round((correct / lesson.quiz.length) * 100);
  };

  if (!user || user.type !== 'investor') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Restricted</h2>
          <p className="text-gray-600">The RWA Academy is only available to registered investors.</p>
        </div>
      </div>
    );
  }

  // Quiz Interface
  if (selectedLesson) {
    const lesson = lessonContent.find(l => l.id === selectedLesson);
    if (!lesson) return null;

    if (showResults) {
      const score = calculateScore();
      const passed = score >= 70;

      return (
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
              passed ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {passed ? (
                <Trophy className="h-10 w-10 text-green-600" />
              ) : (
                <BookOpen className="h-10 w-10 text-red-600" />
              )}
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {passed ? 'Congratulations!' : 'Keep Learning!'}
            </h2>
            
            <p className="text-xl text-gray-600 mb-6">
              You scored {score}% on "{lesson.title}"
            </p>
            
            {passed && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-green-600 mr-2" />
                  <span className="text-green-800 font-semibold">Achievement Unlocked!</span>
                </div>
                <p className="text-green-700">
                  You've successfully completed this lesson and earned 10 learning points!
                </p>
              </div>
            )}
            
            <div className="space-y-4">
              {lesson.quiz.map((question, index) => {
                const userAnswer = selectedAnswers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={question.id} className={`text-left p-4 rounded-lg border ${
                    isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                  }`}>
                    <div className="flex items-center mb-2">
                      {isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      ) : (
                        <div className="h-5 w-5 bg-red-600 rounded-full mr-2 flex items-center justify-center">
                          <span className="text-white text-xs">✗</span>
                        </div>
                      )}
                      <span className="font-medium">Question {index + 1}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{question.question}</p>
                    <p className="text-sm text-gray-600">
                      <strong>Correct Answer:</strong> {question.options[question.correctAnswer]}
                    </p>
                    {question.explanation && (
                      <p className="text-sm text-gray-600 mt-2">
                        <strong>Explanation:</strong> {question.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="flex space-x-4 mt-8">
              <button
                onClick={() => setSelectedLesson(null)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to Academy
              </button>
              {passed && (
                <button
                  onClick={completeLesson}
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Mark as Complete
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    const currentQuestion = lesson.quiz[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / lesson.quiz.length) * 100;

    return (
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">{lesson.title}</h1>
              <button
                onClick={() => setSelectedLesson(null)}
                className="text-indigo-200 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-indigo-200">
                Question {currentQuestionIndex + 1} of {lesson.quiz.length}
              </span>
              <span className="text-indigo-200">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-indigo-500 rounded-full h-2 mt-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentQuestion.question}</h2>
            
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswers[currentQuestion.id] === index;
                
                return (
                  <button
                    key={index}
                    onClick={() => selectAnswer(currentQuestion.id, index)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      {isSelected && (
                        <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={nextQuestion}
                disabled={selectedAnswers[currentQuestion.id] === undefined}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  selectedAnswers[currentQuestion.id] !== undefined
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {currentQuestionIndex === lesson.quiz.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Get demo-specific progress data
  const getDemoProgress = () => {
    if (user?.id?.startsWith('demo-')) {
      return {
        completedLessons: 2,
        totalLessons: lessonContent.length,
        earnedPoints: 150,
        currentLevel: 'Intermediate'
      };
    }
    return {
      completedLessons: completedLessons.length,
      totalLessons: lessonContent.length,
      earnedPoints: completedLessons.length * 10,
      currentLevel: 'Beginner'
    };
  };

  const progressData = getDemoProgress();

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">RWA Academy</h1>
        <p className="text-gray-600">Master the art of real-world asset investing</p>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Your Learning Journey</h2>
            <p className="text-indigo-100">Continue building your RWA investment expertise</p>
            <p className="text-indigo-200 text-sm mt-1">Current Level: {progressData.currentLevel}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{Math.round((progressData.completedLessons / progressData.totalLessons) * 100)}%</div>
            <div className="text-indigo-100">Complete</div>
            <div className="text-sm text-indigo-200 mt-1">{progressData.earnedPoints} points earned</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="bg-white bg-opacity-20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300" 
              style={{ width: `${(progressData.completedLessons / progressData.totalLessons) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">Level:</span>
            <div className="flex space-x-2">
              {['all', 'beginner', 'intermediate', 'advanced'].map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level as any)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedLevel === level
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="all">All Categories</option>
              {categories.slice(1).map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Access Limitation Banner for Free Users */}
      {user.subscriptionTier === 'free' && !user.id?.startsWith('demo-') && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 mb-8">
          <div className="flex items-center">
            <Star className="h-6 w-6 text-yellow-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Limited Access</h3>
              <p className="text-gray-600">
                Free users can access basic lessons. Upgrade to premium for advanced content and exclusive materials.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson) => {
          const CategoryIcon = getCategoryIcon(lesson.category);
          const isAccessible = !lesson.isPremium || user.subscriptionTier === 'premium' || user.id?.startsWith('demo-');
          const isCompleted = completedLessons.includes(lesson.id);
          
          return (
            <div key={lesson.id} className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow ${!isAccessible ? 'opacity-75' : ''}`}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <CategoryIcon className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm text-indigo-600 font-medium">{lesson.category}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {lesson.isPremium && (
                      <Star className="h-4 w-4 text-yellow-500" />
                    )}
                    {isCompleted && (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    )}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(lesson.level)}`}>
                      {lesson.level.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{lesson.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{lesson.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{lesson.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GraduationCap className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{lesson.quiz.length} Questions</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => isAccessible ? startLesson(lesson.id) : null}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                    isAccessible
                      ? isCompleted
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!isAccessible}
                >
                  {isAccessible ? (
                    <>
                      {isCompleted ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Start Lesson
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <Lock className="h-4 w-4 mr-2" />
                      Premium Required
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredLessons.length === 0 && (
        <div className="text-center py-12">
          <GraduationCap className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No lessons found</h3>
          <p className="text-gray-600">Try adjusting your filter criteria.</p>
        </div>
      )}

      {/* Upgrade CTA for Free Users (not demo) */}
      {user.subscriptionTier === 'free' && !user.id?.startsWith('demo-') && (
        <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 text-white text-center">
          <Star className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Unlock Premium Content</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Get access to advanced lessons, exclusive materials, and personalized learning paths 
            to accelerate your RWA investment expertise.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Upgrade to Premium
          </button>
        </div>
      )}
    </div>
  );
};

export default Academy;