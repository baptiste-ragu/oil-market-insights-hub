
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Building2, ArrowLeft, Globe, TrendingUp, ArrowRight, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, ComposedChart } from 'recharts';

const monopolyStructureData = [
  { company: 'Gazprom (Russia)', marketShare: 40, regions: 'Eastern/Central Europe', contractType: 'Long-term' },
  { company: 'Sonatrach (Algeria)', marketShare: 15, regions: 'Southern Europe', contractType: 'Long-term' },
  { company: 'Statoil (Norway)', marketShare: 25, regions: 'Northern Europe', contractType: 'Mixed' },
  { company: 'Others', marketShare: 20, regions: 'Various', contractType: 'Mixed' }
];

const contractCharacteristicsData = [
  { characteristic: 'Duration', traditional: '15-25 years', hub: '1 day - 1 year' },
  { characteristic: 'Price Discovery', traditional: 'Oil indexation formula', hub: 'Supply/demand balance' },
  { characteristic: 'Volume Risk', traditional: 'Buyer (Take-or-Pay)', hub: 'Shared/Flexible' },
  { characteristic: 'Price Risk', traditional: 'Seller (Net-back)', hub: 'Market participants' },
  { characteristic: 'Transparency', traditional: 'Limited', hub: 'High' },
  { characteristic: 'Flexibility', traditional: 'Low', hub: 'High' }
];

const pricingComparisonData = [
  { year: 2010, oilIndexed: 25.4, hubPricing: 22.1, spread: 3.3 },
  { year: 2011, oilIndexed: 28.9, hubPricing: 26.3, spread: 2.6 },
  { year: 2012, oilIndexed: 29.1, hubPricing: 28.2, spread: 0.9 },
  { year: 2013, oilIndexed: 28.7, hubPricing: 28.9, spread: -0.2 },
  { year: 2014, oilIndexed: 26.4, hubPricing: 24.8, spread: 1.6 },
  { year: 2015, oilIndexed: 20.1, hubPricing: 19.4, spread: 0.7 },
  { year: 2016, oilIndexed: 16.8, hubPricing: 15.2, spread: 1.6 },
  { year: 2017, oilIndexed: 19.9, hubPricing: 17.8, spread: 2.1 },
  { year: 2018, oilIndexed: 23.4, hubPricing: 21.2, spread: 2.2 },
  { year: 2019, oilIndexed: 18.7, hubPricing: 16.9, spread: 1.8 },
  { year: 2020, oilIndexed: 12.3, hubPricing: 10.9, spread: 1.4 }
];

const volatilityComparisonData = [
  { period: 'Daily', oilIndexed: 5.2, hubPricing: 18.7 },
  { period: 'Weekly', oilIndexed: 8.1, hubPricing: 25.4 },
  { period: 'Monthly', oilIndexed: 12.3, hubPricing: 31.2 },
  { period: 'Annual', oilIndexed: 24.7, hubPricing: 45.8 }
];

const tradingVolumeEvolution = [
  { year: 1999, physical: 85, financial: 15, hubShare: 5 },
  { year: 2004, physical: 75, financial: 25, hubShare: 15 },
  { year: 2009, physical: 65, financial: 35, hubShare: 25 },
  { year: 2014, physical: 55, financial: 45, hubShare: 35 },
  { year: 2019, physical: 45, financial: 55, hubShare: 45 },
  { year: 2022, physical: 40, financial: 60, hubShare: 50 }
];

