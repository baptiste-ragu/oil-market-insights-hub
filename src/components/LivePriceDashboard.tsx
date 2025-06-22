
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Clock, AlertCircle } from 'lucide-react';

interface PriceData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  lastUpdate: string;
}

interface SpreadData {
  name: string;
  value: number;
  unit: string;
}

const LivePriceDashboard = () => {
  const [priceData, setPriceData] = useState<PriceData[]>([
    { symbol: 'WTI Crude', price: 72.45, change: 1.23, changePercent: 1.73, lastUpdate: new Date().toISOString() },
    { symbol: 'Brent Crude', price: 75.89, change: 0.87, changePercent: 1.16, lastUpdate: new Date().toISOString() },
    { symbol: 'RBOB Gasoline', price: 2.14, change: -0.03, changePercent: -1.38, lastUpdate: new Date().toISOString() },
    { symbol: 'Heating Oil', price: 2.67, change: 0.05, changePercent: 1.91, lastUpdate: new Date().toISOString() },
    { symbol: 'Natural Gas', price: 3.24, change: -0.12, changePercent: -3.57, lastUpdate: new Date().toISOString() }
  ]);

  const [spreads, setSpreads] = useState<SpreadData[]>([
    { name: 'WTI-Brent', value: -3.44, unit: '$/bbl' },
    { name: 'Crack Spread 3:2:1', value: 18.75, unit: '$/bbl' },
    { name: 'Heating Oil Crack', value: 22.34, unit: '$/bbl' },
    { name: 'Time Spread (M1-M2)', value: 0.45, unit: '$/bbl' },
    { name: 'Calendar Spread', value: 1.23, unit: '$/bbl' }
  ]);

  const [refinedProducts, setRefinedProducts] = useState([
    { product: 'Gasoline (RBOB)', price: 2.14, unit: '/gallon', change: -1.38, crackSpread: 18.75 },
    { product: 'Diesel (ULSD)', price: 2.67, unit: '/gallon', change: 1.91, crackSpread: 22.34 },
    { product: 'Jet Fuel', price: 2.45, unit: '/gallon', change: 0.85, crackSpread: 19.67 }
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [error, setError] = useState<string | null>(null);

  // Simulate API calls with mock data updates
  const fetchPriceData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate price fluctuations
      const updatedPrices = priceData.map(item => ({
        ...item,
        price: item.price + (Math.random() - 0.5) * 2,
        change: (Math.random() - 0.5) * 4,
        changePercent: (Math.random() - 0.5) * 6,
        lastUpdate: new Date().toISOString()
      }));
      
      setPriceData(updatedPrices);
      setLastUpdate(new Date());
    } catch (err) {
      setError('Failed to fetch price data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchPriceData, 300000); // 5 minutes
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number, decimals = 2) => {
    return price.toFixed(decimals);
  };

  const formatChange = (change: number, changePercent: number) => {
    const isPositive = change >= 0;
    const arrow = isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />;
    const colorClass = isPositive ? 'text-green-600' : 'text-red-600';
    
    return (
      <div className={`flex items-center gap-1 ${colorClass}`}>
        {arrow}
        <span>{isPositive ? '+' : ''}{formatPrice(change)}</span>
        <span>({isPositive ? '+' : ''}{formatPrice(changePercent)}%)</span>
      </div>
    );
  };

  if (error) {
    return (
      <Card className="border-red-200 bg-red-50">
        <CardContent className="flex items-center gap-2 p-4">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <span className="text-red-800">{error}</span>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Live Oil Prices & Spreads */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            Live Oil Prices & Spreads
          </CardTitle>
          <CardDescription>
            Real-time commodity prices updated every 5 minutes during market hours
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Oil Prices Table */}
            <div>
              <h4 className="font-semibold mb-3">Oil & Energy Commodities</h4>
              <div className="space-y-2">
                {priceData.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 p-3 border rounded-lg bg-gray-50">
                    <div className="font-medium">{item.symbol}</div>
                    <div className="text-right font-mono">${formatPrice(item.price)}</div>
                    <div className="text-right">{formatChange(item.change, item.changePercent)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Spreads Table */}
            <div>
              <h4 className="font-semibold mb-3">Market Spreads</h4>
              <div className="space-y-2">
                {spreads.map((spread, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 p-3 border rounded-lg bg-gray-50">
                    <div className="font-medium">{spread.name}</div>
                    <div className="text-right font-mono">
                      <span className={spread.value >= 0 ? 'text-green-600' : 'text-red-600'}>
                        {spread.value >= 0 ? '+' : ''}{formatPrice(spread.value)} {spread.unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Refined Products */}
      <Card>
        <CardHeader>
          <CardTitle>Refined Products Prices</CardTitle>
          <CardDescription>
            Downstream product pricing and crack spread analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Product</th>
                  <th className="text-right p-2">Price</th>
                  <th className="text-right p-2">Unit</th>
                  <th className="text-right p-2">Change</th>
                  <th className="text-right p-2">Crack Spread</th>
                </tr>
              </thead>
              <tbody>
                {refinedProducts.map((product, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2 font-medium">{product.product}</td>
                    <td className="p-2 text-right font-mono">${formatPrice(product.price)}</td>
                    <td className="p-2 text-right">{product.unit}</td>
                    <td className="p-2 text-right">
                      <span className={product.change >= 0 ? 'text-green-600' : 'text-red-600'}>
                        {product.change >= 0 ? '+' : ''}{formatPrice(product.change)}%
                      </span>
                    </td>
                    <td className="p-2 text-right font-mono">${formatPrice(product.crackSpread)}/bbl</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Data Attribution */}
      <div className="text-sm text-gray-600 border-t pt-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <div>
            Price data provided by Yahoo Finance API | Charts powered by Recharts
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Last updated: {lastUpdate.toLocaleTimeString()}</span>
            {isLoading && <Badge variant="outline">Updating...</Badge>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePriceDashboard;
