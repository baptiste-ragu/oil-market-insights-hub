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
    { factor: 'Pi', description: 'Forward price for period i', formula: 'Market-determined forward price', example: '68.44 USD/barrel for FEB20' },
    { factor: 'Vi', description: 'Volume for period i', formula: 'Contracted volume amount', example: '1,000 barrels per period' },
    { factor: 'Di', description: 'Discount factor for period i', formula: 'Present value discount factor', example: '0.995 for 1-month forward' }
  ];

  const forwardSwapPricing = [
    { product: 'Brent Ice', currency: 'USD', feb20: 68.44, mar20: 64.72, apr20: 63.91, may20: 63.24, jun20: 62.62, jul20: 61.98 },
    { product: 'WTI Nymex', currency: 'USD', feb20: 58.53, mar20: 58.59, apr20: 58.51, may20: 58.31, jun20: 57.99, jul20: 57.58 }
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
      <div className="space-y-12">
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
              <div className="p-6 border-l-4 border-l-blue-500 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3 mb-3 text-blue-800">
                  <Globe className="h-5 w-5" />
                  <h3 className="font-semibold">Bilateral Transactions</h3>
                </div>
                <p className="text-sm text-blue-700">Direct trading between identified counterparties</p>
              </div>
              <div className="p-6 border-l-4 border-l-green-500 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3 mb-3 text-green-800">
                  <TrendingUp className="h-5 w-5" />
                  <h3 className="font-semibold">Flexible Maturities</h3>
                </div>
                <p className="text-sm text-green-700">Derivatives with maturities from months to several years</p>
              </div>
              <div className="p-6 border-l-4 border-l-orange-500 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-3 mb-3 text-orange-800">
                  <DollarSign className="h-5 w-5" />
                  <h3 className="font-semibold">Price References</h3>
                </div>
                <p className="text-sm text-orange-700">ICE, NYMEX, Platts assessments as benchmarks</p>
              </div>
              <div className="p-6 border-l-4 border-l-purple-500 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3 mb-3 text-purple-800">
                  <Calculator className="h-5 w-5" />
                  <h3 className="font-semibold">Custom Parameters</h3>
                </div>
                <p className="text-sm text-purple-700">Flexible contract parameters allowing customization</p>
              </div>
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
              Mathematical framework for pricing Asian-style oil derivatives
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Asian Swap Pricing Formula</h3>
              <div className="text-center mb-6">
                <div className="text-3xl font-mono text-blue-900 mb-2">
                  P<sub>swap</sub> = Σ(P<sub>i</sub> × D<sub>i</sub> × V<sub>i</sub>) / Σ(V<sub>i</sub> × D<sub>i</sub>)
                </div>
                <p className="text-sm text-blue-700">
                  Volume-weighted average of forward prices, discounted to present value
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {asianSwapFactors.map((factor, index) => (
                <div key={factor.factor} className="border rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {factor.factor} - {factor.description}
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-600">Definition:</span>
                      <p className="text-sm text-gray-700">{factor.formula}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Example:</span>
                      <p className="text-sm text-green-600 font-mono">{factor.example}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Practical Application</h4>
              <p className="text-sm text-green-700">
                Asian swaps are particularly useful for hedging monthly average price exposures common in 
                physical oil trading. The formula accounts for varying volumes and time value of money 
                across different settlement periods.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Forward and Swap Curves Data Table */}
        <Card>
          <CardHeader>
            <CardTitle>Forwards and Swaps Pricing Table</CardTitle>
            <CardDescription>
              Exact market pricing data for Brent ICE and WTI NYMEX forward curves
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Currency</TableHead>
                    <TableHead className="text-right">FEB20</TableHead>
                    <TableHead className="text-right">MAR20</TableHead>
                    <TableHead className="text-right">APR20</TableHead>
                    <TableHead className="text-right">MAY20</TableHead>
                    <TableHead className="text-right">JUN20</TableHead>
                    <TableHead className="text-right">JUL20</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {forwardSwapPricing.map((row) => (
                    <TableRow key={row.product}>
                      <TableCell className="font-medium">{row.product}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{row.currency}</Badge>
                      </TableCell>
                      <TableCell className="text-right font-mono">{row.feb20}</TableCell>
                      <TableCell className="text-right font-mono">{row.mar20}</TableCell>
                      <TableCell className="text-right font-mono">{row.apr20}</TableCell>
                      <TableCell className="text-right font-mono">{row.may20}</TableCell>
                      <TableCell className="text-right font-mono">{row.jun20}</TableCell>
                      <TableCell className="text-right font-mono">{row.jul20}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Brent ICE Forward Curve</h4>
                <p className="text-sm text-blue-700">
                  Shows backwardation structure with front month at $68.44 declining to $61.98 for July 2020, 
                  indicating tight near-term supply conditions.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">WTI NYMEX Relationship</h4>
                <p className="text-sm text-green-700">
                  WTI trading at significant discount to Brent ($9.91 spread in February), 
                  with relatively flat forward curve structure around $58 level.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quarterly and Annual Forwards */}
        <Card>
          <CardHeader>
            <CardTitle>Quarterly Forward Curves</CardTitle>
            <CardDescription>
              Extended forward curve showing quarterly averages and annual pricing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container quarterly-curves-chart-container">
              <ChartContainer config={{ brent: { label: "Brent Quarterly", color: "#2563eb" }, wti: { label: "WTI Quarterly", color: "#dc2626" } }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={quarterlyForwards}>
                    <XAxis dataKey="period" />
                    <YAxis label={{ value: '$/barrel', angle: -90, position: 'insideLeft' }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="brent" stroke="#2563eb" strokeWidth={3} name="Brent Quarterly" />
                    <Line type="monotone" dataKey="wti" stroke="#dc2626" strokeWidth={3} name="WTI Quarterly" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="chart-spacer"></div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Forward Curve Analysis</h4>
              <p className="text-gray-700 text-sm">
                Both Brent and WTI show declining forward curves (backwardation), with Brent maintaining 
                a premium throughout the curve. The relationship between forwards and futures is linked 
                by discount factors, enabling arbitrage opportunities and price convergence.
              </p>
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
