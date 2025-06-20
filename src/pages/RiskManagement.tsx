
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Shield, TrendingUp, TrendingDown, Factory, Truck, Calculator } from 'lucide-react';

const RiskManagement = () => {
  const riskCategories = [
    {
      title: 'Absolute Price Risk',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'blue',
      description: 'Direct exposure to outright price movements',
      characteristics: [
        'Affects producers with physical production',
        'Impacts consumers with direct purchase requirements',
        'Managed through fixed-price contracts, options, or collars',
        'Risk magnitude proportional to volume and price volatility'
      ],
      participants: ['Oil producers', 'Refiners (crude purchases)', 'Airlines (jet fuel)', 'Trucking companies']
    },
    {
      title: 'Relative Price Risk',
      icon: <TrendingDown className="h-6 w-6" />,
      color: 'green',
      description: 'Exposure to price differentials and spreads',
      characteristics: [
        'Affects transformers (refiners, traders, transporters)',
        'Includes time spreads (contango/backwardation)',
        'Geographic spreads between different locations',
        'Quality spreads between different crude grades'
      ],
      participants: ['Refiners (crack spreads)', 'Traders (arbitrage)', 'Storage operators', 'Pipeline companies']
    }
  ];

  const riskPositions = [
    {
      position: 'Short Position',
      exposure: 'Exposed to Price Increases',
      icon: <TrendingUp className="h-5 w-5 text-red-600" />,
      description: 'Physical sellers or those with commitments to deliver',
      hedgingMethods: [
        'Buy futures contracts',
        'Buy call options',
        'Sell put options',
        'Participate in swap agreements as fixed-price sellers'
      ],
      examples: ['Oil producers selling future production', 'Refiners with product delivery contracts']
    },
    {
      position: 'Long Position',
      exposure: 'Exposed to Price Decreases',
      icon: <TrendingDown className="h-5 w-5 text-green-600" />,
      description: 'Physical buyers or those with purchase commitments',
      hedgingMethods: [
        'Sell futures contracts',
        'Buy put options',
        'Sell call options',
        'Participate in swap agreements as fixed-price buyers'
      ],
      examples: ['Airlines buying jet fuel', 'Refiners purchasing crude oil']
    }
  ];

  const hedgingStrategies = [
    {
      participant: 'Producers (Absolute Risk)',
      icon: <Factory className="h-6 w-6" />,
      color: 'blue',
      strategies: [
        {
          strategy: 'Sell swaps to fix prices',
          description: 'Lock in predetermined selling price for future production'
        },
        {
          strategy: 'Buy put options for downside protection',
          description: 'Establish price floor while maintaining upside participation'
        },
        {
          strategy: 'Sell collars (buy puts, sell calls)',
          description: 'Reduce hedging costs by trading upside for downside protection'
        },
        {
          strategy: 'Forward selling to capture contango',
          description: 'Sell forward production when forward prices exceed expected spot'
        },
        {
          strategy: 'Roll-over strategies for continuous production',
          description: 'Systematically hedge production using rolling forward positions'
        }
      ]
    },
    {
      participant: 'Transformers (Relative Risk)',
      icon: <Truck className="h-6 w-6" />,
      color: 'green',
      strategies: [
        {
          strategy: 'Hedge using crack spreads',
          description: 'Product price minus crude price spreads for refiners'
        },
        {
          strategy: 'Geographic arbitrage hedging',
          description: 'Hedge price differentials between different locations'
        },
        {
          strategy: 'Time spread management for inventory positions',
          description: 'Manage contango/backwardation exposure on stored oil'
        },
        {
          strategy: 'Cross-commodity hedging',
          description: 'Gas-to-oil, coal-to-oil operations hedging'
        }
      ]
    }
  ];

  const jetFuelExercise = [
    { period: 'Jun', gasoilBid: 938.5, gasoilOffer: 939.5, jetDifferentialBid: 22.5, jetDifferentialOffer: 23.5 },
    { period: 'Jul', gasoilBid: 939.0, gasoilOffer: 940.0, jetDifferentialBid: 22.8, jetDifferentialOffer: 23.8 },
    { period: 'Aug', gasoilBid: 939.5, gasoilOffer: 940.5, jetDifferentialBid: 23.0, jetDifferentialOffer: 24.0 },
    { period: 'Sep', gasoilBid: 940.0, gasoilOffer: 941.0, jetDifferentialBid: 23.2, jetDifferentialOffer: 24.2 },
    { period: 'Oct', gasoilBid: 940.5, gasoilOffer: 941.5, jetDifferentialBid: 23.5, jetDifferentialOffer: 24.5 },
    { period: 'Nov', gasoilBid: 941.0, gasoilOffer: 942.0, jetDifferentialBid: 23.8, jetDifferentialOffer: 24.8 },
    { period: 'Dec', gasoilBid: 941.5, gasoilOffer: 942.5, jetDifferentialBid: 24.0, jetDifferentialOffer: 25.0 }
  ];

  const chartConfig = {
    gasoilBid: {
      label: "Gasoil ICE Bid (USD/t)",
      color: "#2563eb",
    },
    gasoilOffer: {
      label: "Gasoil ICE Offer (USD/t)",
      color: "#3b82f6",
    },
  };

  return (
    <Layout 
      title="Price Risk Management" 
      description="Absolute vs relative risk, hedging strategies by participant type"
    >
      <div className="space-y-12">
        {/* Risk Categories and Identification */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              Risk Categories and Identification
            </CardTitle>
            <CardDescription>
              Understanding different types of price risk in oil markets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {riskCategories.map((category, index) => (
                <div key={category.title} className={`border-l-4 border-l-${category.color}-500 bg-${category.color}-50 rounded-lg p-6`}>
                  <div className={`flex items-center gap-3 mb-4 text-${category.color}-800`}>
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <p className={`text-${category.color}-700 mb-4 font-medium`}>
                    {category.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className={`font-semibold text-${category.color}-800 mb-2`}>Characteristics:</h4>
                    <ul className="space-y-1">
                      {category.characteristics.map((char, idx) => (
                        <li key={idx} className={`text-sm text-${category.color}-600 flex items-start gap-2`}>
                          <span className={`w-2 h-2 rounded-full bg-${category.color}-500 mt-2 flex-shrink-0`}></span>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className={`font-semibold text-${category.color}-800 mb-2`}>Typical Participants:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.participants.map((participant, idx) => (
                        <Badge key={idx} variant="outline" className={`text-${category.color}-700 border-${category.color}-300`}>
                          {participant}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Risk Position Framework */}
        <Card>
          <CardHeader>
            <CardTitle>Risk Position Framework</CardTitle>
            <CardDescription>
              Understanding long and short positions and their hedging approaches
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {riskPositions.map((position, index) => (
                <div key={position.position} className="border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {position.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{position.position}</h3>
                      <p className="text-sm text-gray-600">{position.exposure}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{position.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Hedging Methods:</h4>
                    <ul className="space-y-1">
                      {position.hedgingMethods.map((method, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                          {method}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
                    <div className="space-y-1">
                      {position.examples.map((example, idx) => (
                        <div key={idx} className="text-sm text-gray-600 bg-gray-50 rounded px-3 py-2">
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Hedging Strategies by Market Participant Type */}
        <Card>
          <CardHeader>
            <CardTitle>Hedging Strategies by Market Participant Type</CardTitle>
            <CardDescription>
              Comprehensive hedging approaches for different market participants
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {hedgingStrategies.map((participant, index) => (
                <div key={participant.participant} className={`border-l-4 border-l-${participant.color}-500 bg-${participant.color}-50 rounded-lg p-6`}>
                  <div className={`flex items-center gap-3 mb-6 text-${participant.color}-800`}>
                    {participant.icon}
                    <h3 className="text-xl font-semibold">{participant.participant}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {participant.strategies.map((strategy, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 border">
                        <h4 className="font-semibold text-gray-900 mb-2">{strategy.strategy}</h4>
                        <p className="text-sm text-gray-600">{strategy.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Physical Trader Exercise */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-6 w-6 text-orange-600" />
              Physical Trader Exercise - Jet Fuel Hedging Case Study
            </CardTitle>
            <CardDescription>
              10,000 tons Jet fuel delivery for October - Forward curve hedging analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Scenario:</h4>
              <p className="text-blue-700 text-sm">
                A physical trader has committed to deliver 10,000 tons of Jet fuel in October. 
                The trader needs to hedge this position using available derivatives markets.
              </p>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Period</TableHead>
                  <TableHead className="text-right">Gasoil ICE Swaps (USD/t)</TableHead>
                  <TableHead className="text-right">Jet Rotterdam/Gasoil Differential (USD/t)</TableHead>
                  <TableHead className="text-right">Effective Jet Price (USD/t)</TableHead>
                </TableRow>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead className="text-right text-xs">Bid / Offer</TableHead>
                  <TableHead className="text-right text-xs">Bid / Offer</TableHead>
                  <TableHead className="text-right text-xs">Bid / Offer</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jetFuelExercise.map((row) => (
                  <TableRow key={row.period} className={row.period === 'Oct' ? 'bg-yellow-50' : ''}>
                    <TableCell className="font-medium">
                      {row.period}
                      {row.period === 'Oct' && <Badge className="ml-2" variant="outline">Target Month</Badge>}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {row.gasoilBid} / {row.gasoilOffer}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      +{row.jetDifferentialBid} / +{row.jetDifferentialOffer}
                    </TableCell>
                    <TableCell className="text-right font-mono font-semibold">
                      {(row.gasoilBid + row.jetDifferentialBid).toFixed(1)} / {(row.gasoilOffer + row.jetDifferentialOffer).toFixed(1)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Hedging Strategy</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Sell 10,000 tons of October Gasoil ICE swaps at 940.5 USD/t</li>
                  <li>• Sell 10,000 tons of October Jet/Gasoil differential at +23.5 USD/t</li>
                  <li>• Effective selling price locked at 964.0 USD/t</li>
                  <li>• Total hedge value: 9.64 MUSD</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Risk Analysis</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Basis risk between actual delivery location and Rotterdam</li>
                  <li>• Timing risk for monthly average vs daily pricing</li>
                  <li>• Quality differential risk vs standard Jet specifications</li>
                  <li>• Counterparty credit risk on OTC derivatives</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default RiskManagement;
