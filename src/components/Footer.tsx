import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      toast({
        title: "⚠️ Email Required",
        description: "Please enter your email before subscribing.",
      });
      return;
    }

    if (!emailRegex.test(email)) {
      toast({
        title: "❌ Invalid Email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    toast({
      title: "🎉 Subscribed Successfully",
      description: "You'll now receive the latest updates and insights.",
    });

    setEmail(""); // reset input
  };

  return (
    <footer id="contact" className="bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-primary bg-clip-text text-transparent mb-4">
              BiteWise
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Empowering meal planning business with cloud-based management
              solutions. Streamline your operations and grow your business with
              our comprehensive platform.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold">Stay Updated</h4>
              <div className="flex gap-2 max-w-sm">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="default" size="sm" onClick={handleSubscribe}>
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get the latest updates and industry insights
              </p>
            </div>
          </div>

          {/* Quick Links */}
          {/* ... rest of your footer unchanged ... */}
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 BiteWise. All rights reserved. Powered by QualWebs.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
