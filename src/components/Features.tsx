import { Card, CardContent } from "@/components/ui/card";
import { 
  ShoppingCart, 
  Truck, 
  CreditCard, 
  Calendar, 
  Bell,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Order & Inventory Management",
    description: "Effortlessly manage orders, track stock levels, and automate inventory updates across all platforms."
  },
  {
    icon: Truck,
    title: "Meal Tracking & Delivery",
    description: "Real-time tracking of meal preparation, delivery status, and customer notifications."
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Secure payment acceptance with multiple payment methods and automated billing management."
  },
  {
    icon: Calendar,
    title: "Custom Meal Plans",
    description: "Create pre-defined or fully personalized meal plans tailored to each client's dietary needs."
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    description: "Instant notifications for new orders, delivery updates, and important business metrics."
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Comprehensive reporting and analytics to help you make data-driven business decisions."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to 
            <span className="text-primary"> Scale Your Business</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed specifically for meal planning and nutrition businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-smooth border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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