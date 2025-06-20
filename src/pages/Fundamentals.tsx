
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, Factory, Truck, Zap } from 'lucide-react';
import Layout from '@/components/Layout';

const valueChainSteps = [
  {
    title: 'Upstream',
    icon: Factory,
    color: 'bg-blue-500',
    description: 'Drilling, production, and extraction of crude oil',
    details: [
      'Exploration and drilling operations',
      'Oil extraction from reservoirs',
      'Initial processing and separation',
      'Wellhead operations and field development'
    ]
  },
  {
    title: 'Midstream',
    icon: Truck,
    color: 'bg-green-500',
    description: 'Transportation, storage, and treatment of crude oil',
    details: [
      'Pipeline transportation networks',
      'Mobile transport (tankers, rail, trucks)',
      'Strategic storage facilities',
      'Crude oil treatment and conditioning'
    ]
  },
  {
    title: 'Downstream',
    icon: Zap,
    color: 'bg-purple-500',
    description: 'Refining, distribution, and consumption of oil products',
    details: [
      'Refinery operations and processing',
      'Product distribution networks',
      'Retail and end-user delivery',
      'Final consumption (gasoline, diesel, naphtha, fuel oil)'
    ]
  }
];

const pricingFactors = {
  supply: [
    'OPEC production decisions and spare capacity',
    'Non-OPEC production levels and growth',
    'Geopolitical disruptions and sanctions',
    'Technical issues and maintenance schedules',
    'Strategic reserve releases'
  ],
  demand: [
    'OECD economic growth and consumption',
    'Non-OECD emerging market demand',
    'Seasonal consumption patterns',
    'Industrial activity and transportation needs',
    'Energy efficiency improvements'
  ],
  financial: [
    'Speculation and fund flows',
    'Currency movements (USD strength/weakness)',
    'Interest rates and monetary policy',
    'Risk sentiment and safe-haven demand',
    'Inventory levels and storage costs'
  ]
};

const Fundamentals = () => {
  return (
    <Layout 
      title="Oil Market Fundamentals" 
      description="Understanding the market structure, value chain, and key pricing drivers in global oil markets"
    >
      {/* Value Chain Visualization */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Three-Segment Value Chain</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {valueChainSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription className="text-center">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                {index < valueChainSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="bg-white border-2 border-gray-300 rounded-full p-2">
                      <ArrowRight className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Pricing Formulas */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Pricing Formulas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Crude Price at Refinery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-mono text-lg text-center mb-4">
                  <strong>Crude Index + Quality + Time Spreads + Transport</strong>
                </div>
                <Separator className="my-4" />
                <div className="space-y-2 text-sm">
                  <div><strong>Crude Index:</strong> Benchmark crude reference price (Brent, WTI, Dubai)</div>
                  <div><strong>Quality:</strong> Premium/discount for crude quality vs. benchmark</div>
                  <div><strong>Time Spreads:</strong> Forward curve adjustments for delivery timing</div>
                  <div><strong>Transport:</strong> Shipping and logistics costs to refinery</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Price on Site</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="font-mono text-lg text-center mb-4">
                  <strong>Market Product Price (Platts) + Time Spread + Transport</strong>
                </div>
                <Separator className="my-4" />
                <div className="space-y-2 text-sm">
                  <div><strong>Platts Price:</strong> Published market assessment for refined products</div>
                  <div><strong>Time Spread:</strong> Forward curve differential for delivery period</div>
                  <div><strong>Transport:</strong> Distribution costs from refinery to end market</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Price Drivers */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Price Drivers</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-600">Supply Factors</CardTitle>
              <CardDescription>Production and availability drivers</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {pricingFactors.supply.map((factor, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {factor}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Demand Factors</CardTitle>
              <CardDescription>Consumption and market drivers</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {pricingFactors.demand.map((factor, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {factor}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-purple-600">Financial Market Influences</CardTitle>
              <CardDescription>Market sentiment and macro factors</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {pricingFactors.financial.map((factor, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {factor}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Market Relationships */}
      <Card>
        <CardHeader>
          <CardTitle>Understanding Market Relationships</CardTitle>
          <CardDescription>
            How supply, demand, and financial factors interact to determine oil prices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-blue-600">Supply-Side Dynamics</h4>
              <p className="text-gray-600 mb-4">
                OPEC's spare capacity serves as a crucial buffer, with Saudi Arabia maintaining approximately 
                3.5 million barrels per day of spare capacity. Non-OPEC production, particularly US shale, 
                responds dynamically to price signals with breakeven costs ranging from $26-53 per barrel.
              </p>
              <h4 className="font-semibold text-lg mb-3 text-green-600">Demand-Side Evolution</h4>
              <p className="text-gray-600">
                Global consumption patterns are shifting as OECD demand stabilizes while non-OECD markets, 
                led by China and India, drive growth. Seasonal patterns remain significant, with US driving 
                season and winter heating demand creating predictable consumption cycles.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-purple-600">Financial Integration</h4>
              <p className="text-gray-600 mb-4">
                Oil markets have become increasingly financialized, with speculation and fund flows 
                significantly impacting short-term price movements. Currency movements, particularly 
                USD strength, inversely correlate with oil prices as crude is dollar-denominated.
              </p>
              <h4 className="font-semibold text-lg mb-3 text-orange-600">Risk Factors</h4>
              <p className="text-gray-600">
                Geopolitical risks remain concentrated in the Middle East, where 65% of proven reserves 
                are located. Critical maritime chokepoints like the Strait of Hormuz (19.0 Mb/d transit) 
                represent systemic supply vulnerabilities.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Fundamentals;
