
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigationItems = [
  { name: 'Home', path: '/', description: 'Overview & Oil Price Charts' },
  { name: 'Fundamentals', path: '/fundamentals', description: 'Market Structure & Pricing' },
  { name: 'Reserves & Production', path: '/reserves', description: 'Global Oil Resources' },
  { name: 'Consumption', path: '/consumption', description: 'Global Demand Patterns' },
  { name: 'Physical Markets', path: '/physical-markets', description: 'OTC & Trade Routes' },
  { name: 'Energy Transformation', path: '/energy-transformation', description: 'Market Evolution' },
  { name: 'US Energy Balance', path: '/us-energy-balance', description: 'Shale Revolution Impact' },
  { name: 'Futures Markets', path: '/futures-markets', description: 'Exchange Trading' },
  { name: 'OTC Markets', path: '/otc-markets', description: 'Financial Derivatives' },
  { name: 'Risk Management', path: '/risk-management', description: 'Hedging Strategies' },
  { name: 'Term Structure', path: '/term-structure', description: 'Forward Curves' },
  { name: 'Price Outlook', path: '/price-outlook', description: 'Market Analysis Framework' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Global Oil Markets</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                Sections
              </Button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {navigationItems.slice(1).map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-l-4 ${
                        location.pathname === item.path
                          ? 'text-blue-600 bg-blue-50 border-blue-600'
                          : 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-300'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <div className="font-medium">{item.name}</div>
                <div className="text-xs text-gray-500 mt-1">{item.description}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
