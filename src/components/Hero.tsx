import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Streamline Your 
                <span className="text-primary block">Meal Planning Business</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Everything you need to manage orders, track deliveries, and grow your nutrition-focused business. One platform, unlimited possibilities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Your Free Demo
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Watch Demo Video
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>24/7 support</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={heroImage} 
                alt="Fresh healthy ingredients and meal planning interface"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-md p-4 hidden lg:block">
              <div className="text-sm font-semibold text-foreground">✅ Orders managed</div>
              <div className="text-2xl font-bold text-primary">2,847</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-md p-4 hidden lg:block">
              <div className="text-sm font-semibold text-foreground">📱 Active users</div>
              <div className="text-2xl font-bold text-primary">1,203</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;