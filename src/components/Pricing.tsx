import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const features = [
  "Unlimited orders and customers",
  "Multi-platform app (mobile, tablet, desktop)",
  "Real-time inventory management",
  "Payment processing & POS system",
  "Custom meal plan builder",
  "Delivery tracking & notifications",
  "Analytics & reporting dashboard",
  "24/7 customer support",
  "API access for integrations",
  "Regular feature updates"
];

const Pricing = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent
            <span className="text-primary"> Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            One plan, all features included. Scale your business without hidden costs.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <Card className="shadow-lg border-0 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-hero"></div>
            
            <CardHeader className="text-center pb-8 pt-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-4 mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <CardTitle className="text-3xl font-bold">Pro Plan</CardTitle>
              <div className="mt-4">
                <span className="text-5xl font-bold">$99</span>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
              <p className="text-muted-foreground mt-2">
                Everything you need to run your meal planning business
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-success rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 space-y-4">
                <Button variant="cta" size="lg" className="w-full text-lg">
                  Start Your Free Demo
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  14-day free trial • No credit card required • Cancel anytime
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Need a custom solution? 
            <a href="#contact" className="text-primary hover:underline ml-1">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;