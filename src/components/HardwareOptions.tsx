import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Tablet, Zap } from "lucide-react";

const hardwareOptions = [
  {
    icon: Monitor,
    title: "Counter Setup + Printer",
    description: "Complete POS system with receipt and kitchen label printing for smooth order processing and fulfillment."
  },
  {
    icon: Tablet,
    title: "Portable Tablets",
    description: "Mobile tablets for staff to take orders on-the-go, manage inventory, and process payments anywhere."
  },
  {
    icon: Zap,
    title: "Self-ordering Kiosks",
    description: "Customer-facing kiosks for self-service ordering, reducing wait times and increasing order accuracy."
  }
];

const HardwareOptions = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Hardware <span className="text-primary">Options</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Complete hardware solutions to streamline your operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {hardwareOptions.map((option, index) => (
            <Card key={index} className="text-center shadow-md border-0 hover:shadow-lg transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">{option.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardwareOptions;