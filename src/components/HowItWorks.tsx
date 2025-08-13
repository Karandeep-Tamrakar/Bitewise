import { Card, CardContent } from "@/components/ui/card";
import { Settings, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Settings,
    number: "01",
    title: "Quick Setup",
    description: "Get started in minutes with our guided setup process. Import your existing data and customize your meal plans."
  },
  {
    icon: Zap,
    number: "02", 
    title: "Launch & Operate",
    description: "Start accepting orders immediately. Manage inventory, process payments, and track deliveries all in one place."
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Scale & Grow",
    description: "Use our analytics to optimize your business. Add new meal plans, expand your reach, and increase revenue."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How <span className="text-primary">Bitewise</span> Works
          </h2>
          <p className="text-xl text-muted-foreground">
            From setup to success in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center shadow-md border-0 hover:shadow-lg transition-smooth">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;