
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingDown, Clock, DollarSign } from 'lucide-react';

const OilFieldLifecycle = () => {
  const productionDeclineData = [
    { year: 0, conventional: 100, shale: 100 },
    { year: 1, conventional: 98, shale: 31 },
    { year: 2, conventional: 95, shale: 19 },
    { year: 3, conventional: 92, shale: 14 },
    { year: 4, conventional: 88, shale: 10 },
    { year: 5, conventional: 84, shale: 7 },
    { year: 10, conventional: 75, shale: 2 },
    { year: 15, conventional: 65, shale: 1 },
    { year: 20, conventional: 55, shale: 0 },
    { year: 25, conventional: 45, shale: 0 },
    { year: 30, conventional: 35, shale: 0 },
    { year: 40, conventional: 15, shale: 0 }
  ];

  const shaleDeclineData = [
    { year: 'Year 1', decline: 69, color: '#dc2626' },
    { year: 'Year 2', decline: 39, color: '#ea580c' },
    { year: 'Year 3', decline: 26, color: '#f59e0b' },
    { year: 'Year 4', decline: 27, color: '#eab308' },
    { year: 'Year 5', decline: 33, color: '#84cc16' }
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
    decline: {
      label: "Production Decline %",
      color: "#dc2626",
    },
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="h-6 w-6 text-red-600" />
            Oil Field Lifecycle Analysis
          </CardTitle>
          <CardDescription>
            Comparing production decline patterns between conventional and shale oil fields
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="chart-container production-profile-chart-container">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={productionDeclineData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                  <XAxis 
                    dataKey="year" 
                    label={{ value: 'Years from Peak Production', position: 'insideBottom', offset: -5 }}
                    tick={{ fontSize: 12 }}
                    tickMargin={10}
                  />
                  <YAxis 
                    label={{ value: '% of Peak Production', angle: -90, position: 'insideLeft' }}
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Shale Oil Production Decline Profile</CardTitle>
          <CardDescription>
            Year-over-year production decline rates for typical shale formations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="chart-container">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={shaleDeclineData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                  <XAxis 
                    dataKey="year" 
                    tick={{ fontSize: 12 }}
                    tickMargin={10}
                  />
                  <YAxis 
                    label={{ value: 'Decline Rate %', angle: -90, position: 'insideLeft' }}
                    tick={{ fontSize: 12 }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="decline" fill="#dc2626" name="Production Decline %" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="chart-spacer"></div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Clock className="h-5 w-5" />
              Conventional Fields
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-sm text-blue-600 font-medium">Lifecycle</div>
                <div className="text-xl font-bold text-blue-800">25-40 years</div>
              </div>
              <div className="text-sm text-gray-600">
                <p>• Gradual decline curve</p>
                <p>• Predictable cash flows</p>
                <p>• Long-term investment horizon</p>
                <p>• 20-30 year investment cycles</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <TrendingDown className="h-5 w-5" />
              Shale Fields
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-red-50 p-3 rounded-lg">
                <div className="text-sm text-red-600 font-medium">Lifecycle</div>
                <div className="text-xl font-bold text-red-800">5-10 years</div>
              </div>
              <div className="text-sm text-gray-600">
                <p>• Steep decline profile</p>
                <p>• Continuous drilling required</p>
                <p>• Short investment payback</p>
                <p>• 3-4 year investment cycles</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <DollarSign className="h-5 w-5" />
              Investment Implications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Key Insights</h4>
                <div className="text-sm text-green-700 space-y-1">
                  <p>• Shale requires continuous capital investment</p>
                  <p>• Conventional provides stable long-term returns</p>
                  <p>• Different risk-return profiles</p>
                  <p>• Portfolio diversification strategies needed</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OilFieldLifecycle;
