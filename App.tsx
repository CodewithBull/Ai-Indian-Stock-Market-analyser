import React, { useState } from 'react';
import { 
  TrendingUp, 
  Brain, 
  LineChart, 
  PieChart,
  Target,
  Zap,
  ArrowRight,
  Search,
  AlertTriangle,
  DollarSign,
  BarChart2,
  TrendingDown,
  Activity,
  ChevronRight,
  Globe,
  Shield,
  Cpu,
  Clock,
  Award,
  Users
} from 'lucide-react';

// Mock data for demonstration
const mockAnalysis = (symbol: string) => ({
  basicInfo: {
    companyName: "Example Company Inc.",
    symbol: symbol,
    currentPrice: "$156.78",
    marketCap: "$2.3B",
    peRatio: "24.5"
  },
  priceMetrics: {
    yearHigh: "$180.45",
    yearLow: "$120.30",
    dayHigh: "$158.90",
    dayLow: "$155.20"
  },
  financialMetrics: {
    dividendYield: "2.5%"
  },
  aiAnalysis: {
    technicalSummary: "Bullish trend with strong momentum",
    sentiment: "Positive",
    supportResistance: {
      support: "$154.50",
      resistance: "$160.25"
    },
    riskAssessment: "Moderate",
    prediction: "$162.50 (7-day forecast)",
    volume: "Above average trading volume",
    trend: "Upward trend with potential breakout",
    marketComparison: "Outperforming sector by 5.2%"
  }
});

