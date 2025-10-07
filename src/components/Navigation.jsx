import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Moon, Sun, Menu, X } from 'lucide-react'

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const publicNavItems = [
    { path: '/', label: 'Home', color: 'bg-blue-500' },
    { path: '/portfolio', label: 'Portfolio', color: 'bg-yellow-500' },
    { path: '/logos', label: 'Logos', color: 'bg-purple-500' },
    { path: '/services', label: 'Services', color: 'bg-teal-500' },
    { path: '/about', label: 'About us', color: 'bg-pink-500' },
    { path: '/contact', label: 'Contact', color: 'bg-indigo-600' }
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="font-headline font-bold text-xl">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                NextDaySite 2.0
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {publicNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-foreground hover:text-white'
                  }`}
                >
                  {isActive(item.path) && (
                    <div className={`absolute inset-0 ${item.color} rounded-lg opacity-90`} />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            
            <Link to="/pricing" className="hidden md:inline-flex">
              <Button variant="outline" size="sm">
                Pricing
              </Button>
            </Link>
            
            <Link to="/dashboard" className="hidden md:inline-flex">
              <Button size="sm">
                Get Started
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {publicNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-accent hover:text-accent-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link to="/pricing" className="block">
                <Button variant="outline" className="w-full">
                  Pricing
                </Button>
              </Link>
              <Link to="/dashboard" className="block">
                <Button className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
