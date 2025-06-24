
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Zap, Brain, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MainHomepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Commodities Trading Hub</span>
              <span className="ml-2 text-lg text-blue-600 font-medium">- Baptiste Ragu</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Commodities Trading Hub
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100 font-medium">
              Baptiste Ragu
            </p>
            <p className="text-lg md:text-xl mb-12 text-blue-100 max-w-4xl mx-auto">
              Advanced Analytics and Trading Strategies for Global Commodity Markets
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Link to="/oil">Explore Oil Markets</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link to="/gas">Discover Gas Markets</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link to="/ml">Machine Learning</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Market Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep dive into energy markets with advanced analytics, trading strategies, and machine learning applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Oil Markets Card */}
          <Link to="/oil">
            <Card className="h-full transition-all duration-200 hover:shadow-xl hover:scale-105 border-2 border-blue-200 hover:border-blue-400">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-900">Oil Markets</CardTitle>
                <CardDescription className="text-lg">
                  Comprehensive analysis of global crude oil and refined products markets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  <li>• Global reserves and production analysis</li>
                  <li>• Market fundamentals and pricing</li>
                  <li>• Energy transition impacts</li>
                  <li>• US energy balance transformation</li>
                  <li>• Financial derivatives and OTC markets</li>
                  <li>• Term structure and price outlook</li>
                </ul>
                <div className="flex items-center text-blue-600 font-medium">
                  Explore Oil Markets <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Gas Markets Card */}
          <Link to="/gas">
            <Card className="h-full transition-all duration-200 hover:shadow-xl hover:scale-105 border-2 border-green-200 hover:border-green-400">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-900">Gas Markets</CardTitle>
                <CardDescription className="text-lg">
                  Natural gas fundamentals, trading strategies, and market dynamics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  <li>• Global gas reserves and production</li>
                  <li>• European market liberalization</li>
                  <li>• LNG vs pipeline supply dynamics</li>
                  <li>• Hub-based pricing mechanisms</li>
                  <li>• Seasonal patterns and storage</li>
                  <li>• Derivatives and risk management</li>
                </ul>
                <div className="flex items-center text-green-600 font-medium">
                  Discover Gas Markets <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Machine Learning Card */}
          <Link to="/ml">
            <Card className="h-full transition-all duration-200 hover:shadow-xl hover:scale-105 border-2 border-purple-200 hover:border-purple-400">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-purple-900">Machine Learning</CardTitle>
                <CardDescription className="text-lg">
                  Advanced ML techniques for commodity price prediction and analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  <li>• Linear regression and regularization</li>
                  <li>• XGBoost for price prediction</li>
                  <li>• Neural networks and deep learning</li>
                  <li>• NHITS and time series models</li>
                  <li>• Model comparison and evaluation</li>
                  <li>• Trading applications and backtesting</li>
                </ul>
                <div className="flex items-center text-purple-600 font-medium">
                  Explore ML Techniques <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* About Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Globe className="h-6 w-6 text-blue-600" />
              About This Platform
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">Professional Expertise</h4>
                <p className="text-gray-600 mb-4">
                  This platform combines deep market knowledge with advanced analytical techniques, 
                  providing insights from both fundamental analysis and quantitative modeling perspectives.
                </p>
                <h4 className="font-semibold text-lg mb-3">Comprehensive Coverage</h4>
                <p className="text-gray-600">
                  From upstream production to downstream trading, covering the complete commodity 
                  value chain with practical applications for market participants.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Advanced Analytics</h4>
                <p className="text-gray-600 mb-4">
                  Leverage cutting-edge machine learning techniques and quantitative methods 
                  to enhance trading strategies and risk management approaches.
                </p>
                <h4 className="font-semibold text-lg mb-3">Interactive Learning</h4>
                <p className="text-gray-600">
                  Explore complex market relationships through interactive charts, models, 
                  and visualizations that make data-driven insights accessible.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MainHomepage;
