
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Globe, BarChart3, PieChart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const gasStats = [
  { title: 'Global Gas Consumption', value: '4.0 Tcm', icon: Globe },
  { title: 'LNG Market Share', value: '12%', icon: PieChart },
  { title: 'Pipeline Transport', value: '88%', icon: BarChart3 },
  { title: 'Price Volatility', value: '±4.1%', icon: Zap },
];

const featuredSections = [
  {
    title: 'Global Gas Reserves',
    description: 'World proven gas reserves and major producing regions',
    path: '/gas/reserves',
    color: 'bg-green-50 border-green-200 hover:bg-green-100',
  },
  {
    title: 'Market Fundamentals',
    description: 'European liberalization and hub development',
    path: '/gas/fundamentals',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
  },
  {
    title: 'Trading & Financial Markets',
    description: 'Hub-based pricing and OTC derivatives',
    path: '/gas/trading',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
  },
  {
    title: 'Gas Derivatives',
    description: 'Storage optimization and swing options',
    path: '/gas/derivatives',
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
  },
];

const GasHomepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 mr-6">
                <ArrowLeft className="h-5 w-5 text-green-600" />
                <span className="text-sm text-green-600">Back to Hub</span>
              </Link>
              <Zap className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Global Gas Markets</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Global Gas Markets
            </h1>
            <p className="text-xl mb-8 text-green-100 max-w-4xl mx-auto">
              Natural gas fundamentals, trading strategies, and market dynamics. 
              From pipeline infrastructure to LNG trade flows and financial derivatives.
            </p>
            <div className="bg-green-100 text-green-800 inline-block px-4 py-2 rounded-lg font-medium">
              Content Coming Soon - Comprehensive Gas Market Analysis
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {gasStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Icon className="h-8 w-8 mx-auto mb-4 text-green-600" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.title}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Sections */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Gas Market Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredSections.map((section, index) => (
              <Link key={index} to={section.path}>
                <Card className={`transition-all duration-200 ${section.color} border-2`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                    <CardDescription className="text-gray-700">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasHomepage;
