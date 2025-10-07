import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t bg-card py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-headline font-bold text-xl mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                NextDaySite 2.0
              </span>
            </div>
            <p className="text-muted-foreground">
              Your Website, Ready Tomorrow — Powered by AI.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">Web Design</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">E-commerce</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Branding</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">
              hello@nextdaysite.com
            </p>
            <div className="mt-4">
              <Link to="/ui-kit" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                UI Kit
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 NextDaySite 2.0. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
