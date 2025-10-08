import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Switch } from '@/components/ui/switch.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import CheckoutModal from './CheckoutModal.jsx'
import { 
  Check, 
  Star, 
  MessageCircle, 
  Calendar,
  X,
  Info
} from 'lucide-react'

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [selectedHosting, setSelectedHosting] = useState({
    web: false,
    identity: false,
    complete: false
  })

  const plans = [
    {
      id: "web",
      name: "Web",
      monthly: 150,
      yearly: 1500,
      save: 17,
      blurb: "Modern 3–5 page website, fast.",
      features: [
        "3–5 pages",
        "Responsive + basic SEO",
        "1 concept + 2 revisions",
        "5 stock images + icons",
        "Performance & accessibility pass",
        "Staging preview"
      ],
      delivery: "3–5 business days",
      gradient: "from-blue-500 to-blue-700",
      popular: false
    },
    {
      id: "identity",
      name: "Identity",
      monthly: 250,
      yearly: 2500,
      save: 17,
      blurb: "Logo suite, brand kit, and templates.",
      features: [
        "Logo suite",
        "Color + type system",
        "Social kit",
        "Business card + letterhead",
        "3 flyer/post templates",
        "Mini brand guide (PDF)"
      ],
      delivery: "5–7 business days",
      gradient: "from-indigo-500 to-indigo-700",
      popular: false
    },
    {
      id: "complete",
      name: "Complete",
      monthly: 500,
      yearly: 5000,
      save: 17,
      blurb: "Website + branding handled end‑to‑end.",
      features: [
        "Everything in Web + Identity",
        "6–10 pages",
        "AI copy draft for key pages",
        "SEO essentials",
        "Launch checklist",
        "7‑day post‑launch tweaks"
      ],
      delivery: "7–10 business days",
      gradient: "from-purple-500 to-purple-700",
      popular: true
    }
  ]

  const hosting = {
    monthly: 10,
    yearly: 100
  }

  const addOns = [
    { name: "Extra revision round", price: 99 },
    { name: "Priority delivery", price: 199 },
    { name: "Extra page", price: 149 },
    { name: "Blog setup", price: 199 },
    { name: "Basic analytics setup", price: 99 }
  ]

  const compareFeatures = [
    { feature: "Pages Included", web: "5", identity: "—", complete: "10" },
    { feature: "Logo Suite", web: "—", identity: "✓", complete: "✓" },
    { feature: "Brand Kit", web: "—", identity: "✓", complete: "✓" },
    { feature: "AI Copy Draft", web: "—", identity: "—", complete: "✓" },
    { feature: "Revision Rounds", web: "2", identity: "2", complete: "3" },
    { feature: "Idea Vault Storage", web: "5GB", identity: "10GB", complete: "20GB" },
    { feature: "Delivery Window", web: "3–5d", identity: "5–7d", complete: "7–10d" }
  ]

  const faqs = [
    {
      question: "How many revisions do I get?",
      answer: "Each plan includes 2-3 revision rounds. Additional revisions can be purchased for $99 each."
    },
    {
      question: "What if I'm not satisfied with the delivery?",
      answer: "We offer a 7-day satisfaction guarantee. If you're not happy, we'll work with you to make it right or provide a full refund."
    },
    {
      question: "Do I own the files and code?",
      answer: "Yes! You own everything we create for you. No lock-in, no ongoing fees (unless you choose our hosting)."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Absolutely. You can change plans at any time, and we'll prorate the difference."
    },
    {
      question: "What's the difference between Managed Hosting and Self-Hosting?",
      answer: "Managed Hosting ($10/month or $100/year): We host and maintain your website for you with secure, fast servers, ongoing uptime monitoring, SSL management, and technical support. Self-Hosting: We deliver all your files and assets, and you can deploy them anywhere you want. You have complete ownership and control, but you're responsible for hosting, maintenance, and technical issues."
    }
  ]

  const getPrice = (plan) => {
    return isYearly ? plan.yearly : plan.monthly
  }

  const getHostingPrice = () => {
    return isYearly ? hosting.yearly : hosting.monthly
  }

  const getTotalPrice = (plan) => {
    const basePrice = getPrice(plan)
    const hostingPrice = selectedHosting[plan.id] ? getHostingPrice() : 0
    return basePrice + hostingPrice
  }

  const getSavings = (plan) => {
    if (!isYearly) return null
    const monthlyCost = plan.monthly * 12
    const savings = monthlyCost - plan.yearly
    return savings
  }

  const handleHostingChange = (planId, checked) => {
    setSelectedHosting(prev => ({
      ...prev,
      [planId]: checked
    }))
  }

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan)
    setShowCheckout(true)
  }

  const handleCheckoutSuccess = () => {
    // Redirect to dashboard or success page
    window.location.href = '/dashboard'
  }

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-section')
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            Choose the Plan That Fits Your Vision
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you just need a website, a full brand, or both — our AI‑powered team delivers fast, flawless results.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-2">
            <span className={`text-sm ${!isYearly ? 'font-semibold' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm ${isYearly ? 'font-semibold' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge variant="secondary" className="ml-2">
                Save 17%
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground">Cancel anytime.</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card key={plan.id} className={`relative glass hover:shadow-lg transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">{plan.name[0]}</span>
                  </div>
                  <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.blurb}</CardDescription>
                  
                  <div className="py-4">
                    <div className="text-4xl font-bold">
                      ${getTotalPrice(plan)}
                      <span className="text-lg font-normal text-muted-foreground">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {selectedHosting[plan.id] && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Includes hosting (+${getHostingPrice()}/{isYearly ? 'year' : 'month'})
                      </p>
                    )}
                    {isYearly && getSavings(plan) && (
                      <p className="text-sm text-green-600 mt-1">
                        Save ${getSavings(plan)} per year
                      </p>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Managed Hosting Option */}
                  {(plan.id === 'web' || plan.id === 'complete') && (
                    <div className="pt-4 border-t">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id={`hosting-${plan.id}`}
                          checked={selectedHosting[plan.id]}
                          onCheckedChange={(checked) => handleHostingChange(plan.id, checked)}
                        />
                        <label 
                          htmlFor={`hosting-${plan.id}`} 
                          className="text-sm font-medium cursor-pointer flex-1"
                        >
                          Add Managed Hosting
                        </label>
                        <button
                          onClick={scrollToFAQ}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          title="Learn more about hosting options"
                        >
                          <Info className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 ml-6">
                        ${hosting.monthly}/month or ${hosting.yearly}/year
                      </p>
                    </div>
                  )}
                  
                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground mb-4">
                      <strong>Delivery:</strong> {plan.delivery}
                    </p>
                    
                    <div className="space-y-3">
                      <Button 
                        className="w-full" 
                        size="lg"
                        onClick={() => handleSubscribe(plan)}
                      >
                        Subscribe
                      </Button>
                      <Button variant="outline" className="w-full">
                        Customize
                      </Button>
                      <button 
                        onClick={() => setShowContactModal(true)}
                        className="w-full text-sm text-primary hover:underline"
                      >
                        Talk to us →
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold text-center mb-8">
            Optional Add-ons
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-background">
                <span className="text-sm">{addon.name}</span>
                <Badge variant="outline">+${addon.price}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-headline text-2xl font-bold text-center mb-8">
            Compare Plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Web</th>
                  <th className="text-center py-4 px-4">Identity</th>
                  <th className="text-center py-4 px-4">Complete</th>
                </tr>
              </thead>
              <tbody>
                {compareFeatures.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-accent/50">
                    <td className="py-3 px-4 font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-center">{row.web}</td>
                    <td className="py-3 px-4 text-center">{row.identity}</td>
                    <td className="py-3 px-4 text-center">{row.complete}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold mb-4">
            Need something custom?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's talk about your specific requirements and create a tailored solution.
          </p>
          <Button 
            size="lg" 
            onClick={() => setShowContactModal(true)}
            className="text-lg px-8 py-6"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Let's Talk
          </Button>
        </div>
      </section>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        selectedPlan={selectedPlan}
        isYearly={isYearly}
        hasHosting={selectedPlan ? selectedHosting[selectedPlan.id] : false}
        onSuccess={handleCheckoutSuccess}
      />

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Get in Touch</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowContactModal(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <CardDescription>
                Ready to discuss your project? We'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start a Chat
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </div>
              <div className="pt-4 border-t text-center">
                <p className="text-sm text-muted-foreground">
                  Or email us at{' '}
                  <a href="mailto:hello@nextdaysite.com" className="text-primary hover:underline">
                    hello@nextdaysite.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Trust Footer */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            You own your files and exported code. No lock‑in.
          </p>
          <p className="text-sm text-muted-foreground">
            Shipped via audited workflows.
          </p>
          <p className="text-sm text-muted-foreground">
            Prefer us to host? Just $10/mo or $100/yr.
          </p>
        </div>
      </section>
    </div>
  )
}

export default PricingPage