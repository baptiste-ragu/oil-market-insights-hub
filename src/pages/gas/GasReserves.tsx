
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Globe, ArrowLeft, MapPin, Truck, Ship } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const globalReservesData = [
  { country: 'Russia', reserves: 47.8, percentage: 27.9 },
  { country: 'Iran', reserves: 32.1, percentage: 18.8 },
  { country: 'Qatar', reserves: 24.7, percentage: 14.4 },
  { country: 'Turkmenistan', reserves: 13.6, percentage: 8.0 },
  { country: 'USA', reserves: 12.6, percentage: 7.4 },
  { country: 'Saudi Arabia', reserves: 8.4, percentage: 4.9 },
  { country: 'UAE', reserves: 6.1, percentage: 3.6 },
  { country: 'Venezuela', reserves: 6.3, percentage: 3.7 },
  { country: 'Nigeria', reserves: 5.7, percentage: 3.3 },
  { country: 'Algeria', reserves: 4.5, percentage: 2.6 }
];

const lngGrowthData = [
  { year: 2000, lngImports: 100, totalConsumption: 5000, lngShare: 2.0 },
  { year: 2005, lngImports: 180, totalConsumption: 5400, lngShare: 3.3 },
  { year: 2010, lngImports: 300, totalConsumption: 5800, lngShare: 5.2 },
  { year: 2015, lngImports: 420, totalConsumption: 6200, lngShare: 6.8 },
  { year: 2020, lngImports: 580, totalConsumption: 6500, lngShare: 8.9 },
  { year: 2021, lngImports: 620, totalConsumption: 6600, lngShare: 9.4 },
  { year: 2022, lngImports: 650, totalConsumption: 6700, lngShare: 9.7 }
];

const infrastructureData = [
  { type: 'LNG Export Terminals', count: 45, capacity: 450 },
  { type: 'LNG Import Terminals', count: 180, capacity: 850 },
  { type: 'Major Pipeline Networks', count: 12, capacity: 2400 },
  { type: 'Underground Storage', count: 650, capacity: 400 }
];

