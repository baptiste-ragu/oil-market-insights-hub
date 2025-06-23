
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Settings, Play } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CommodityPricingModel = () => {
  const [inputs, setInputs] = useState({
    spotPrice: 82.50,
    strike: 85.00,
    timeToExpiry: 0.25,
    volatility: 0.35,
    riskFreeRate: 0.05,
    convenienceYield: 0.02,
    storageCost: 0.01
  });

  const [results, setResults] = useState({
    futuresPrice: 0,
    callPrice: 0,
    putPrice: 0,
    delta: 0,
    gamma: 0,
    theta: 0,
    vega: 0
  });

  // Black-76 pricing functions
  const normalCDF = (x: number): number => {
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
    const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x) / Math.sqrt(2.0);
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return 0.5 * (1.0 + sign * y);
  };

  const calculatePrices = () => {
    const { spotPrice, strike, timeToExpiry, volatility, riskFreeRate, convenienceYield, storageCost } = inputs;
    
    // Futures price with convenience yield and storage costs
    const futuresPrice = spotPrice * Math.exp((riskFreeRate - convenienceYield + storageCost) * timeToExpiry);
    
    // Black-76 model calculations
    const d1 = (Math.log(futuresPrice / strike) + 0.5 * volatility * volatility * timeToExpiry) / (volatility * Math.sqrt(timeToExpiry));
    const d2 = d1 - volatility * Math.sqrt(timeToExpiry);
    
    const nd1 = normalCDF(d1);
    const nd2 = normalCDF(d2);
    const nMinusD1 = normalCDF(-d1);
    const nMinusD2 = normalCDF(-d2);
    
    const discountFactor = Math.exp(-riskFreeRate * timeToExpiry);
    
    const callPrice = discountFactor * (futuresPrice * nd1 - strike * nd2);
    const putPrice = discountFactor * (strike * nMinusD2 - futuresPrice * nMinusD1);
    
    // Greeks calculations
    const delta = discountFactor * nd1;
    const gamma = discountFactor * Math.exp(-0.5 * d1 * d1) / (futuresPrice * volatility * Math.sqrt(2 * Math.PI * timeToExpiry));
    const theta = -(futuresPrice * Math.exp(-0.5 * d1 * d1) * volatility * discountFactor) / (2 * Math.sqrt(2 * Math.PI * timeToExpiry)) - riskFreeRate * strike * nMinusD2 * discountFactor;
    const vega = futuresPrice * discountFactor * Math.exp(-0.5 * d1 * d1) * Math.sqrt(timeToExpiry) / Math.sqrt(2 * Math.PI);
    
    setResults({
      futuresPrice: futuresPrice,
      callPrice: callPrice,
      putPrice: putPrice,
      delta: delta,
      gamma: gamma,
      theta: theta / 365, // Daily theta
      vega: vega / 100 // Vega per 1% volatility change
    });
  };

  const handleInputChange = (key: string, value: number) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-purple-600" />
          Interactive Commodity Pricing Model
        </CardTitle>
        <CardDescription>
          Black-76 model with convenience yield and storage costs for commodity options
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <Tabs defaultValue="inputs" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="inputs">Model Inputs</TabsTrigger>
              <TabsTrigger value="results">Pricing Results</TabsTrigger>
              <TabsTrigger value="formulas">Mathematical Framework</TabsTrigger>
            </TabsList>

            <TabsContent value="inputs" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Market Parameters</h4>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 items-center">
                      <label className="text-sm font-medium">Spot Price ($):</label>
                      <input
                        type="number"
                        value={inputs.spotPrice}
                        onChange={(e) => handleInputChange('spotPrice', parseFloat(e.target.value))}
                        className="px-3 py-1 border rounded text-sm"
                        step="0.01"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-center">
                      <label className="text-sm font-medium">Strike Price ($):</label>
                      <input
                        type="number"
                        value={inputs.strike}
                        onChange={(e) => handleInputChange('strike', parseFloat(e.target.value))}
                        className="px-3 py-1 border rounded text-sm"
                        step="0.01"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-center">
                      <label className="text-sm font-medium">Time to Expiry (years):</label>
                      <input
                        type="number"
                        value={inputs.timeToExpiry}
                        onChange={(e) => handleInputChange('timeToExpiry', parseFloat(e.target.value))}
                        className="px-3 py-1 border rounded text-sm"
                        step="0.01"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-center">
                      <label className="text-sm font-medium">Volatility (%):</label>
                      <input
                        type="number"
                        value={inputs.volatility * 100}
                        onChange={(e) => handleInputChange('volatility', parseFloat(e.target.value) / 100)}
                        className="px-3 py-1 border rounded text-sm"
                        step="0.1"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Commodity-Specific Parameters</h4>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 items-center">
                      <label className="text-sm font-medium">Risk-Free Rate (%):</label>
                      <input
                        type="number"
                        value={inputs.riskFreeRate * 100}
                        onChange={(e) => handleInputChange('riskFreeRate', parseFloat(e.target.value) / 100)}
                        className="px-3 py-1 border rounded text-sm"
                        step="0.01"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-center">
                      <label className="text-sm font-medium">Convenience Yield (%):</label>
                      <input
                        type="number"
                        value={inputs.convenienceYield * 100}
                        onChange={(e) => handleInputChange('convenienceYield', parseFloat(e.target.value) / 100)}
                        className="px-3 py-1 border rounded text-sm"
                        step="0.01"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-center">
                      <label className="text-sm font-medium">Storage Cost (%):</label>
                      <input
                        type="number"
                        value={inputs.storageCost * 100}
                        onChange={(e) => handleInputChange('storageCost', parseFloat(e.target.value) / 100)}
                        className="px-3 py-1 border rounded text-sm"
                        step="0.01"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button onClick={calculatePrices} className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Calculate Prices
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="results" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Option Prices</h4>
                  <div className="space-y-3">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="text-sm text-blue-600">Futures Price</div>
                      <div className="text-2xl font-bold text-blue-800">${results.futuresPrice.toFixed(2)}</div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="text-sm text-green-600">Call Option Price</div>
                      <div className="text-2xl font-bold text-green-800">${results.callPrice.toFixed(2)}</div>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <div className="text-sm text-red-600">Put Option Price</div>
                      <div className="text-2xl font-bold text-red-800">${results.putPrice.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Option Greeks</h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded">
                      <div className="flex justify-between">
                        <span className="font-medium">Delta (Δ):</span>
                        <span>{results.delta.toFixed(4)}</span>
                      </div>
                    </div>
                    <div className="p-3 border rounded">
                      <div className="flex justify-between">
                        <span className="font-medium">Gamma (Γ):</span>
                        <span>{results.gamma.toFixed(6)}</span>
                      </div>
                    </div>
                    <div className="p-3 border rounded">
                      <div className="flex justify-between">
                        <span className="font-medium">Theta (Θ/day):</span>
                        <span>${results.theta.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="p-3 border rounded">
                      <div className="flex justify-between">
                        <span className="font-medium">Vega (ν):</span>
                        <span>${results.vega.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="formulas" className="space-y-4">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Commodity Futures Pricing Formula</h4>
                  <div className="bg-white p-4 rounded border font-mono text-center text-lg">
                    F(t,T) = S(t) × exp[(r - δ + u)(T-t)]
                  </div>
                  <div className="mt-3 text-sm grid grid-cols-2 gap-4">
                    <div>
                      <strong>Where:</strong>
                      <ul className="mt-1 space-y-1">
                        <li>F(t,T) = Futures price</li>
                        <li>S(t) = Current spot price</li>
                        <li>r = Risk-free interest rate</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="mt-6 space-y-1">
                        <li>δ = Convenience yield</li>
                        <li>u = Storage cost rate</li>
                        <li>T-t = Time to maturity</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Black-76 Options Pricing Formulas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold mb-2">Call Option</h5>
                      <div className="font-mono text-sm">
                        C = e^(-rT)[F×N(d₁) - K×N(d₂)]
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold mb-2">Put Option</h5>
                      <div className="font-mono text-sm">
                        P = e^(-rT)[K×N(-d₂) - F×N(-d₁)]
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 bg-white p-4 rounded border">
                    <h5 className="font-semibold mb-2">Where d₁ and d₂ are:</h5>
                    <div className="font-mono text-sm space-y-1">
                      <div>d₁ = [ln(F/K) + 0.5σ²T] / (σ√T)</div>
                      <div>d₂ = d₁ - σ√T</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Greeks Formulas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border">
                        <strong>Delta:</strong>
                        <div className="font-mono text-sm">Δ = e^(-rT) × N(d₁)</div>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <strong>Gamma:</strong>
                        <div className="font-mono text-sm">Γ = e^(-rT) × φ(d₁) / (F×σ×√T)</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border">
                        <strong>Theta:</strong>
                        <div className="font-mono text-sm">Θ = -F×φ(d₁)×σ×e^(-rT) / (2×√T)</div>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <strong>Vega:</strong>
                        <div className="font-mono text-sm">ν = F×e^(-rT)×φ(d₁)×√T</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs">
                    <strong>Note:</strong> φ(x) is the standard normal probability density function
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommodityPricingModel;
