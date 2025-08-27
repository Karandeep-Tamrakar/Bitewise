import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Tablet, Zap } from "lucide-react";

const hardwareOptions = [
  {
    icon: Monitor,
    title: "Counter Setup & Printer",
    description:
      "Connect our system to print receipts and kitchen labels efficiently.",
  },
  {
    icon: Tablet,
    title: "Portable Tablets",
    description:
      "Use your mobile, tablets with our platform to take orders and manage inventory anywhere.",
  },
  {
    icon: Zap,
    title: "Self-Ordering Kiosks",
    description:
      "Integrate our platform for fast, accurate, customer-friendly self-service ordering.",
  },
];

const HardwareOptions = () => {
  return (
    <section id="hardware" className="py-20 px-10">
      <div className="container mx-auto my-10 px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Hardware <span className="text-primary">Integration</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Integrate our platform with these devices for seamless operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hardwareOptions.map((option, index) => (
            <Card
              key={index}
              className="text-center shadow-md border-0 hover:shadow-lg transition-smooth"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">{option.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardwareOptions;