import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, ComposedChart, Area, AreaChart } from 'recharts';
import { Activity, TrendingUp, Globe, AlertTriangle, DollarSign, BarChart3 } from 'lucide-react';
import LivePriceDashboard from '@/components/LivePriceDashboard';
import NewsAggregation from '@/components/NewsAggregation';
import ChartContainer from '@/components/ChartContainer';

const PriceOutlook = () => {
  const supplyIndicators = [
    {
      category: 'OPEC Monitoring',
      icon: <Activity className="h-5 w-5" />,
      color: 'blue',
      indicators: [
        'OPEC Compliance Rates: Monitoring adherence to production quotas',
        'Saudi spare capacity utilization (currently 3.5 Mb/d available)',
        'OPEC+ meeting outcomes and policy announcements',
        'Quota adjustments and market balancing measures'
      ]
    },
    {
      category: 'Non-OPEC Production',
      icon: <TrendingUp className="h-5 w-5" />,
      color: 'green',
      indicators: [
        'US Shale Production: Weekly production and rig count data',
        'Brazil pre-salt production growth trajectory',
        'Norwegian North Sea maintenance schedules',
        'Canadian oil sands production capacity changes'
      ]
    },
    {
      category: 'Geopolitical Risks',
      icon: <AlertTriangle className="h-5 w-5" />,
      color: 'red',
      indicators: [
        'Middle East tensions and supply disruption potential',
        'African supply disruptions (Nigeria, Libya instability)',
        'Sanctions impact on Iranian and Russian production',
        'Pipeline security and infrastructure attacks'
      ]
    },
    {
      category: 'Technical Issues',
      icon: <BarChart3 className="h-5 w-5" />,
      color: 'orange',
      indicators: [
        'Unplanned outages at major production facilities',
        'Scheduled maintenance at refineries and production sites',
        'Hurricane and weather-related supply disruptions',
        'Equipment failures and technical infrastructure problems'
      ]
    }
  ];

  const demandDrivers = [
    {
      category: 'Seasonal Patterns',
      factors: [
        'US driving season (May-September): +1.5 Mb/d demand increase',
        'Winter heating demand in Northern Hemisphere',
        'Chinese New Year refinery maintenance period',
        'European summer maintenance reducing refining capacity'
      ]
    },
    {
      category: 'Economic Growth',
      factors: [
        'OECD unemployment rates correlation with demand',
        'GDP growth impact on transportation fuel consumption',
        'Industrial production indices affecting diesel demand',
        'Consumer confidence and discretionary travel patterns'
      ]
    },
    {
      category: 'Energy Efficiency',
      factors: [
        'Vehicle efficiency improvements reducing gasoline demand',
        'Conservation programs in major consuming countries',
        'Electric vehicle adoption rates in China, Europe, US',
        'Fuel economy standards implementation timeline'
      ]
    },
    {
      category: 'Asian Demand Growth',
      factors: [
        'China consumption patterns and economic growth correlation',
        'India rapid urbanization driving transport fuel demand',
        'Southeast Asia petrochemical industry expansion',
        'Regional refining capacity additions and utilization rates'
      ]
    }
  ];

  const inventoryData = [
    { region: 'OECD Total', current: 2850, fiveYearAvg: 2920, daysCoverage: 62.1 },
    { region: 'United States', current: 1180, fiveYearAvg: 1220, daysCoverage: 58.7 },
    { region: 'Europe', current: 950, fiveYearAvg: 980, daysCoverage: 65.3 },
    { region: 'Japan', current: 320, fiveYearAvg: 340, daysCoverage: 67.8 },
    { region: 'China (est)', current: 1000, fiveYearAvg: 850, daysCoverage: 71.2 }
  ];

  const geopoliticalRisks = [
    {
      region: 'Iran',
      risk: 'Nuclear program discussions, sanctions impact',
      production: '1.8 Mb/d',
      saudiSpareCapacity: '3.5 Mb/d',
      riskLevel: 'High',
      details: 'Production vs Saudi spare capacity comparison'
    },
    {
      region: 'Iraq',
      risk: 'Civil unrest, terrorist attacks on pipelines, Kurdistan disputes',
      production: '1.4 Mb/d at risk',
      saudiSpareCapacity: '3.5 Mb/d',
      riskLevel: 'Medium',
      details: 'Regional instability affecting northern pipeline exports'
    },
    {
      region: 'Syria',
      risk: 'Civil war spillover effects, alliance with Iran',
      production: '0.17 Mb/d historical',
      saudiSpareCapacity: '3.5 Mb/d',
      riskLevel: 'Low',
      details: 'Minimal direct impact but regional instability concerns'
    }
  ];

  const criticalInfrastructure = [
    { location: 'Strait of Hormuz', flow: 19.0, description: 'Primary Persian Gulf export route' },
    { location: 'Suez Canal/SUMED', flow: 5.5, description: 'Combined pipeline and canal capacity' },
    { location: 'Bab el-Mandab', flow: 4.8, description: 'Strategic Red Sea chokepoint' }
  ];

  const macroFactors = [
    {
      factor: 'Monetary Policy',
      impact: 'US Federal Reserve, ECB stimulus measures',
      correlation: 'Loose monetary policy typically supportive of commodity prices'
    },
    {
      factor: 'Currency Movements',
      impact: 'EUR/USD trends affecting oil prices',
      correlation: 'Strong USD typically negative for oil prices (inverse correlation)'
    },
    {
      factor: 'Equity Markets',
      impact: 'Risk-on/risk-off sentiment correlation',
      correlation: 'Risk-on sentiment supports oil, risk-off creates selling pressure'
    },
    {
      factor: 'Speculative Positioning',
      impact: 'NYMEX and ICE net long/short positions',
      correlation: 'Extreme positioning often signals potential reversals'
    },
    {
      factor: 'Global GDP Growth',
      impact: 'Correlation with oil demand growth',
      correlation: '1% GDP growth typically correlates with 0.5-0.8% demand growth'
    }
  ];

  const chartConfig = {
    current: {
      label: "Current Stocks (Million Barrels)",
      color: "#2563eb",
    },
    fiveYearAvg: {
      label: "5-Year Average",
      color: "#16a34a",
    },
    flow: {
      label: "Million Barrels/Day",
      color: "#dc2626",
    },
  };

  const riskColors = {
    'High': '#ef4444',
    'Medium': '#f59e0b',
    'Low': '#10b981'
  };

  return (
    <Layout 
      title="Oil Price Outlook Framework" 
      description="Supply monitoring, demand analysis, and geopolitical risk assessment"
    >
      <div className="space-y-12">
        {/* Live Price Dashboard */}
        <LivePriceDashboard />

        {/* News Aggregation */}
        <NewsAggregation />

        {/* Supply Side Monitoring Dashboard */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-6 w-6 text-blue-600" />
              Supply Side Monitoring Dashboard
            </CardTitle>
            <CardDescription>
              Key supply indicators for oil market analysis and forecasting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supplyIndicators.map((category, index) => (
                <div key={category.category} className={`border-l-4 ${category.color === 'blue' ? 'border-l-blue-500 bg-blue-50' : category.color === 'green' ? 'border-l-green-500 bg-green-50' : category.color === 'red' ? 'border-l-red-500 bg-red-50' : 'border-l-orange-500 bg-orange-50'} rounded-lg p-6`}>
                  <div className={`flex items-center gap-3 mb-4 ${category.color === 'blue' ? 'text-blue-800' : category.color === 'green' ? 'text-green-800' : category.color === 'red' ? 'text-red-800' : 'text-orange-800'}`}>
                    {category.icon}
                    <h3 className="font-semibold">{category.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.indicators.map((indicator, idx) => (
                      <li key={idx} className={`text-sm ${category.color === 'blue' ? 'text-blue-700' : category.color === 'green' ? 'text-green-700' : category.color === 'red' ? 'text-red-700' : 'text-orange-700'} flex items-start gap-2`}>
                        <span className={`w-2 h-2 rounded-full ${category.color === 'blue' ? 'bg-blue-500' : category.color === 'green' ? 'bg-green-500' : category.color === 'red' ? 'bg-red-500' : 'bg-orange-500'} mt-2 flex-shrink-0`}></span>
                        {indicator}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Inventory Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Global Oil Inventory Analysis</CardTitle>
            <CardDescription>
              OECD stocks comparison versus 5-year averages and strategic reserves
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer height="400px">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={inventoryData}>
                    <XAxis 
                      dataKey="region" 
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      interval={0}
                      fontSize={12}
                    />
                    <YAxis 
                      yAxisId="left" 
                      label={{ value: 'Million Barrels', angle: -90, position: 'insideLeft' }}
                    />
                    <YAxis 
                      yAxisId="right" 
                      orientation="right"
                      label={{ value: 'Days Coverage', angle: 90, position: 'insideRight' }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar yAxisId="left" dataKey="current" fill="#2563eb" name="Current Stocks" />
                    <Bar yAxisId="left" dataKey="fiveYearAvg" fill="#16a34a" name="5-Year Average" />
                    <Line yAxisId="right" type="monotone" dataKey="daysCoverage" stroke="#dc2626" strokeWidth={3} name="Days Coverage" />
                  </ComposedChart>
                </ResponsiveContainer>
              </ChartContainer>
            </ChartContainer>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">OECD Total Stocks</h4>
                <p className="text-sm text-blue-700">
                  Current levels at 2,850 million barrels, slightly below 5-year average, 
                  providing 62.1 days of forward demand coverage.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Strategic Reserves</h4>
                <p className="text-sm text-green-700">
                  Chinese and US strategic reserves showing policy-driven inventory changes, 
                  with China estimated at 1,000 million barrels.
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Coverage Analysis</h4>
                <p className="text-sm text-orange-700">
                  Forward demand coverage ratios indicate adequate supply buffer, 
                  with Japan maintaining highest coverage at 67.8 days.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demand Side Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              Demand Side Analysis
            </CardTitle>
            <CardDescription>
              Consumption drivers and demand forecasting factors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {demandDrivers.map((category, index) => (
                <div key={category.category} className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.factors.map((factor, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                          {idx + 1}
                        </div>
                        <p className="text-sm text-gray-700">{factor}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Financial and Macroeconomic Factors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-purple-600" />
              Financial and Macroeconomic Factors
            </CardTitle>
            <CardDescription>
              Market influences on oil price formation and volatility
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {macroFactors.map((macro, index) => (
                <div key={macro.factor} className="border rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">{macro.factor}</h4>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{macro.impact}</p>
                    </div>
                    <div>
                      <p className="text-sm text-purple-600 font-medium">{macro.correlation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Geopolitical Risk Assessment Map */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-red-600" />
              Geopolitical Risk Assessment
            </CardTitle>
            <CardDescription>
              Middle East concentrations, critical infrastructure, and African supply risks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Middle East Concentrations */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Middle East Concentrations</h3>
                <div className="space-y-4">
                  {geopoliticalRisks.map((risk, index) => (
                    <div key={risk.region} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{risk.region}</h4>
                        <Badge 
                          variant="outline" 
                          className="text-white border-0"
                          style={{ backgroundColor: riskColors[risk.riskLevel as keyof typeof riskColors] }}
                        >
                          {risk.riskLevel} Risk
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-2">{risk.risk}</p>
                          <p className="text-sm text-gray-500">{risk.details}</p>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm">
                            <span className="font-medium">At Risk Production:</span> {risk.production}
                          </div>
                          <div className="text-sm">
                            <span className="font-medium">Saudi Spare Capacity:</span> {risk.saudiSpareCapacity}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Critical Infrastructure */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Critical Infrastructure</h3>
                <ChartContainer height="300px">
                  <ChartContainer config={chartConfig}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={criticalInfrastructure}>
                        <XAxis 
                          dataKey="location" 
                          angle={-45}
                          textAnchor="end"
                          height={100}
                          interval={0}
                          fontSize={12}
                        />
                        <YAxis label={{ value: 'Million Barrels/Day', angle: -90, position: 'insideLeft' }} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="flow" fill="#dc2626" name="Daily Flow (Mb/d)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </ChartContainer>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {criticalInfrastructure.map((infra, index) => (
                    <div key={infra.location} className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-800">{infra.location}</h4>
                      <p className="text-sm text-red-700 mb-1">{infra.flow} Mb/d transit volume</p>
                      <p className="text-xs text-red-600">{infra.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* African Supply Risks */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">African Supply Risks</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Nigeria</h4>
                    <p className="text-sm text-gray-600">
                      Flooding, sabotage, and Boko Haram attacks regularly disrupt production 
                      and pipeline operations in the Niger Delta region.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Libya</h4>
                    <p className="text-sm text-gray-600">
                      Civil unrest and constitutional reform demands cause regular production 
                      shutdowns, with output varying between 200-1,200 kb/d.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Sudan/South Sudan</h4>
                    <p className="text-sm text-gray-600">
                      Regular pipeline disruptions between South Sudan production areas 
                      and export terminals affect regional supply flows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PriceOutlook;
