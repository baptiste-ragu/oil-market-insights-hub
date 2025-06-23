
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

interface PriceData {
  wti_price?: number;
  brent_price?: number;
  natural_gas_price?: number;
  wti_change?: number;
  brent_change?: number;
  natural_gas_change?: number;
  wti_brent_spread?: number;
  crack_spread?: number;
  wti_brent_spread_change?: number;
  crack_spread_change?: number;
}

const OilPricesDashboard = () => {
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Mock data function for demonstration (replace with actual API call)
  const generateMockPriceData = (): PriceData => {
    const baseWTI = 78.50;
    const baseBrent = 82.30;
    const baseNG = 2.45;
    
    return {
      wti_price: baseWTI + (Math.random() - 0.5) * 4,
      brent_price: baseBrent + (Math.random() - 0.5) * 4,
      natural_gas_price: baseNG + (Math.random() - 0.5) * 0.3,
      wti_change: (Math.random() - 0.5) * 6,
      brent_change: (Math.random() - 0.5) * 6,
      natural_gas_change: (Math.random() - 0.5) * 8,
      wti_brent_spread: -3.8 + (Math.random() - 0.5) * 2,
      crack_spread: 18.5 + (Math.random() - 0.5) * 4,
      wti_brent_spread_change: (Math.random() - 0.5) * 2,
      crack_spread_change: (Math.random() - 0.5) * 3,
    };
  };

  const fetchOilPrices = async () => {
    try {
      setLoading(true);
      setError(null);

      // For demonstration, using mock data
      // Replace this with actual API call when you have working endpoints
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      const mockData = generateMockPriceData();
      
      setPriceData(mockData);
      setLastUpdated(new Date());
      
    } catch (err) {
      console.error('Oil price fetch error:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch prices');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOilPrices();

    const intervalId = setInterval(() => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay();
      
      // Only update Monday-Friday, 9AM-4PM EST (market hours)
      if (day >= 1 && day <= 5 && hour >= 9 && hour <= 16) {
        fetchOilPrices();
      }
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(intervalId);
  }, []);

  const formatPrice = (price: number | undefined) => {
    return price ? price.toFixed(2) : 'N/A';
  };

  const formatChange = (change: number | undefined) => {
    if (!change) return '0.00';
    return change >= 0 ? `+${change.toFixed(2)}` : change.toFixed(2);
  };

  if (loading && !priceData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-6 w-6" />
            Live Oil Prices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="loading-indicator">Loading oil prices...</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error && !priceData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-6 w-6" />
            Live Oil Prices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="error-message p-4 bg-red-50 border border-red-200 rounded-lg">
            Error loading prices: {error}
            <button 
              onClick={fetchOilPrices} 
              className="ml-3 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Retry
            </button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-green-600" />
          Live Oil Prices
        </CardTitle>
        <CardDescription>
          Real-time commodity prices updated every 5 minutes during market hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        {priceData && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="price-card bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-blue-800 mb-2">WTI Crude</h4>
                <p className="text-2xl font-bold text-blue-900">${formatPrice(priceData.wti_price)}</p>
                <div className={`flex items-center justify-center gap-1 mt-2 ${(priceData.wti_change || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {(priceData.wti_change || 0) >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  <span className="font-semibold">{formatChange(priceData.wti_change)}%</span>
                </div>
              </div>
              
              <div className="price-card bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-green-800 mb-2">Brent Crude</h4>
                <p className="text-2xl font-bold text-green-900">${formatPrice(priceData.brent_price)}</p>
                <div className={`flex items-center justify-center gap-1 mt-2 ${(priceData.brent_change || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {(priceData.brent_change || 0) >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  <span className="font-semibold">{formatChange(priceData.brent_change)}%</span>
                </div>
              </div>
              
              <div className="price-card bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-orange-800 mb-2">Natural Gas</h4>
                <p className="text-2xl font-bold text-orange-900">${formatPrice(priceData.natural_gas_price)}</p>
                <div className={`flex items-center justify-center gap-1 mt-2 ${(priceData.natural_gas_change || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {(priceData.natural_gas_change || 0) >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  <span className="font-semibold">{formatChange(priceData.natural_gas_change)}%</span>
                </div>
              </div>
            </div>

            <div className="spreads-section">
              <h4 className="text-lg font-semibold mb-4">Key Spreads</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-2 text-left">Spread Type</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">Value</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">WTI-Brent</td>
                      <td className="border border-gray-200 px-4 py-2">${formatPrice(priceData.wti_brent_spread)}</td>
                      <td className={`border border-gray-200 px-4 py-2 ${(priceData.wti_brent_spread_change || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {formatChange(priceData.wti_brent_spread_change)}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Crack Spread 3:2:1</td>
                      <td className="border border-gray-200 px-4 py-2">${formatPrice(priceData.crack_spread)}</td>
                      <td className={`border border-gray-200 px-4 py-2 ${(priceData.crack_spread_change || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {formatChange(priceData.crack_spread_change)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {lastUpdated && (
          <p className="text-sm text-gray-500 text-right mt-4">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </p>
        )}
        
        {loading && priceData && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-xs">
            Updating...
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OilPricesDashboard;
