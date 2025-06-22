
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import ChartContainer from '@/components/ChartContainer';

const reservesData = [
  { region: 'Middle East', reserves: 836, percentage: 48.4, color: '#3b82f6' },
  { region: 'South & Central America', reserves: 324, percentage: 18.8, color: '#10b981' },
  { region: 'North America', reserves: 243, percentage: 14.1, color: '#f59e0b' },
  { region: 'Europe & Eurasia', reserves: 160, percentage: 9.3, color: '#ef4444' },
  { region: 'Africa', reserves: 126, percentage: 7.3, color: '#8b5cf6' },
  { region: 'Asia & South Pacific', reserves: 45, percentage: 2.6, color: '#06b6d4' },
];

const productionData = [
  { country: 'United States', production: 19358, flag: '🇺🇸' },
  { country: 'Saudi Arabia', production: 11389, flag: '🇸🇦' },
  { country: 'Russian Federation', production: 11075, flag: '🇷🇺' },
  { country: 'Canada', production: 5653, flag: '🇨🇦' },
  { country: 'Iran', production: 4662, flag: '🇮🇷' },
  { country: 'Iraq', production: 4355, flag: '🇮🇶' },
  { country: 'China', production: 4198, flag: '🇨🇳' },
  { country: 'UAE', production: 3922, flag: '🇦🇪' },
  { country: 'Brazil', production: 3502, flag: '🇧🇷' },
  { country: 'Kuwait', production: 2908, flag: '🇰🇼' },
];

const opecData = [
  { country: 'Saudi Arabia', production: 11389, percentage: 32.1 },
  { country: 'Iraq', production: 4355, percentage: 12.3 },
  { country: 'Iran', production: 4662, percentage: 13.1 },
  { country: 'UAE', production: 3922, percentage: 11.0 },
  { country: 'Kuwait', production: 2908, percentage: 8.2 },
  { country: 'Nigeria', production: 1777, percentage: 5.0 },
  { country: 'Libya', production: 1204, percentage: 3.4 },
  { country: 'Angola', production: 1127, percentage: 3.2 },
  { country: 'Algeria', production: 1057, percentage: 3.0 },
  { country: 'Venezuela', production: 708, percentage: 2.0 },
];

const Reserves = () => {
  return (
    <Layout 
      title="Global Oil Reserves and Production" 
      description="Comprehensive analysis of worldwide proven reserves distribution and production statistics"
    >
      <div className="space-y-12">
        {/* World Proven Reserves */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">World Proven Reserves Distribution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Reserves by Region (Billion Barrels)</CardTitle>
                <CardDescription>Total: 1,734 billion barrels</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer height="300px">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={reservesData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="reserves"
                        label={({ region, percentage }) => `${region}: ${percentage}%`}
                        labelLine={false}
                      >
                        {reservesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} billion barrels`, 'Reserves']} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regional Breakdown</CardTitle>
                <CardDescription>Detailed reserves distribution by region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reservesData.map((region, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: region.color }}
                        ></div>
                        <span className="font-medium">{region.region}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{region.reserves}B barrels</div>
                        <div className="text-sm text-gray-600">{region.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Top 10 Producers */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top 10 World Oil Producers</h2>
          <Card>
            <CardHeader>
              <CardTitle>Daily Production (Thousand Barrels per Day)</CardTitle>
              <CardDescription>Leading oil producing countries by daily output</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer height="400px">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={productionData} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
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
                      formatter={(value) => [`${value.toLocaleString()} thousand bpd`, 'Production']}
                      labelFormatter={(label) => {
                        const country = productionData.find(item => item.country === label);
                        return country ? `${country.flag} ${label}` : label;
                      }}
                    />
                    <Bar dataKey="production" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* OPEC Production */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">OPEC Production Analysis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>OPEC Member Production</CardTitle>
                <CardDescription>Saudi Arabia's dominant role in OPEC oil supply</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer height="300px">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={opecData.slice(0, 5)} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="country" type="category" width={100} fontSize={12} />
                      <Tooltip formatter={(value) => [`${value.toLocaleString()} thousand bpd`, 'Production']} />
                      <Bar dataKey="production" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>OPEC Market Dynamics</CardTitle>
                <CardDescription>Key statistics and production insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Saudi Arabia Leadership</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600">Daily Production</div>
                        <div className="font-bold">11.39 million bpd</div>
                      </div>
                      <div>
                        <div className="text-gray-600">OPEC Share</div>
                        <div className="font-bold">32.1%</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Spare Capacity</div>
                        <div className="font-bold">3.5 million bpd</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Global Market Share</div>
                        <div className="font-bold">~12%</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">OPEC Total Production</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600">Total Daily Output</div>
                        <div className="font-bold">35.5 million bpd</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Global Market Share</div>
                        <div className="font-bold">35%</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Proven Reserves</div>
                        <div className="font-bold">1,200+ billion bbls</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Reserve Share</div>
                        <div className="font-bold">69%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Price Correlation Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Saudi Production and Price Correlation</CardTitle>
            <CardDescription>
              How Saudi Arabia's production changes impact global oil prices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Swing Producer Role</h4>
                <p className="text-sm text-gray-700">
                  Saudi Arabia acts as the global swing producer, adjusting output to balance markets. 
                  Their 3.5 million bpd spare capacity provides crucial market stability during supply disruptions.
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Price Impact</h4>
                <p className="text-sm text-gray-700">
                  A 1 million bpd production cut typically results in $5-10 per barrel price increase, 
                  depending on market conditions, spare capacity utilization, and demand elasticity.
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Market Signaling</h4>
                <p className="text-sm text-gray-700">
                  Saudi production announcements serve as key market signals, often moving prices 
                  before physical changes occur, demonstrating the kingdom's influence on expectations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Reserves;
