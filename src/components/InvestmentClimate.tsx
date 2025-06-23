
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, ComposedChart, Area, AreaChart } from 'recharts';
import { TrendingDown, DollarSign, AlertCircle, Leaf } from 'lucide-react';

const InvestmentClimate = () => {
  const investmentData = [
    { year: 2014, investment: 100, oilPrice: 96.3 },
    { year: 2015, investment: 85, oilPrice: 48.7 },
    { year: 2016, investment: 65, oilPrice: 40.8 },
    { year: 2017, investment: 68, oilPrice: 50.8 },
    { year: 2018, investment: 72, oilPrice: 65.2 },
    { year: 2019, investment: 75, oilPrice: 57.0 },
    { year: 2020, investment: 58, oilPrice: 39.3 },
    { year: 2021, investment: 53, oilPrice: 68.2 },
    { year: 2022, investment: 58, oilPrice: 94.5 },
    { year: 2023, investment: 62, oilPrice: 82.1 },
    { year: 2024, investment: 65, oilPrice: 78.5 }
  ];

  const strandedAssets = [
    { company: 'ExxonMobil', impairment: 19.3, color: '#dc2626' },
    { company: 'Shell', impairment: 16.8, color: '#ea580c' },
    { company: 'BP', impairment: 15.2, color: '#f59e0b' },
    { company: 'Chevron', impairment: 11.1, color: '#eab308' },
    { company: 'Total', impairment: 8.9, color: '#84cc16' },
    { company: 'ConocoPhillips', impairment: 7.2, color: '#22c55e' },
    { company: 'Eni', impairment: 6.8, color: '#10b981' },
    { company: 'Equinor', impairment: 5.9, color: '#14b8a6' }
  ];

  const cashAllocation = [
    { category: 'Dividends & Buybacks', percentage: 65, amount: 130, color: '#3b82f6' },
    { category: 'Traditional CAPEX', percentage: 30, amount: 60, color: '#10b981' },
    { category: 'Low-Carbon Investment', percentage: 5, amount: 10, color: '#22c55e' }
  ];

  const spareCapacity = [
    { year: 2020, capacity: 3.2 },
    { year: 2021, capacity: 4.1 },
    { year: 2022, capacity: 2.8 },
    { year: 2023, capacity: 3.5 },
    { year: 2024, capacity: 4.2 },
    { year: 2025, capacity: 5.1 },
    { year: 2026, capacity: 6.3 },
    { year: 2027, capacity: 7.2 },
    { year: 2028, capacity: 7.8 },
    { year: 2029, capacity: 8.2 },
    { year: 2030, capacity: 8.0 }
  ];

  const chartConfig = {
    investment: {
      label: "Investment Index (2014=100)",
      color: "#dc2626",
    },
    oilPrice: {
      label: "Oil Price ($/barrel)",
      color: "#2563eb",
    },
    impairment: {
      label: "Impairment ($ billions)",
      color: "#dc2626",
    },
    capacity: {
      label: "Spare Capacity (Mb/d)",
      color: "#10b981",
    },
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="h-6 w-6 text-red-600" />
            Oil Industry Investment Climate
          </CardTitle>
          <CardDescription>
            Critical investment trends affecting future oil supply capacity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="chart-container">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={investmentData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                  <XAxis 
                    dataKey="year" 
                    tick={{ fontSize: 12 }}
                    tickMargin={10}
                  />
                  <YAxis 
                    yAxisId="left"
                    label={{ value: 'Investment Index (2014=100)', angle: -90, position: 'insideLeft' }}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    yAxisId="right"
                    orientation="right"
                    label={{ value: 'Oil Price ($/barrel)', angle: 90, position: 'insideRight' }}
                    tick={{ fontSize: 12 }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar yAxisId="left" dataKey="investment" fill="#dc2626" name="Investment Index" />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="oilPrice" 
                    stroke="#2563eb" 
                    strokeWidth={3}
                    name="Oil Price ($/barrel)"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="chart-spacer"></div>
          
          <div className="mt-6 p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">Investment Crisis Impact</h4>
            <p className="text-red-700 text-sm">
              Global upstream investment remains 47% below 2014 levels as of 2021, creating 
              potential future supply constraints despite oil price recovery.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-orange-600" />
            Stranded Asset Impairments (2020)
          </CardTitle>
          <CardDescription>
            Major oil companies wrote down $105 billion in stranded assets during 2020
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="chart-container">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={strandedAssets} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
                  <XAxis 
                    dataKey="company" 
                    angle={-45}
                    textAnchor="end"
                    height={120}
                    interval={0}
                    fontSize={12}
                    tickMargin={15}
                  />
                  <YAxis 
                    label={{ value: 'Impairment ($ billions)', angle: -90, position: 'insideLeft' }}
                    tick={{ fontSize: 12 }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="impairment" fill="#dc2626" name="Impairment ($ billions)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="chart-spacer"></div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-green-600" />
            Industry Cash Allocation Patterns
          </CardTitle>
          <CardDescription>
            How oil companies allocate cash: prioritizing returns over growth investments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cashAllocation.map((item, index) => (
              <div key={item.category} className="text-center p-6 border rounded-lg">
                <div className="text-sm text-gray-600 mb-2">{item.category}</div>
                <div className="text-3xl font-bold mb-2" style={{ color: item.color }}>
                  {item.percentage}%
                </div>
                <div className="text-lg font-semibold text-gray-700">
                  ${item.amount}B annually
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Shareholder Focus</h4>
              <p className="text-blue-700 text-sm">
                Oil companies prioritize dividend payments and share buybacks over new project investments, 
                reflecting investor pressure for immediate returns.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">
                <Leaf className="inline h-4 w-4 mr-1" />
                Low-Carbon Transition
              </h4>
              <p className="text-green-700 text-sm">
                Despite climate commitments, low-carbon investments represent less than 5% of 
                total E&P spending across major oil companies.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>OPEC+ Spare Capacity Evolution</CardTitle>
          <CardDescription>
            Projected unprecedented spare capacity reaching 8 million barrels/day by 2030
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="chart-container">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={spareCapacity} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                  <XAxis 
                    dataKey="year" 
                    tick={{ fontSize: 12 }}
                    tickMargin={10}
                  />
                  <YAxis 
                    label={{ value: 'Spare Capacity (Mb/d)', angle: -90, position: 'insideLeft' }}
                    tick={{ fontSize: 12 }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area 
                    type="monotone" 
                    dataKey="capacity" 
                    stroke="#10b981" 
                    fill="#10b981" 
                    fillOpacity={0.3}
                    name="Spare Capacity (Mb/d)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="chart-spacer"></div>
          
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Market Implications</h4>
            <p className="text-green-700 text-sm">
              Unprecedented spare capacity levels could provide significant market stability but also 
              indicate potential oversupply conditions as demand growth moderates.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestmentClimate;
