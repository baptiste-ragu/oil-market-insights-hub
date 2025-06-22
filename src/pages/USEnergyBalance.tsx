
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, ComposedChart, Area, AreaChart } from 'recharts';
import { TrendingUp, DollarSign, MapPin, Zap } from 'lucide-react';

const USEnergyBalance = () => {
  const shaleBreakeven = [
    { region: 'Permian (Delaware)', newWells: 26, existingWells: 23, color: '#2563eb' },
    { region: 'Permian (Midland)', newWells: 28, existingWells: 26, color: '#3b82f6' },
    { region: 'Bakken', newWells: 33, existingWells: 30, color: '#16a34a' },
    { region: 'Eagle Ford', newWells: 53, existingWells: 32, color: '#ea580c' },
    { region: 'SCOOP/STACK', newWells: 51, existingWells: 36, color: '#dc2626' }
  ];

  const wtiSpread = [
    { year: 2010, spread: -2.5 },
    { year: 2011, spread: -12.8 },
    { year: 2012, spread: -18.2 },
    { year: 2013, spread: -14.1 },
    { year: 2014, spread: -8.3 },
    { year: 2015, spread: -2.1 },
    { year: 2016, spread: -1.8 },
    { year: 2017, spread: -2.4 },
    { year: 2018, spread: -5.2 },
    { year: 2019, spread: -3.1 },
    { year: 2020, spread: -2.8 }
  ];

  const geopoliticalImpacts = [
    {
      category: 'Economic Benefits',
      icon: <DollarSign className="h-5 w-5" />,
      color: 'green',
      impacts: [
        'Lower inflation impact from energy costs',
        'Employment gains in energy sector',
        'Improved tax revenue generation',
        'Positive trade balance effects'
      ]
    },
    {
      category: 'Energy Security',
      icon: <Zap className="h-5 w-5" />,
      color: 'blue',
      impacts: [
        'Reduced dependence on Middle East imports',
        'Enhanced energy independence',
        'Strategic reserve implications',
        'Reduced pressure for energy efficiency initiatives'
      ]
    },
    {
      category: 'Market Impact',
      icon: <TrendingUp className="h-5 w-5" />,
      color: 'orange',
      impacts: [
        'Light sweet crude availability increased',
        'US became net products exporter',
        'Atlantic basin oversupplied with products',
        'US refiners benefited from lower crude costs'
      ]
    }
  ];

  const volumeImpacts = [
    'Increasing US onshore shale oil production reduced US crude imports',
    'Light sweet crude availability increased for Atlantic basin and Asian markets',
    'US refiners benefited from lower crude oil costs and increased runs',
    'US became net products exporter',
    'Atlantic basin became oversupplied with gasoline, diesel, and gasoil'
  ];

  const chartConfig = {
    newWells: {
      label: "New Wells",
      color: "#2563eb",
    },
    existingWells: {
      label: "Existing Wells",
      color: "#16a34a",
    },
    spread: {
      label: "WTI/Brent Spread",
      color: "#dc2626",
    },
  };

  return (
    <Layout 
      title="US Energy Balance Transformation" 
      description="Shale oil breakeven economics and geopolitical implications"
    >
      <div className="space-y-12">
        {/* Shale Oil Breakeven Economics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-blue-600" />
              Shale Oil Breakeven Economics by Region (2020 Data)
            </CardTitle>
            <CardDescription>
              Breakeven prices in $/barrel for new wells vs existing wells production
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container us-energy-chart-container">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={shaleBreakeven} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
                    <XAxis 
                      dataKey="region" 
                      angle={-45}
                      textAnchor="end"
                      height={120}
                      interval={0}
                      fontSize={12}
                      tickMargin={15}
                    />
                    <YAxis 
                      label={{ value: '$/barrel', angle: -90, position: 'insideLeft' }}
                      tick={{ fontSize: 12 }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="newWells" fill="#2563eb" name="New Wells" />
                    <Bar dataKey="existingWells" fill="#16a34a" name="Existing Wells" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="chart-spacer"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {shaleBreakeven.map((play, index) => (
                <div key={play.region} className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">{play.region}</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>New Wells:</span>
                      <span className="font-mono">${play.newWells}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Existing:</span>
                      <span className="font-mono">${play.existingWells}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* WTI/Brent Spread Impact */}
        <Card>
          <CardHeader>
            <CardTitle>WTI/Brent Spread Historical Analysis</CardTitle>
            <CardDescription>
              Impact of shale oil production on WTI/Brent price differential ($/barrel)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container us-energy-chart-container">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={wtiSpread} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                    <XAxis 
                      dataKey="year" 
                      tick={{ fontSize: 12 }}
                      tickMargin={10}
                    />
                    <YAxis 
                      label={{ value: '$/barrel', angle: -90, position: 'insideLeft' }}
                      tick={{ fontSize: 12 }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="spread" 
                      stroke="#dc2626" 
                      strokeWidth={3}
                      name="WTI/Brent Spread"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="chart-spacer"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Peak Disconnect (2011-2013)</h4>
                <p className="text-sm text-red-700">
                  Shale oil created bearish impact on WTI with light sweet crude accumulating at Cushing, 
                  disconnected from international markets. Spread reached -$18.2/barrel in 2012.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Price Reconnection (2014-2015)</h4>
                <p className="text-sm text-green-700">
                  Seaway pipeline expansion (2013) and additional pipelines (2014-15) helped reconnect prices. 
                  Export ban lift (2014-2015) further normalized price relationships.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact on Volumes */}
        <Card>
          <CardHeader>
            <CardTitle>Impact on Global Oil Flows</CardTitle>
            <CardDescription>
              How US shale revolution transformed global oil trade patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {volumeImpacts.map((impact, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{impact}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Geopolitical and Economic Implications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {geopoliticalImpacts.map((category, index) => (
            <Card key={category.category} className={`border-l-4 border-l-${category.color}-500`}>
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 text-${category.color}-700`}>
                  {category.icon}
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.impacts.map((impact, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className={`w-2 h-2 rounded-full bg-${category.color}-500 mt-2 flex-shrink-0`}></span>
                      {impact}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Impact Assessment */}
        <Card>
          <CardHeader>
            <CardTitle>Transformation Summary</CardTitle>
            <CardDescription>
              Key outcomes of the US energy balance transformation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">Net Exporter</div>
                <div className="text-sm text-green-700">Petroleum Products</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">Energy Independence</div>
                <div className="text-sm text-blue-700">Reduced Import Dependence</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-1">Lower Costs</div>
                <div className="text-sm text-orange-700">Domestic Energy Prices</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-1">Job Creation</div>
                <div className="text-sm text-purple-700">Energy Sector Employment</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default USEnergyBalance;
