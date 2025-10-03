import { Link } from 'react-router-dom'
import { Brain, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">MindMend</span>
            </div>
            <p className="text-gray-600 text-sm max-w-md">
              Transform your habits, elevate your mind. Personal growth made simple with AI-powered insights.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Product</h4>
              <div className="space-y-2">
                <a href="#features" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">Features</a>
                <a href="#download" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">Download</a>
                <a href="#pricing" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">Pricing</a>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h4>
              <div className="space-y-2">
                <Link to="/privacy" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">Privacy Policy</Link>
                <Link to="/terms" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-gray-500 text-sm">&copy; 2025 MindMend. All rights reserved.</p>
          <p className="flex items-center text-gray-500 text-sm">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for your mental wellness
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer