import React from 'react';
import { Palette, Download, Copy, CheckCircle } from 'lucide-react';

const BrandKit: React.FC = () => {
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(type);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const brandColors = {
    primary: {
      name: 'Cosmic Indigo',
      hex: '#4338ca',
      rgb: 'rgb(67, 56, 202)',
      description: 'Primary brand color inspired by deep cosmic space'
    },
    secondary: {
      name: 'Stellar Purple',
      hex: '#7c3aed',
      rgb: 'rgb(124, 58, 237)',
      description: 'Secondary color representing stellar energy'
    },
    accent: {
      name: 'Nebula Pink',
      hex: '#ec4899',
      rgb: 'rgb(236, 72, 153)',
      description: 'Accent color for highlights and cosmic phenomena'
    },
    success: {
      name: 'Emerald',
      hex: '#10b981',
      rgb: 'rgb(16, 185, 129)',
      description: 'Success states and positive actions'
    },
    warning: {
      name: 'Amber',
      hex: '#f59e0b',
      rgb: 'rgb(245, 158, 11)',
      description: 'Warning states and attention'
    },
    neutral: {
      name: 'Cosmic Gray',
      hex: '#6b7280',
      rgb: 'rgb(107, 114, 128)',
      description: 'Neutral text and backgrounds'
    }
  };

  const LogoComponent = ({ size = 'large' }: { size?: 'small' | 'medium' | 'large' }) => {
    const dimensions = {
      small: 'w-8 h-8',
      medium: 'w-12 h-12',
      large: 'w-16 h-16'
    };

    return (
      <div className={`relative ${dimensions[size]}`}>
        {/* Outer cosmic ring */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-400/20 to-pink-500/30 rounded-full blur-md"></div>
        
        {/* Main celestial body */}
        <div className={`relative ${dimensions[size]} bg-gradient-to-br from-indigo-800 via-purple-900 to-pink-900 rounded-full overflow-hidden border border-indigo-600/50`}>
          {/* Surface texture gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/15 via-transparent to-purple-900/30"></div>
          
          {/* Cosmic features */}
          <div className={`absolute ${size === 'large' ? 'top-3 left-4 w-3 h-3' : size === 'medium' ? 'top-2 left-3 w-2.5 h-2.5' : 'top-1.5 left-2 w-1.5 h-1.5'} bg-indigo-500/60 rounded-full shadow-inner`}></div>
          <div className={`absolute ${size === 'large' ? 'bottom-3 right-2 w-2 h-2' : size === 'medium' ? 'bottom-2.5 right-1.5 w-1.5 h-1.5' : 'bottom-1.5 right-1 w-1 h-1'} bg-purple-400/50 rounded-full shadow-inner`}></div>
          <div className={`absolute ${size === 'large' ? 'top-5 right-4 w-1.5 h-1.5' : size === 'medium' ? 'top-4 right-3 w-1 h-1' : 'top-2.5 right-2 w-0.5 h-0.5'} bg-pink-500/40 rounded-full`}></div>
          
          {/* Bright cosmic highlight */}
          <div className={`absolute ${size === 'large' ? 'top-3.5 left-5 w-4 h-4' : size === 'medium' ? 'top-2.5 left-4 w-3.5 h-3.5' : 'top-2 left-3 w-2.5 h-2.5'} bg-gradient-to-br from-white/50 via-indigo-100/40 to-transparent rounded-full blur-sm`}></div>
          <div className={`absolute ${size === 'large' ? 'top-4 left-5.5 w-2.5 h-2.5' : size === 'medium' ? 'top-3 left-4.5 w-2 h-2' : 'top-2.5 left-3.5 w-1.5 h-1.5'} bg-gradient-to-br from-white/70 to-indigo-200/50 rounded-full`}></div>
          
          {/* Eris aura effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400/20 via-purple-300/10 to-pink-400/20 rounded-full animate-pulse"></div>
        </div>
        
        {/* Orbital ring */}
        <div className="absolute -inset-2 border border-indigo-400/20 rounded-full"></div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Eris RWA Brand Kit</h1>
        <p className="text-xl text-gray-600">Complete brand guidelines and assets for Eris RWA platform</p>
      </div>

      {/* Logo Variations */}
      <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Palette className="h-6 w-6 mr-3 text-indigo-600" />
          Logo Variations
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Primary Logo */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-xl p-8 mb-4 flex flex-col items-center justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <LogoComponent size="large" />
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-indigo-800 via-purple-900 to-pink-800 bg-clip-text text-transparent">
                    Eris RWA
                  </span>
                  <div className="text-sm text-gray-500 -mt-1 font-medium tracking-wide">Asset Platform</div>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900">Primary Logo</h3>
            <p className="text-sm text-gray-600">Full logo with text</p>
          </div>

          {/* Logo Mark Only */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-xl p-8 mb-4 flex items-center justify-center">
              <LogoComponent size="large" />
            </div>
            <h3 className="font-semibold text-gray-900">Logo Mark</h3>
            <p className="text-sm text-gray-600">Symbol only</p>
          </div>

          {/* Dark Background Version */}
          <div className="text-center">
            <div className="bg-slate-900 rounded-xl p-8 mb-4 flex flex-col items-center justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <LogoComponent size="large" />
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                    Eris RWA
                  </span>
                  <div className="text-sm text-gray-400 -mt-1 font-medium tracking-wide">Asset Platform</div>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900">Dark Version</h3>
            <p className="text-sm text-gray-600">For dark backgrounds</p>
          </div>
        </div>

        {/* Size Variations */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Size Variations</h3>
          <div className="flex items-center space-x-8">
            <div className="text-center">
              <LogoComponent size="small" />
              <p className="text-xs text-gray-600 mt-2">Small (32px)</p>
            </div>
            <div className="text-center">
              <LogoComponent size="medium" />
              <p className="text-xs text-gray-600 mt-2">Medium (48px)</p>
            </div>
            <div className="text-center">
              <LogoComponent size="large" />
              <p className="text-xs text-gray-600 mt-2">Large (64px)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Color Palette</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(brandColors).map(([key, color]) => (
            <div key={key} className="border border-gray-200 rounded-xl overflow-hidden">
              <div 
                className="h-24 w-full"
                style={{ backgroundColor: color.hex }}
              ></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{color.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{color.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">HEX</span>
                    <button
                      onClick={() => copyToClipboard(color.hex, `${key}-hex`)}
                      className="flex items-center space-x-1 text-xs font-mono bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                    >
                      <span>{color.hex}</span>
                      {copiedColor === `${key}-hex` ? (
                        <CheckCircle className="h-3 w-3 text-green-600" />
                      ) : (
                        <Copy className="h-3 w-3 text-gray-500" />
                      )}
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">RGB</span>
                    <button
                      onClick={() => copyToClipboard(color.rgb, `${key}-rgb`)}
                      className="flex items-center space-x-1 text-xs font-mono bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                    >
                      <span>{color.rgb}</span>
                      {copiedColor === `${key}-rgb` ? (
                        <CheckCircle className="h-3 w-3 text-green-600" />
                      ) : (
                        <Copy className="h-3 w-3 text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Typography</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Primary Font: Inter</h3>
            <div className="space-y-4">
              <div>
                <p className="text-4xl font-bold text-gray-900">Eris RWA Platform</p>
                <p className="text-sm text-gray-600">Heading 1 - Bold, 36px</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">Real World Assets</p>
                <p className="text-sm text-gray-600">Heading 2 - Semibold, 24px</p>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">Investment Platform</p>
                <p className="text-sm text-gray-600">Heading 3 - Medium, 18px</p>
              </div>
              <div>
                <p className="text-base text-gray-700">
                  This is body text used for paragraphs and general content. 
                  It should be readable and maintain good contrast ratios.
                </p>
                <p className="text-sm text-gray-600">Body Text - Regular, 16px</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  This is small text used for captions, labels, and secondary information.
                </p>
                <p className="text-sm text-gray-600">Small Text - Regular, 14px</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Guidelines</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-4">✓ Do</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Use the logo with adequate clear space</li>
              <li>• Maintain the original proportions</li>
              <li>• Use approved color variations</li>
              <li>• Ensure good contrast on backgrounds</li>
              <li>• Use high-resolution versions for print</li>
              <li>• Keep the cosmic theme consistent</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-red-600 mb-4">✗ Don't</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Stretch or distort the logo</li>
              <li>• Change the colors arbitrarily</li>
              <li>• Use on busy backgrounds</li>
              <li>• Make the logo too small to read</li>
              <li>• Add effects or shadows</li>
              <li>• Separate the logo elements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Download Brand Assets</h2>
        <p className="text-gray-600 mb-6">
          Get the complete brand kit including logos, color swatches, and typography guidelines
        </p>
        <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors">
          <Download className="h-5 w-5 mr-2" />
          Download Brand Kit
        </button>
      </section>
    </div>
  );
};

export default BrandKit;