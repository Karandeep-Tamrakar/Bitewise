import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/mo",
    features: [
      "Branded website & mobile app",
      "Orders, payments, and customer profiles",
      "Basic inventory & real-time alerts",
      "Standard support",
      "No yearly commitments"
    ]
  },
  {
    name: "Growth",
    price: "$179",
    period: "/mo",
    features: [
      "Everything in Starter",
      "Custom meal-plan builder & daily selections",
      "Delivery scheduling & live tracking",
      "Chef labels + \"To the Kitchen\" checklists",
      "Reports & analytics"
    ],
    popular: true
  },
  {
    name: "Pro",
    price: "$299",
    period: "/mo",
    features: [
      "Everything in Growth",
      "Multi-location & team roles",
      "Priority support & onboarding",
      "Advanced inventory (bundles, BOM)",
      "Loyalty & coupons"
    ]
  }
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
            Choose the plan that fits your business size and needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`shadow-lg border-0 relative overflow-hidden ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-hero"></div>
              )}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-success rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <Button 
                    variant={plan.popular ? "cta" : "outline"} 
                    size="lg" 
                    className="w-full"
                  >
                    Start Your Free Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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