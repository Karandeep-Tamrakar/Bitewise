import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/90"></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block">Meal Planning Business?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of nutrition professionals who trust Bitewise to streamline their operations, 
            increase efficiency, and grow their revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6 hover:scale-105 transform transition-bounce shadow-lg"
            >
              Start Your Free Demo
            </Button>
            {/* <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              Schedule a Call
            </Button> */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90">
            <div>
              <div className="text-3xl font-bold text-white">14</div>
              <div className="text-sm">Day Free Trial</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-white/10 rounded-full"></div>
    </section>
  );
};

export default FinalCTA;