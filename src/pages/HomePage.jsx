import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  MessageCircle, 
  Zap, 
  Shield, 
  Rocket, 
  Star, 
  ArrowRight, 
  Play,
  Paperclip,
  Send,
  Sparkles,
  Palette,
  Layout,
  Code
} from 'lucide-react'

const HomePage = () => {
  const [chatMessages, setChatMessages] = useState([
    { 
      role: 'ai', 
      content: 'Hi! I\'m your AI assistant. Describe your site and I\'ll help bring it to life.',
      timestamp: new Date()
    }
  ])
  const [chatInput, setChatInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleChatSubmit = (e) => {
    e.preventDefault()
    if (!chatInput.trim()) return

    const userMessage = {
      role: 'user',
      content: chatInput,
      timestamp: new Date()
    }

    setChatMessages(prev => [...prev, userMessage])
    setChatInput('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        role: 'ai',
        content: 'Great idea! I can help you create a modern, responsive website with that concept. Let me generate some initial designs and wireframes for you.',
        timestamp: new Date()
      }
      setChatMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const suggestionChips = [
    { text: "E-commerce store for handmade jewelry", icon: <Sparkles className="w-4 h-4" /> },
    { text: "Professional portfolio for photographer", icon: <Layout className="w-4 h-4" /> },
    { text: "SaaS landing page with pricing tiers", icon: <Code className="w-4 h-4" /> },
    { text: "Restaurant website with online ordering", icon: <Palette className="w-4 h-4" /> }
  ]

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Design",
      description: "Our AI analyzes your requirements and generates pixel-perfect designs tailored to your brand."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with SSL certificates, secure hosting, and regular backups included."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized for speed with CDN delivery, ensuring your site loads in under 2 seconds globally."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Inc.",
      content: "NextDaySite delivered our website in 24 hours. The AI-powered design process was incredible!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      company: "Creative Agency",
      content: "The quality exceeded our expectations. Professional, fast, and exactly what we needed.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      company: "E-commerce Store",
      content: "From concept to launch in one day. Our sales increased 40% with the new design.",
      rating: 5
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section with Integrated AI Chat */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Background with consistent theme colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          {/* Floating orbs with theme-consistent colors */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Announcement Badge */}
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Introducing NextDaySite 2.0 AI
          </Badge>

          {/* Main Headline */}
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Build something{' '}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Amazing
            </span>
            <br />
            Start by chatting with Ai
          </h1>

          {/* AI Chat Interface */}
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="glass">
              <CardContent className="p-6">
                {/* Chat Messages */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {chatMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                          message.role === 'user'
                            ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-muted text-foreground px-4 py-3 rounded-2xl">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <form onSubmit={handleChatSubmit} className="relative">
                  <div className="flex items-center space-x-2 p-3 bg-accent/10 border rounded-2xl">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="p-2"
                    >
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    
                    <Input
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Ask..."
                      className="flex-1 bg-transparent border-0 focus:ring-0"
                    />
                    
                    {/* <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="p-2"
                    >
                      Public
                    </Button> */}
                    
                    {/* <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="p-2"
                    >
                      Supabase
                    </Button> */}
                    
                    <Button
                      type="submit"
                      size="sm"
                      variant="outline"
                      className="p-2"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </form>

                {/* Suggestion Chips */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {suggestionChips.map((chip, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => setChatInput(chip.text)}
                    >
                      {chip.icon}
                      <span className="ml-1 hidden sm:inline">{chip.text}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span>4.9/5 from 500+ clients</span>
            </div>
            <div>⚡ 24-hour delivery</div>
            <div>🔒 Enterprise security</div>
            <div>📱 Mobile-first design</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
              Premium Service, Zero Compromise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our ability to combine AI expertise and human creativity is what fuels us as a team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
              Loved by 500+ Companies
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
            Ready to Launch Tomorrow?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of companies who trust NextDaySite for their web presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="text-lg px-8 py-6">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