const PhysicalGasMarkets = () => {
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
              <span className="ml-2 text-xl font-bold text-gray-900">Physical Gas Markets</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-green-600" />
              Physical Gas Markets Evolution and Structure
            </CardTitle>
            <CardDescription>
              From monopoly structures to competitive hub-based trading
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Former European Gas Industry Structure */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-blue-600" />
              Former European Gas Industry Structure (Pre-Liberalization)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Before liberalization, European gas markets were dominated by <strong>limited incumbent monopolies</strong> 
                controlling imports and supply chains. This structure created limited competition, restricted price transparency, 
                and concentrated market power among a few major suppliers.
              </p>
            </div>
            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monopolyStructureData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="company" angle={-45} textAnchor="end" height={100} />
                  <YAxis label={{ value: 'Market Share (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Bar dataKey="marketShare" fill="#8884d8" name="Market Share (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4 bg-blue-50">
                <h4 className="font-semibold text-blue-800 mb-3">Supply Chain Characteristics</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-blue-700">
                      <strong>Sonatrach (Algeria)</strong> → Southern European terminals
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-blue-700">
                      <strong>Gazprom (Russia)</strong> → Eastern/Central European points
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-blue-700">
                      <strong>Statoil (Norway)</strong> → Northern European distribution
                    </span>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-red-50">
                <h4 className="font-semibold text-red-800 mb-3">Market Limitations</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Limited number of incumbent suppliers</li>
                  <li>• Restricted competition and market access</li>
                  <li>• Poor price transparency mechanisms</li>
                  <li>• Vertical integration barriers</li>
                  <li>• Long-term exclusive supply agreements</li>
                  <li>• Limited secondary trading opportunities</li>
                </ul>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Traditional Long-Term Contracts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-600" />
              Traditional Long-Term Contract Characteristics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Traditional gas contracts were structured around <strong>20-year duration agreements</strong> with 
                "Take or Pay" clauses securing producer revenues while buyers assumed volume risk. Oil product 
                indexation ensured gas competitiveness against alternative fuels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card className="p-4 bg-purple-50">
                <h4 className="font-semibold text-purple-800 mb-3">Contract Structure</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-purple-700">Duration</h5>
                    <p className="text-sm text-purple-600">Around 20 years typical contract length</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-purple-700">Take or Pay Clauses</h5>
                    <p className="text-sm text-purple-600">Secured revenues for seller through minimum volume commitments</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-purple-700">Risk Allocation</h5>
                    <p className="text-sm text-purple-600">Buyer takes volume risk, seller takes price risk</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-green-50">
                <h4 className="font-semibold text-green-800 mb-3">Pricing Formula</h4>
                <div className="bg-white p-3 rounded border mb-3">
                  <code className="text-sm text-green-700">
                    P(Gas) = P₀ + A×(Gasoil - Gasoil₀) + B×(Fuel Oil - FO₀)
                  </code>
                </div>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Oil product indexation mechanism</li>
                  <li>• Time lag of 3-6 months</li>
                  <li>• Ensures competitiveness vs oil products</li>
                  <li>• Net-back pricing to end markets</li>
                </ul>
              </Card>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Characteristic</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Traditional Contracts</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Hub-Based Trading</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {contractCharacteristicsData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{item.characteristic}</td>
                      <td className="px-4 py-3 text-gray-700">{item.traditional}</td>
                      <td className="px-4 py-3 text-gray-700">{item.hub}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Hub vs Traditional Pricing Comparison */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-orange-600" />
              Hub vs Traditional Pricing Evolution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                The transition from oil-indexed to hub-based pricing has fundamentally changed gas market dynamics. 
                <strong>Hub pricing offers real-time market response but higher volatility</strong>, while traditional 
                oil indexation provided stability with time lags.
              </p>
            </div>
            <div className="h-96 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={pricingComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: 'EUR/MWh', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="oilIndexed" stroke="#ff7300" strokeWidth={3} name="Oil-Indexed Price" />
                  <Line type="monotone" dataKey="hubPricing" stroke="#8884d8" strokeWidth={3} name="Hub-Based Price" />
                  <Bar dataKey="spread" fill="#82ca9d" name="Price Spread" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4 bg-orange-50">
                <h4 className="font-semibold text-orange-800 mb-3">Oil Indexation Characteristics</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Time lag of 3-6 months softens price peaks</li>
                  <li>• Lower volatility for planning purposes</li>
                  <li>• Ensures competitiveness against oil products</li>
                  <li>• Stable long-term revenue planning</li>
                  <li>• Limited response to gas-specific fundamentals</li>
                </ul>
              </Card>
              <Card className="p-4 bg-blue-50">
                <h4 className="font-semibold text-blue-800 mb-3">Hub Pricing Characteristics</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Direct supply/demand balance pricing</li>
                  <li>• Real-time market response capability</li>
                  <li>• Higher volatility reflecting market conditions</li>
                  <li>• Transparent price discovery mechanism</li>
                  <li>• Responsive to gas-specific fundamentals</li>
                </ul>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Market Evolution and Trading Volumes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-teal-600" />
              Physical vs Financial Trading Evolution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                European gas trading has evolved from predominantly physical transactions to a balanced mix 
                of physical and financial instruments. <strong>Financial trading now represents 60% of total volumes</strong>, 
                indicating market maturation and improved liquidity.
              </p>
            </div>
            <div className="h-96 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={tradingVolumeEvolution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="physical" fill="#8884d8" name="Physical Trading %" />
                  <Bar dataKey="financial" fill="#82ca9d" name="Financial Trading %" />
                  <Line type="monotone" dataKey="hubShare" stroke="#ff7300" strokeWidth={3} name="Hub-Based Share %" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-2">Market Maturation Indicators</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium text-teal-700 mb-1">1999-2004: Early Stage</h5>
                  <ul className="text-xs text-teal-600 space-y-1">
                    <li>• 85% physical trading dominance</li>
                    <li>• Limited hub development</li>
                    <li>• Basic balancing services</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-teal-700 mb-1">2009-2014: Transition</h5>
                  <ul className="text-xs text-teal-600 space-y-1">
                    <li>• Financial instruments growth</li>
                    <li>• Hub liquidity development</li>
                    <li>• Regulatory framework evolution</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-teal-700 mb-1">2019-2022: Maturity</h5>
                  <ul className="text-xs text-teal-600 space-y-1">
                    <li>• 60% financial trading share</li>
                    <li>• 50% hub-based pricing</li>
                    <li>• Advanced risk management</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Volatility Analysis */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-red-600" />
              Price Volatility Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Hub-based pricing exhibits significantly higher volatility across all time horizons compared to 
                oil-indexed pricing. This reflects the immediate responsiveness to gas market fundamentals but 
                requires more sophisticated risk management approaches.
              </p>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={volatilityComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="period" />
                  <YAxis label={{ value: 'Volatility (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="oilIndexed" fill="#ff7300" name="Oil-Indexed Volatility %" />
                  <Bar dataKey="hubPricing" fill="#8884d8" name="Hub-Based Volatility %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PhysicalGasMarkets;