function StockAnalysis() {
  const [symbol, setSymbol] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!symbol.includes('.')) {
      setError('Please provide the stock symbol in the format: SYMBOL.EXCHANGE');
      return;
    }
    setError('');
    setAnalysis(mockAnalysis(symbol));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">StockAI Pro</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-blue-400 transition">Features</a>
              <a href="#analysis" className="hover:text-blue-400 transition">Analysis</a>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
            <div className="hidden md:block">
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              AI-Powered Stock Market Analysis
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Make informed investment decisions with our advanced AI analysis platform.
              Get real-time insights, predictions, and market trends.
            </p>
            <a href="#analysis" 
               className="inline-flex items-center bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition">
              Start Analyzing
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <Globe className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Global Coverage</h3>
              <p className="text-gray-400 text-sm">Access markets worldwide</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Secure Platform</h3>
              <p className="text-gray-400 text-sm">Enterprise-grade security</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <Cpu className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">AI Powered</h3>
              <p className="text-gray-400 text-sm">Advanced algorithms</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Real-time Data</h3>
              <p className="text-gray-400 text-sm">Live market updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose StockAI Pro?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI technology with comprehensive market data
              to provide you with the most accurate analysis and predictions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-400">
                Advanced machine learning algorithms analyze market patterns and predict trends
                with high accuracy.
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
              <Activity className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real-time Monitoring</h3>
              <p className="text-gray-400">
                Stay updated with live market data and instant notifications for important
                market movements.
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
              <Target className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Precise Predictions</h3>
              <p className="text-gray-400">
                Get accurate price predictions and trend forecasts based on comprehensive
                market analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section id="analysis" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Search Form */}
            <div className="bg-gray-800/50 rounded-xl p-8 mb-8 backdrop-blur-sm border border-gray-700">
              <h2 className="text-3xl font-bold mb-6">Stock Analysis</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="symbol" className="block text-gray-300 mb-2">
                    Enter Stock Symbol (e.g., TCS.NS)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="symbol"
                      value={symbol}
                      onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                      placeholder="SYMBOL.EXCHANGE"
                      className="w-full bg-gray-700/50 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none border border-gray-600"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                {error && (
                  <div className="text-red-400 flex items-center space-x-2 bg-red-400/10 p-3 rounded-lg">
                    <AlertTriangle className="w-5 h-5" />
                    <span>{error}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Analysis Results */}
            {analysis && (
              <div className="space-y-8 animate-fadeIn">
                {/* Basic Information */}
                <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <DollarSign className="w-6 h-6 text-blue-400 mr-2" />
                    Basic Stock Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Company Name</p>
                      <p className="text-white font-semibold">{analysis.basicInfo.companyName}</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Stock Symbol</p>
                      <p className="text-white font-semibold">{analysis.basicInfo.symbol}</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Current Price</p>
                      <p className="text-white font-semibold">{analysis.basicInfo.currentPrice}</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Market Cap</p>
                      <p className="text-white font-semibold">{analysis.basicInfo.marketCap}</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">PE Ratio</p>
                      <p className="text-white font-semibold">{analysis.basicInfo.peRatio}</p>
                    </div>
                  </div>
                </div>

                {/* Price Metrics */}
                <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <BarChart2 className="w-6 h-6 text-blue-400 mr-2" />
                    Price Metrics
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">52-Week High</p>
                      <p className="text-white font-semibold">{analysis.priceMetrics.yearHigh}</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">52-Week Low</p>
                      <p className="text-white font-semibold">{analysis.priceMetrics.yearLow}</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Day's High</p>
                      <p className="text-white font-semibold">{analysis.priceMetrics.dayHigh}</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Day's Low</p>
                      <p className="text-white font-semibold">{analysis.priceMetrics.dayLow}</p>
                    </div>
                  </div>
                </div>

                {/* Financial Metrics */}
                <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <TrendingUp className="w-6 h-6 text-blue-400 mr-2" />
                    Financial Metrics
                  </h3>
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Dividend Yield</p>
                    <p className="text-white font-semibold">{analysis.financialMetrics.dividendYield}</p>
                  </div>
                </div>

                {/* AI Analysis */}
                <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Brain className="w-6 h-6 text-blue-400 mr-2" />
                    AI Analysis
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Technical Analysis Summary</p>
                      <p className="text-white font-semibold">{analysis.aiAnalysis.technicalSummary}</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Market Sentiment</p>
                      <p className="text-white font-semibold">{analysis.aiAnalysis.sentiment}</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Support/Resistance Levels</p>
                      <p className="text-white font-semibold">
                        Support: {analysis.aiAnalysis.supportResistance.support} | 
                        Resistance: {analysis.aiAnalysis.supportResistance.resistance}
                      </p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Risk Assessment</p>
                      <p className="text-white font-semibold">{analysis.aiAnalysis.riskAssessment}</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Short-term Price Prediction</p>
                      <p className="text-white font-semibold">{analysis.aiAnalysis.prediction}</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Trading Volume Analysis</p>
                      <p className="text-white font-semibold">{analysis.aiAnalysis.volume}</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Trend Analysis</p>
                      <p className="text-white font-semibold">{analysis.aiAnalysis.trend}</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-gray-400 text-sm">Market Comparison</p>
                      <p className="text-white font-semibold">{analysis.aiAnalysis.marketComparison}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by Traders Worldwide</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See what professional traders and investors say about our platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Users className="w-12 h-12 text-blue-400 mr-4" />
                <div>
                  <h4 className="font-semibold">John Smith</h4>
                  <p className="text-gray-400 text-sm">Professional Trader</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The AI predictions have been remarkably accurate. This platform has
                transformed my trading strategy."
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Users className="w-12 h-12 text-blue-400 mr-4" />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-400 text-sm">Investment Analyst</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The comprehensive analysis tools have helped me make better investment
                decisions for my clients."
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Users className="w-12 h-12 text-blue-400 mr-4" />
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-gray-400 text-sm">Day Trader</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Real-time analysis and AI insights have given me a significant edge
                in the market."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">StockAI Pro</span>
              </div>
              <p className="text-gray-400">
                Advanced AI-powered stock market analysis platform for modern investors.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                <li><a href="#features" className="hover:text-blue-400">Features</a></li>
                <li><a href="#analysis" className="hover:text-blue-400">Analysis</a></li>
                <li><a href="#about" className="hover:text-blue-400">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400">API</a></li>
                <li><a href="#" className="hover:text-blue-400">Support</a></li>
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: support@stockai.pro</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Trading St, Market City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 StockAI Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default StockAnalysis;