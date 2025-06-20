
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const regionalConsumption = [
  { region: 'Asia & South Pacific', consumption: 35, percentage: 36.5, color: '#3b82f6', growth: '+2.1%' },
  { region: 'North America', consumption: 24, percentage: 25.0, color: '#10b981', growth: '+0.3%' },
  { region: 'Europe & Eurasia', consumption: 18, percentage: 18.8, color: '#f59e0b', growth: '-0.8%' },
  { region: 'Middle East', consumption: 9, percentage: 9.4, color: '#ef4444', growth: '+1.9%' },
  { region: 'South & Central America', consumption: 6, percentage: 6.3, color: '#8b5cf6', growth: '+0.7%' },
  { region: 'Africa', consumption: 4, percentage: 4.2, color: '#06b6d4', growth: '+3.2%' },
];

const topConsumers = [
  { country: 'United States', consumption: 20.0, flag: '🇺🇸', share: 20.8, trend: 'stable' },
  { country: 'China', consumption: 16.0, flag: '🇨🇳', share: 16.7, trend: 'growing' },
  { country: 'India', consumption: 5.0, flag: '🇮🇳', share: 5.2, trend: 'growing' },
  { country: 'Japan', consumption: 3.5, flag: '🇯🇵', share: 3.6, trend: 'declining' },
  { country: 'Saudi Arabia', consumption: 3.5, flag: '🇸🇦', share: 3.6, trend: 'growing' },
  { country: 'Russian Federation', consumption: 3.2, flag: '🇷🇺', share: 3.3, trend: 'stable' },
  { country: 'Brazil', consumption: 3.0, flag: '🇧🇷', share: 3.1, trend: 'growing' },
  { country: 'South Korea', consumption: 2.8, flag: '🇰🇷', share: 2.9, trend: 'stable' },
  { country: 'Canada', consumption: 2.4, flag: '🇨🇦', share: 2.5, trend: 'stable' },
  { country: 'Germany', consumption: 2.2, flag: '🇩🇪', share: 2.3, trend: 'declining' },
];

const netPositions = [
  { region: 'Middle East', position: 'Exporter', netFlow: '+15.2', description: 'Major oil exporter with significant surplus' },
  { region: 'Russia & Central Asia', position: 'Exporter', netFlow: '+7.8', description: 'Key supplier to Europe and Asia' },
  { region: 'Africa', position: 'Exporter', netFlow: '+6.1', description: 'Growing export capacity, mainly to Asia' },
  { region: 'South America', position: 'Exporter', netFlow: '+2.4', description: 'Brazil and Venezuela lead regional exports' },
  { region: 'North America', position: 'Balanced', netFlow: '-0.3', description: 'US shale revolution achieving energy independence' },
  { region: 'Europe', position: 'Importer', netFlow: '-12.8', description: 'Largest importing region, dependent on Russia/Middle East' },
  { region: 'Asia Pacific', position: 'Importer', netFlow: '-18.4', description: 'Massive import requirements, China and India leading' },
];

