
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Globe, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GasReserves = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/gas" className="flex items-center space-x-2 mr-6">
                <ArrowLeft className="h-5 w-5 text-green-600" />
                <span className="text-sm text-green-600">Back to Gas Markets</span>
              </Link>
              <Zap className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Global Gas Reserves</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-green-600" />
              Global Gas Reserves and Production
            </CardTitle>
            <CardDescription>
              World proven gas reserves by region and production dynamics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <Zap className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">Content Coming Soon</h3>
              <p className="text-green-700">
                Comprehensive analysis of global natural gas reserves, major producing countries, 
                and supply chain dynamics will be available here.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default GasReserves;
