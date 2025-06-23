
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { AlertTriangle, MapPin, TrendingDown } from 'lucide-react';

const GlobalSupplyConcentration = () => {
  const concentrationData = [
    { name: '300 Giant Fields', value: 60, color: '#dc2626' },
    { name: 'Other 69,700 Fields', value: 40, color: '#94a3b8' }
  ];

  const topFields = [
    { field: 'Ghawar', country: 'Saudi Arabia', production: 6.0, flag: '🇸🇦' },
    { field: 'Cantarell', country: 'Mexico', production: 2.8, flag: '🇲🇽' },
    { field: 'Kashagan', country: 'Kazakhstan', production: 2.2, flag: '🇰🇿' },
    { field: 'Rumaila', country: 'Iraq', production: 2.0, flag: '🇮🇶' },
    { field: 'Safaniya', country: 'Saudi Arabia', production: 1.8, flag: '🇸🇦' },
    { field: 'Kirkuk', country: 'Iraq', production: 1.6, flag: '🇮🇶' },
    { field: 'Samotlor', country: 'Russia', production: 1.4, flag: '🇷🇺' },
    { field: 'Zakum', country: 'UAE', production: 1.2, flag: '🇦🇪' },
    { field: 'Marlim', country: 'Brazil', production: 1.1, flag: '🇧🇷' },
    { field: 'Prudhoe Bay', country: 'USA', production: 1.0, flag: '🇺🇸' }
  ];

  const fieldDeclines = [
    { field: 'Ghawar (Saudi Arabia)', peak: 5.1, current: 3.8, decline: -25.5 },
    { field: 'Cantarell (Mexico)', peak: 1.675, current: 0.2, decline: -88.1 }
  ];

  const iocNocData = [
    { 
      category: 'Reserves (%)', 
      ioc: 5, 
      noc: 69, 
      other: 26,
      description: 'Control of proven oil reserves'
    },
    { 
      category: 'Production (%)', 
      ioc: 15, 
      noc: 35, 
      other: 50,
      description: 'Share of global oil production'
    },
    { 
      category: 'E&P CAPEX (%)', 
      ioc: 20, 
      noc: 45, 
      other: 35,
      description: 'Exploration & Production investment'
    }
  ];

  const chartConfig = {
    production: {
      label: "Production (% of global)",
      color: "#2563eb",
    },
    ioc: {
      label: "IOCs",
      color: "#3b82f6",
    },
    noc: {
      label: "NOCs", 
      color: "#10b981",
    },
    other: {
      label: "Others",
      color: "#f59e0b",
    },
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            Global Supply Concentration Risk
          </CardTitle>
          <CardDescription>
            Critical dependency on a small number of giant oil fields worldwide
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Field Concentration Analysis</h4>
              <div className="chart-container" style={{ height: '300px' }}>
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={concentrationData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                        labelLine={false}
                      >
                        {concentrationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip formatter={(value) => [`${value}%`, 'Share of Global Supply']} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Critical Statistics</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total oil fields worldwide:</span>
                    <span className="font-mono font-bold">70,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Giant fields (300 fields):</span>
                    <span className="font-mono font-bold text-red-600">60% of supply</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Top 10 fields:</span>
                    <span className="font-mono font-bold text-red-600">17% of supply</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Top 20 fields:</span>
                    <span className="font-mono font-bold text-red-600">22% of supply</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ghawar field alone:</span>
                    <span className="font-mono font-bold text-red-600">6% of supply</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top 10 Oil Fields by Production</CardTitle>
          <CardDescription>
            Ranking of world's largest oil fields by daily production contribution
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Field Name</TableHead>
                <TableHead>Country</TableHead>
                <TableHead className="text-right">Production (% Global)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topFields.map((field, index) => (
                <TableRow key={field.field}>
                  <TableCell className="font-bold">{index + 1}</TableCell>
                  <TableCell className="font-medium">{field.field}</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-2">
                      <span>{field.flag}</span>
                      {field.country}
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-mono font-bold">
                    {field.production.toFixed(1)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="h-6 w-6 text-orange-600" />
            Major Oil Field Decline Trends
          </CardTitle>
          <CardDescription>
            Historical production changes in critical oil fields
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {fieldDeclines.map((field, index) => (
              <div key={field.field} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">{field.field}</h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Peak Production</div>
                    <div className="text-xl font-bold text-blue-600">{field.peak} Mbpd</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Current Production</div>
                    <div className="text-xl font-bold text-green-600">{field.current} Mbpd</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Total Decline</div>
                    <div className="text-xl font-bold text-red-600">{field.decline}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>IOC vs NOC Market Dynamics</CardTitle>
          <CardDescription>
            Comparing International Oil Companies and National Oil Companies market positions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {iocNocData.map((metric, index) => (
              <div key={metric.category} className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">{metric.category}</h4>
                <p className="text-sm text-gray-600 mb-3">{metric.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded">
                    <div className="text-sm text-blue-600">IOCs</div>
                    <div className="text-2xl font-bold text-blue-800">{metric.ioc}%</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded">
                    <div className="text-sm text-green-600">NOCs</div>
                    <div className="text-2xl font-bold text-green-800">{metric.noc}%</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded">
                    <div className="text-sm text-orange-600">Others</div>
                    <div className="text-2xl font-bold text-orange-800">{metric.other}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GlobalSupplyConcentration;
