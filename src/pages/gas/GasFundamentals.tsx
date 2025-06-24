import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, TrendingUp, ArrowLeft, Globe, BarChart3, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Cell, Pie } from 'recharts';

const globalSupplyDemandData = [
  { region: 'North America', supply: 936, demand: 463, surplus: 473 },
  { region: 'Europe', supply: 162, demand: 578, deficit: -416 },
  { region: 'Middle East', supply: 692, demand: 204, surplus: 488 },
  { region: 'CIS', supply: 774, demand: 162, surplus: 612 },
  { region: 'Asia Pacific', supply: 254, demand: 1261, deficit: -1007 },
  { region: 'Africa', supply: 596, demand: 171, surplus: 425 },
  { region: 'Central & South America', supply: 162, demand: 1105, deficit: -943 }
];

const europeanDemandData = [
  { year: 1992, residential: 150, industry: 180, power: 50, ownUse: 50 },
  { year: 1995, residential: 160, industry: 190, power: 70, ownUse: 52 },
  { year: 2000, residential: 170, industry: 200, power: 100, ownUse: 55 },
  { year: 2005, residential: 180, industry: 220, power: 130, ownUse: 58 },
  { year: 2010, residential: 185, industry: 190, power: 160, ownUse: 60 },
  { year: 2015, residential: 190, industry: 170, power: 180, ownUse: 58 },
  { year: 2020, residential: 195, industry: 160, power: 190, ownUse: 55 },
  { year: 2022, residential: 200, industry: 150, power: 200, ownUse: 52 }
];

const euImportData = [
  { source: 'Norway (Pipeline)', share: 29.0, type: 'Pipeline' },
  { source: 'USA (LNG)', share: 20.3, type: 'LNG' },
  { source: 'Algeria (Pipeline)', share: 10.5, type: 'Pipeline' },
  { source: 'Russia (Pipeline)', share: 9.0, type: 'Pipeline' },
  { source: 'Russia (LNG)', share: 6.9, type: 'LNG' },
  { source: 'Azerbaijan (Pipeline)', share: 4.0, type: 'Pipeline' },
  { source: 'Others (LNG)', share: 19.4, type: 'LNG' },
  { source: 'Libya (Pipeline)', share: 0.8, type: 'Pipeline' }
];

