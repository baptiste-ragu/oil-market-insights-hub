
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Globe, BarChart3, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

// Sample oil price data (in a real application, this would come from an API)
const oilPriceData = [
  { month: 'Jan 2024', wti: 73.8, brent: 78.2, dubai: 77.1 },
  { month: 'Feb 2024', wti: 76.9, brent: 81.5, dubai: 80.3 },
  { month: 'Mar 2024', wti: 81.2, brent: 85.7, dubai: 84.1 },
  { month: 'Apr 2024', wti: 83.5, brent: 88.1, dubai: 86.9 },
  { month: 'May 2024', wti: 77.2, brent: 82.8, dubai: 81.5 },
  { month: 'Jun 2024', wti: 80.1, brent: 85.3, dubai: 83.7 },
];

const keyStats = [
  { title: 'Global Oil Consumption', value: '96.2 Mb/d', icon: Globe },
  { title: 'OPEC Market Share', value: '35%', icon: PieChart },
  { title: 'Strategic Reserves', value: '4.1B barrels', icon: BarChart3 },
  { title: 'Daily Price Volatility', value: '±2.3%', icon: TrendingUp },
];

const featuredSections = [
  {
    title: 'Market Fundamentals',
    description: 'Understand the three-segment value chain and key pricing drivers',
    path: '/fundamentals',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
  },
  {
    title: 'Global Reserves & Production',
    description: 'Explore worldwide oil reserves distribution and production data',
    path: '/reserves',
    color: 'bg-green-50 border-green-200 hover:bg-green-100',
  },
  {
    title: 'Commodity Derivatives Trading',
    description: 'Advanced trading strategies and risk management from a practitioner perspective',
    path: '/commodity-derivatives',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
  },
  {
    title: 'Risk Management',
    description: 'Learn hedging strategies and price risk management techniques',
    path: '/risk-management',
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Global Oil Markets
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Comprehensive analysis of worldwide oil markets, from fundamentals to advanced trading strategies. 
                Based on HEC Course 2025 materials with accurate data visualizations and market insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  <Link to="/fundamentals">Explore Fundamentals</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                  <Link to="/reserves">View Data</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Oil Price Trends (2024)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={oilPriceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff30" />
                  <XAxis dataKey="month" stroke="#ffffff80" />
                  <YAxis stroke="#ffffff80" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e40af', 
                      border: 'none', 
                      borderRadius: '8px',
                      color: 'white'
                    }} 
                  />
                  <Line type="monotone" dataKey="wti" stroke="#fbbf24" strokeWidth={3} name="WTI" />
                  <Line type="monotone" dataKey="brent" stroke="#34d399" strokeWidth={3} name="Brent" />
                  <Line type="monotone" dataKey="dubai" stroke="#f87171" strokeWidth={3} name="Dubai" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Icon className="h-8 w-8 mx-auto mb-4 text-blue-600" />
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
            Explore Key Market Areas
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

        {/* About Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">About This Educational Resource</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">Comprehensive Coverage</h4>
                <p className="text-gray-600 mb-4">
                  From upstream drilling and production to downstream refining and distribution, 
                  this resource covers all aspects of the global oil market value chain.
                </p>
                <h4 className="font-semibold text-lg mb-3">Accurate Data</h4>
                <p className="text-gray-600">
                  All statistics, production figures, and market data are sourced from industry 
                  leaders and reflect the most current market conditions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Interactive Learning</h4>
                <p className="text-gray-600 mb-4">
                  Explore complex market relationships through interactive charts, maps, 
                  and visualizations that make data easily understandable.
                </p>
                <h4 className="font-semibold text-lg mb-3">Risk Management Focus</h4>
                <p className="text-gray-600">
                  Learn practical hedging strategies and risk management techniques used 
                  by industry professionals worldwide.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
