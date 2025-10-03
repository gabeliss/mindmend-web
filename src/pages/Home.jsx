import { Download, Smartphone, Brain, MessageCircle, BarChart3, Mic, Crown, Users, Target, Zap } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mind</span>,
                <br />Elevate Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Life</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                MindMend combines habit tracking, journaling, and AI-powered insights to help you build better routines and understand your patterns. Your personal growth journey starts here.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#download" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download for iOS
                </a>
                <a href="#features" className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  Learn More
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">16-30</div>
                  <div className="text-sm text-gray-600">Target Age</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">AI-Powered</div>
                  <div className="text-sm text-gray-600">Insights</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">Voice</div>
                  <div className="text-sm text-gray-600">Enabled</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto w-64 h-128 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="bg-white rounded-2xl h-full overflow-hidden">
                  <div className="bg-gray-100 h-6 flex items-center justify-center">
                    <div className="w-12 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="flex items-center space-x-3">
                      <Brain className="w-8 h-8 text-blue-600" />
                      <span className="text-lg font-bold text-gray-900">MindMend</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-gray-900 font-medium">Morning meditation</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                        <span className="text-gray-700">Read 30 minutes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything You Need for Personal Growth</h2>
            <p className="text-xl text-gray-600">
              Four powerful tools working together to help you build lasting habits and gain deep insights into your progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Habit Tracking</h3>
              <p className="text-gray-600 mb-4">Track unlimited habits with smart categorization, visual progress indicators, and detailed analytics. Build routines that stick.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Unlimited habits (Premium)</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Daily completion tracking</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Visual progress charts</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Smart categorization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Journaling</h3>
              <p className="text-gray-600 mb-4">Record your thoughts and reflections with date-based organization. Your journal entries help AI understand your journey.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>Free-form text entries</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>Date-based organization</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>AI integration</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>Private & secure</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Assistant (Aya)</h3>
              <p className="text-gray-600 mb-4">Chat with Aya, your personal AI coach who understands your habits and journal entries to provide personalized insights.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>Contextual understanding</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>Personalized insights</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>Motivational support</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>Conversation history</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Voice-Powered</h3>
              <p className="text-gray-600 mb-4">Dictate your day and let AI fill out your habits. Hands-free tracking makes building routines effortless and natural.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>Voice dictation</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>"Dictate your day" feature</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>Hands-free interaction</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>Natural language processing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
              <Crown className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">MindMend Premium</h2>
            <p className="text-xl text-gray-600 mb-12">Unlock the full potential of your personal growth journey with advanced features and unlimited access.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Zap className="w-6 h-6 text-blue-600" />
                <span className="text-gray-900 font-medium">Unlimited habit tracking</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Brain className="w-6 h-6 text-purple-600" />
                <span className="text-gray-900 font-medium">Full AI chat access with Aya</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <BarChart3 className="w-6 h-6 text-green-600" />
                <span className="text-gray-900 font-medium">Advanced analytics & metrics</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Mic className="w-6 h-6 text-orange-600" />
                <span className="text-gray-900 font-medium">Voice-powered tracking</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-500">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Best Value</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Yearly</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">$49.99</span>
                  <span className="text-gray-600">/year</span>
                </div>
                <p className="text-gray-600">3-day free trial • 58% savings</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">$9.99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Start Your Journey Today</h2>
            <p className="text-xl text-gray-300 mb-12">Join thousands of users who are already transforming their lives with MindMend.</p>

            <div className="mb-12">
              <a href="https://apps.apple.com/app/mindmend" className="inline-block" target="_blank" rel="noopener noreferrer">
                <div className="bg-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-8 h-8 text-gray-900" />
                    <div className="text-left">
                      <div className="text-sm text-gray-600">Download on the</div>
                      <div className="text-xl font-bold text-gray-900">App Store</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center space-y-2">
                <Users className="w-8 h-8 text-blue-400" />
                <span className="text-white font-semibold">10,000+ Downloads</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Target className="w-8 h-8 text-green-400" />
                <span className="text-white font-semibold">95% User Satisfaction</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Zap className="w-8 h-8 text-yellow-400" />
                <span className="text-white font-semibold">Real-time Sync</span>
              </div>
            </div>

            <p className="text-gray-400">
              Currently available for iOS. Android version coming soon!
            </p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              Have questions or need support? We're here to help!
            </p>
            <a
              href="mailto:contact@getmindmend.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              contact@getmindmend.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home