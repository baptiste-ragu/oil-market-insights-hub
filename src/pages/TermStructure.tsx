import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, ComposedChart, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, BarChart3 } from 'lucide-react';

const TermStructure = () => {
  const contangoBackwardation = [
    {
      concept: 'Contango',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'green',
      description: 'Forward prices higher than spot prices',
      characteristics: [
        'Indicates oversupplied physical markets',
        'High inventory levels',
        'Anticipation of higher long-term prices',
        'Cash & carry arbitrage limits the extent of contango',
        'Incentivizes storage and inventory building'
      ]
    },
    {
      concept: 'Backwardation',
      icon: <TrendingDown className="h-6 w-6" />,
      color: 'red',
      description: 'Forward prices lower than spot prices',
      characteristics: [
        'Indicates tight supply conditions',
        'Low inventory levels',
        'Anticipation of lower long-term prices',
        'No theoretical limit to backwardation levels',
        'Encourages immediate consumption over storage'
      ]
    }
  ];

  const historicalCurves2009 = [
    { month: 'M1', price: 43.2 },
    { month: 'M2', price: 45.8 },
    { month: 'M3', price: 48.1 },
    { month: 'M6', price: 52.4 },
    { month: 'M12', price: 58.9 },
    { month: 'M18', price: 62.3 },
    { month: 'M24', price: 64.7 }
  ];

  const historicalCurves2012 = [
    { month: 'M1', price: 125.3 },
    { month: 'M2', price: 122.1 },
    { month: 'M3', price: 118.7 },
    { month: 'M6', price: 112.4 },
    { month: 'M12', price: 105.8 },
    { month: 'M18', price: 102.1 },
    { month: 'M24', price: 98.9 }
  ];

  const wtiSpreadData = [
    { period: '2008 Q4', spread: -8.2, event: 'Lehman Bankruptcy + Hurricane Ike' },
    { period: '2009 Q1', spread: 12.4, event: 'Super-Contango Begin' },
    { period: '2009 Q2', spread: 15.8, event: 'Peak Super-Contango' },
    { period: '2009 Q3', spread: 14.2, event: 'Contango Continue' },
    { period: '2009 Q4', spread: 8.9, event: 'Recovery Begin' },
    { period: '2010 Q1', spread: 4.1, event: 'Normalization' },
    { period: '2019 Q4', spread: 2.3, event: 'Normal Market' },
    { period: '2020 Q1', spread: 3.8, event: 'COVID Impact Begin' },
    { period: '2020 Q2', spread: 18.7, event: 'Super-Contango 2020' },
    { period: '2020 Q3', spread: 12.1, event: 'Recovery Phase' }
  ];

  const marketExamples = [
    {
      title: '2009 Super-Contango',
      period: 'March 2009',
      cause: 'Depressed economic growth hurting demand',
      characteristics: [
        'Market oversupplied with high stock levels',
        'Strong incentive for storage and inventory accumulation',
        'Front month WTI trading $15+ below 12-month forward',
        'Cash & carry arbitrage opportunities abundant'
      ],
      impact: 'Massive inventory building, floating storage utilization'
    },
    {
      title: '2011-2012 Backwardation',
      period: 'March 2012',
      cause: 'Supply disruptions in North Sea, MENA region',
      characteristics: [
        'Declining Iranian exports due to embargo',
        'Tightening supplies amid recovering demand patterns',
        'Market prioritized immediate supply over future delivery',
        'Front month premium up to $8/barrel over forwards'
      ],
      impact: 'Inventory draws, reduced storage incentives'
    }
  ];

  const chartConfig = {
    price: {
      label: "Price ($/barrel)",
      color: "#2563eb",
    },
    spread: {
      label: "Front Month - Second Month Spread",
      color: "#dc2626",
    },
  };

  return (
    <Layout 
      title="Term Structure Analysis" 
      description="Forward curve dynamics, contango, and backwardation patterns"
    >
      <div className="space-y-8">
        {/* Forward Curve Dynamics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-blue-600" />
              Forward Curve Dynamics
            </CardTitle>
            <CardDescription>
              Understanding contango and backwardation market structures
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {contangoBackwardation.map((structure, index) => (
                <div key={structure.concept} className={`border-l-4 ${structure.color === 'green' ? 'border-l-green-500 bg-green-50' : 'border-l-red-500 bg-red-50'} rounded-lg p-6`}>
                  <div className={`flex items-center gap-3 mb-4 ${structure.color === 'green' ? 'text-green-800' : 'text-red-800'}`}>
                    {structure.icon}
                    <h3 className="text-xl font-semibold">{structure.concept}</h3>
                  </div>
                  <p className={`${structure.color === 'green' ? 'text-green-700' : 'text-red-700'} mb-4 font-medium`}>
                    {structure.description}
                  </p>
                  <ul className="space-y-2">
                    {structure.characteristics.map((char, idx) => (
                      <li key={idx} className={`text-sm ${structure.color === 'green' ? 'text-green-600' : 'text-red-600'} flex items-start gap-2`}>
                        <span className={`w-2 h-2 rounded-full ${structure.color === 'green' ? 'bg-green-500' : 'bg-red-500'} mt-2 flex-shrink-0`}></span>
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Historical Examples with Charts */}
        <Card>
          <CardHeader>
            <CardTitle>Historical Forward Curve Examples</CardTitle>
            <CardDescription>
              Brent ICE forward curves showing extreme market conditions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-green-800 mb-4">March 2009 - Super Contango</h4>
                <div className="h-64">
                  <ChartContainer config={chartConfig}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={historicalCurves2009}>
                        <XAxis dataKey="month" />
                        <YAxis label={{ value: '$/barrel', angle: -90, position: 'insideLeft' }} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line 
                          type="monotone" 
                          dataKey="price" 
                          stroke="#16a34a" 
                          strokeWidth={3}
                          name="Brent Price ($/barrel)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-red-800 mb-4">March 2012 - Backwardation</h4>
                <div className="h-64">
                  <ChartContainer config={chartConfig}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={historicalCurves2012}>
                        <XAxis dataKey="month" />
                        <YAxis label={{ value: '$/barrel', angle: -90, position: 'insideLeft' }} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line 
                          type="monotone" 
                          dataKey="price" 
                          stroke="#dc2626" 
                          strokeWidth={3}
                          name="Brent Price ($/barrel)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {marketExamples.map((example, index) => (
                <div key={example.title} className="border rounded-lg p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{example.title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="font-medium text-gray-600">Period:</span> {example.period}
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Primary Cause:</span> {example.cause}
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Market Characteristics:</h4>
                        <ul className="space-y-1">
                          {example.characteristics.map((char, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                              {char}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Market Impact</h4>
                        <p className="text-sm text-gray-600">{example.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* WTI Super-Contango Historical Data */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              WTI Front Month vs Second Month Spread Analysis
            </CardTitle>
            <CardDescription>
              Historical spread data showing super-contango and backwardation periods
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 mb-6">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={wtiSpreadData}>
                    <XAxis 
                      dataKey="period" 
                      angle={-45}
                      textAnchor="end"
                      height={100}
                      interval={0}
                      fontSize={12}
                    />
                    <YAxis label={{ value: 'Spread ($/barrel)', angle: -90, position: 'insideLeft' }} />
                    <ChartTooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white p-3 border rounded-lg shadow-lg">
                              <p className="font-semibold">{label}</p>
                              <p className="text-blue-600">
                                Spread: {data.spread > 0 ? '+' : ''}{data.spread}$/barrel
                              </p>
                              <p className="text-gray-600 text-sm">{data.event}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar 
                      dataKey="spread" 
                      fill="#16a34a"
                      name="Front Month - Second Month Spread"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">2008 Crisis Backwardation</h4>
                <p className="text-sm text-red-700">
                  Lehman bankruptcy and Hurricane Ike created severe supply concerns, 
                  pushing front month prices above forward contracts.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">2009 Super-Contango</h4>
                <p className="text-sm text-green-700">
                  Economic depression reduced demand while supply remained high, 
                  creating extreme contango with storage incentives.
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">2020 Super-Contango</h4>
                <p className="text-sm text-orange-700">
                  COVID-19 lockdowns destroyed demand while production continued, 
                  recreating extreme contango conditions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Insights Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Term Structure Key Insights</CardTitle>
            <CardDescription>
              Understanding curve shapes and their market implications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Contango Implications</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Storage becomes profitable when contango exceeds carrying costs</li>
                  <li>• Floating storage utilization increases during extreme contango</li>
                  <li>• Cash & carry arbitrage limits maximum contango levels</li>
                  <li>• Inventory building incentivized across supply chain</li>
                  <li>• Forward selling strategies become attractive for producers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-red-600">Backwardation Implications</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Immediate delivery commands premium over future delivery</li>
                  <li>• Storage becomes uneconomical, inventory draws accelerate</li>
                  <li>• No theoretical limit to backwardation steepness</li>
                  <li>• Spot market tightness drives immediate consumption</li>
                  <li>• Forward buying strategies preferred by consumers</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TermStructure;