const regionalProductionData = [
  { region: 'North America', production: 1024, reserves: 15.2, ratio: 67.4 },
  { region: 'CIS', production: 774, reserves: 57.1, ratio: 73.7 },
  { region: 'Middle East', production: 692, reserves: 75.8, ratio: 109.5 },
  { region: 'Asia Pacific', production: 520, reserves: 12.8, ratio: 24.6 },
  { region: 'Africa', production: 265, reserves: 14.1, ratio: 53.2 },
  { region: 'Europe', production: 162, reserves: 2.8, ratio: 17.3 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF7C7C', '#8DD1E1', '#D084D0'];

const GasReserves = () => {
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
              <span className="ml-2 text-xl font-bold text-gray-900">Global Gas Reserves</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-green-600" />
              Global Gas Reserves and Production
            </CardTitle>
            <CardDescription>
              World proven gas reserves by region and production dynamics
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Global Reserves Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              World Natural Gas Reserves (171 Tcm Total)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Global proven natural gas reserves total <strong>171 trillion cubic meters (Tcm)</strong>, 
                with the top 10 countries holding approximately 85% of world reserves. The concentration 
                is particularly high in the Middle East and CIS regions.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={globalReservesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="country" angle={-45} textAnchor="end" height={100} />
                    <YAxis label={{ value: 'Tcm', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => [`${value} Tcm`, 'Reserves')} />
                    <Bar dataKey="reserves" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={globalReservesData.slice(0, 6)}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ country, percentage }) => `${country}: ${percentage}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="percentage"
                    >
                      {globalReservesData.slice(0, 6).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 bg-blue-50">
                <h4 className="font-semibold text-blue-800">Top 3 Countries</h4>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• Russia: 47.8 Tcm (27.9%)</li>
                  <li>• Iran: 32.1 Tcm (18.8%)</li>
                  <li>• Qatar: 24.7 Tcm (14.4%)</li>
                </ul>
                <p className="text-xs text-blue-600 mt-2">Combined: 61.1% of world reserves</p>
              </Card>
              <Card className="p-4 bg-green-50">
                <h4 className="font-semibold text-green-800">Regional Concentration</h4>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• Middle East: ~75.8 Tcm</li>
                  <li>• CIS: ~57.1 Tcm</li>
                  <li>• North America: ~15.2 Tcm</li>
                </ul>
                <p className="text-xs text-green-600 mt-2">Top 3 regions: 86.7% of reserves</p>
              </Card>
              <Card className="p-4 bg-orange-50">
                <h4 className="font-semibold text-orange-800">Strategic Implications</h4>
                <ul className="text-sm text-orange-700 mt-2 space-y-1">
                  <li>• High geographic concentration</li>
                  <li>• LNG enables trade flexibility</li>
                  <li>• Pipeline infrastructure critical</li>
                </ul>
                <p className="text-xs text-orange-600 mt-2">Supply security considerations</p>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Regional Production vs Reserves */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-purple-600" />
              Regional Production vs Reserves Ratio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Reserve-to-production ratios vary significantly by region, indicating different stages of 
                resource development and potential for future production growth.
              </p>
            </div>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionalProductionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" angle={-45} textAnchor="end" height={100} />
                  <YAxis yAxisId="left" orientation="left" label={{ value: 'Bcm/Tcm', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'R/P Ratio', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="production" fill="#8884d8" name="Production (Bcm)" />
                  <Bar yAxisId="left" dataKey="reserves" fill="#82ca9d" name="Reserves (Tcm)" />
                  <Line yAxisId="right" dataKey="ratio" stroke="#ff7300" name="R/P Ratio (years)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Reserve-to-Production Analysis</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-purple-700 mb-1">Long Reserve Life (>70 years)</h5>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Middle East: 109.5 years</li>
                    <li>• CIS: 73.7 years</li>
                    <li>• Underdeveloped resources</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-purple-700 mb-1">Shorter Reserve Life (<30 years)</h5>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Asia Pacific: 24.6 years</li>
                    <li>• Europe: 17.3 years</li>
                    <li>• High production intensity</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* LNG Growth and Infrastructure */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ship className="h-5 w-5 text-teal-600" />
              Growing Importance of LNG
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                LNG trade has transformed from a niche market to a major component of global gas supply, 
                growing from 100 Bcm in 2000 to over 650 Bcm in 2022, representing nearly 10% of global gas consumption.
              </p>
            </div>
            <div className="h-96 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lngGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" label={{ value: 'Bcm', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Share (%)', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="lngImports" stroke="#8884d8" strokeWidth={3} name="LNG Imports (Bcm)" />
                  <Line yAxisId="right" type="monotone" dataKey="lngShare" stroke="#82ca9d" strokeWidth={3} name="LNG Share (%)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-4">Key Market Transformation Insights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-teal-700 mb-2">Volume Growth Impact</h5>
                  <ul className="text-sm text-teal-600 space-y-1">
                    <li>• 6.5x growth in 22 years (2000-2022)</li>
                    <li>• Average annual growth rate: ~9%</li>
                    <li>• Projected to reach 800+ Bcm by 2030</li>
                    <li>• Becoming price-setting marginal supply</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-teal-700 mb-2">Market Structure Changes</h5>
                  <ul className="text-sm text-teal-600 space-y-1">
                    <li>• Shift from oil-indexed to spot pricing</li>
                    <li>• Global price convergence trends</li>
                    <li>• Increased supply security options</li>
                    <li>• Enhanced trading flexibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Infrastructure Requirements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-red-600" />
              Global Gas Infrastructure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                The global gas market relies on extensive infrastructure for production, transportation, and storage. 
                This infrastructure determines trade flows and market integration possibilities.
              </p>
            </div>
            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={infrastructureData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="type" type="category" width={150} />
                  <Tooltip formatter={(value, name) => [value, name === 'count' ? 'Number of Facilities' : 'Capacity (Bcm/year)']} />
                  <Legend />
                  <Bar dataKey="count" fill="#8884d8" name="Number of Facilities" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-4 bg-blue-50">
                <h4 className="font-semibold text-blue-800 flex items-center gap-2">
                  <Ship className="h-4 w-4" />
                  LNG Infrastructure
                </h4>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• Export terminals: 45 facilities</li>
                  <li>• Import terminals: 180 facilities</li>
                  <li>• Growing FSRU deployment</li>
                  <li>• Small-scale LNG development</li>
                </ul>
              </Card>
              <Card className="p-4 bg-green-50">
                <h4 className="font-semibold text-green-800 flex items-center gap-2">
                  <Truck className="h-4 w-4" />
                  Pipeline Networks
                </h4>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• 12 major pipeline systems</li>
                  <li>• 2,400 Bcm/year capacity</li>
                  <li>• Regional interconnections</li>
                  <li>• Bidirectional capabilities</li>
                </ul>
              </Card>
              <Card className="p-4 bg-orange-50">
                <h4 className="font-semibold text-orange-800 flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Storage Facilities
                </h4>
                <ul className="text-sm text-orange-700 mt-2 space-y-1">
                  <li>• 650 underground storage sites</li>
                  <li>• 400 Bcm working gas capacity</li>
                  <li>• Seasonal demand balancing</li>
                  <li>• Strategic reserve functions</li>
                </ul>
              </Card>
              <Card className="p-4 bg-purple-50">
                <h4 className="font-semibold text-purple-800 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Supply Security
                </h4>
                <ul className="text-sm text-purple-700 mt-2 space-y-1">
                  <li>• Diversification strategies</li>
                  <li>• Emergency response protocols</li>
                  <li>• Cross-border cooperation</li>
                  <li>• Flexibility mechanisms</li>
                </ul>
              </Card>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default GasReserves;
