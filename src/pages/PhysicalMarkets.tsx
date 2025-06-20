
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Ship, MapPin, TrendingUp, Globe } from 'lucide-react';

const PhysicalMarkets = () => {
  const maritimePassages = [
    { name: 'Strait of Hormuz', flow: 19.0, region: 'Persian Gulf', risk: 'High' },
    { name: 'Strait of Malacca', flow: 18.0, region: 'Southeast Asia', risk: 'Medium' },
    { name: 'Suez Canal', flow: 5.5, region: 'Egypt', risk: 'Medium' },
    { name: 'Bab-el-Mandeb', flow: 4.8, region: 'Red Sea', risk: 'High' },
    { name: 'Danish Straits', flow: 3.2, region: 'Northern Europe', risk: 'Low' },
    { name: 'Turkish Straits', flow: 2.4, region: 'Black Sea', risk: 'Medium' }
  ];

  const crudeBenchmarks = [
    {
      name: 'Brent Crude',
      origin: 'North Sea',
      fields: 'Brent, Forties, Oseberg, Ekofisk',
      quality: 'Light & Sweet',
      delivery: 'Water-borne',
      market: 'Global (67% of contracts)',
      characteristics: 'Ideal for diesel and gasoline refining'
    },
    {
      name: 'WTI',
      origin: 'United States',
      fields: 'Cushing, Oklahoma delivery',
      quality: 'Light & Sweet',
      delivery: 'Pipeline',
      market: 'North American benchmark',
      characteristics: 'Optimal for gasoline refining'
    },
    {
      name: 'Dubai Crude',
      origin: 'Middle East',
      fields: 'Dubai, Oman, Abu Dhabi',
      quality: 'Heavier & Sour',
      delivery: 'Water-borne',
      market: 'Asian markets reference',
      characteristics: 'Main Persian Gulf to Asia pricing'
    }
  ];

  const medProducts = [
    { product: 'Naphtha FOB Med', price: '625.50-626.00' },
    { product: 'Premium Unleaded 10ppm', price: '634.50-635.00' },
    { product: 'Jet', price: '718.25-718.75' },
    { product: '10ppm ULSD', price: '680.75-681.25' },
    { product: 'Gasoil 0.1%', price: '652.25-652.75' },
    { product: 'Fuel Oil 1.0%', price: '425.50-426.00' },
    { product: 'Fuel Oil 3.5%', price: '420.25-420.75' }
  ];

  const nweProducts = [
    { product: 'Naphtha', price: '638.75-639.25' },
    { product: 'Gasoline 10ppm', price: '760.50-761.00' },
    { product: 'Jet', price: '686.00-686.50' },
    { product: 'ULSD 10ppm', price: '647.00-647.50' },
    { product: 'Diesel 10ppm', price: '648.50-649.00' },
    { product: 'Gasoil 0.1%', price: '631.00-631.50' },
    { product: 'Fuel Oil 1.0%', price: '422.00-422.50' },
    { product: 'Fuel Oil 3.5%', price: '401.50-402.00' }
  ];

  const passageColors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'];

  const chartConfig = {
    flow: {
      label: "Million Barrels/Day",
      color: "#2563eb",
    },
  };

  const riskColors = {
    'High': '#ef4444',
    'Medium': '#f59e0b',
    'Low': '#10b981'
  };

  return (
    <Layout 
      title="Physical Oil Markets" 
      description="OTC market structure, critical maritime passages, and global crude benchmarks"
    >
      <div className="space-y-8">
        {/* Critical Maritime Passages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ship className="h-6 w-6 text-blue-600" />
              Critical Maritime Passages
            </CardTitle>
            <CardDescription>
              Daily oil flow through strategic chokepoints (Million Barrels/Day)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-96">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={maritimePassages} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <XAxis 
                        dataKey="name" 
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        interval={0}
                        fontSize={12}
                      />
                      <YAxis label={{ value: 'Million Barrels/Day', angle: -90, position: 'insideLeft' }} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="flow" fill="#2563eb" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Strategic Importance</h4>
                {maritimePassages.map((passage, index) => (
                  <div key={passage.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">{passage.name}</div>
                      <div className="text-sm text-gray-600">{passage.region}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{passage.flow} Mb/d</div>
                      <Badge 
                        variant="outline" 
                        className={`text-white border-0`}
                        style={{ backgroundColor: riskColors[passage.risk as keyof typeof riskColors] }}
                      >
                        {passage.risk} Risk
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* OTC Market Structure */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              OTC Market Structure
            </CardTitle>
            <CardDescription>
              Physical oil trading characteristics and market participants
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Participants</h4>
                <p className="text-sm text-blue-700">Producers, Refiners, Traders, Brokers</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Trading Method</h4>
                <p className="text-sm text-green-700">Physical cargoes on deal-by-deal basis</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Regulation</h4>
                <p className="text-sm text-orange-700">No regulatory entities oversight</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Transparency</h4>
                <p className="text-sm text-purple-700">Low transparency, price reporting available</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Pricing Mechanism</h4>
              <p className="text-gray-700">
                Pricing indexed on marker crude references with quality adjustments, time spreads, and transport costs
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Global Crude Benchmarks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-orange-600" />
              Global Crude Benchmarks Comparison
            </CardTitle>
            <CardDescription>
              Major crude oil pricing references and their characteristics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {crudeBenchmarks.map((benchmark, index) => (
                <div key={benchmark.name} className="border rounded-lg p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{benchmark.name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-600">Origin:</span> {benchmark.origin}
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Quality:</span> {benchmark.quality}
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Fields:</span> {benchmark.fields}
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Delivery:</span> {benchmark.delivery}
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/3 space-y-2">
                      <Badge variant="outline" className="w-full justify-center">
                        {benchmark.market}
                      </Badge>
                      <p className="text-xs text-gray-600 text-center">
                        {benchmark.characteristics}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* European Products Price Assessment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Mediterranean Cargoes ($/T)</CardTitle>
              <CardDescription>Platts FOB Med pricing assessments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead className="text-right">Price Range</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {medProducts.map((product) => (
                    <TableRow key={product.product}>
                      <TableCell className="font-medium">{product.product}</TableCell>
                      <TableCell className="text-right font-mono">{product.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Northwest Europe Cargoes ($/T)</CardTitle>
              <CardDescription>Platts FOB NWE/CIF NWE pricing assessments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead className="text-right">Price Range</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {nweProducts.map((product) => (
                    <TableRow key={product.product}>
                      <TableCell className="font-medium">{product.product}</TableCell>
                      <TableCell className="text-right font-mono">{product.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PhysicalMarkets;
