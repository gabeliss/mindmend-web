import { Download, Smartphone, Brain, MessageCircle, BarChart3, Mic, Target, Zap } from 'lucide-react'

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
                <a href="https://apps.apple.com/us/app/mindmend-habit-tracker/id6753316303" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors border-2 border-gray-800">
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-xs leading-none">Download on the</span>
                    <span className="text-xl font-semibold leading-tight">App Store</span>
                  </div>
                </a>
                <a href="#features" className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative flex flex-col items-center">
              <img
                src="/images/screenshots/Viral-portrait.png"
                alt="MindMend App Screenshot"
                className="w-64 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything You Need for Personal Growth</h2>
            <p className="text-xl text-gray-600">
              Four powerful tools working together to help you build lasting habits and gain deep insights into your progress.
            </p>
          </div>

          {/* Feature 1: Flexible Habit Creation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold text-center lg:text-left w-full lg:w-auto">Flexible & Powerful</div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Track Any Habit, Your Way</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Choose from four habit types to perfectly match your goals. From simple yes/no tracking to quantity measurements, duration timers, and time-specific schedules.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">4 Tracking Types</span>
                    <p className="text-gray-600">Yes/No, Quantity, Duration, and Schedule-based habits</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Custom Schedules</span>
                    <p className="text-gray-600">Set daily, weekly, or specific day frequencies for each habit</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Personalized Goals</span>
                    <p className="text-gray-600">Set your own targets and timeframes for maximum flexibility</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/screenshots/AddHabit-portrait.png"
                alt="Add Habit Screen"
                className="w-full max-w-sm mx-auto"
              />
            </div>
          </div>

          {/* Feature 2: Voice Dictation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="relative order-2 lg:order-1">
              <img
                src="/images/screenshots/Dictation-portrait.png"
                alt="Voice Dictation"
                className="w-full max-w-sm mx-auto"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold text-center lg:text-left w-full lg:w-auto">Hands-Free Tracking</div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Just Talk, We'll Track</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Simply describe your day and let AI automatically log your habits. No more tedious manual entry—tracking your progress has never been easier.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Mic className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Natural Language Processing</span>
                    <p className="text-gray-600">Speak naturally—AI understands your habits and activities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Mic className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Instant Logging</span>
                    <p className="text-gray-600">Habits logged automatically in seconds</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Mic className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">60-Second Updates</span>
                    <p className="text-gray-600">Quick voice updates to track your entire day</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3: GitHub-Style Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold text-center lg:text-left w-full lg:w-auto">Beautiful Visualizations</div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">See Your Progress Like Never Before</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Beautiful GitHub-style contribution charts show your consistency at a glance. Track multiple habits simultaneously with colorful heat maps that make your progress impossible to ignore.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">GitHub-Style Heat Maps</span>
                    <p className="text-gray-600">Instantly see your consistency patterns across months</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Multi-Habit View</span>
                    <p className="text-gray-600">Compare all your habits side-by-side in one view</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Completion Counts</span>
                    <p className="text-gray-600">Track total completions for each habit over time</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/screenshots/GithubCharts-portrait.png"
                alt="GitHub-Style Analytics"
                className="w-full max-w-sm mx-auto"
              />
            </div>
          </div>

          {/* Feature 4: AI Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="relative order-2 lg:order-1">
              <img
                src="/images/screenshots/CrossHabit-portrait.png"
                alt="Cross-Habit Insights"
                className="w-full max-w-sm mx-auto"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold text-center lg:text-left w-full lg:w-auto">AI-Powered</div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Discover Hidden Patterns</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our AI finds correlations between your habits you never knew existed. Understand what triggers success and what holds you back with cross-habit insights.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Habit Correlations</span>
                    <p className="text-gray-600">See which habits influence each other</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Pattern Recognition</span>
                    <p className="text-gray-600">AI identifies success patterns and struggles</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Actionable Recommendations</span>
                    <p className="text-gray-600">Get personalized tips to improve your routines</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 5: Journaling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold text-center lg:text-left w-full lg:w-auto">Reflect & Grow</div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Journal Your Journey</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Capture your thoughts, moods, and reflections. Your journal entries help Aya understand your emotional journey and provide better personalized guidance.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Free-Form Entries</span>
                    <p className="text-gray-600">Write without constraints—capture your authentic self</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Mood Tracking</span>
                    <p className="text-gray-600">Rate your entries to track emotional patterns</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Private & Secure</span>
                    <p className="text-gray-600">Your thoughts stay private, always</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/screenshots/Journal-portrait.png"
                alt="Journal"
                className="w-full max-w-sm mx-auto"
              />
            </div>
          </div>

          {/* Feature 6: Calendar View */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="relative order-2 lg:order-1">
              <img
                src="/images/screenshots/CalendarView-portrait.png"
                alt="Calendar View"
                className="w-full max-w-sm mx-auto"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-sm font-semibold text-center lg:text-left w-full lg:w-auto">Detailed Tracking</div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Every Day Tells a Story</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Dive deep into individual habits with detailed calendar views. See exactly when you completed each habit, track your streaks, and monitor your monthly completion rate.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Daily Detail View</span>
                    <p className="text-gray-600">See exactly what you accomplished each day with quantity tracking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Streak Tracking</span>
                    <p className="text-gray-600">Monitor current and best streaks to stay motivated</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Monthly Completion %</span>
                    <p className="text-gray-600">Track your success rate for each habit over time</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 7: Performance Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold text-center lg:text-left w-full lg:w-auto">Performance Insights</div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Understand What Works</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Detailed performance analytics show your day-of-week patterns, identify performance gaps, and let you add contextual notes to understand your successes and struggles.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Day-of-Week Analysis</span>
                    <p className="text-gray-600">See which days you're most consistent on</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Performance Gaps</span>
                    <p className="text-gray-600">AI identifies when and where you struggle</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Contextual Notes</span>
                    <p className="text-gray-600">Add notes to track why you succeeded or missed a day</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/screenshots/NotesandPerformance-portrait.png"
                alt="Performance Analytics"
                className="w-full max-w-sm mx-auto"
              />
            </div>
          </div>

          {/* Feature 8: Overall Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="relative order-2 lg:order-1">
              <img
                src="/images/screenshots/Analytics-portrait.png"
                alt="Overall Analytics"
                className="w-full max-w-sm mx-auto"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm font-semibold text-center lg:text-left w-full lg:w-auto">Big Picture View</div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Celebrate Your Progress</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get an overview of your entire habit ecosystem with completion rates, goal performance, and motivational insights that celebrate your wins and encourage continued growth.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Overall Completion Rate</span>
                    <p className="text-gray-600">See your total success rate across all habits</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Goal Performance</span>
                    <p className="text-gray-600">Track how you're doing against your targets</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Motivational Insights</span>
                    <p className="text-gray-600">AI celebrates your streaks and progress milestones</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 9: AI Assistant */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold lg:inline-block text-center lg:text-left w-full lg:w-auto">Your AI Coach</div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center lg:text-left">Meet Aya, Your Personal Growth Partner</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Chat with Aya anytime for personalized insights, motivation, and advice. She understands your habits, journal entries, and patterns to provide truly customized guidance.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Contextual Understanding</span>
                    <p className="text-gray-600">Aya knows your complete MindMend history</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">24/7 Support</span>
                    <p className="text-gray-600">Get help and motivation whenever you need it</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Smart Suggestions</span>
                    <p className="text-gray-600">Get prompted with relevant questions based on your data</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/screenshots/Aya-portrait.png"
                alt="Aya AI Assistant"
                className="w-full max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Start Your Journey Today</h2>
            <p className="text-xl text-gray-300 mb-12">Experience the most advanced AI-powered habit tracker available on iOS.</p>

            <div className="mb-12">
              <a href="https://apps.apple.com/us/app/mindmend-habit-tracker/id6753316303" className="inline-block" target="_blank" rel="noopener noreferrer">
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
                <Brain className="w-8 h-8 text-blue-400" />
                <span className="text-white font-semibold">AI-Powered Insights</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mic className="w-8 h-8 text-green-400" />
                <span className="text-white font-semibold">Voice Dictation</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <BarChart3 className="w-8 h-8 text-yellow-400" />
                <span className="text-white font-semibold">GitHub-Style Charts</span>
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