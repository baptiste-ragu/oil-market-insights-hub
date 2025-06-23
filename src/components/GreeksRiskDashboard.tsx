
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { Shield, TrendingUp, Clock, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const GreeksRiskDashboard = () => {
  const greeksData = [
    { option: 'Call 85', delta: 0.55, gamma: 0.025, theta: -12.5, vega: 18.2, position: 1000 },
    { option: 'Put 80', delta: -0.35, gamma: 0.028, theta: -8.5, vega: 15.8, position: -500 },
    { option: 'Call 90', delta: 0.25, gamma: 0.018, theta: -6.2, vega: 12.4, position: 200 },
    { option: 'Put 75', delta: -0.15, gamma: 0.012, theta: -3.8, vega: 8.9, position: -300 }
  ];

  const portfolioGreeks = [
    { greek: 'Delta', value: 1250, limit: 2000, utilization: 62.5 },
    { greek: 'Gamma', value: 180, limit: 300, utilization: 60.0 },
    { greek: 'Theta', value: -850, limit: -1500, utilization: 56.7 },
    { greek: 'Vega', value: -12000, limit: 25000, utilization: 48.0 }
  ];

  const scenarioAnalysis = [
    { scenario: 'Base Case', pnl: 0, probability: 0.4 },
    { scenario: '+5% Price', pnl: 62500, probability: 0.15 },
    { scenario: '-5% Price', pnl: -55000, probability: 0.15 },
    { scenario: '+10% Vol', pnl: -120000, probability: 0.1 },
    { scenario: '-10% Vol', pnl: 120000, probability: 0.1 },
    { scenario: 'Time Decay', pnl: -8500, probability: 0.1 }
  ];

  const chartConfig = {
    delta: { label: "Delta", color: "#2563eb" },
    gamma: { label: "Gamma", color: "#dc2626" },
    theta: { label: "Theta", color: "#16a34a" },
    vega: { label: "Vega", color: "#f59e0b" },
    pnl: { label: "P&L", color: "#8b5cf6" },
    utilization: { label: "Limit Utilization %", color: "#06b6d4" }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-green-600" />
          Greeks and Risk Management
        </CardTitle>
        <CardDescription>
          First and second-order sensitivities for commodity options portfolio
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Greeks Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <h4 className="font-semibold text-blue-700">Delta (Δ)</h4>
              </div>
              <div className="text-2xl font-bold text-blue-800">1,250</div>
              <div className="text-sm text-blue-600">bbls directional exposure</div>
              <div className="text-xs text-blue-500 mt-1">∂C/∂S</div>
            </div>
            
            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-4 w-4 text-red-600" />
                <h4 className="font-semibold text-red-700">Gamma (Γ)</h4>
              </div>
              <div className="text-2xl font-bold text-red-800">180</div>
              <div className="text-sm text-red-600">delta sensitivity</div>
              <div className="text-xs text-red-500 mt-1">∂²C/∂S²</div>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-green-600" />
                <h4 className="font-semibold text-green-700">Theta (Θ)</h4>
              </div>
              <div className="text-2xl font-bold text-green-800">-$850</div>
              <div className="text-sm text-green-600">daily time decay</div>
              <div className="text-xs text-green-500 mt-1">∂C/∂t</div>
            </div>
            
            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-yellow-600" />
                <h4 className="font-semibold text-yellow-700">Vega (ν)</h4>
              </div>
              <div className="text-2xl font-bold text-yellow-800">-$12,000</div>
              <div className="text-sm text-yellow-600">per vol point</div>
              <div className="text-xs text-yellow-500 mt-1">∂C/∂σ</div>
            </div>
          </div>

          {/* Risk Limit Utilization */}
          <div>
            <h4 className="font-semibold mb-3">Risk Limit Utilization</h4>
            <div className="chart-container">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={portfolioGreeks}>
                    <XAxis dataKey="greek" />
                    <YAxis label={{ value: 'Utilization %', angle: -90, position: 'insideLeft' }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="utilization" fill="#06b6d4" name="Limit Utilization %" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </div>

          {/* Scenario Analysis */}
          <div>
            <h4 className="font-semibold mb-3">Scenario Analysis P&L</h4>
            <div className="chart-container">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={scenarioAnalysis}>
                    <XAxis dataKey="scenario" />
                    <YAxis label={{ value: 'P&L ($)', angle: -90, position: 'insideLeft' }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="pnl" fill="#8b5cf6" name="Scenario P&L" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </div>

          {/* Greeks Formulas and Applications */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Greeks Formulas and Risk Management Applications</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold mb-2">First-Order Greeks</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span><strong>Delta:</strong></span>
                      <span className="font-mono">∂C/∂S</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>Theta:</strong></span>
                      <span className="font-mono">∂C/∂t</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>Rho:</strong></span>
                      <span className="font-mono">∂C/∂r</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>Vega:</strong></span>
                      <span className="font-mono">∂C/∂σ</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold mb-2">Second-Order Greeks</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span><strong>Gamma:</strong></span>
                      <span className="font-mono">∂²C/∂S²</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>Vanna:</strong></span>
                      <span className="font-mono">∂²C/∂S∂σ</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>Volga:</strong></span>
                      <span className="font-mono">∂²C/∂σ²</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold mb-2">Commodity-Specific Sensitivities</h5>
                  <div className="space-y-2 text-sm">
                    <div><strong>Convenience Yield Delta:</strong> ∂C/∂δ</div>
                    <div><strong>Storage Cost Sensitivity:</strong> ∂C/∂u</div>
                    <div><strong>Seasonal Pattern Risk:</strong> Weather derivatives</div>
                    <div><strong>Jump Risk:</strong> Discontinuous price moves</div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold mb-2">Dynamic Hedging Formula</h5>
                  <div className="bg-gray-100 p-3 rounded font-mono text-sm text-center">
                    Hedge Ratio = Δ_option × Position / Δ_underlying
                  </div>
                  <div className="text-xs mt-2">
                    Rebalance frequency depends on gamma and market volatility
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Management Framework */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded bg-blue-50">
              <h5 className="font-semibold text-blue-700 mb-2">Delta Management</h5>
              <ul className="text-xs space-y-1">
                <li>• Daily delta hedging with futures</li>
                <li>• Cross-hedge with correlated commodities</li>
                <li>• Consider basis risk in hedging</li>
                <li>• Monitor delta decay near expiration</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded bg-red-50">
              <h5 className="font-semibold text-red-700 mb-2">Gamma Risk Control</h5>
              <ul className="text-xs space-y-1">
                <li>• Gamma scalping strategies</li>
                <li>• Position sizing based on gamma exposure</li>
                <li>• Hedge with opposite gamma positions</li>
                <li>• Monitor intraday gamma P&L</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded bg-green-50">
              <h5 className="font-semibold text-green-700 mb-2">Vega Hedging</h5>
              <ul className="text-xs space-y-1">
                <li>• Cross-tenor volatility hedging</li>
                <li>• Calendar spread vega management</li>
                <li>• Volatility forecasting models</li>
                <li>• Skew trading opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GreeksRiskDashboard;
