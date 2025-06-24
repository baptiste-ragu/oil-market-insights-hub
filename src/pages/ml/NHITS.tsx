
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, TrendingUp, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NHITS = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/ml" className="flex items-center space-x-2 mr-6">
                <ArrowLeft className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-purple-600">Back to ML Hub</span>
              </Link>
              <Brain className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">NHITS Models</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-purple-600" />
              NHITS and Advanced Time Series Models
            </CardTitle>
            <CardDescription>
              Modern forecasting architectures
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-purple-50 p-8 rounded-lg text-center">
              <Brain className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Content Coming Soon</h3>
              <p className="text-purple-700">
                NHITS models, multi-horizon predictions, and performance optimization.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default NHITS;
