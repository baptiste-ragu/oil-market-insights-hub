
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, ComposedChart, Area, AreaChart } from 'recharts';
import { Factory, Ship, TrendingUp, MapPin } from 'lucide-react';

const EnergyTransformation = () => {
  const productionProfiles = [
    { year: 0, conventional: 100, shale: 100 },
    { year: 5, conventional: 95, shale: 45 },
    { year: 10, conventional: 85, shale: 20 },
    { year: 15, conventional: 75, shale: 10 },
    { year: 20, conventional: 65, shale: 5 },
    { year: 25, conventional: 55, shale: 2 },
    { year: 30, conventional: 45, shale: 1 },
    { year: 35, conventional: 35, shale: 0 },
    { year: 40, conventional: 25, shale: 0 }
  ];

  const refiningMargins = [
    { month: 'Jan', usgc: 12.5, nwe: 8.2, singapore: 6.8 },
    { month: 'Feb', usgc: 15.3, nwe: 9.1, singapore: 7.4 },
    { month: 'Mar', usgc: 18.7, nwe: 11.5, singapore: 9.2 },
    { month: 'Apr', usgc: 22.1, nwe: 14.8, singapore: 11.6 },
    { month: 'May', usgc: 19.4, nwe: 12.3, singapore: 10.1 },
    { month: 'Jun', usgc: 16.8, nwe: 10.7, singapore: 8.9 },
    { month: 'Jul', usgc: 21.2, nwe: 13.9, singapore: 11.3 },
    { month: 'Aug', usgc: 24.6, nwe: 16.2, singapore: 13.7 },
    { month: 'Sep', usgc: 20.9, nwe: 14.1, singapore: 12.4 },
    { month: 'Oct', usgc: 17.3, nwe: 11.8, singapore: 9.8 },
    { month: 'Nov', usgc: 14.7, nwe: 9.6, singapore: 8.2 },
    { month: 'Dec', usgc: 13.1, nwe: 8.4, singapore: 7.1 }
  ];

  const routeComparisons = [
    { 
      from: 'Yokohama, Japan',
      viaSuez: 12894,
      viaNortheast: 8452,
      savings: 4442
    },
    {
      from: 'Shanghai, China',
      viaSuez: 12107,
      viaNortheast: 9297,
      savings: 2810
    },
    {
      from: 'Vancouver, Canada',
      viaSuez: 10262,
      viaNortheast: 8038,
      savings: 2224
    }
  ];

  const transformationAreas = [
    {
      title: 'Upstream Revolution',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'blue',
      points: [
        'Producers can select oil vs gas plays based on market conditions',
        'E&P Revolution: 3-4 year cycles vs traditional 20-30 years',
        'Much lower entry costs for new projects',
        'Enhanced Oil Recovery adding conventional production',
        'Multiple countries possess shale oil resources'
      ]
    },
    {
      title: 'Downstream Transformation',
      icon: <Factory className="h-6 w-6" />,
      color: 'green',
      points: [
        'US re-industrialization: $90B invested (2012-2017)',
        'European refineries closing or transferred to trading houses',
        'Increased competition from USA, Middle East, Asia, Russia',
        'New bunker fuel specifications creating LNG opportunities',
        'Refining margin volatility across regions'
      ]
    },
    {
      title: 'Trade Pattern Evolution',
      icon: <Ship className="h-6 w-6" />,
      color: 'orange',
      points: [
        'Northern Sea Route reducing shipping distances',
        'Arctic ice melting enabling new passages',
        'Significant time and cost savings to European markets',
        'Geopolitical implications for traditional routes',
        'Environmental considerations vs economic benefits'
      ]
    }
  ];

  const chartConfig = {
    conventional: {
      label: "Conventional Fields (Cantarell)",
      color: "#2563eb",
    },
    shale: {
      label: "Shale Fields (Bakken)",
      color: "#dc2626",
    },
    usgc: {
      label: "USGC Medium Sour Coking",
      color: "#2563eb",
    },
    nwe: {
      label: "NWE Light Sweet Cracking",
      color: "#16a34a",
    },
    singapore: {
      label: "Singapore Medium Sour Hydrocracking",
      color: "#ea580c",
    },
  };

  return (
    <Layout 
      title="The New Energy Market Picture" 
      description="Upstream revolution, downstream transformation, and emerging trade routes"
    >
      <div className="space-y-12">
        {/* Three Transformation Areas Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {transformationAreas.map((area, index) => (
            <Card key={area.title} className={`border-l-4 border-l-${area.color}-500`}>
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 text-${area.color}-700`}>
                  {area.icon}
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className={`w-2 h-2 rounded-full bg-${area.color}-500 mt-2 flex-shrink-0`}></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Production Profile Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Production Profile Comparison</CardTitle>
            <CardDescription>
              Conventional vs Shale Oil Production Decline Curves (% of Initial Production)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container production-profile-chart-container">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={productionProfiles} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                    <XAxis 
                      dataKey="year" 
                      label={{ value: 'Years', position: 'insideBottom', offset: -5 }}
                      tick={{ fontSize: 12 }}
                      tickMargin={10}
                    />
                    <YAxis 
                      label={{ value: '% of Initial Production', angle: -90, position: 'insideLeft' }}
                      tick={{ fontSize: 12 }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="conventional" 
                      stroke="#2563eb" 
                      strokeWidth={3}
                      name="Conventional Fields (Cantarell)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="shale" 
                      stroke="#dc2626" 
                      strokeWidth={3}
                      name="Shale Fields (Bakken)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="chart-spacer"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Conventional Fields (e.g., Cantarell)</h4>
                <p className="text-sm text-blue-700">Gradual decline over 40+ years with sustained production</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Shale Fields (e.g., Bakken)</h4>
                <p className="text-sm text-red-700">Rapid initial production, steep decline within 10 years</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Refining Margin Volatility */}
        <Card>
          <CardHeader>
            <CardTitle>Refining Margin Volatility by Region</CardTitle>
            <CardDescription>
              Monthly refining margins showing regional competition pressures ($/barrel)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container refining-margin-chart-container">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={refiningMargins} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                    <XAxis 
                      dataKey="month" 
                      tick={{ fontSize: 12 }}
                      tickMargin={10}
                    />
                    <YAxis 
                      label={{ value: '$/barrel', angle: -90, position: 'insideLeft' }}
                      tick={{ fontSize: 12 }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="usgc" 
                      stroke="#2563eb" 
                      strokeWidth={2}
                      name="USGC Medium Sour Coking"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="nwe" 
                      stroke="#16a34a" 
                      strokeWidth={2}
                      name="NWE Light Sweet Cracking"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="singapore" 
                      stroke="#ea580c" 
                      strokeWidth={2}
                      name="Singapore Medium Sour Hydrocracking"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="chart-spacer"></div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">US Re-industrialization Impact</h4>
              <p className="text-gray-700">
                $90 billion invested in petrochemical sector (2012-2017) created significant competitive advantages 
                for US refiners, while European refineries faced closures or transfers to trading houses and private equity firms.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Northern Sea Route Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-blue-600" />
              Northern Sea Route Distance Comparisons
            </CardTitle>
            <CardDescription>
              Distance savings to Rotterdam via Northeast Passage vs Traditional Suez Route
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Origin</TableHead>
                  <TableHead className="text-right">Via Suez (miles)</TableHead>
                  <TableHead className="text-right">Via Northeast Passage (miles)</TableHead>
                  <TableHead className="text-right">Distance Savings (miles)</TableHead>
                  <TableHead className="text-right">Savings %</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {routeComparisons.map((route) => (
                  <TableRow key={route.from}>
                    <TableCell className="font-medium">{route.from}</TableCell>
                    <TableCell className="text-right font-mono">{route.viaSuez.toLocaleString()}</TableCell>
                    <TableCell className="text-right font-mono">{route.viaNortheast.toLocaleString()}</TableCell>
                    <TableCell className="text-right font-mono text-green-600">
                      {route.savings.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className="text-green-600">
                        {((route.savings / route.viaSuez) * 100).toFixed(1)}%
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Strategic Implications</h4>
              <p className="text-sm text-blue-700">
                Arctic ice melting is enabling the Northern Sea Route to become a viable alternative to traditional 
                shipping routes, offering significant time and cost savings but raising new geopolitical and 
                environmental considerations.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default EnergyTransformation;
