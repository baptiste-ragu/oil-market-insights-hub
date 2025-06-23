
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { TrendingUp, Car, Factory, Zap } from 'lucide-react';

const PeakOilDemand = () => {
  const demandScenarios = [
    { year: 2020, transport: 45, petrochemicals: 15, other: 40 },
    { year: 2025, transport: 44, petrochemicals: 18, other: 38 },
    { year: 2030, transport: 41, petrochemicals: 22, other: 37 },
    { year: 2035, transport: 37, petrochemicals: 26, other: 37 },
    { year: 2040, transport: 32, petrochemicals: 30, other: 38 },
    { year: 2045, transport: 28, petrochemicals: 33, other: 39 },
    { year: 2050, transport: 24, petrochemicals: 36, other: 40 }
  ];

  const regionalDemand = [
    { region: 'China', current: 14.5, peak: 16.2, peakYear: 2030 },
    { region: 'India', current: 5.1, peak: 8.9, peakYear: 2040 },
    { region: 'USA', current: 19.8, peak: 18.5, peakYear: 2025 },
    { region: 'Europe', current: 12.3, peak: 10.8, peakYear: 2024 },
    { region: 'Middle East', current: 8.9, peak: 12.1, peakYear: 2035 },
    { region: 'Africa', current: 4.2, peak: 7.8, peakYear: 2045 }
  ];

  const transportEvolution = [
    { year: 2020, gasoline: 100, diesel: 100, jetFuel: 100, ev: 5 },
    { year: 2025, gasoline: 95, diesel: 98, jetFuel: 105, ev: 15 },
    { year: 2030, gasoline: 85, diesel: 92, jetFuel: 110, ev: 30 },
    { year: 2035, gasoline: 70, diesel: 82, jetFuel: 115, ev: 50 },
    { year: 2040, gasoline: 55, diesel: 70, jetFuel: 118, ev: 70 },
    { year: 2045, gasoline: 40, diesel: 55, jetFuel: 120, ev: 85 },
    { year: 2050, gasoline: 30, diesel: 40, jetFuel: 122, ev: 95 }
  ];

  const chartConfig = {
    transport: {
      label: "Transport",
      color: "#3b82f6",
    },
    petrochemicals: {
      label: "Petrochemicals",
      color: "#10b981",
    },
    other: {
      label: "Other Uses",
      color: "#f59e0b",
    },
    gasoline: {
      label: "Gasoline",
      color: "#dc2626",
    },
    diesel: {
      label: "Diesel",
      color: "#ea580c",
    },
    jetFuel: {
      label: "Jet Fuel",
      color: "#2563eb",
    },
    ev: {
      label: "EV Penetration",
      color: "#16a34a",
    },
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            Peak Oil Demand Scenarios
          </CardTitle>
          <CardDescription>
            Evolving demand patterns as transport sector loses momentum and petrochemicals drive growth
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="chart-container">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={demandScenarios} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                  <XAxis 
                    dataKey="year" 
                    tick={{ fontSize: 12 }}
                    tickMargin={10}
                  />
                  <YAxis 
                    label={{ value: 'Demand Share (%)', angle: -90, position: 'insideLeft' }}
                    tick={{ fontSize: 12 }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area 
                    type="monotone" 
                    dataKey="transport" 
                    stackId="1"
                    stroke="#3b82f6" 
                    fill="#3b82f6"
                    name="Transport"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="petrochemicals" 
                    stackId="1"
                    stroke="#10b981" 
                    fill="#10b981"
                    name="Petrochemicals"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="other" 
                    stackId="1"
                    stroke="#f59e0b" 
                    fill="#f59e0b"
                    name="Other Uses"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="chart-spacer"></div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="h-6 w-6 text-red-600" />
            Transport Sector Evolution
          </CardTitle>
          <CardDescription>
            Declining gasoline and diesel demand offset by growing jet fuel consumption
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="chart-container">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={transportEvolution} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                  <XAxis 
                    dataKey="year" 
                    tick={{ fontSize: 12 }}
                    tickMargin={10}
                  />
                  <YAxis 
                    label={{ value: 'Index (2020=100)', angle: -90, position: 'insideLeft' }}
                    tick={{ fontSize: 12 }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="gasoline" 
                    stroke="#dc2626" 
                    strokeWidth={3}
                    name="Gasoline Demand"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="diesel" 
                    stroke="#ea580c" 
                    strokeWidth={3}
                    name="Diesel Demand"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="jetFuel" 
                    stroke="#2563eb" 
                    strokeWidth={3}
                    name="Jet Fuel Demand"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="ev" 
                    stroke="#16a34a" 
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    name="EV Penetration %"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="chart-spacer"></div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Regional Demand Pattern Shifts</CardTitle>
          <CardDescription>
            Peak oil demand timing varies significantly across regions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {regionalDemand.map((region, index) => (
              <div key={region.region} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-lg">{region.region}</h4>
                  <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    Peak: {region.peakYear}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Current Demand</div>
                    <div className="text-xl font-bold text-blue-600">{region.current} Mb/d</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Peak Demand</div>
                    <div className="text-xl font-bold text-green-600">{region.peak} Mb/d</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Growth to Peak</div>
                    <div className="text-xl font-bold text-orange-600">
                      {((region.peak - region.current) / region.current * 100).toFixed(0)}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Car className="h-5 w-5" />
              Transport Transition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-sm text-gray-600">
                <p>• Electric vehicle adoption accelerating</p>
                <p>• Gasoline demand peaking in developed markets</p>
                <p>• Diesel facing efficiency regulations</p>
                <p>• Aviation maintaining growth trajectory</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Factory className="h-5 w-5" />
              Petrochemicals Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-sm text-gray-600">
                <p>• Becoming primary demand driver</p>
                <p>• Plastic consumption rising globally</p>
                <p>• Limited substitution alternatives</p>
                <p>• Supporting developing economies</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700">
              <Zap className="h-5 w-5" />
              Energy Transition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-sm text-gray-600">
                <p>• Peak demand emerging in scenarios</p>
                <p>• Policy acceleration effects</p>
                <p>• Technology cost reductions</p>
                <p>• Climate commitments impact</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PeakOilDemand;
