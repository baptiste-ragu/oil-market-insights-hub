
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Globe, BarChart3, PieChart, ArrowLeft, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const gasStats = [
  { title: 'Global Gas Reserves', value: '171 Tcm', icon: Globe },
  { title: 'LNG Market Share', value: '14%', icon: PieChart },
  { title: 'European Import Dependency', value: '60%', icon: BarChart3 },
  { title: 'Hub-based Pricing Growth', value: '37%', icon: Zap },
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
    title: 'Physical Markets',
    description: 'Traditional contracts and market structure evolution',
    path: '/gas/physical-markets',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
  },
  {
    title: 'Gas Consumption',
    description: 'Sectoral demand patterns and seasonal consumption',
    path: '/gas/consumption',
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
  },
];

const allGasSections = [
  { name: 'Fundamentals', path: '/gas/fundamentals' },
  { name: 'Reserves & Production', path: '/gas/reserves' },
  { name: 'Consumption', path: '/gas/consumption' },
  { name: 'Physical Markets', path: '/gas/physical-markets' },
  { name: 'Energy Transformation', path: '/gas/energy-transformation' },
  { name: 'European Energy Balance', path: '/gas/european-balance' },
  { name: 'Futures Markets', path: '/gas/futures-markets' },
  { name: 'OTC Markets', path: '/gas/otc-markets' },
  { name: 'Risk Management', path: '/gas/risk-management' },
  { name: 'Term Structure', path: '/gas/term-structure' },
  { name: 'Price Outlook', path: '/gas/price-outlook' },
  { name: 'Commodity Derivatives', path: '/gas/derivatives' },
];

const GasHomepage = () => {
  const [isSectionsOpen, setIsSectionsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Oil Section Navigation Pattern */}
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
            
            {/* Persistent Navigation - Oil Section Pattern */}
            <div className="flex items-center space-x-4">
              <Link to="/gas">
                <Button variant="outline" className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100">
                  Home
                </Button>
              </Link>
              
              <div className="relative">
                <Button
                  variant="outline"
                  onClick={() => setIsSectionsOpen(!isSectionsOpen)}
                  className="flex items-center gap-2"
                >
                  Sections
                  <ChevronDown className="h-4 w-4" />
                </Button>
                
                {isSectionsOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 border">
                    <div className="py-2">
                      {allGasSections.map((section) => (
                        <Link
                          key={section.path}
                          to={section.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsSectionsOpen(false)}
                        >
                          {section.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
              Comprehensive Gas Market Analysis - HEC Course Materials 2025
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

        {/* About This Educational Resource */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Globe className="h-6 w-6 text-green-600" />
              About This Educational Resource
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-green-800">Comprehensive Coverage</h4>
                <p className="text-gray-600 mb-4">
                  From upstream gas production to downstream consumption, this resource covers all aspects 
                  of the global natural gas market value chain including LNG, pipeline infrastructure, 
                  and hub-based trading.
                </p>
                <h4 className="font-semibold text-lg mb-3 text-green-800">Market Evolution Focus</h4>
                <p className="text-gray-600">
                  Detailed analysis of the European gas market transformation from monopolies to competitive 
                  trading hubs, covering liberalization, pricing mechanisms, and regulatory frameworks.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-green-800">Trading Strategies</h4>
                <p className="text-gray-600 mb-4">
                  Learn practical hedging strategies, storage optimization, and risk management techniques 
                  used by gas trading professionals worldwide.
                </p>
                <h4 className="font-semibold text-lg mb-3 text-green-800">Interactive Learning</h4>
                <p className="text-gray-600">
                  Explore complex gas market relationships through interactive charts, hub price comparisons, 
                  and visualizations that make seasonal patterns and storage dynamics easily understandable.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GasHomepage;
