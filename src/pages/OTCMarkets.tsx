
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Calculator, Globe, DollarSign } from 'lucide-react';

const OTCMarkets = () => {
  const otcCharacteristics = [
    {
      title: 'Bilateral Transactions',
      description: 'Direct trading between identified counterparties',
      icon: <Globe className="h-5 w-5" />,
      color: 'blue'
    },
    {
      title: 'Flexible Maturities',
      description: 'Derivatives with maturities from months to several years',
      icon: <TrendingUp className="h-5 w-5" />,
      color: 'green'
    },
    {
      title: 'Price References',
      description: 'ICE, NYMEX, Platts assessments as benchmarks',
      icon: <DollarSign className="h-5 w-5" />,
      color: 'orange'
    },
    {
      title: 'Custom Parameters',
      description: 'Flexible contract parameters allowing customization',
      icon: <Calculator className="h-5 w-5" />,
      color: 'purple'
    }
  ];

  const forwardCurveData = [
    { month: 'FEB20', brentIce: 68.44, wtiNymex: 58.53 },
    { month: 'MAR20', brentIce: 64.72, wtiNymex: 58.59 },
    { month: 'APR20', brentIce: 63.91, wtiNymex: 58.51 },
    { month: 'MAY20', brentIce: 63.42, wtiNymex: 58.43 },
    { month: 'JUN20', brentIce: 63.15, wtiNymex: 58.38 },
    { month: 'JUL20', brentIce: 62.94, wtiNymex: 58.35 },
    { month: 'AUG20', brentIce: 62.78, wtiNymex: 58.33 },
    { month: 'SEP20', brentIce: 62.65, wtiNymex: 58.32 },
    { month: 'OCT20', brentIce: 62.54, wtiNymex: 58.31 },
    { month: 'NOV20', brentIce: 62.45, wtiNymex: 58.30 },
    { month: 'DEC20', brentIce: 62.38, wtiNymex: 58.29 }
  ];

  const quarterlyForwards = [
    { period: 'Q1 2020', brent: 66.02, wti: 58.54 },
    { period: 'Q2 2020', brent: 63.49, wti: 58.44 },
    { period: 'Q3 2020', brent: 62.79, wti: 58.33 },
    { period: 'Q4 2020', brent: 62.46, wti: 58.30 },
    { period: 'Q1 2021', brent: 62.18, wti: 58.27 },
    { period: 'Q2 2021', brent: 61.95, wti: 58.25 }
  ];

  const asianSwapFactors = [
    { factor: 'Pi', description: 'Forward price for period i', formula: 'Market-determined forward price' },
    { factor: 'Vi', description: 'Volume for period i', formula: 'Contracted volume amount' },
    { factor: 'Di', description: 'Discount factor for period i', formula: 'Present value discount factor' }
  ];

  const chartConfig = {
    brentIce: {
      label: "Brent ICE (USD)",
      color: "#2563eb",
    },
    wtiNymex: {
      label: "WTI Nymex (USD)",
      color: "#dc2626",
    },
    brent: {
      label: "Brent Quarterly",
      color: "#2563eb",
    },
    wti: {
      label: "WTI Quarterly",
      color: "#dc2626",
    },
  };

  return (
    <Layout 
      title="Financial OTC Oil Markets" 
      description="OTC market structure, Asian swap pricing, and forward curves"
    >
      <div className="space-y-8">
        {/* OTC Market Structure */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              OTC Market Structure and Characteristics
            </CardTitle>
            <CardDescription>
              Key features of over-the-counter oil derivatives markets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otcCharacteristics.map((char, index) => (
                <div key={char.title} className={`p-6 border-l-4 border-l-${char.color}-500 bg-${char.color}-50 rounded-lg`}>
                  <div className={`flex items-center gap-3 mb-3 text-${char.color}-800`}>
                    {char.icon}
                    <h3 className="font-semibold">{char.title}</h3>
                  </div>
                  <p className={`text-sm text-${char.color}-700`}>{char.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Market Advantages</h4>
              <p className="text-gray-700 text-sm">
                OTC markets provide financial products covering complex and multiple risk exposures, 
                offering flexibility that standardized exchange-traded contracts cannot match. This allows 
                for customized hedging solutions tailored to specific business needs.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Asian Swap Pricing Methodology */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-6 w-6 text-green-600" />
              Asian Swap Pricing Methodology
            </CardTitle>
            <CardDescription>
              Volume-weighted average pricing formula with discount factors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center p-6 bg-green-50 rounded-lg border">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Asian Swap Pricing Formula</h3>
                <div className="text-2xl font-mono text-green-900 mb-4">
                  P<sub>swap</sub> = ΣP<sub>i</sub>D<sub>i</sub>V<sub>i</sub> / ΣV<sub>i</sub>D<sub>i</sub>
                </div>
                <p className="text-sm text-green-700">
                  Where the swap price is calculated using volume-weighted averages with discount factors
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {asianSwapFactors.map((factor, index) => (
                  <div key={factor.factor} className="p-4 border rounded-lg">
                    <div className="text-center mb-3">
                      <div className="text-xl font-mono font-bold text-gray-800">{factor.factor}</div>
                      <div className="text-sm font-semibold text-gray-600">{factor.description}</div>
                    </div>
                    <div className="text-xs text-gray-500 text-center">{factor.formula}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Forward and Swap Curves */}
        <Card>
          <CardHeader>
            <CardTitle>Forward and Swap Curves</CardTitle>
            <CardDescription>
              Forward prices linked by discount factors showing market expectations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96 mb-6">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={forwardCurveData}>
                    <XAxis 
                      dataKey="month" 
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      interval={0}
                      fontSize={12}
                    />
                    <YAxis label={{ value: 'USD/barrel', angle: -90, position: 'insideLeft' }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="brentIce" 
                      stroke="#2563eb" 
                      strokeWidth={3}
                      name="Brent ICE (USD)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="wtiNymex" 
                      stroke="#dc2626" 
                      strokeWidth={3}
                      name="WTI Nymex (USD)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Month</TableHead>
                  <TableHead className="text-right">Brent ICE (USD)</TableHead>
                  <TableHead className="text-right">WTI Nymex (USD)</TableHead>
                  <TableHead className="text-right">Spread</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {forwardCurveData.slice(0, 6).map((data) => (
                  <TableRow key={data.month}>
                    <TableCell className="font-medium">{data.month}</TableCell>
                    <TableCell className="text-right font-mono">{data.brentIce}</TableCell>
                    <TableCell className="text-right font-mono">{data.wtiNymex}</TableCell>
                    <TableCell className="text-right font-mono">
                      {(data.brentIce - data.wtiNymex).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quarterly Forward Curves */}
        <Card>
          <CardHeader>
            <CardTitle>Quarterly and Annual Forward Curves</CardTitle>
            <CardDescription>
              Longer-term forward pricing with quarterly averages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 mb-6">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={quarterlyForwards} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="period" />
                    <YAxis label={{ value: 'USD/barrel', angle: -90, position: 'insideLeft' }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="brent" fill="#2563eb" name="Brent Quarterly" />
                    <Bar dataKey="wti" fill="#dc2626" name="WTI Quarterly" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Brent Forward Structure</h4>
                <p className="text-sm text-blue-700">
                  Showing contango structure with gradual price decline over time, 
                  indicating oversupplied market conditions in forward periods.
                </p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">WTI Forward Structure</h4>
                <p className="text-sm text-red-700">
                  Relatively flat forward curve suggesting balanced supply-demand expectations 
                  in domestic US markets with limited storage premiums.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Applications */}
        <Card>
          <CardHeader>
            <CardTitle>OTC Market Applications</CardTitle>
            <CardDescription>
              How OTC derivatives are used for risk management and trading
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <DollarSign className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <div className="text-lg font-bold text-orange-600 mb-2">Price Risk Management</div>
                <div className="text-sm text-orange-700">
                  Customized hedging solutions for complex exposure patterns not covered by standard futures
                </div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Globe className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="text-lg font-bold text-green-600 mb-2">Geographic Spreads</div>
                <div className="text-sm text-green-700">
                  Hedging price differentials between different crude grades and locations
                </div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-lg font-bold text-purple-600 mb-2">Time Spreads</div>
                <div className="text-sm text-purple-700">
                  Managing calendar spread risks and storage economics through flexible structures
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default OTCMarkets;
