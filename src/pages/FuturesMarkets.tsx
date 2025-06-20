
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, ComposedChart, Area, AreaChart } from 'recharts';
import { Building, TrendingUp, Shield, Clock } from 'lucide-react';

const FuturesMarkets = () => {
  const exchanges = [
    {
      exchange: 'NYMEX',
      fullName: 'New York Mercantile Exchange',
      contracts: [
        { name: 'Light Sweet Crude (WTI)', size: '1,000 barrels', delivery: 'Cushing, OK' },
        { name: 'Heating Oil', size: '42,000 gallons', delivery: 'New York Harbor (NYH)' },
        { name: 'Unleaded Gasoline', size: '42,000 gallons', delivery: 'New York Harbor (NYH)' }
      ]
    },
    {
      exchange: 'ICE',
      fullName: 'Intercontinental Exchange',
      contracts: [
        { name: 'Brent Crude', size: '1,000 barrels', delivery: 'Sullom Voe/Cash settlement' },
        { name: 'WTI', size: '1,000 barrels', delivery: 'Cash settlement' },
        { name: 'Gasoil', size: '100 tons', delivery: 'Amsterdam-Rotterdam-Antwerp (ARA)' }
      ]
    }
  ];

  const brentVolume = [
    { month: 'Jan', volume: 1200, openInterest: 2300 },
    { month: 'Feb', volume: 1350, openInterest: 2450 },
    { month: 'Mar', volume: 1420, openInterest: 2520 },
    { month: 'Apr', volume: 1380, openInterest: 2480 },
    { month: 'May', volume: 1450, openInterest: 2580 },
    { month: 'Jun', volume: 1520, openInterest: 2620 },
    { month: 'Jul', volume: 1480, openInterest: 2550 },
    { month: 'Aug', volume: 1400, openInterest: 2480 },
    { month: 'Sep', volume: 1380, openInterest: 2460 },
    { month: 'Oct', volume: 1420, openInterest: 2520 },
    { month: 'Nov', volume: 1460, openInterest: 2580 },
    { month: 'Dec', volume: 1380, openInterest: 2510 }
  ];

  const wtiVolume = [
    { month: 'Jan', volume: 1050, openInterest: 1900 },
    { month: 'Feb', volume: 1120, openInterest: 1980 },
    { month: 'Mar', volume: 1180, openInterest: 2050 },
    { month: 'Apr', volume: 1150, openInterest: 2020 },
    { month: 'May', volume: 1200, openInterest: 2100 },
    { month: 'Jun', volume: 1250, openInterest: 2150 },
    { month: 'Jul', volume: 1220, openInterest: 2080 },
    { month: 'Aug', volume: 1180, openInterest: 2040 },
    { month: 'Sep', volume: 1160, openInterest: 2020 },
    { month: 'Oct', volume: 1190, openInterest: 2070 },
    { month: 'Nov', volume: 1220, openInterest: 2110 },
    { month: 'Dec', volume: 1180, openInterest: 2050 }
  ];

  const settlementOptions = [
    {
      contract: 'Brent ICE Futures',
      options: [
        'Physical delivery possible',
        'Exchange for Physical (EFP) transactions available',
        'Cash settlement based on ICE Brent Index using 21-day BFO average',
        'Trading ends on day preceding 15th day before delivery month'
      ]
    },
    {
      contract: 'Gasoil ICE Futures',
      options: [
        'Physical delivery into barge or coaster',
        'In-tank transfer from ARA area storage facilities',
        'Delivery between 16th and last calendar day of delivery month',
        'Trading ends at 12:00 hours, 2 business days prior to 14th calendar day'
      ]
    }
  ];

  const marketGuarantees = [
    'Clearing house and clearing members provide market guarantees',
    'Initial margin paid when opening accounts',
    'Variation margin collected daily based on mark-to-market procedures',
    'Interest paid on held margins'
  ];

  const chartConfig = {
    volume: {
      label: "Volume (Thousand Lots)",
      color: "#2563eb",
    },
    openInterest: {
      label: "Open Interest (Thousand Lots)",
      color: "#16a34a",
    },
  };

  return (
    <Layout 
      title="Futures Oil Markets" 
      description="Major exchanges, contract specifications, and trading volumes"
    >
      <div className="space-y-8">
        {/* Major Exchanges and Contract Specifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-6 w-6 text-blue-600" />
              Major Exchanges and Contract Specifications
            </CardTitle>
            <CardDescription>
              Key futures contracts traded on NYMEX and ICE exchanges
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {exchanges.map((exchange, index) => (
                <div key={exchange.exchange} className="border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      {exchange.exchange}
                    </Badge>
                    <h3 className="text-lg font-semibold text-gray-700">{exchange.fullName}</h3>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Contract</TableHead>
                        <TableHead>Contract Size</TableHead>
                        <TableHead>Delivery</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {exchange.contracts.map((contract, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="font-medium">{contract.name}</TableCell>
                          <TableCell>{contract.size}</TableCell>
                          <TableCell>{contract.delivery}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trading Volume Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>ICE Brent Futures Trading Activity</CardTitle>
              <CardDescription>Monthly average daily volume and open interest (thousand lots)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={brentVolume}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="volume" fill="#2563eb" name="Volume" />
                      <Line type="monotone" dataKey="openInterest" stroke="#16a34a" strokeWidth={3} name="Open Interest" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Peak Performance:</strong> Monthly average daily volume reaching 1,400+ thousand lots, 
                  with open interest levels exceeding 2,500 thousand lots.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>NYMEX WTI Futures Trading Activity</CardTitle>
              <CardDescription>Monthly average daily volume and open interest (thousand lots)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={wtiVolume}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="volume" fill="#2563eb" name="Volume" />
                      <Line type="monotone" dataKey="openInterest" stroke="#16a34a" strokeWidth={3} name="Open Interest" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700">
                  <strong>Consistent Activity:</strong> Monthly average daily volume consistently above 1,000 thousand lots, 
                  with open interest maintaining levels around 2,000 thousand lots.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Guarantees and Clearing System */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-600" />
              Market Guarantees and Clearing System
            </CardTitle>
            <CardDescription>
              Risk management and financial guarantees in futures markets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {marketGuarantees.map((guarantee, index) => (
                <div key={index} className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm text-green-800">{guarantee}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Settlement Options */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-orange-600" />
              Settlement Options and Procedures
            </CardTitle>
            <CardDescription>
              Delivery and settlement mechanisms for major oil futures contracts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {settlementOptions.map((settlement, index) => (
                <div key={settlement.contract} className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{settlement.contract}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {settlement.options.map((option, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                          {idx + 1}
                        </div>
                        <p className="text-sm text-gray-700">{option}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Market Significance */}
        <Card>
          <CardHeader>
            <CardTitle>Market Significance and Growth</CardTitle>
            <CardDescription>
              Key indicators of futures market importance in oil price discovery
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600 mb-1">Significant Growth</div>
                <div className="text-sm text-blue-700">Both Brent and WTI futures showing parallel growth from 2010-2020</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Building className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-600 mb-1">Price Discovery</div>
                <div className="text-sm text-green-700">Futures markets serve as primary price discovery mechanism for global oil</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <Shield className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-orange-600 mb-1">Risk Management</div>
                <div className="text-sm text-orange-700">Essential tools for hedging price risk across the oil value chain</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FuturesMarkets;
