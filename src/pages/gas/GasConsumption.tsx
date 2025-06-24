
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, TrendingUp, ArrowLeft, Globe, BarChart3, Users, Factory, Home, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, ComposedChart } from 'recharts';

const europeanDemandBySecrorData = [
  { year: 1992, residential: 150, industry: 180, power: 50, ownUse: 50 },
  { year: 1995, residential: 160, industry: 190, power: 70, ownUse: 52 },
  { year: 2000, residential: 170, industry: 200, power: 100, ownUse: 55 },
  { year: 2005, residential: 180, industry: 220, power: 130, ownUse: 58 },
  { year: 2010, residential: 185, industry: 190, power: 160, ownUse: 60 },
  { year: 2015, residential: 190, industry: 170, power: 180, ownUse: 58 },
  { year: 2020, residential: 195, industry: 160, power: 190, ownUse: 55 },
  { year: 2022, residential: 200, industry: 150, power: 200, ownUse: 52 }
];

const globalConsumptionData = [
  { region: 'Asia Pacific', demand: 1261, supply: 254, deficit: -1007 },
  { region: 'Europe', demand: 578, supply: 162, deficit: -416 },
  { region: 'North America', demand: 463, supply: 936, surplus: 473 },
  { region: 'Middle East', demand: 204, supply: 692, surplus: 488 },
  { region: 'CIS', demand: 162, supply: 774, surplus: 612 },
  { region: 'Africa', demand: 171, supply: 596, surplus: 425 },
  { region: 'Central & South America', demand: 1105, supply: 162, deficit: -943 }
];

const seasonalPatternsData = [
  { month: 'Jan', heating: 95, power: 70, industrial: 80, lng: 85 },
  { month: 'Feb', heating: 90, power: 65, industrial: 82, lng: 80 },
  { month: 'Mar', heating: 75, power: 60, industrial: 85, lng: 75 },
  { month: 'Apr', heating: 50, power: 55, industrial: 88, lng: 70 },
  { month: 'May', heating: 25, power: 50, industrial: 90, lng: 65 },
  { month: 'Jun', heating: 15, power: 60, industrial: 92, lng: 60 },
  { month: 'Jul', heating: 10, power: 75, industrial: 95, lng: 55 },
  { month: 'Aug', heating: 12, power: 80, industrial: 93, lng: 58 },
  { month: 'Sep', heating: 20, power: 65, industrial: 90, lng: 65 },
  { month: 'Oct', heating: 45, power: 60, industrial: 88, lng: 70 },
  { month: 'Nov', heating: 70, power: 65, industrial: 85, lng: 75 },
  { month: 'Dec', heating: 85, power: 70, industrial: 82, lng: 80 }
];

