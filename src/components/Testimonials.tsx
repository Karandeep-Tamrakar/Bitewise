import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amira S.",
    role: "Muscle Fuel UAE, Dubai",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    content:
      "We launched in a week. Labels and kitchen checklists alone saved us hours daily.",
    rating: 5,
  },
  {
    name: "Faisal K.",
    role: "Nutrition Coach, Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    content:
      "Customers love the personalized plans and one-click reorders.",
    rating: 5,
  },
  {
    name: "John H.",
    role: "Meal Plan Kitchen, California",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    content: "Bitewise centralized everything. No more WhatsApp chaos.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 px-10">
      <div className="container mx-auto mt-10 px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Loved by <span className="text-primary">Nutrition Professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how meal planning businesses are thriving with Bitewise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-md border-0 hover:shadow-lg transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  {/* <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  /> */}
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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

export default Testimonials;