const pricingMechanismsData = [
  { region: 'US', gasOnGas: 99, oilIndexation: 1 },
  { region: 'Europe', gasOnGas: 37, oilIndexation: 63 },
  { region: 'Asia Pacific', gasOnGas: 13, oilIndexation: 87 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF7C7C'];

const GasFundamentals = () => {
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
              <span className="ml-2 text-xl font-bold text-gray-900">Gas Market Fundamentals</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              Gas Market Fundamentals and Transition
            </CardTitle>
            <CardDescription>
              European gas market liberalization and global supply-demand dynamics
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Global Supply and Demand Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-600" />
              Global Gas Supply and Demand Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                <strong>Global gas reserves total 171 Tcm</strong>, with significant regional imbalances 
                between supply and demand creating the foundation for international gas trade.
              </p>
            </div>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={globalSupplyDemandData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" angle={-45} textAnchor="end" height={100} />
                  <YAxis label={{ value: 'Bcm', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="supply" fill="#8884d8" name="Supply (Bcm)" />
                  <Bar dataKey="demand" fill="#82ca9d" name="Demand (Bcm)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 bg-blue-50">
                <h4 className="font-semibold text-blue-800">Major Exporters</h4>
                <ul className="text-sm text-blue-700 mt-2">
                  <li>• CIS: 612 Bcm surplus</li>
                  <li>• Middle East: 488 Bcm surplus</li>
                  <li>• North America: 473 Bcm surplus</li>
                </ul>
              </Card>
              <Card className="p-4 bg-red-50">
                <h4 className="font-semibold text-red-800">Major Importers</h4>
                <ul className="text-sm text-red-700 mt-2">
                  <li>• Asia Pacific: 1,007 Bcm deficit</li>
                  <li>• Europe: 416 Bcm deficit</li>
                  <li>• Central & South America: 943 Bcm deficit</li>
                </ul>
              </Card>
              <Card className="p-4 bg-green-50">
                <h4 className="font-semibold text-green-800">Trade Implications</h4>
                <ul className="text-sm text-green-700 mt-2">
                  <li>• LNG enables long-distance trade</li>
                  <li>• Pipeline networks for regional supply</li>
                  <li>• Growing importance of flexibility</li>
                </ul>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* European Gas Demand Structure */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              European Gas Demand Evolution (1992-2022)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                European gas demand has undergone significant structural changes, with 
                <strong> power generation becoming the largest consuming sector</strong>, 
                growing from ~50 Bcm in 1992 to ~200 Bcm in 2022.
              </p>
            </div>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={europeanDemandData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: 'Bcm', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="residential" stroke="#8884d8" name="Residential/Commercial" />
                  <Line type="monotone" dataKey="industry" stroke="#82ca9d" name="Industry" />
                  <Line type="monotone" dataKey="power" stroke="#ffc658" name="Power Generation" />
                  <Line type="monotone" dataKey="ownUse" stroke="#ff7300" name="Own Use & Losses" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Key Insights</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Power generation sector shows most dramatic growth</li>
                <li>• Industrial demand declined post-2008 financial crisis</li>
                <li>• Residential demand relatively stable but growing slowly</li>
                <li>• Own use and losses optimized through efficiency improvements</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* EU Gas Import Dependencies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-orange-600" />
              EU Gas Import Dependencies (2023)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4">Import Sources Breakdown</h4>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={euImportData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ source, share }) => `${source}: ${share}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="share"
                      >
                        {euImportData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Supply Security Analysis</h4>
                <div className="space-y-4">
                  <Card className="p-4 bg-blue-50">
                    <h5 className="font-semibold text-blue-800">LNG Share: 46.6%</h5>
                    <p className="text-sm text-blue-700 mt-1">
                      Flexible supply with global market access
                    </p>
                  </Card>
                  <Card className="p-4 bg-green-50">
                    <h5 className="font-semibold text-green-800">Pipeline Share: 53.4%</h5>
                    <p className="text-sm text-green-700 mt-1">
                      Stable long-term contracts, geographic constraints
                    </p>
                  </Card>
                  <Card className="p-4 bg-red-50">
                    <h5 className="font-semibold text-red-800">Russian Reduction</h5>
                    <p className="text-sm text-red-700 mt-1">
                      From 40% (2010) to 9% (2023) - major diversification
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing Mechanisms Evolution */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-red-600" />
              Global Gas Pricing Mechanisms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Gas pricing mechanisms vary significantly by region, reflecting market maturity and infrastructure development:
              </p>
            </div>
            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={pricingMechanismsData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="region" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="gasOnGas" stackId="a" fill="#8884d8" name="Gas-on-Gas Competition (%)" />
                  <Bar dataKey="oilIndexation" stackId="a" fill="#82ca9d" name="Oil Indexation & Other (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4 bg-blue-50">
                <h4 className="font-semibold text-blue-800 mb-2">Hub Pricing (Gas-on-Gas)</h4>
                <p className="text-sm text-blue-700 mb-2">Direct supply/demand balance pricing</p>
                <ul className="text-xs text-blue-600 space-y-1">
                  <li>• Real-time market response</li>
                  <li>• Higher volatility</li>
                  <li>• Transparent price discovery</li>
                  <li>• Liquid trading markets</li>
                </ul>
              </Card>
              <Card className="p-4 bg-green-50">
                <h4 className="font-semibold text-green-800 mb-2">Oil Indexation</h4>
                <p className="text-sm text-green-700 mb-2">P(Gas) = P₀ + A×(Gasoil - Gasoil₀) + B×(Fuel Oil - FO₀)</p>
                <ul className="text-xs text-green-600 space-y-1">
                  <li>• Time lag (3-6 months)</li>
                  <li>• Ensures competitiveness vs oil products</li>
                  <li>• Stable long-term contracts</li>
                  <li>• Lower price volatility</li>
                </ul>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Growing Importance of LNG */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-teal-600" />
              Growing Importance of LNG
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-4 text-lg">Market Transformation</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-teal-700 mb-2">Volume Growth</h5>
                  <ul className="text-sm text-teal-600 space-y-1 mb-4">
                    <li>• 2000: 100 Bcm world LNG imports</li>
                    <li>• 2021: 600+ Bcm world LNG imports</li>
                    <li>• 6x growth in two decades</li>
                  </ul>
                  <h5 className="font-semibold text-teal-700 mb-2">Market Share</h5>
                  <ul className="text-sm text-teal-600 space-y-1">
                    <li>• 2000: 2% of global gas consumption</li>
                    <li>• 2021: 14% of global gas consumption</li>
                    <li>• Projected to reach 20%+ by 2030</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-teal-700 mb-2">Pricing Impact</h5>
                  <p className="text-sm text-teal-600 mb-4">
                    "LNG represents an increasing share of world gas consumption. This increase was 
                    accompanied by a change in pricing mechanisms, with more gas market spot pricing."
                  </p>
                  <h5 className="font-semibold text-teal-700 mb-2">Market Benefits</h5>
                  <ul className="text-sm text-teal-600 space-y-1">
                    <li>• Global market integration</li>
                    <li>• Supply security enhancement</li>
                    <li>• Price transparency improvement</li>
                    <li>• Flexible trading opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default GasFundamentals;
