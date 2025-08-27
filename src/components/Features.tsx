import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingCart,
  CreditCard,
  UserCheck,
  Gift,
  Truck,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Order & Inventory Management",
    description:
      "Efficiently manage orders, stock levels, and updates across locations.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Accept online payments, cards, wallets, and EBT payment setup easily.",
  },
  {
    icon: UserCheck,
    title: "Personalized Meal Plans",
    description:
      "Create fully customized or pre-defined plans for every customer.",
  },
  {
    icon: Gift,
    title: "Customer Reward Points",
    description:
      "Track and manage profiles, preferences, and reward points to boost loyalty.",
  },
  {
    icon: Truck,
    title: "Scheduling & Delivery Tracking",
    description:
      "Allow flexible pickups and deliveries with real-time status updates.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Business Insights",
    description:
      "Access detailed reports, dashboards, and actionable business insights.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-10">
      <div className="container mx-auto px-4 my-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to
            <span className="text-primary"> Streamline Your Business</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed specifically for meal preparing and
            nutrition businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-smooth border-0 shadow-md"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
