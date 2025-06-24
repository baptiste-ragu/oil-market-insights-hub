
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, BarChart3, ArrowLeft, MapPin, TrendingDown, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const russianImportData = [
  { year: 2010, russian: 40, norwegian: 25, algerian: 12, others: 23 },
  { year: 2012, russian: 42, norwegian: 24, algerian: 11, others: 23 },
  { year: 2014, russian: 38, norwegian: 26, algerian: 12, others: 24 },
  { year: 2016, russian: 35, norwegian: 28, algerian: 13, others: 24 },
  { year: 2018, russian: 32, norwegian: 30, algerian: 12, others: 26 },
  { year: 2020, russian: 28, norwegian: 32, algerian: 11, others: 29 },
  { year: 2021, russian: 25, norwegian: 33, algerian: 10, others: 32 },
  { year: 2022, russian: 15, norwegian: 35, algerian: 9, others: 41 },
  { year: 2023, russian: 9, norwegian: 29, algerian: 10.5, others: 51.5 }
];

const lngInfrastructureData = [
  { country: 'Spain', terminals: 6, capacity: 60.4, type: 'Established' },
  { country: 'France', terminals: 4, capacity: 21.5, type: 'Established' },
  { country: 'UK', terminals: 3, capacity: 38.0, type: 'Established' },
  { country: 'Italy', terminals: 3, capacity: 18.2, type: 'Established' },
  { country: 'Netherlands', terminals: 1, capacity: 12.0, type: 'Established' },
  { country: 'Belgium', terminals: 1, capacity: 9.0, type: 'Established' },
  { country: 'Poland', terminals: 1, capacity: 6.2, type: 'New Build' },
  { country: 'Lithuania', terminals: 1, capacity: 4.0, type: 'FSRU' },
  { country: 'Greece', terminals: 1, capacity: 6.1, type: 'FSRU' },
  { country: 'Germany', terminals: 5, capacity: 27.3, type: 'Emergency Build' }
];

const storageUtilizationData = [
  { month: 'Jan', level: 45, injection: 0, withdrawal: 25 },
  { month: 'Feb', level: 35, injection: 0, withdrawal: 20 },
  { month: 'Mar', level: 25, injection: 0, withdrawal: 15 },
  { month: 'Apr', level: 15, injection: 5, withdrawal: 10 },
  { month: 'May', level: 25, injection: 15, withdrawal: 5 },
  { month: 'Jun', level: 40, injection: 20, withdrawal: 0 },
  { month: 'Jul', level: 60, injection: 25, withdrawal: 0 },
  { month: 'Aug', level: 80, injection: 20, withdrawal: 0 },
  { month: 'Sep', level: 95, injection: 15, withdrawal: 0 },
  { month: 'Oct', level: 90, injection: 0, withdrawal: 5 },
  { month: 'Nov', level: 75, injection: 0, withdrawal: 15 },
  { month: 'Dec', level: 60, injection: 0, withdrawal: 20 }
];

