import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  X, 
  CreditCard, 
  Lock, 
  ArrowLeft, 
  Check,
  Loader2
} from 'lucide-react'

const CheckoutModal = ({ 
  isOpen, 
  onClose, 
  selectedPlan, 
  isYearly, 
  hasHosting,
  onSuccess 
}) => {
  const [step, setStep] = useState('checkout') // checkout, processing, success
  const [customerData, setCustomerData] = useState({
    email: '',
    fullName: '',
    company: ''
  })
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'US'
    }
  })

  if (!isOpen) return null

  const planPrices = {
    web: { monthly: 150, yearly: 1500 },
    identity: { monthly: 250, yearly: 2500 },
    complete: { monthly: 500, yearly: 5000 }
  }

  const hostingPrice = isYearly ? 100 : 10
  const planPrice = isYearly ? planPrices[selectedPlan.id].yearly : planPrices[selectedPlan.id].monthly
  const subtotal = planPrice + (hasHosting ? hostingPrice : 0)
  const tax = Math.round(subtotal * 0.08) // 8% tax
  const total = subtotal + tax

  const handlePayment = async () => {
    setStep('processing')
    
    // Simulate Stripe payment processing
    setTimeout(() => {
      setStep('success')
      setTimeout(() => {
        onSuccess()
        onClose()
      }, 3000)
    }, 2000)
  }

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = matches && matches[0] || ''
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(' ')
    } else {
      return v
    }
  }

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4)
    }
    return v
  }

  if (step === 'success') {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to NextDaySite! We'll be in touch within 24 hours to start your project.
            </p>
            <Badge variant="secondary">Order #{Math.random().toString(36).substr(2, 9).toUpperCase()}</Badge>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <Lock className="w-5 h-5" />
              <span>Secure Checkout</span>
            </CardTitle>
            <CardDescription>Complete your NextDaySite subscription</CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>

        <CardContent className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
              <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{selectedPlan.name} Plan</h4>
                    <p className="text-sm text-muted-foreground">{selectedPlan.blurb}</p>
                    <Badge variant="outline" className="mt-1">
                      {isYearly ? 'Yearly' : 'Monthly'} Billing
                    </Badge>
                  </div>
                  <span className="font-medium">${planPrice}</span>
                </div>

                {hasHosting && (
                  <div className="flex justify-between items-center">
                    <span>Managed Hosting</span>
                    <span>${hostingPrice}</span>
                  </div>
                )}

                <Separator />
                
                <div className="flex justify-between items-center">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Tax</span>
                  <span>${tax}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground space-y-2">
              <p>✓ 7-day satisfaction guarantee</p>
              <p>✓ You own all files and code</p>
              <p>✓ Cancel anytime</p>
            </div>
          </div>

          {/* Payment Form */}
          <div className="space-y-6">
            {/* Customer Information */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Customer Information</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerData.email}
                    onChange={(e) => setCustomerData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={customerData.fullName}
                    onChange={(e) => setCustomerData(prev => ({ ...prev, fullName: e.target.value }))}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    value={customerData.company}
                    onChange={(e) => setCustomerData(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="Acme Inc."
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Payment Method</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <div className="relative">
                    <Input
                      id="cardNumber"
                      value={paymentData.cardNumber}
                      onChange={(e) => setPaymentData(prev => ({ 
                        ...prev, 
                        cardNumber: formatCardNumber(e.target.value) 
                      }))}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                    />
                    <CreditCard className="absolute right-3 top-3 w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      value={paymentData.expiryDate}
                      onChange={(e) => setPaymentData(prev => ({ 
                        ...prev, 
                        expiryDate: formatExpiryDate(e.target.value) 
                      }))}
                      placeholder="MM/YY"
                      maxLength={5}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      value={paymentData.cvv}
                      onChange={(e) => setPaymentData(prev => ({ 
                        ...prev, 
                        cvv: e.target.value.replace(/\D/g, '') 
                      }))}
                      placeholder="123"
                      maxLength={4}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="billingAddress">Billing Address</Label>
                  <div className="space-y-3 mt-2">
                    <Input
                      placeholder="Street Address"
                      value={paymentData.billingAddress.street}
                      onChange={(e) => setPaymentData(prev => ({
                        ...prev,
                        billingAddress: { ...prev.billingAddress, street: e.target.value }
                      }))}
                      required
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        placeholder="City"
                        value={paymentData.billingAddress.city}
                        onChange={(e) => setPaymentData(prev => ({
                          ...prev,
                          billingAddress: { ...prev.billingAddress, city: e.target.value }
                        }))}
                        required
                      />
                      <Input
                        placeholder="State"
                        value={paymentData.billingAddress.state}
                        onChange={(e) => setPaymentData(prev => ({
                          ...prev,
                          billingAddress: { ...prev.billingAddress, state: e.target.value }
                        }))}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        placeholder="ZIP Code"
                        value={paymentData.billingAddress.zipCode}
                        onChange={(e) => setPaymentData(prev => ({
                          ...prev,
                          billingAddress: { ...prev.billingAddress, zipCode: e.target.value }
                        }))}
                        required
                      />
                      <Input
                        placeholder="Country"
                        value={paymentData.billingAddress.country}
                        onChange={(e) => setPaymentData(prev => ({
                          ...prev,
                          billingAddress: { ...prev.billingAddress, country: e.target.value }
                        }))}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              className="w-full" 
              size="lg"
              onClick={handlePayment}
              disabled={step === 'processing'}
            >
              {step === 'processing' ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing Payment...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  Complete Payment ${total}
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Your payment is secured by 256-bit SSL encryption
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CheckoutModal