import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Moon, Sun, Menu, X } from 'lucide-react'
import './App.css'

// Import page components
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import LogosPage from './pages/LogosPage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PricingPage from './pages/PricingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

// Customer App Pages
import Dashboard from './pages/customer/Dashboard'
import ProjectBoard from './pages/customer/ProjectBoard'
import ProjectDetail from './pages/customer/ProjectDetail'
import IdeaVault from './pages/customer/IdeaVault'
import Billing from './pages/customer/Billing'
import Account from './pages/customer/Account'

// Admin App Pages
import AdminOverview from './pages/admin/AdminOverview'
import AdminProjects from './pages/admin/AdminProjects'
import AdminProjectDetail from './pages/admin/AdminProjectDetail'
import AdminCustomers from './pages/admin/AdminCustomers'
import AdminCustomerProfile from './pages/admin/AdminCustomerProfile'
import AdminBilling from './pages/admin/AdminBilling'
import AdminSettings from './pages/admin/AdminSettings'

// UI Kit Page
import UIKit from './pages/UIKit'

// Layout Components
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main>
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/logos" element={<LogosPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Customer App */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<ProjectBoard />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/vault" element={<IdeaVault />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/account" element={<Account />} />
            
            {/* Admin App */}
            <Route path="/admin" element={<AdminOverview />} />
            <Route path="/admin/projects" element={<AdminProjects />} />
            <Route path="/admin/projects/:id" element={<AdminProjectDetail />} />
            <Route path="/admin/customers" element={<AdminCustomers />} />
            <Route path="/admin/customers/:id" element={<AdminCustomerProfile />} />
            <Route path="/admin/billing" element={<AdminBilling />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
            
            {/* UI Kit */}
            <Route path="/ui-kit" element={<UIKit />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
