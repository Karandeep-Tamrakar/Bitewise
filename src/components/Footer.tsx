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
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
    subcribed_from: "Bitewise",
  });
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      toast({
        title: "⚠️ Subscription Failed",
        description: "Email is required to subscribe.",
      });
      return;
    }

    if (!emailRegex.test(formData.email)) {
      toast({
        title: "❌ Invalid Email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    // Success case
    try {
      const response = await fetch(`${apiBaseUrl}subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json(); // parse JSON response

      if (!response.ok) {
        // Show dynamic error message from backend
        toast({
          title: "❌ Failed",
          description:
            data.message || "Something went wrong. Please try again.",
        });
        return;
      }

      // Show dynamic success message from backend
      toast({
        title: "✅ Success",
        description:
          data.message || "Our team will contact you within 24 hours.",
      });

      setFormData({
        email: "",
        subcribed_from: "Bitewise",
      });
    } catch (error: any) {
      // Catch network errors or unexpected issues
      toast({
        title: "❌ Failed",
        description: error.message || "Something went wrong. Please try again.",
      });
    } finally {
    }
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
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Features", "Setup", "Plans", "Reviews"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:engage@qualwebs.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                </div>
                <span>engage@qualwebs.com</span>
              </a>

              <a
                href="https://maps.google.com/?q=Dover,Delaware,USA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Dover, Delaware, USA</span>
              </a>

              {/* Social Links */}
              <div className="pt-2">
                <h5 className="font-medium mb-3">Follow Us</h5>
                <div className="flex gap-2">
                  {[
                    {
                      icon: Facebook,
                      href: "https://www.facebook.com/qualwebs",
                      label: "Facebook",
                    },
                    {
                      icon: Instagram,
                      href: "https://www.instagram.com/qualwebs.in/",
                      label: "Instagram",
                    },
                    {
                      icon: Twitter,
                      href: "https://twitter.com/qualwebs1?lang=en",
                      label: "Twitter",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/company/qualwebs/mycompany/",
                      label: "LinkedIn",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 BiteWise. All rights reserved. Powered by QualWebs.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
