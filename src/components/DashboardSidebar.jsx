import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  LayoutDashboard,
  FolderOpen,
  Lightbulb,
  CreditCard,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
  Plus,
  Bell,
  Search,
  LogOut
} from 'lucide-react'

const DashboardSidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation()
  
  const navigationItems = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      badge: null
    },
    {
      title: 'Projects',
      href: '/projects',
      icon: <FolderOpen className="w-5 h-5" />,
      badge: '3'
    },
    {
      title: 'Idea Vault',
      href: '/vault',
      icon: <Lightbulb className="w-5 h-5" />,
      badge: null
    },
    {
      title: 'Billing',
      href: '/billing',
      icon: <CreditCard className="w-5 h-5" />,
      badge: '1'
    },
    {
      title: 'Account',
      href: '/account',
      icon: <User className="w-5 h-5" />,
      badge: null
    }
  ]

  const isActive = (href) => location.pathname === href

  return (
    <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-sidebar border-r border-sidebar-border transition-all duration-300 z-40 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Sidebar Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div>
              <h2 className="font-semibold text-sidebar-foreground">Customer Portal</h2>
              <p className="text-xs text-muted-foreground">Manage your projects</p>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      {!collapsed && (
        <div className="p-4 border-b border-sidebar-border">
          <Link to="/projects">
            <Button className="w-full justify-start mb-2">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </Link>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Bell className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Navigation Items */}
      <nav className="p-2 flex-1">
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <Link key={item.href} to={item.href}>
              <Button
                variant={isActive(item.href) ? "secondary" : "ghost"}
                className={`w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent ${
                  collapsed ? 'px-2' : 'px-3'
                } ${isActive(item.href) ? 'bg-sidebar-accent text-sidebar-accent-foreground' : ''}`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    {item.icon}
                    {!collapsed && <span className="ml-3">{item.title}</span>}
                  </div>
                  {!collapsed && item.badge && (
                    <Badge variant="secondary" className="ml-auto">
                      {item.badge}
                    </Badge>
                  )}
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-sidebar-border">
        {!collapsed ? (
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-2 rounded-lg bg-sidebar-accent">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">John Doe</p>
                <p className="text-xs text-muted-foreground truncate">john@example.com</p>
              </div>
            </div>
            <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent">
              <Settings className="w-4 h-4 mr-3" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent">
              <LogOut className="w-4 h-4 mr-3" />
              Sign Out
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full text-sidebar-foreground hover:bg-sidebar-accent">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="w-full text-sidebar-foreground hover:bg-sidebar-accent">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default DashboardSidebar
