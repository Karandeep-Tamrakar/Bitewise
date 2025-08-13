const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-2xl font-bold">Bitewise</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Streamlining meal planning businesses with powerful, easy-to-use tools.
            </p>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Features</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Pricing</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Demo</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">API</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">About</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Blog</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Careers</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Contact</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Help Center</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Documentation</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/70">
            © 2024 Bitewise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;