const Consumption = () => {
  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'growing': return 'bg-green-100 text-green-800';
      case 'declining': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPositionColor = (position: string) => {
    switch (position) {
      case 'Exporter': return 'bg-green-100 text-green-800';
      case 'Importer': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <Layout 
      title="Global Oil Consumption Patterns" 
      description="Analysis of regional consumption trends, top consuming countries, and global trade flows"
    >
      {/* Regional Consumption Distribution */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Regional Consumption Distribution</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Daily Oil Consumption (Million Barrels)</CardTitle>
              <CardDescription>Total global consumption: 96.2 million barrels per day</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={regionalConsumption}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="consumption"
                    label={({ region, percentage }) => `${region}: ${percentage}%`}
                    labelLine={false}
                  >
                    {regionalConsumption.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} million bpd`, 'Consumption']} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regional Consumption Trends</CardTitle>
              <CardDescription>Annual growth rates and consumption patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regionalConsumption.map((region, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: region.color }}
                      ></div>
                      <span className="font-medium">{region.region}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{region.consumption} Mb/d</div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{region.percentage}%</span>
                        <Badge variant={region.growth.startsWith('+') ? 'default' : 'destructive'}>
                          {region.growth}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Top 10 Oil Consumers */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Top 10 Oil Consuming Countries</h2>
        <Card>
          <CardHeader>
            <CardTitle>Daily Consumption (Million Barrels per Day)</CardTitle>
            <CardDescription>Leading oil consuming nations and consumption trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={topConsumers} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="country" 
                    angle={-45}
                    textAnchor="end"
                    height={100}
                    fontSize={12}
                  />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [`${value} million bpd`, 'Consumption']}
                    labelFormatter={(label) => topConsumers.find(item => item.country === label)?.flag + ' ' + label}
                  />
                  <Bar dataKey="consumption" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg mb-4">Consumption Details</h4>
                {topConsumers.map((country, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{country.flag}</span>
                      <div>
                        <div className="font-medium">{country.country}</div>
                        <div className="text-sm text-gray-600">{country.share}% of global</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{country.consumption} Mb/d</div>
                      <Badge className={getTrendColor(country.trend)}>
                        {country.trend}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Net Importers/Exporters */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Global Trade Flows: Net Importers vs Exporters</h2>
        <Card>
          <CardHeader>
            <CardTitle>Regional Net Oil Positions</CardTitle>
            <CardDescription>
              Net flow positions showing surplus/deficit regions (Million barrels per day)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {netPositions.map((region, index) => (
                <div key={index} className="p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">{region.region}</h4>
                    <Badge className={getPositionColor(region.position)}>
                      {region.position}
                    </Badge>
                  </div>
                  <div className="mb-3">
                    <span className="text-2xl font-bold">
                      {region.netFlow} Mb/d
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{region.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Consumption Drivers and Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Key Consumption Drivers and Market Insights</CardTitle>
          <CardDescription>
            Understanding the factors driving global oil demand patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">Economic Growth Impact</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• GDP growth closely correlates with oil demand</li>
                <li>• Emerging markets drive consumption increases</li>
                <li>• Industrial activity determines commercial demand</li>
                <li>• Transportation sector represents 65% of consumption</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">Seasonal Patterns</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• US driving season (May-September) increases gasoline demand</li>
                <li>• Winter heating demand peaks in Northern Hemisphere</li>
                <li>• Refinery maintenance seasons affect regional supply</li>
                <li>• Agricultural seasons impact diesel consumption</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-3">Structural Changes</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Energy efficiency improvements reduce per-capita demand</li>
                <li>• Electric vehicle adoption affects gasoline consumption</li>
                <li>• Petrochemical demand provides growth support</li>
                <li>• Urbanization in developing countries increases demand</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-3">Asia-Pacific Growth Engine</h4>
              <p className="text-sm text-gray-700 mb-3">
                The Asia-Pacific region accounts for 36.5% of global consumption and drives most of the world's 
                oil demand growth. China's consumption of 16 million bpd and India's 5 million bpd represent 
                the largest growth markets.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-medium">China Growth:</span><br />
                  +0.8 million bpd annually
                </div>
                <div>
                  <span className="font-medium">India Growth:</span><br />
                  +0.3 million bpd annually
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-3">OECD Demand Maturity</h4>
              <p className="text-sm text-gray-700 mb-3">
                OECD countries show mature demand patterns with slower growth or decline. The US (20 million bpd) 
                and Europe (18 million bpd) focus on efficiency gains while maintaining large consumption bases.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-medium">US Trend:</span><br />
                  Stable at 20-21 million bpd
                </div>
                <div>
                  <span className="font-medium">Europe Trend:</span><br />
                  Declining -0.8% annually
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Consumption;
