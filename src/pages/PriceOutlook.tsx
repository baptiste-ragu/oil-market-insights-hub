import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { TrendingUp, AlertCircle, Calculator, Target, DollarSign } from 'lucide-react';
import OilPricesDashboard from '@/components/OilPricesDashboard';
import NewsSection from '@/components/NewsSection';
import InvestmentClimate from '@/components/InvestmentClimate';

const PriceOutlook = () => {
  const priceScenarios = [
    { year: 2024, base: 82, bull: 110, bear: 65 },
    { year: 2025, base: 85, bull: 120, bear: 60 },
    { year: 2026, base: 88, bull: 130, bear: 55 },
    { year: 2027, base: 90, bull: 140, bear: 50 },
    { year: 2028, base: 92, bull: 150, bear: 45 },
    { year: 2029, base: 95, bull: 160, bear: 40 },
    { year: 2030, base: 98, bull: 170, bear: 35 }
  ];

  const volatilityData = [
    { factor: 'Geopolitical Risk', impact: 0.4 },
    { factor: 'Supply Disruptions', impact: 0.3 },
    { factor: 'Demand Shocks', impact: 0.2 },
    { factor: 'Inventory Levels', impact: 0.1 }
  ];

  const fundamentalFactors = [
    {
      title: 'Supply/Demand Balance',
      icon: <TrendingUp className="h-5 w-5" />,
      description: 'Global oil market balance and inventory levels',
      details: [
        'OPEC+ production decisions',
        'US shale oil output',
        'Global economic growth',
        'Geopolitical events'
      ]
    },
    {
      title: 'Geopolitical Risks',
      icon: <AlertCircle className="h-5 w-5" />,
      description: 'Political instability and conflicts',
      details: [
        'Middle East tensions',
        'Sanctions on oil producers',
        'Trade wars',
        'Terrorist attacks'
      ]
    },
    {
      title: 'Economic Indicators',
      icon: <Calculator className="h-5 w-5" />,
      description: 'Macroeconomic trends and financial markets',
      details: [
        'GDP growth',
        'Inflation rates',
        'Interest rates',
        'Currency exchange rates'
      ]
    },
    {
      title: 'Market Sentiment',
      icon: <Target className="h-5 w-5" />,
      description: 'Investor expectations and speculative activity',
      details: [
        'Hedge fund positioning',
        'Options market activity',
        'News headlines',
        'Social media trends'
      ]
    }
  ];

  const chartConfig = {
    base: {
      label: "Base Case",
      color: "#2563eb",
    },
    bull: {
      label: "Bull Case",
      color: "#16a34a",
    },
    bear: {
      label: "Bear Case",
      color: "#dc2626",
    },
    impact: {
      label: "Volatility Impact",
      color: "#f59e0b",
    },
  };

  return (
    <Layout 
      title="Oil Price Outlook Framework" 
      description="Comprehensive analysis of price formation factors and market forecasting methodologies"
    >
      <div className="space-y-12">
        {/* Live Oil Prices Dashboard */}
        <OilPricesDashboard />

        {/* Oil Industry Investment Climate - NEW SECTION */}
        <InvestmentClimate />

        {/* Price Formation Framework */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-green-600" />
              Oil Price Formation Framework
            </CardTitle>
            <CardDescription>
              Key factors influencing oil price dynamics and market behavior
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fundamentalFactors.map((factor, index) => (
                <div key={factor.title} className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <factor.icon className="h-5 w-5 text-gray-500" />
                    <h4 className="font-semibold text-gray-800">{factor.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{factor.description}</p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-500">
                    {factor.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Multiple Scenario Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Multiple Scenario Analysis</CardTitle>
            <CardDescription>
              Projected oil price ranges under different market conditions ($/barrel)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceScenarios} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="base" stroke="#2563eb" strokeWidth={2} name="Base Case" />
                    <Line type="monotone" dataKey="bull" stroke="#16a34a" strokeWidth={2} name="Bull Case" />
                    <Line type="monotone" dataKey="bear" stroke="#dc2626" strokeWidth={2} name="Bear Case" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Market Volatility Drivers */}
        <Card>
          <CardHeader>
            <CardTitle>Market Volatility Drivers</CardTitle>
            <CardDescription>
              Key factors contributing to oil price volatility and market uncertainty
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={volatilityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="factor" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="impact" fill="#f59e0b" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Fundamental Price Factors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {fundamentalFactors.map((factor, index) => (
            <div key={factor.title} className="p-4 border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <factor.icon className="h-5 w-5 text-gray-500" />
                <h4 className="font-semibold text-gray-800">{factor.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{factor.description}</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-500">
                {factor.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* News and Analysis Section */}
        <NewsSection />
      </div>
    </Layout>
  );
};

export default PriceOutlook;
