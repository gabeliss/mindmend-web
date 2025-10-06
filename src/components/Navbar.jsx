import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-gray-900 hover:opacity-80 transition-opacity">
            <img src="/src/assets/images/mindmend-icon-only.png" alt="MindMend" className="h-10 w-10" />
            <span className="text-xl font-bold">MindMend</span>
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
            <a href="#download" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">Download</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar