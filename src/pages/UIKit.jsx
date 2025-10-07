import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Avatar, AvatarFallback } from '@/components/ui/avatar.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Copy,
  Check,
  Palette,
  Type,
  Layout,
  Zap,
  Star,
  Heart,
  MessageSquare,
  Download,
  Settings,
  User,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  ArrowRight,
  ChevronDown,
  Moon,
  Sun
} from 'lucide-react'

const UIKit = () => {
  const [copiedToken, setCopiedToken] = useState(null)
  const [darkMode, setDarkMode] = useState(true)

  const copyToClipboard = (text, token) => {
    navigator.clipboard.writeText(text)
    setCopiedToken(token)
    setTimeout(() => setCopiedToken(null), 2000)
  }

  const colorTokens = [
    { name: 'Primary', value: '#FF8C00', css: '--primary' },
    { name: 'Primary Foreground', value: '#ffffff', css: '--primary-foreground' },
    { name: 'Background', value: darkMode ? '#0b0d12' : '#ffffff', css: '--background' },
    { name: 'Foreground', value: darkMode ? '#e7eaf3' : '#333333', css: '--foreground' },
    { name: 'Card', value: darkMode ? '#11131a' : '#f7f8fa', css: '--card' },
    { name: 'Muted', value: darkMode ? '#7a8295' : '#666666', css: '--muted' },
    { name: 'Border', value: 'rgba(124, 132, 158, 0.25)', css: '--border' },
    { name: 'Success', value: '#10b981', css: '--success' },
    { name: 'Warning', value: '#f59e0b', css: '--warning' },
    { name: 'Danger', value: '#ef4444', css: '--danger' }
  ]

  const typographyTokens = [
    { name: 'Headline Font', value: 'Sora', css: 'font-family: Sora' },
    { name: 'UI Font', value: 'Inter', css: 'font-family: Inter' },
    { name: 'Text XS', value: '12px', css: 'font-size: 0.75rem' },
    { name: 'Text SM', value: '14px', css: 'font-size: 0.875rem' },
    { name: 'Text Base', value: '16px', css: 'font-size: 1rem' },
    { name: 'Text LG', value: '18px', css: 'font-size: 1.125rem' },
    { name: 'Text XL', value: '20px', css: 'font-size: 1.25rem' },
    { name: 'Text 2XL', value: '24px', css: 'font-size: 1.5rem' },
    { name: 'Text 3XL', value: '30px', css: 'font-size: 1.875rem' },
    { name: 'Text 4XL', value: '36px', css: 'font-size: 2.25rem' }
  ]

  const spacingTokens = [
    { name: 'Space 1', value: '4px', css: 'margin: 0.25rem' },
    { name: 'Space 2', value: '8px', css: 'margin: 0.5rem' },
    { name: 'Space 3', value: '12px', css: 'margin: 0.75rem' },
    { name: 'Space 4', value: '16px', css: 'margin: 1rem' },
    { name: 'Space 6', value: '24px', css: 'margin: 1.5rem' },
    { name: 'Space 8', value: '32px', css: 'margin: 2rem' },
    { name: 'Space 12', value: '48px', css: 'margin: 3rem' },
    { name: 'Space 16', value: '64px', css: 'margin: 4rem' }
  ]

  const buttonVariants = [
    { variant: 'default', label: 'Primary Button' },
    { variant: 'secondary', label: 'Secondary Button' },
    { variant: 'outline', label: 'Outline Button' },
    { variant: 'ghost', label: 'Ghost Button' },
    { variant: 'destructive', label: 'Destructive Button' }
  ]

  const buttonSizes = [
    { size: 'sm', label: 'Small' },
    { size: 'default', label: 'Default' },
    { size: 'lg', label: 'Large' }
  ]

  const badgeVariants = [
    { variant: 'default', label: 'Default' },
    { variant: 'secondary', label: 'Secondary' },
    { variant: 'outline', label: 'Outline' },
    { variant: 'destructive', label: 'Destructive' }
  ]

  const statusBadges = [
    { status: 'Start', className: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200' },
    { status: 'In Progress', className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
    { status: 'Done', className: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
    { status: 'Ready to Ship', className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
    { status: 'Shipped', className: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' }
  ]

  const icons = [
    { icon: <User className="w-5 h-5" />, name: 'User' },
    { icon: <Settings className="w-5 h-5" />, name: 'Settings' },
    { icon: <Search className="w-5 h-5" />, name: 'Search' },
    { icon: <Filter className="w-5 h-5" />, name: 'Filter' },
    { icon: <Plus className="w-5 h-5" />, name: 'Plus' },
    { icon: <Eye className="w-5 h-5" />, name: 'Eye' },
    { icon: <Edit className="w-5 h-5" />, name: 'Edit' },
    { icon: <Trash2 className="w-5 h-5" />, name: 'Trash' },
    { icon: <Download className="w-5 h-5" />, name: 'Download' },
    { icon: <MessageSquare className="w-5 h-5" />, name: 'Message' },
    { icon: <Heart className="w-5 h-5" />, name: 'Heart' },
    { icon: <Star className="w-5 h-5" />, name: 'Star' }
  ]

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-headline text-3xl font-bold mb-2">UI Kit</h1>
            <p className="text-muted-foreground">NextDaySite 2.0 Design System Components and Tokens</p>
          </div>
          <Button
            variant="outline"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </div>

        <Tabs defaultValue="tokens" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tokens">Design Tokens</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
          </TabsList>

          {/* Design Tokens */}
          <TabsContent value="tokens" className="space-y-8">
            {/* Colors */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-headline flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  Color Tokens
                </CardTitle>
                <CardDescription>Brand colors and semantic color tokens</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {colorTokens.map((token, index) => (
                    <div key={index} className="space-y-2">
                      <div 
                        className="w-full h-16 rounded-lg border cursor-pointer hover:scale-105 transition-transform"
                        style={{ backgroundColor: token.value }}
                        onClick={() => copyToClipboard(token.value, token.name)}
                      />
                      <div className="text-center">
                        <p className="text-sm font-medium">{token.name}</p>
                        <p className="text-xs text-muted-foreground font-mono">{token.value}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 text-xs mt-1"
                          onClick={() => copyToClipboard(token.css, token.name)}
                        >
                          {copiedToken === token.name ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Typography */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-headline flex items-center">
                  <Type className="w-5 h-5 mr-2" />
                  Typography Tokens
                </CardTitle>
                <CardDescription>Font families, sizes, and text styles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {typographyTokens.map((token, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{token.name}</p>
                        <p className="text-sm text-muted-foreground font-mono">{token.css}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-muted-foreground">{token.value}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(token.css, token.name)}
                        >
                          {copiedToken === token.name ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Spacing */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-headline flex items-center">
                  <Layout className="w-5 h-5 mr-2" />
                  Spacing Tokens
                </CardTitle>
                <CardDescription>Consistent spacing scale for margins and padding</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {spacingTokens.map((token, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div 
                          className="bg-primary rounded"
                          style={{ width: token.value, height: '16px' }}
                        />
                        <div>
                          <p className="font-medium">{token.name}</p>
                          <p className="text-sm text-muted-foreground font-mono">{token.css}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-muted-foreground">{token.value}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(token.css, token.name)}
                        >
                          {copiedToken === token.name ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components */}
          <TabsContent value="components" className="space-y-8">
            {/* Buttons */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-headline">Buttons</CardTitle>
                <CardDescription>Button variants and sizes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-4">Variants</h4>
                  <div className="flex flex-wrap gap-4">
                    {buttonVariants.map((btn, index) => (
                      <Button key={index} variant={btn.variant}>
                        {btn.label}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-4">Sizes</h4>
                  <div className="flex flex-wrap gap-4 items-center">
                    {buttonSizes.map((btn, index) => (
                      <Button key={index} size={btn.size}>
                        {btn.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">With Icons</h4>
                  <div className="flex flex-wrap gap-4">
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Item
                    </Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="ghost">
                      <ArrowRight className="w-4 h-4 ml-2" />
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-headline">Badges</CardTitle>
                <CardDescription>Status indicators and labels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-4">Variants</h4>
                  <div className="flex flex-wrap gap-4">
                    {badgeVariants.map((badge, index) => (
                      <Badge key={index} variant={badge.variant}>
                        {badge.label}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Status Badges</h4>
                  <div className="flex flex-wrap gap-4">
                    {statusBadges.map((badge, index) => (
                      <Badge key={index} className={badge.className}>
                        {badge.status}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Form Elements */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-headline">Form Elements</CardTitle>
                <CardDescription>Input fields and form controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Text Input</label>
                      <Input placeholder="Enter text..." />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Search Input</label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input placeholder="Search..." className="pl-10" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Textarea</label>
                      <Textarea placeholder="Enter description..." rows={3} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Icons */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-headline">Icons</CardTitle>
                <CardDescription>Lucide React icon library</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
                  {icons.map((icon, index) => (
                    <div key={index} className="flex flex-col items-center p-3 border rounded-lg hover:bg-accent transition-colors">
                      <div className="text-primary mb-2">
                        {icon.icon}
                      </div>
                      <span className="text-xs text-center">{icon.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patterns */}
          <TabsContent value="patterns" className="space-y-8">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-headline">Common Patterns</CardTitle>
                <CardDescription>Reusable UI patterns and layouts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Card Pattern */}
                <div>
                  <h4 className="font-medium mb-4">Project Card</h4>
                  <Card className="max-w-md">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm mb-1">Sample Project</h3>
                          <p className="text-xs text-muted-foreground mb-2">
                            Modern landing page for a tech startup with focus on conversions
                          </p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          In Progress
                        </Badge>
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="h-1" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Avatar className="w-6 h-6">
                            <AvatarFallback className="text-xs">AI</AvatarFallback>
                          </Avatar>
                          <span className="text-xs text-muted-foreground">AI Designer</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <MessageSquare className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Eye className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* KPI Card Pattern */}
                <div>
                  <h4 className="font-medium mb-4">KPI Card</h4>
                  <Card className="max-w-xs">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                          <p className="text-2xl font-bold">12</p>
                          <div className="flex items-center mt-2">
                            <ArrowRight className="w-4 h-4 text-green-500 mr-1 rotate-[-45deg]" />
                            <span className="text-sm text-green-500">+3</span>
                          </div>
                        </div>
                        <div className="text-primary">
                          <Zap className="w-5 h-5" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Examples */}
          <TabsContent value="examples" className="space-y-8">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-headline">Implementation Examples</CardTitle>
                <CardDescription>Code snippets and usage examples</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-4">CSS Custom Properties</h4>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                    <pre>{`:root {
  --primary: #FF8C00;
  --primary-foreground: #ffffff;
  --background: #ffffff;
  --foreground: #333333;
  --muted: #666666;
  --border: rgba(204, 204, 204, 0.3);
}`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Tailwind Config</h4>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                    <pre>{`module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF8C00',
        'primary-foreground': '#ffffff',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      fontFamily: {
        headline: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      }
    }
  }
}`}</pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default UIKit
