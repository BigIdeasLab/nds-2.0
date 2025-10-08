import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import DashboardSidebar from '@/components/DashboardSidebar.jsx'
import { 
  FolderOpen, 
  Clock, 
  DollarSign, 
  HardDrive, 
  Plus, 
  Eye,
  Download,
  MessageSquare,
  Filter,
  Grid3X3,
  List
} from 'lucide-react'
import { mockProjects, mockInvoices, statusColors } from '../../data/mockData'

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  // Filter projects for current user (assuming user ID 1 for demo)
  const userProjects = mockProjects.filter(p => p.customerId === 1)
  const userInvoices = mockInvoices.filter(i => i.customerId === 1)
  
  // Calculate KPIs
  const activeProjects = userProjects.filter(p => p.status === 'In Progress').length
  const readyToReview = userProjects.filter(p => p.status === 'Ready to Ship').length
  const invoicesDue = userInvoices.filter(i => i.status === 'Due').length
  const storageUsed = 2.4 // GB

  const kpiCards = [
    {
      title: "Active Projects",
      value: activeProjects,
      icon: <FolderOpen className="w-5 h-5" />,
      color: "text-blue-600"
    },
    {
      title: "Ready to Review",
      value: readyToReview,
      icon: <Eye className="w-5 h-5" />,
      color: "text-yellow-600"
    },
    {
      title: "Invoices Due",
      value: invoicesDue,
      icon: <DollarSign className="w-5 h-5" />,
      color: "text-red-600"
    },
    {
      title: "Storage Used",
      value: `${storageUsed} GB`,
      icon: <HardDrive className="w-5 h-5" />,
      color: "text-green-600"
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-background">
      <DashboardSidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-headline text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening with your projects.</p>
          </div>
          <Link to="/projects">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </Link>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiCards.map((kpi, index) => (
            <Card key={index} className="glass">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                    <p className="text-2xl font-bold">{kpi.value}</p>
                  </div>
                  <div className={`${kpi.color}`}>
                    {kpi.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="glass">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-headline">My Projects</CardTitle>
                    <CardDescription>Track your project progress and status</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userProjects.map((project) => (
                    <div key={project.id} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold">{project.title}</h3>
                            <Badge className={statusColors[project.status]}>
                              {project.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{project.briefSummary}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>Updated {project.lastUpdated}</span>
                            <span>•</span>
                            <span>{project.assignee}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-3">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Link to="/projects">
                    <Button variant="outline">
                      View All Projects
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-headline text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm">Project "TechStart Landing Page" moved to In Progress</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm">New wireframes uploaded to Idea Vault</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm">Invoice #1001 is due in 3 days</p>
                      <p className="text-xs text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-headline text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/projects" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="w-4 h-4 mr-2" />
                    Start New Project
                  </Button>
                </Link>
                <Link to="/vault" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <FolderOpen className="w-4 h-4 mr-2" />
                    Browse Idea Vault
                  </Button>
                </Link>
                <Link to="/billing" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <DollarSign className="w-4 h-4 mr-2" />
                    View Billing
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard