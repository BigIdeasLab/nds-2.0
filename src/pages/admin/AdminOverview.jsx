import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Avatar, AvatarFallback } from '@/components/ui/avatar.jsx'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts'
import { 
  Users, 
  DollarSign, 
  FolderOpen, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Clock
} from 'lucide-react'
import { mockProjects, mockUsers, mockInvoices, statusColors, planColors } from '../../data/mockData'

const AdminOverview = () => {
  // Calculate metrics
  const totalProjects = mockProjects.length
  const activeProjects = mockProjects.filter(p => p.status === 'In Progress').length
  const totalCustomers = mockUsers.filter(u => u.role === 'customer').length
  const totalRevenue = mockInvoices.reduce((sum, inv) => sum + inv.amount, 0)
  const paidRevenue = mockInvoices.filter(inv => inv.status === 'Paid').reduce((sum, inv) => sum + inv.amount, 0)

  // Pipeline data for chart
  const pipelineData = [
    { stage: 'Start', count: mockProjects.filter(p => p.status === 'Start').length },
    { stage: 'In Progress', count: mockProjects.filter(p => p.status === 'In Progress').length },
    { stage: 'Done', count: mockProjects.filter(p => p.status === 'Done').length },
    { stage: 'Ready to Ship', count: mockProjects.filter(p => p.status === 'Ready to Ship').length },
    { stage: 'Shipped', count: mockProjects.filter(p => p.status === 'Shipped').length }
  ]

  // Revenue data for chart
  const revenueData = [
    { month: 'Jan', revenue: 12000 },
    { month: 'Feb', revenue: 15000 },
    { month: 'Mar', revenue: 18000 },
    { month: 'Apr', revenue: 22000 },
    { month: 'May', revenue: 25000 },
    { month: 'Jun', revenue: 28000 }
  ]

  // Customer plan distribution
  const planData = [
    { name: 'Starter', value: mockUsers.filter(u => u.plan === 'Starter').length, color: '#10b981' },
    { name: 'Pro', value: mockUsers.filter(u => u.plan === 'Pro').length, color: '#3b82f6' },
    { name: 'Enterprise', value: mockUsers.filter(u => u.plan === 'Enterprise').length, color: '#8b5cf6' }
  ]

  const kpiCards = [
    {
      title: "Total Revenue",
      value: `$${(paidRevenue / 100).toLocaleString()}`,
      change: "+12.5%",
      changeType: "positive",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      title: "Active Projects",
      value: activeProjects,
      change: "+3",
      changeType: "positive",
      icon: <FolderOpen className="w-5 h-5" />
    },
    {
      title: "Total Customers",
      value: totalCustomers,
      change: "+2",
      changeType: "positive",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Avg. Project Value",
      value: `$${Math.round(totalRevenue / totalProjects / 100).toLocaleString()}`,
      change: "-2.1%",
      changeType: "negative",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ]

  const recentProjects = mockProjects.slice(0, 5)
  const topCustomers = mockUsers.filter(u => u.role === 'customer').slice(0, 3)

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-headline text-3xl font-bold mb-2">Admin Overview</h1>
            <p className="text-muted-foreground">Monitor your business performance and key metrics</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Last 30 days
            </Button>
            <Button>
              <Clock className="w-4 h-4 mr-2" />
              Real-time
            </Button>
          </div>
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
                    <div className="flex items-center mt-2">
                      {kpi.changeType === 'positive' ? (
                        <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                      )}
                      <span className={`text-sm ${kpi.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                        {kpi.change}
                      </span>
                    </div>
                  </div>
                  <div className="text-primary">
                    {kpi.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Pipeline Chart */}
          <Card className="lg:col-span-2 glass">
            <CardHeader>
              <CardTitle className="font-headline">Project Pipeline</CardTitle>
              <CardDescription>Projects by stage across the workflow</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={pipelineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="stage" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#FF8C00" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Plan Distribution */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="font-headline">Customer Plans</CardTitle>
              <CardDescription>Distribution by subscription tier</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={planData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {planData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {planData.map((plan, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: plan.color }}
                      />
                      <span className="text-sm">{plan.name}</span>
                    </div>
                    <span className="text-sm font-medium">{plan.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Chart */}
        <Card className="glass mb-8">
          <CardHeader>
            <CardTitle className="font-headline">Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue growth over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#FF8C00" 
                  strokeWidth={3}
                  dot={{ fill: '#FF8C00', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bottom Row */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Projects */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="font-headline">Recent Projects</CardTitle>
              <CardDescription>Latest project activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{project.title}</h4>
                      <p className="text-xs text-muted-foreground">Updated {project.lastUpdated}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={statusColors[project.status]}>
                        {project.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{project.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Customers */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="font-headline">Top Customers</CardTitle>
              <CardDescription>Highest value customers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCustomers.map((customer) => (
                  <div key={customer.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback>{customer.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-sm">{customer.name}</h4>
                        <p className="text-xs text-muted-foreground">{customer.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={planColors[customer.plan]}>
                        {customer.plan}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {mockProjects.filter(p => p.customerId === customer.id).length} projects
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AdminOverview
