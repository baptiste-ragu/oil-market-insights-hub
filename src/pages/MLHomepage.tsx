
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, TrendingUp, BarChart3, Target, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const mlStats = [
  { title: 'Model Accuracy', value: '85-92%', icon: Target },
  { title: 'Features Used', value: '20-50', icon: BarChart3 },
  { title: 'Training Data', value: '10+ years', icon: TrendingUp },
  { title: 'Update Frequency', value: 'Daily', icon: Brain },
];

const featuredSections = [
  {
    title: 'Linear Regression',
    description: 'Foundational techniques for commodity price forecasting',
    path: '/ml/linear-regression',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
  },
  {
    title: 'XGBoost Models',
    description: 'Gradient boosting for advanced price prediction',
    path: '/ml/xgboost',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
  },
  {
    title: 'Neural Networks',
    description: 'Deep learning architectures for market analysis',
    path: '/ml/neural-networks',
    color: 'bg-green-50 border-green-200 hover:bg-green-100',
  },
  {
    title: 'Model Comparison',
    description: 'Performance benchmarking and ensemble methods',
    path: '/ml/model-comparison',
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
  },
];

const MLHomepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 mr-6">
                <ArrowLeft className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-purple-600">Back to Hub</span>
              </Link>
              <Brain className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Machine Learning for Commodities</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Machine Learning for Commodities
            </h1>
            <p className="text-xl mb-8 text-purple-100 max-w-4xl mx-auto">
              Advanced ML techniques for commodity price prediction and analysis. 
              From linear regression to neural networks and modern time series models.
            </p>
            <div className="bg-purple-100 text-purple-800 inline-block px-4 py-2 rounded-lg font-medium">
              Content Coming Soon - Comprehensive ML Framework
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mlStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Icon className="h-8 w-8 mx-auto mb-4 text-purple-600" />
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
            ML Techniques & Applications
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

export default MLHomepage;
