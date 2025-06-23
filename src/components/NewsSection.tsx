
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Newspaper, TrendingUp } from 'lucide-react';

interface NewsArticle {
  title: string;
  url: string;
  description?: string;
  source: string;
  published_at: string;
  sentiment?: 'positive' | 'negative' | 'neutral';
}

interface AnalysisArticle {
  title: string;
  url: string;
  summary?: string;
  source: string;
  time_published: string;
  sentiment?: 'positive' | 'negative' | 'neutral';
}

const NewsSection = () => {
  const [financialNews, setFinancialNews] = useState<NewsArticle[]>([]);
  const [analysisNews, setAnalysisNews] = useState<AnalysisArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data generators for demonstration
  const generateMockFinancialNews = (): NewsArticle[] => {
    const mockTitles = [
      "Oil prices climb on OPEC+ production cuts and strong demand",
      "Brent crude futures rise amid Middle East supply concerns", 
      "US crude inventories fall more than expected, boosting prices",
      "Energy sector leads market gains as oil rallies above $80",
      "Natural gas prices surge on winter heating demand forecasts",
      "Refining margins expand as product demand outpaces crude costs",
      "IEA raises global oil demand forecast for 2024",
      "Geopolitical tensions support crude oil price premium",
      "Shale producers increase drilling activity as prices stabilize",
      "China's oil imports signal economic recovery momentum"
    ];

    const sources = ["Reuters", "Bloomberg", "CNBC", "MarketWatch", "Energy Intelligence"];
    
    return mockTitles.slice(0, 8).map((title, index) => ({
      title,
      url: `https://example.com/news/${index + 1}`,
      description: `${title.substring(0, 100)}... Market analysts discuss the implications for global energy markets and trading strategies.`,
      source: sources[index % sources.length],
      published_at: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000).toISOString(),
      sentiment: Math.random() > 0.5 ? 'positive' : 'negative'
    }));
  };

  const generateMockAnalysisNews = (): AnalysisArticle[] => {
    const mockAnalysis = [
      "Deep dive: How OPEC+ quota adjustments reshape global oil flows",
      "Analysis: US shale break-even costs and production sustainability",
      "Expert opinion: Energy transition impact on long-term oil demand",
      "Market outlook: Refining capacity constraints drive crack spreads",
      "Technical analysis: Crude oil futures term structure signals",
      "Fundamental review: Global inventory levels vs seasonal patterns",
      "Strategy report: Hedging approaches for volatile energy markets",
      "Research note: ESG pressures on upstream investment decisions"
    ];

    const sources = ["Energy Aspects", "FGE", "Wood Mackenzie", "S&P Global", "IHS Markit"];
    
    return mockAnalysis.map((title, index) => ({
      title,
      url: `https://example.com/analysis/${index + 1}`,
      summary: `Comprehensive analysis covering market fundamentals, technical indicators, and strategic implications for industry participants.`,
      source: sources[index % sources.length],
      time_published: new Date(Date.now() - Math.random() * 48 * 60 * 60 * 1000).toISOString(),
      sentiment: Math.random() > 0.6 ? 'positive' : Math.random() > 0.3 ? 'neutral' : 'negative'
    }));
  };

  const fetchAllNews = async () => {
    try {
      setLoading(true);
      setError(null);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demonstration, using mock data
      // Replace with actual API calls when endpoints are available
      const financial = generateMockFinancialNews();
      const analysis = generateMockAnalysisNews();
      
      setFinancialNews(financial);
      setAnalysisNews(analysis);
      
    } catch (err) {
      console.error('News fetch error:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch news');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllNews();

    // Update news every 15 minutes
    const newsInterval = setInterval(fetchAllNews, 15 * 60 * 1000);

    return () => clearInterval(newsInterval);
  }, []);

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  const getSentimentColor = (sentiment?: string) => {
    switch (sentiment) {
      case 'positive': return 'bg-green-100 text-green-800';
      case 'negative': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading && financialNews.length === 0) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Newspaper className="h-6 w-6" />
              Latest Oil Market News
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="loading-indicator">Loading latest news...</div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Financial News Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Newspaper className="h-6 w-6 text-blue-600" />
            Latest Oil Market News
          </CardTitle>
          {error && <div className="text-red-600 text-sm">Error: {error}</div>}
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {financialNews.map((article, index) => (
              <div key={index} className="news-item border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2">
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline flex items-start gap-2"
                    onClick={(e) => {
                      if (!article.url || article.url === '#' || article.url === '') {
                        e.preventDefault();
                        console.warn('Invalid news link:', article.title);
                      }
                    }}
                  >
                    <span className="flex-1">{article.title}</span>
                    <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  </a>
                </h4>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {article.source}
                  </Badge>
                  <span className="text-xs text-gray-500">
                    {formatTimeAgo(article.published_at)}
                  </span>
                  {article.sentiment && (
                    <Badge className={`text-xs ${getSentimentColor(article.sentiment)}`}>
                      {article.sentiment}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {article.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analysis News Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-purple-600" />
            Energy Analysis & Opinion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analysisNews.map((item, index) => (
              <div key={index} className="analysis-item border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2">
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 hover:underline flex items-start gap-2"
                    onClick={(e) => {
                      if (!item.url || item.url === '#' || item.url === '') {
                        e.preventDefault();
                        console.warn('Invalid analysis link:', item.title);
                      }
                    }}
                  >
                    <span className="flex-1">{item.title}</span>
                    <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  </a>
                </h4>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {item.source}
                  </Badge>
                  <span className="text-xs text-gray-500">
                    {formatTimeAgo(item.time_published)}
                  </span>
                  {item.sentiment && (
                    <Badge className={`text-xs ${getSentimentColor(item.sentiment)}`}>
                      {item.sentiment}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsSection;
