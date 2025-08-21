import { Card, CardContent } from "@/components/ui/card";
import { Settings, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Settings,
    number: "01",
    title: "Subscribe",
    description: "Choose a plan that fits your business needs and get instant access to Bitewise."
  },
  {
    icon: Zap,
    number: "02", 
    title: "Quick Set Up",
    description: "Add menus, plans, delivery zones, payment methods, and printers."
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Go Live",
    description: "Take orders, print labels, and track deliveries from one dashboard."
  }
];

const HowItWorks = () => {
  return (
    <section id="setup" className="py-20 bg-green-50 px-10">
      <div className="container mx-auto px-4 mt-10">
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
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center  mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-0.5 bg-primary/30 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;