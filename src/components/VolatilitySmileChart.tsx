
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';
import { Activity } from 'lucide-react';

const VolatilitySmileChart = () => {
  const volatilitySmileData = [
    { strike: 70, impliedVol: 42.5, delta: 0.15 },
    { strike: 75, impliedVol: 38.2, delta: 0.25 },
    { strike: 80, impliedVol: 35.0, delta: 0.45 },
    { strike: 85, impliedVol: 33.5, delta: 0.55 },
    { strike: 90, impliedVol: 36.8, delta: 0.25 },
    { strike: 95, impliedVol: 41.2, delta: 0.15 }
  ];

  const termStructureData = [
    { maturity: '1M', atm: 35.0, skew: -2.5 },
    { maturity: '2M', atm: 32.5, skew: -2.2 },
    { maturity: '3M', atm: 31.8, skew: -2.0 },
    { maturity: '6M', atm: 30.5, skew: -1.8 },
    { maturity: '12M', atm: 28.2, skew: -1.5 }
  ];

  const chartConfig = {
    impliedVol: { label: "Implied Volatility (%)", color: "#2563eb" },
    atm: { label: "ATM Volatility", color: "#dc2626" },
    skew: { label: "25Δ Put-Call Skew", color: "#16a34a" },
    delta: { label: "Delta", color: "#f59e0b" }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-blue-600" />
          Volatility Modeling and Smile Dynamics
        </CardTitle>
        <CardDescription>
          Implied volatility patterns and term structure analysis for commodity options
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Volatility Smile for WTI Options</h4>
              <div className="chart-container">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={volatilitySmileData}>
                      <XAxis 
                        dataKey="strike" 
                        label={{ value: 'Strike Price ($)', position: 'insideBottom', offset: -5 }}
                      />
                      <YAxis 
                        label={{ value: 'Implied Volatility (%)', angle: -90, position: 'insideLeft' }}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line 
                        type="monotone" 
                        dataKey="impliedVol" 
                        stroke="#2563eb" 
                        strokeWidth={3}
                        name="Implied Volatility"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Volatility Term Structure</h4>
              <div className="chart-container">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={termStructureData}>
                      <XAxis 
                        dataKey="maturity" 
                        label={{ value: 'Maturity', position: 'insideBottom', offset: -5 }}
                      />
                      <YAxis 
                        label={{ value: 'Volatility (%)', angle: -90, position: 'insideLeft' }}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line 
                        type="monotone" 
                        dataKey="atm" 
                        stroke="#dc2626" 
                        strokeWidth={2}
                        name="ATM Volatility"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="skew" 
                        stroke="#16a34a" 
                        strokeWidth={2}
                        name="25Δ Skew"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Stochastic Volatility Models for Commodities</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold mb-2">Heston Model Extension</h5>
                  <div className="font-mono text-sm space-y-1">
                    <div>dS = rSdt + √V S dW₁</div>
                    <div>dV = κ(θ - V)dt + σᵥ√V dW₂</div>
                    <div>dW₁dW₂ = ρdt</div>
                  </div>
                  <div className="text-xs mt-2 space-y-1">
                    <div><strong>κ:</strong> Mean reversion speed of volatility</div>
                    <div><strong>θ:</strong> Long-term volatility level</div>
                    <div><strong>σᵥ:</strong> Volatility of volatility</div>
                    <div><strong>ρ:</strong> Correlation between price and volatility</div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold mb-2">SABR Model for Commodities</h5>
                  <div className="font-mono text-sm space-y-1">
                    <div>dF = σF^β dW₁</div>
                    <div>dσ = νσ dW₂</div>
                    <div>dW₁dW₂ = ρdt</div>
                  </div>
                  <div className="text-xs mt-2">
                    <strong>β:</strong> CEV parameter (0 = normal, 1 = lognormal)
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold mb-2">Volatility Smile Characteristics</h5>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Put Skew:</strong> Higher volatility for OTM puts</li>
                    <li>• <strong>Supply Disruption Risk:</strong> Asymmetric upside moves</li>
                    <li>• <strong>Mean Reversion:</strong> Volatility clustering effects</li>
                    <li>• <strong>Seasonal Patterns:</strong> Weather-driven volatility</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold mb-2">Calibration Methodology</h5>
                  <ol className="text-sm space-y-1">
                    <li>1. Market option prices across strikes</li>
                    <li>2. Minimize squared pricing errors</li>
                    <li>3. Constrain parameters for stability</li>
                    <li>4. Validate with out-of-sample data</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded bg-blue-50">
              <h5 className="font-semibold text-blue-700 mb-2">Market Making Considerations</h5>
              <ul className="text-xs space-y-1">
                <li>• Bid-ask spreads widen with time to expiry</li>
                <li>• Liquidity concentrated in ATM options</li>
                <li>• Vega risk management critical</li>
                <li>• Pin risk near expiration</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded bg-green-50">
              <h5 className="font-semibold text-green-700 mb-2">Trading Applications</h5>
              <ul className="text-xs space-y-1">
                <li>• Volatility arbitrage strategies</li>
                <li>• Calendar spread volatility plays</li>
                <li>• Skew trading opportunities</li>
                <li>• Event-driven volatility trades</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded bg-purple-50">
              <h5 className="font-semibold text-purple-700 mb-2">Risk Management</h5>
              <ul className="text-xs space-y-1">
                <li>• Vega-neutral portfolio construction</li>
                <li>• Gamma scalping strategies</li>
                <li>• Volatility forecasting models</li>
                <li>• Stress testing vol scenarios</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VolatilitySmileChart;