const sectorBreakdownData = [
  { sector: 'Power Generation', share: 35.2, growth: 8.5 },
  { sector: 'Residential/Commercial', share: 32.8, growth: 1.2 },
  { sector: 'Industry', share: 24.7, growth: -2.1 },
  { sector: 'Own Use & Losses', share: 7.3, growth: -0.8 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658'];

const GasConsumption = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/gas" className="flex items-center space-x-2 mr-6">
                <ArrowLeft className="h-5 w-5 text-green-600" />
                <span className="text-sm text-green-600">Back to Gas Markets</span>
              </Link>
              <Zap className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Gas Consumption</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              Global Gas Consumption Patterns and Demand Structure
            </CardTitle>
            <CardDescription>
              Regional consumption dynamics and sectoral demand evolution
            </CardDescription>
          </CardHeader>
        </Card>

        {/* European Demand by Sector Evolution */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              European Gas Demand by Sector (1992-2022)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                European gas demand has undergone significant structural transformation over the past three decades.
                <strong> Power generation has emerged as the largest consuming sector</strong>, growing from ~50 Bcm 
                in 1992 to ~200 Bcm in 2022, while industrial demand declined following economic cycles.
              </p>
            </div>
            <div className="h-96 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={europeanDemandBySecrorData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: 'Bcm', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="residential" stroke="#8884d8" strokeWidth={3} name="Residential/Commercial" />
                  <Line type="monotone" dataKey="industry" stroke="#82ca9d" strokeWidth={3} name="Industry" />
                  <Line type="monotone" dataKey="power" stroke="#ffc658" strokeWidth={3} name="Power Generation" />
                  <Line type="monotone" dataKey="ownUse" stroke="#ff7300" strokeWidth={3} name="Own Use & Losses" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 bg-yellow-50">
                <h4 className="font-semibold text-yellow-800 mb-2">Key Structural Changes</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Power generation: 4x growth (50→200 Bcm)</li>
                  <li>• Industrial demand: Post-2008 decline</li>
                  <li>• Residential: Steady but slow growth</li>
                  <li>• Efficiency improvements in own use</li>
                </ul>
              </Card>
              <Card className="p-4 bg-blue-50">
                <h4 className="font-semibold text-blue-800 mb-2">Market Drivers</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Gas-fired power plant construction</li>
                  <li>• Economic crisis impact on industry</li>
                  <li>• Energy efficiency measures</li>
                  <li>• Environmental regulations</li>
                </ul>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Global Consumption Patterns */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-purple-600" />
              Global Gas Consumption vs Production (Bcm)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Global gas consumption shows significant regional imbalances. <strong>Asia Pacific leads consumption 
                at 1,261 Bcm with only 254 Bcm production</strong>, creating the world's largest gas deficit region 
                and driving international LNG trade flows.
              </p>
            </div>
            <div className="h-96 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={globalConsumptionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" angle={-45} textAnchor="end" height={100} />
                  <YAxis label={{ value: 'Bcm', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="demand" fill="#8884d8" name="Demand (Bcm)" />
                  <Bar dataKey="supply" fill="#82ca9d" name="Supply (Bcm)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 bg-red-50">
                <h4 className="font-semibold text-red-800">Major Deficit Regions</h4>
                <ul className="text-sm text-red-700 mt-2 space-y-1">
                  <li>• Asia Pacific: -1,007 Bcm</li>
                  <li>• Central & South America: -943 Bcm</li>
                  <li>• Europe: -416 Bcm</li>
                </ul>
                <p className="text-xs text-red-600 mt-2">Drive LNG import demand</p>
              </Card>
              <Card className="p-4 bg-green-50">
                <h4 className="font-semibold text-green-800">Major Surplus Regions</h4>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• CIS: +612 Bcm</li>
                  <li>• Middle East: +488 Bcm</li>
                  <li>• North America: +473 Bcm</li>
                </ul>
                <p className="text-xs text-green-600 mt-2">Export capacity available</p>
              </Card>
              <Card className="p-4 bg-blue-50">
                <h4 className="font-semibold text-blue-800">Trade Implications</h4>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• LNG trade growth essential</li>
                  <li>• Pipeline infrastructure key</li>
                  <li>• Price arbitrage opportunities</li>
                </ul>
                <p className="text-xs text-blue-600 mt-2">Market integration trends</p>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Seasonal Consumption Patterns */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-600" />
              Seasonal Gas Consumption Patterns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Gas consumption exhibits strong seasonal patterns driven by heating demand, power generation needs, 
                and industrial activity. <strong>Winter heating demand drives seasonal peaks</strong>, while LNG 
                demand varies with global market arbitrage opportunities.
              </p>
            </div>
            <div className="h-96 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={seasonalPatternsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis label={{ value: 'Index (Summer = 100)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="heating" stroke="#ff7300" strokeWidth={3} name="Heating Demand" />
                  <Line type="monotone" dataKey="power" stroke="#ffc658" strokeWidth={3} name="Power Generation" />
                  <Line type="monotone" dataKey="industrial" stroke="#82ca9d" strokeWidth={3} name="Industrial Demand" />
                  <Line type="monotone" dataKey="lng" stroke="#8884d8" strokeWidth={3} name="LNG Demand" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Seasonal Characteristics</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-orange-700 mb-1">Winter Patterns (Dec-Feb)</h5>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Heating demand peaks at 85-95% above summer</li>
                    <li>• Power generation increases with heating load</li>
                    <li>• Storage withdrawal season</li>
                    <li>• Highest LNG import requirements</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-orange-700 mb-1">Summer Patterns (Jun-Aug)</h5>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Minimal heating demand (10-15% of winter)</li>
                    <li>• Peak industrial activity (95% of capacity)</li>
                    <li>• Storage injection season</li>
                    <li>• Lowest LNG import requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sectoral Breakdown Analysis */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-teal-600" />
              Current Sectoral Consumption Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4">Consumption Share by Sector</h4>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sectorBreakdownData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ sector, share }) => `${sector}: ${share}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="share"
                      >
                        {sectorBreakdownData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Sector Analysis</h4>
                <div className="space-y-4">
                  <Card className="p-4 bg-blue-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Factory className="h-4 w-4 text-blue-600" />
                      <h5 className="font-semibold text-blue-800">Power Generation (35.2%)</h5>
                    </div>
                    <p className="text-sm text-blue-700 mb-2">
                      Largest consuming sector with 8.5% annual growth
                    </p>
                    <ul className="text-xs text-blue-600 space-y-1">
                      <li>• Weather-dependent demand variations</li>
                      <li>• Renewable intermittency backup</li>
                      <li>• Peak load balancing requirements</li>
                    </ul>
                  </Card>
                  <Card className="p-4 bg-green-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Home className="h-4 w-4 text-green-600" />
                      <h5 className="font-semibold text-green-800">Residential/Commercial (32.8%)</h5>
                    </div>
                    <p className="text-sm text-green-700 mb-2">
                      Stable sector with 1.2% annual growth
                    </p>
                    <ul className="text-xs text-green-600 space-y-1">
                      <li>• Heating dominates consumption</li>
                      <li>• Energy efficiency improvements</li>
                      <li>• Temperature sensitivity high</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default GasConsumption;
