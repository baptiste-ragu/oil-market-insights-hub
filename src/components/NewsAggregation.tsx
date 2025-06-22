
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Clock, AlertCircle } from 'lucide-react';

interface NewsItem {
  id: string;
  headline: string;
  summary: string;
  source: string;
  url: string;
  publishedAt: string;
  category: 'market' | 'analysis' | 'geopolitical';
}

const NewsAggregation = () => {
  const [news, setNews] = useState<NewsItem[]>([
    {
      id: '1',
      headline: 'Oil Prices Rise on Middle East Supply Concerns',
      summary: 'Crude futures gained as geopolitical tensions in the Middle East raised concerns about potential supply disruptions.',
      source: 'Reuters',
      url: '#',
      publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      category: 'market'
    },
    {
      id: '2',
      headline: 'US Shale Production Continues to Outpace Expectations',
      summary: 'Weekly data shows US crude production reaching new highs, with Permian Basin leading growth.',
      source: 'Bloomberg',
      url: '#',
      publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      category: 'market'
    },
    {
      id: '3',
      headline: 'OPEC+ Production Cuts: Market Impact Analysis',
      summary: 'Deep dive into how recent OPEC+ decisions are reshaping global oil market dynamics.',
      source: 'Energy Intelligence',
      url: '#',
      publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      category: 'analysis'
    },
    {
      id: '4',
      headline: 'China Demand Recovery Signals Positive for Oil Markets',
      summary: 'Economic indicators from China suggest strengthening demand for refined products.',
      source: 'Wall Street Journal',
      url: '#',
      publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      category: 'market'
    },
    {
      id: '5',
      headline: 'Energy Transition Impact on Long-term Oil Demand',
      summary: 'Analysis of how renewable energy adoption is affecting long-term oil demand forecasts.',
      source: 'Oil Price.com',
      url: '#',
      publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      category: 'analysis'
    }
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const fetchNews = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In real implementation, this would fetch from News API or RSS feeds
      setLastUpdate(new Date());
    } catch (err) {
      setError('Failed to fetch news updates. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchNews, 900000); // 15 minutes
    return () => clearInterval(interval);
  }, []);

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const published = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - published.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - published.getTime()) / (1000 * 60));
      return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} days ago`;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'market': return 'bg-blue-100 text-blue-800';
      case 'analysis': return 'bg-green-100 text-green-800';
      case 'geopolitical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const marketNews = news.filter(item => item.category === 'market');
  const analysisNews = news.filter(item => item.category === 'analysis');

  if (error) {
    return (
      <Card className="border-red-200 bg-red-50">
        <CardContent className="flex items-center gap-2 p-4">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <span className="text-red-800">{error}</span>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Financial & Commodity News */}
      <Card>
        <CardHeader>
          <CardTitle>Latest Oil Market News</CardTitle>
          <CardDescription>
            Breaking news and market updates from leading financial sources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {marketNews.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        {item.headline}
                      </a>
                    </h4>
                    <p className="text-gray-600 mb-3">{item.summary}</p>
                    <div className="flex items-center gap-3 text-sm">
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                      <span className="font-medium">{item.source}</span>
                      <span className="text-gray-500">|</span>
                      <span className="text-gray-500">{getTimeAgo(item.publishedAt)}</span>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analysis & Opinion */}
      <Card>
        <CardHeader>
          <CardTitle>Analysis & Expert Opinion</CardTitle>
          <CardDescription>
            In-depth analysis and commentary from industry experts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analysisNews.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        {item.headline}
                      </a>
                    </h4>
                    <p className="text-gray-600 mb-3">{item.summary}</p>
                    <div className="flex items-center gap-3 text-sm">
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                      <span className="font-medium">{item.source}</span>
                      <span className="text-gray-500">|</span>
                      <span className="text-gray-500">{getTimeAgo(item.publishedAt)}</span>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Attribution */}
      <div className="text-sm text-gray-600 border-t pt-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <div>
            News sourced from Reuters, Bloomberg, WSJ, CNBC, Oil Price.com, Energy Intelligence
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Last updated: {lastUpdate.toLocaleTimeString()}</span>
            {isLoading && <Badge variant="outline">Updating...</Badge>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAggregation;