const interconnectionData = [
  { corridor: 'North-South', capacity: 45, utilization: 65, priority: 'High' },
  { corridor: 'East-West', capacity: 38, utilization: 58, priority: 'High' },
  { corridor: 'Baltic Pipe', capacity: 10, utilization: 85, priority: 'Critical' },
  { corridor: 'TAP', capacity: 10, utilization: 90, priority: 'Strategic' },
  { corridor: 'IGB', capacity: 3, utilization: 45, priority: 'Regional' }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const EuropeanGasBalance = () => {
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
              <span className="ml-2 text-xl font-bold text-gray-900">European Gas Balance</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-green-600" />
              European Gas Balance and Infrastructure
            </CardTitle>
            <CardDescription>
              Gas demand patterns and infrastructure development
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Import Source Diversification */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-red-600" />
              EU Gas Import Source Diversification (2010-2023)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                European gas import sources have undergone dramatic transformation, with 
                <strong> Russian share declining from 40% (2010) to 9% (2023)</strong>, 
                compensated by increased LNG imports and enhanced Norwegian supplies.
              </p>
            </div>
            <div className="h-96 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={russianImportData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: 'Share (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="russian" stackId="1" stroke="#ff4444" fill="#ff4444" name="Russian Imports" />
                  <Area type="monotone" dataKey="norwegian" stackId="1" stroke="#4444ff" fill="#4444ff" name="Norwegian Imports" />
                  <Area type="monotone" dataKey="algerian" stackId="1" stroke="#44ff44" fill="#44ff44" name="Algerian Imports" />
                  <Area type="monotone" dataKey="others" stackId="1" stroke="#ffaa44" fill="#ffaa44" name="Others (incl. LNG)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 bg-red-50 border-red-200">
                <h4 className="font-semibold text-red-800 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Russian Dependence Reduction
                </h4>
                <ul className="text-sm text-red-700 mt-2 space-y-1">
                  <li>• 2010: 40% of EU imports</li>
                  <li>• 2022: 15% (pre-war level)</li>
                  <li>• 2023: 9% (current level)</li>
                  <li>• Target: Complete phase-out by 2027</li>
                </ul>
              </Card>
              <Card className="p-4 bg-blue-50 border-blue-200">
                <h4 className="font-semibold text-blue-800">Norwegian Supply Growth</h4>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• Increased from 25% to 35% peak</li>
                  <li>• Currently: 29% of EU imports</li>
                  <li>• Maximum pipeline capacity utilized</li>
                  <li>• Limited further expansion potential</li>
                </ul>
              </Card>
              <Card className="p-4 bg-orange-50 border-orange-200">
                <h4 className="font-semibold text-orange-800">LNG & Others Growth</h4>
                <ul className="text-sm text-orange-700 mt-2 space-y-1">
                  <li>• 2010: 23% combined share</li>
                  <li>• 2023: 51.5% combined share</li>
                  <li>• US LNG: 20.3% of total imports</li>
                  <li>• Flexible global sourcing</li>
                </ul>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* LNG Infrastructure Development */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-teal-600" />
              LNG Import Infrastructure Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                European LNG infrastructure has expanded rapidly, with total import capacity reaching 
                over 200 Bcm/year through a combination of traditional terminals, FSRUs, and emergency facilities.
              </p>
            </div>
            <div className="h-96 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={lngInfrastructureData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="country" angle={-45} textAnchor="end" height={100} />
                  <YAxis yAxisId="left" label={{ value: 'Terminals', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Capacity (Bcm/y)', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="terminals" fill="#8884d8" name="Number of Terminals" />
                  <Bar yAxisId="right" dataKey="capacity" fill="#82ca9d" name="Capacity (Bcm/year)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-4 bg-green-50">
                <h4 className="font-semibold text-green-800">Established Markets</h4>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• Spain: 60.4 Bcm capacity</li>
                  <li>• UK: 38.0 Bcm capacity</li>
                  <li>• France: 21.5 Bcm capacity</li>
                  <li>• Long-term operations</li>
                </ul>
              </Card>
              <Card className="p-4 bg-blue-50">
                <h4 className="font-semibold text-blue-800">Emergency Build</h4>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• Germany: 27.3 Bcm (new)</li>
                  <li>• 5 terminals built rapidly</li>
                  <li>• Response to supply crisis</li>
                  <li>• FSRU deployment</li>
                </ul>
              </Card>
              <Card className="p-4 bg-purple-50">
                <h4 className="font-semibold text-purple-800">FSRU Deployment</h4>
                <ul className="text-sm text-purple-700 mt-2 space-y-1">
                  <li>• Lithuania: 4.0 Bcm FSRU</li>
                  <li>• Greece: 6.1 Bcm FSRU</li>
                  <li>• Flexible deployment</li>
                  <li>• Lower capital requirements</li>
                </ul>
              </Card>
              <Card className="p-4 bg-orange-50">
                <h4 className="font-semibold text-orange-800">Strategic Impact</h4>
                <ul className="text-sm text-orange-700 mt-2 space-y-1">
                  <li>• Enhanced supply security</li>
                  <li>• Global market access</li>
                  <li>• Price discovery improvement</li>
                  <li>• Reduced dependence risks</li>
                </ul>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Storage Utilization Patterns */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              European Gas Storage Seasonal Patterns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                European gas storage follows predictable seasonal patterns, with injection during summer months 
                (April-September) and withdrawal during winter heating season (October-March).
              </p>
            </div>
            <div className="h-96 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={storageUtilizationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" label={{ value: 'Storage Level (%)', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Flow (Bcm)', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="level" stroke="#8884d8" strokeWidth={3} name="Storage Level (%)" />
                  <Line yAxisId="right" type="monotone" dataKey="injection" stroke="#82ca9d" name="Net Injection (Bcm)" />
                  <Line yAxisId="right" type="monotone" dataKey="withdrawal" stroke="#ffc658" name="Net Withdrawal (Bcm)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-4">Storage Strategy Insights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-purple-700 mb-2">Injection Season (Apr-Sep)</h5>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Peak injection: July (25 Bcm/month)</li>
                    <li>• Target: 95% full by October 1st</li>
                    <li>• Competitive with summer demand</li>
                    <li>• Price impact: downward pressure</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-700 mb-2">Withdrawal Season (Oct-Mar)</h5>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Peak withdrawal: January (25 Bcm/month)</li>
                    <li>• Weather-dependent demand</li>
                    <li>• Supply security buffer</li>
                    <li>• Price impact: upward pressure</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pipeline Interconnections */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-indigo-600" />
              Strategic Pipeline Interconnections
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                European gas market integration relies on strategic pipeline interconnections that enable 
                bidirectional flows and enhance supply security through diversified routing options.
              </p>
            </div>
            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={interconnectionData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="corridor" type="category" width={120} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="capacity" fill="#8884d8" name="Capacity (Bcm/year)" />
                  <Bar dataKey="utilization" fill="#82ca9d" name="Utilization (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4 bg-red-50">
                <h4 className="font-semibold text-red-800">Critical Infrastructure</h4>
                <ul className="text-sm text-red-700 mt-2 space-y-1">
                  <li>• Baltic Pipe: 85% utilization</li>
                  <li>• Direct Norway-Poland connection</li>
                  <li>• Reduces transit risks</li>
                  <li>• 10 Bcm/year capacity</li>
                </ul>
              </Card>
              <Card className="p-4 bg-blue-50">
                <h4 className="font-semibold text-blue-800">Strategic Projects</h4>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• TAP: 90% utilization</li>
                  <li>• Caspian gas to Europe</li>
                  <li>• Southern Gas Corridor</li>
                  <li>• Diversification success</li>
                </ul>
              </Card>
              <Card className="p-4 bg-green-50">
                <h4 className="font-semibold text-green-800">Regional Integration</h4>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• North-South: 65% utilization</li>
                  <li>• East-West: 58% utilization</li>
                  <li>• Enhanced flexibility</li>
                  <li>• Market integration support</li>
                </ul>
              </Card>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default EuropeanGasBalance;
