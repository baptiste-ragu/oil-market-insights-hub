
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area, BarChart, Bar, ScatterChart, Scatter } from 'recharts';
import { TrendingUp, Calculator, Target, AlertTriangle, BookOpen, Activity, BarChart3, PieChart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VolatilitySmileChart from '@/components/VolatilitySmileChart';
import GreeksRiskDashboard from '@/components/GreeksRiskDashboard';
import CommodityPricingModel from '@/components/CommodityPricingModel';

const CommodityDerivatives = () => {
  // Sample data for various charts
  const futuresCurveData = [
    { month: 'M1', wti: 82.5, brent: 85.2, gasoline: 2.45 },
    { month: 'M2', wti: 82.8, brent: 85.4, gasoline: 2.47 },
    { month: 'M3', wti: 83.1, brent: 85.6, gasoline: 2.49 },
    { month: 'M6', wti: 84.2, brent: 86.5, gasoline: 2.55 },
    { month: 'M12', wti: 86.0, brent: 88.1, gasoline: 2.68 },
    { month: 'M24', wti: 88.5, brent: 90.2, gasoline: 2.82 }
  ];

  const convenienceYieldData = [
    { date: 'Jan', convenience: 0.15, storage: 0.08, backwardation: 0.07 },
    { date: 'Feb', convenience: 0.22, storage: 0.08, backwardation: 0.14 },
    { date: 'Mar', convenience: 0.18, storage: 0.09, backwardation: 0.09 },
    { date: 'Apr', convenience: 0.12, storage: 0.09, backwardation: 0.03 },
    { date: 'May', convenience: 0.08, storage: 0.10, backwardation: -0.02 },
    { date: 'Jun', convenience: 0.05, storage: 0.11, backwardation: -0.06 }
  ];

  const meanReversionData = [
    { time: 0, price: 80, meanLevel: 85 },
    { time: 1, price: 75, meanLevel: 85 },
    { time: 2, price: 78, meanLevel: 85 },
    { time: 3, price: 82, meanLevel: 85 },
    { time: 4, price: 87, meanLevel: 85 },
    { time: 5, price: 84, meanLevel: 85 },
    { time: 6, price: 86, meanLevel: 85 }
  ];

  const chartConfig = {
    wti: { label: "WTI Crude", color: "#2563eb" },
    brent: { label: "Brent Crude", color: "#dc2626" },
    gasoline: { label: "RBOB Gasoline", color: "#16a34a" },
    convenience: { label: "Convenience Yield", color: "#f59e0b" },
    storage: { label: "Storage Costs", color: "#8b5cf6" },
    backwardation: { label: "Backwardation", color: "#06b6d4" },
    price: { label: "Spot Price", color: "#2563eb" },
    meanLevel: { label: "Long-term Mean", color: "#dc2626" }
  };

  return (
    <Layout 
      title="Commodity Derivatives Trading: A Practitioner's Guide" 
      description="Comprehensive guide to commodity futures and options trading from an investment bank trading desk perspective"
    >
      <div className="space-y-12">
        {/* Introduction */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              Trading Desk Perspective
            </CardTitle>
            <CardDescription>
              Written from the perspective of a derivatives dealer at a major investment bank managing a commodity trading book
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Part I: Futures Trading & Book Management</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Theoretical foundations of commodity pricing</li>
                  <li>• Stochastic models for spot prices</li>
                  <li>• Convenience yield and storage theory</li>
                  <li>• Futures curve analysis and trading strategies</li>
                  <li>• Jump-diffusion models for extreme events</li>
                  <li>• Portfolio risk management</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Part II: Options Trading & Risk Management</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Commodity options pricing models</li>
                  <li>• Volatility modeling and smile dynamics</li>
                  <li>• American options and early exercise</li>
                  <li>• Exotic options in commodity markets</li>
                  <li>• Greeks and risk management</li>
                  <li>• Advanced pricing techniques</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="part1" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="part1">Part I: Futures Trading</TabsTrigger>
            <TabsTrigger value="part2">Part II: Options Trading</TabsTrigger>
          </TabsList>

          <TabsContent value="part1" className="space-y-8">
            {/* Part I Content */}
            
            {/* Theoretical Foundations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-green-600" />
                  Theoretical Foundations of Commodity Futures
                </CardTitle>
                <CardDescription>
                  Core commodity pricing equation and market specificities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Fundamental Commodity Pricing Framework</h4>
                    <div className="bg-white p-4 rounded border font-mono text-center text-lg">
                      F(t,T) = S(t) × exp[(r - δ + u)(T-t)]
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                      <div>
                        <strong>F(t,T):</strong> Futures price at time t for delivery at T
                      </div>
                      <div>
                        <strong>S(t):</strong> Spot price at time t
                      </div>
                      <div>
                        <strong>r:</strong> Risk-free rate
                      </div>
                      <div>
                        <strong>δ:</strong> Convenience yield
                      </div>
                      <div>
                        <strong>u:</strong> Storage costs per unit time
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Market Specificities</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs">Storage</Badge>
                          Physical storage costs impact price formation
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs">Convenience</Badge>
                          Convenience yield from holding physical commodity
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs">Mean Reversion</Badge>
                          Prices tend to revert to long-term equilibrium
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs">Seasonality</Badge>
                          Regular seasonal supply and demand patterns
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Market Structure Implications</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 rounded">
                          <strong className="text-green-700">Backwardation:</strong>
                          <p className="text-sm text-green-600">Futures < Spot (High convenience yield)</p>
                        </div>
                        <div className="p-3 bg-red-50 rounded">
                          <strong className="text-red-700">Contango:</strong>
                          <p className="text-sm text-red-600">Futures > Spot (Low convenience yield)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stochastic Models */}
            <Card>
              <CardHeader>
                <CardTitle>Stochastic Models for Commodity Spot Prices</CardTitle>
                <CardDescription>
                  Mean-reverting models for commodity price dynamics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Schwartz One-Factor Model (1997)</h4>
                        <div className="bg-white p-3 rounded border font-mono text-center">
                          d(ln S) = κ(μ - ln S)dt + σdW
                        </div>
                        <div className="text-sm mt-2 space-y-1">
                          <p><strong>κ:</strong> Mean reversion speed</p>
                          <p><strong>μ:</strong> Long-term mean</p>
                          <p><strong>σ:</strong> Volatility parameter</p>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Gibson-Schwartz Two-Factor Model</h4>
                        <div className="bg-white p-3 rounded border font-mono text-sm">
                          <div>dS = (r - δ)Sdt + σₛSdW₁</div>
                          <div>dδ = κ(α - δ)dt + σ_δdW₂</div>
                          <div className="mt-1">Correlation: dW₁dW₂ = ρdt</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Mean Reversion Illustration</h4>
                      <div className="chart-container">
                        <ChartContainer config={chartConfig}>
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={meanReversionData}>
                              <XAxis dataKey="time" label={{ value: 'Time', position: 'insideBottom', offset: -5 }} />
                              <YAxis label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }} />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} name="Spot Price" />
                              <Line type="monotone" dataKey="meanLevel" stroke="#dc2626" strokeWidth={2} strokeDasharray="5 5" name="Long-term Mean" />
                            </LineChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Convenience Yield Analysis */}
            <Card>
              <CardHeader>
                <CardTitle>Convenience Yield and Storage Theory</CardTitle>
                <CardDescription>
                  Understanding the economics of commodity storage and convenience yield dynamics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Convenience Yield Calculation</h4>
                    <div className="bg-white p-4 rounded border font-mono text-center text-lg">
                      δ = r + u - (1/T)ln(F/S)
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Extract convenience yield from market-observed futures and spot prices
                    </p>
                  </div>

                  <div className="chart-container">
                    <ChartContainer config={chartConfig}>
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={convenienceYieldData}>
                          <XAxis dataKey="date" />
                          <YAxis label={{ value: 'Yield (%)', angle: -90, position: 'insideLeft' }} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Area type="monotone" dataKey="convenience" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} name="Convenience Yield" />
                          <Area type="monotone" dataKey="storage" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} name="Storage Costs" />
                          <Line type="monotone" dataKey="backwardation" stroke="#06b6d4" strokeWidth={2} name="Backwardation" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-semibold text-sm mb-2">Storage Decision Framework</h5>
                      <ul className="text-xs space-y-1">
                        <li>• High convenience yield → Hold physical</li>
                        <li>• Low convenience yield → Use futures</li>
                        <li>• Consider storage capacity constraints</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-semibold text-sm mb-2">Trading Applications</h5>
                      <ul className="text-xs space-y-1">
                        <li>• Calendar spread opportunities</li>
                        <li>• Storage arbitrage strategies</li>
                        <li>• Inventory-based trading signals</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-semibold text-sm mb-2">Risk Factors</h5>
                      <ul className="text-xs space-y-1">
                        <li>• Storage capacity limitations</li>
                        <li>• Quality deterioration risks</li>
                        <li>• Geopolitical storage risks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Futures Curve Analysis */}
            <Card>
              <CardHeader>
                <CardTitle>Futures Curve Analysis and Trading Strategies</CardTitle>
                <CardDescription>
                  Term structure patterns and calendar spread opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="chart-container">
                    <ChartContainer config={chartConfig}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={futuresCurveData}>
                          <XAxis dataKey="month" label={{ value: 'Contract Month', position: 'insideBottom', offset: -5 }} />
                          <YAxis label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line type="monotone" dataKey="wti" stroke="#2563eb" strokeWidth={2} name="WTI Crude" />
                          <Line type="monotone" dataKey="brent" stroke="#dc2626" strokeWidth={2} name="Brent Crude" />
                          <Line type="monotone" dataKey="gasoline" stroke="#16a34a" strokeWidth={2} name="RBOB Gasoline" />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Calendar Spread Mathematics</h4>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="font-mono text-sm space-y-2">
                          <div>Calendar Spread Value = F₁ - F₂</div>
                          <div>Expected P&L = (δ₁ - δ₂) × Contract Size × Time</div>
                        </div>
                      </div>
                      <div className="text-sm space-y-2">
                        <p><strong>Roll Yield:</strong> Profit/loss from rolling futures positions</p>
                        <p><strong>Curve Steepening:</strong> Front months fall relative to back months</p>
                        <p><strong>Curve Flattening:</strong> Front months rise relative to back months</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">Advanced Trading Strategies</h4>
                      <div className="space-y-3">
                        <div className="p-3 border rounded">
                          <strong className="text-sm">Flying Carpets</strong>
                          <p className="text-xs text-gray-600">Multiple calendar spread combinations</p>
                        </div>
                        <div className="p-3 border rounded">
                          <strong className="text-sm">Strip/Stack Hedging</strong>
                          <p className="text-xs text-gray-600">Producer hedging strategies</p>
                        </div>
                        <div className="p-3 border rounded">
                          <strong className="text-sm">Crack Spreads</strong>
                          <p className="text-xs text-gray-600">Crude oil to refined products</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Jump-Diffusion Models */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  Jump-Diffusion Models for Extreme Events
                </CardTitle>
                <CardDescription>
                  Modeling geopolitical and supply disruption risks in oil markets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Merton Jump-Diffusion Extension</h4>
                    <div className="bg-white p-4 rounded border font-mono text-center">
                      dS = (μ - λk)Sdt + σSdW + S(J-1)dN
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                      <div><strong>λ:</strong> Jump intensity</div>
                      <div><strong>k:</strong> Expected jump size</div>
                      <div><strong>N:</strong> Poisson process</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Applications in Oil Markets</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                          <strong className="text-red-700">Geopolitical Events</strong>
                          <p className="text-sm text-red-600">War, sanctions, supply disruptions</p>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
                          <strong className="text-yellow-700">OPEC Announcements</strong>
                          <p className="text-sm text-yellow-600">Production cuts/increases</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                          <strong className="text-blue-700">Natural Disasters</strong>
                          <p className="text-sm text-blue-600">Hurricane impacts on production</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Calibration Framework</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ol className="text-sm space-y-2">
                          <li><strong>1.</strong> Historical jump frequency analysis</li>
                          <li><strong>2.</strong> Market option prices for implied jumps</li>
                          <li><strong>3.</strong> Monte Carlo simulation validation</li>
                          <li><strong>4.</strong> Stress testing scenarios</li>
                        </ol>
                      </div>
                      <div className="mt-4 p-3 border rounded">
                        <strong className="text-sm">Typical Parameters:</strong>
                        <div className="text-xs mt-1 space-y-1">
                          <div>λ = 0.3-0.8 (jumps per year)</div>
                          <div>Jump size = 10-25% price change</div>
                          <div>Jump direction = 70% up, 30% down</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Management */}
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Risk Management</CardTitle>
                <CardDescription>
                  Value-at-Risk, stress testing, and hedge ratio optimization for commodity portfolios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Value-at-Risk Framework</h4>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <strong>Monte Carlo VaR</strong>
                        <div className="text-sm mt-2 space-y-1">
                          <div>• Multi-asset correlation modeling</div>
                          <div>• 10,000+ simulation paths</div>
                          <div>• 99% confidence level standard</div>
                          <div>• Daily, 10-day, and monthly horizons</div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <strong>Expected Shortfall (ES)</strong>
                        <div className="text-sm mt-2">
                          ES = E[Loss | Loss > VaR]
                          <p className="mt-1">Captures tail risk beyond VaR threshold</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">Hedge Ratio Optimization</h4>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="font-mono text-center mb-2">
                          h* = Cov(ΔS,ΔF) / Var(ΔF)
                        </div>
                        <div className="text-sm space-y-1">
                          <div><strong>Adjustments for:</strong></div>
                          <div>• Time-varying volatility</div>
                          <div>• Basis risk considerations</div>
                          <div>• Cross-hedging effectiveness</div>
                          <div>• Transaction costs</div>
                        </div>
                      </div>
                      
                      <div className="p-3 border rounded">
                        <strong className="text-sm">Hedge Effectiveness</strong>
                        <div className="text-xs mt-1">
                          R² = 1 - Var(hedged) / Var(unhedged)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Stress Testing Scenarios</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="p-3 bg-white rounded border">
                        <strong>Historical Scenarios</strong>
                        <ul className="mt-2 space-y-1 text-xs">
                          <li>• 2008 Financial Crisis</li>
                          <li>• 2020 Oil Price Collapse</li>
                          <li>• Gulf War I & II</li>
                          <li>• 2014 Oil Price Decline</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-white rounded border">
                        <strong>Hypothetical Scenarios</strong>
                        <ul className="mt-2 space-y-1 text-xs">
                          <li>• Strait of Hormuz closure</li>
                          <li>• Major refinery accidents</li>
                          <li>• Extreme weather events</li>
                          <li>• Cyber attacks on infrastructure</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-white rounded border">
                        <strong>Model-Based Scenarios</strong>
                        <ul className="mt-2 space-y-1 text-xs">
                          <li>• 3-sigma volatility shocks</li>
                          <li>• Correlation breakdown</li>
                          <li>• Jump clustering events</li>
                          <li>• Liquidity stress conditions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="part2" className="space-y-8">
            {/* Part II Content */}
            
            {/* Options Pricing Models */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-purple-600" />
                  Commodity Options Pricing Models
                </CardTitle>
                <CardDescription>
                  Black-76 model and extensions for commodity option valuation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Black-76 Model for Commodity Options</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded border">
                        <strong>Call Option:</strong>
                        <div className="font-mono text-sm mt-2">
                          C = e^(-rT)[F×N(d₁) - K×N(d₂)]
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <strong>Put Option:</strong>
                        <div className="font-mono text-sm mt-2">
                          P = e^(-rT)[K×N(-d₂) - F×N(-d₁)]
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 bg-white p-4 rounded border">
                      <div className="font-mono text-sm space-y-1">
                        <div>d₁ = [ln(F/K) + 0.5σ²T] / (σ√T)</div>
                        <div>d₂ = d₁ - σ√T</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Model Limitations</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                          <strong className="text-red-700">Constant Volatility</strong>
                          <p className="text-sm text-red-600">Assumes fixed volatility across strikes and time</p>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
                          <strong className="text-yellow-700">Volatility Smile</strong>
                          <p className="text-sm text-yellow-600">Observed volatility varies with strike price</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                          <strong className="text-blue-700">Exercise Features</strong>
                          <p className="text-sm text-blue-600">American vs European option differences</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Model Extensions</h4>
                      <div className="space-y-3">
                        <div className="p-3 border rounded">
                          <strong className="text-sm">Stochastic Volatility</strong>
                          <p className="text-xs text-gray-600">Heston, SABR models for commodities</p>
                        </div>
                        <div className="p-3 border rounded">
                          <strong className="text-sm">Jump-Diffusion</strong>
                          <p className="text-xs text-gray-600">Merton model with Poisson jumps</p>
                        </div>
                        <div className="p-3 border rounded">
                          <strong className="text-sm">American Features</strong>
                          <p className="text-xs text-gray-600">Binomial trees, finite differences</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Volatility Modeling */}
            <VolatilitySmileChart />

            {/* Greeks and Risk Management */}
            <GreeksRiskDashboard />

            {/* Commodity Pricing Model */}
            <CommodityPricingModel />

            {/* Exotic Options */}
            <Card>
              <CardHeader>
                <CardTitle>Exotic Options in Commodity Markets</CardTitle>
                <CardDescription>
                  Asian options, barrier options, and real options applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-3">Asian Options</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Average Price Options</strong></p>
                        <p>Critical for commodity hedging:</p>
                        <ul className="text-xs space-y-1 mt-2">
                          <li>• Natural averaging of purchases/sales</li>
                          <li>• Reduced volatility vs European</li>
                          <li>• Common in refining margin hedging</li>
                          <li>• Lower premium than vanilla options</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-3">Barrier Options</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Knock-out Conditions</strong></p>
                        <div className="font-mono text-xs bg-gray-100 p-2 rounded">
                          S(t) ≤ B for any t ∈ [0,T]
                        </div>
                        <p className="text-xs">Pricing adjustment:</p>
                        <div className="font-mono text-xs bg-gray-100 p-2 rounded">
                          C_barrier = C_vanilla × P(no barrier hit)
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-3">Real Options</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Energy Project Valuation</strong></p>
                        <ul className="text-xs space-y-1">
                          <li>• Oil field development projects</li>
                          <li>• Storage facility investments</li>
                          <li>• Swing options in gas contracts</li>
                          <li>• Abandonment options</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Valuation Methodologies</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Monte Carlo Simulation</h5>
                        <div className="bg-white p-3 rounded border font-mono text-xs">
                          <div>for i in range(num_simulations):</div>
                          <div className="ml-4">for t in range(time_steps):</div>
                          <div className="ml-8">dW = random.normal(0, sqrt(dt))</div>
                          <div className="ml-8">dS = kappa*(mu - log(S))*S*dt + sigma*S*dW</div>
                          <div className="ml-8">S = S + dS</div>
                          <div className="ml-4">payoff[i] = max(average(S) - K, 0)</div>
                          <div>option_price = exp(-r*T) * mean(payoff)</div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Analytical Approximations</h5>
                        <ul className="text-xs space-y-2">
                          <li><strong>Asian Options:</strong> Turnbull-Wakeman approximation</li>
                          <li><strong>Barrier Options:</strong> Closed-form solutions for geometric Brownian motion</li>
                          <li><strong>Real Options:</strong> Least squares Monte Carlo (LSM)</li>
                          <li><strong>Complex Exotics:</strong> PDE methods with finite differences</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Studies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-indigo-600" />
                  Case Studies and Practical Examples
                </CardTitle>
                <CardDescription>
                  Real-world applications of commodity derivatives trading strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Tabs defaultValue="case1" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="case1">WTI Option Book</TabsTrigger>
                      <TabsTrigger value="case2">Crack Spread Strategy</TabsTrigger>
                      <TabsTrigger value="case3">Storage Arbitrage</TabsTrigger>
                    </TabsList>

                    <TabsContent value="case1" className="space-y-4">
                      <h4 className="font-semibold">Case Study 1: WTI Crude Oil Option Book Management</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">Current Market Setup</h5>
                            <div className="text-sm space-y-1">
                              <div>WTI Spot: $82.50</div>
                              <div>1M ATM Vol: 35%</div>
                              <div>3M ATM Vol: 32%</div>
                              <div>Vol Skew: -2% (25Δ Put - 25Δ Call)</div>
                            </div>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">Portfolio Composition</h5>
                            <div className="text-sm space-y-1">
                              <div>Long 1000 85 Calls (1M)</div>
                              <div>Short 500 80 Puts (1M)</div>
                              <div>Long 200 90/95 Call Spreads (3M)</div>
                              <div>Delta: +1,250 bbls</div>
                              <div>Gamma: +180</div>
                              <div>Vega: -$12,000/vol point</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">Hedging Strategy</h5>
                            <div className="text-sm space-y-2">
                              <p><strong>Delta Hedge:</strong> Sell 15 WTI futures contracts</p>
                              <p><strong>Gamma Management:</strong> Monitor daily gamma P&L</p>
                              <p><strong>Vega Hedge:</strong> Long volatility in 2M options</p>
                              <p><strong>Theta Decay:</strong> $850/day time decay</p>
                            </div>
                          </div>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">Risk Limits</h5>
                            <div className="text-sm space-y-1">
                              <div>Max Delta: ±2,000 bbls</div>
                              <div>Max Gamma: ±300</div>
                              <div>Max Vega: ±$25,000/vol point</div>
                              <div>Daily VaR: $45,000 (99%)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="case2" className="space-y-4">
                      <h4 className="font-semibold">Case Study 2: Crack Spread Option Strategy</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">Market Setup</h5>
                            <div className="text-sm space-y-1">
                              <div>WTI: $82.50</div>
                              <div>RBOB Gasoline: $2.45</div>
                              <div>ULSD: $2.52</div>
                              <div>3:2:1 Crack Spread: $24.85</div>
                              <div>Historical Average: $18.50</div>
                            </div>
                          </div>
                          
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">Strategy Structure</h5>
                            <div className="text-sm space-y-1">
                              <div>Sell 100 Crack Spread Calls ($28 strike)</div>
                              <div>Buy 100 Crack Spread Puts ($20 strike)</div>
                              <div>Net Premium: +$185,000</div>
                              <div>Break-even: $26.15</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="bg-indigo-50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">Risk Analysis</h5>
                            <div className="text-sm space-y-1">
                              <div>Max Profit: $185,000 (current premium)</div>
                              <div>Max Loss: $215,000 (at $20 or $28)</div>
                              <div>Probability of Profit: 68%</div>
                              <div>Expected Return: 12.5% annualized</div>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">Greeks Summary</h5>
                            <div className="text-sm space-y-1">
                              <div>Delta: -15 (crack spread units)</div>
                              <div>Gamma: -45</div>
                              <div>Theta: +$1,200/day</div>
                              <div>Vega: -$8,500/vol point</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="case3" className="space-y-4">
                      <h4 className="font-semibold">Case Study 3: Storage Arbitrage with Options</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="bg-teal-50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">Storage Economics</h5>
                            <div className="text-sm space-y-1">
                              <div>Storage Cost: $0.35/bbl/month</div>
                              <div>Financing Cost: 5% annual</div>
                              <div>Insurance: $0.05/bbl/month</div>
                              <div>Total Cost: $0.75/bbl/month</div>
                            </div>
                          </div>
                          
                          <div className="bg-pink-50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">Arbitrage Opportunity</h5>
                            <div className="text-sm space-y-1">
                              <div>Spot Price: $82.50</div>
                              <div>6M Future: $87.20</div>
                              <div>Storage Cost (6M): $4.50</div>
                              <div>Theoretical Fair Value: $87.00</div>
                              <div>Arbitrage Profit: $0.20/bbl</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="bg-emerald-50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">Option Enhancement</h5>
                            <div className="text-sm space-y-2">
                              <p><strong>Strategy:</strong> Buy physical oil + sell futures + buy puts</p>
                              <p><strong>Protection:</strong> $80 puts for $1.25/bbl</p>
                              <p><strong>Net Profit:</strong> $0.20 - $1.25 = -$1.05/bbl upfront</p>
                              <p><strong>Payoff:</strong> Protected against downside below $80</p>
                            </div>
                          </div>
                          
                          <div className="bg-cyan-50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">Risk Considerations</h5>
                            <div className="text-sm space-y-1">
                              <div>Quality deterioration risk</div>
                              <div>Storage facility operational risk</div>
                              <div>Basis risk (location/quality)</div>
                              <div>Early delivery option risk</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default CommodityDerivatives;
