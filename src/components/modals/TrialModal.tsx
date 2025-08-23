import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, Store, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrialModal = ({ isOpen, onClose }: TrialModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    storeName: "",
    location: "",
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s()]+$/;
    const locationRegex = /^[A-Za-z\s,]+$/;

    if (!formData.name || !nameRegex.test(formData.name)) {
      toast({
        title: "Invalid Name",
        description: "Please enter a valid full name (letters only).",
      });
      return false;
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
      return false;
    }

    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Use numbers only (with + or - if needed).",
      });
      return false;
    }

    if (!formData.storeName.trim()) {
      toast({
        title: "Store Name Required",
        description: "Please enter your store name.",
      });
      return false;
    }

    if (!formData.location || !locationRegex.test(formData.location)) {
      toast({
        title: "Invalid Location",
        description: "Please enter a valid city and state (letters only).",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      setIsLoading(true);

      const response = await fetch(`${apiBaseUrl}submit-enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          store_name: formData.storeName, // match backend field names
          city: formData.location,
          enquiry_from: "Chopwise",
        }),
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

      onClose();
      setFormData({
        name: "",
        email: "",
        phone: "",
        storeName: "",
        location: "",
      });
    } catch (error: any) {
      // Catch network errors or unexpected issues
      toast({
        title: "❌ Failed",
        description: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }

    // // Simulate API call
    // setTimeout(() => {
    //   toast({
    //     title: "✅ Request Submitted",
    //     description: "Our team will contact you within 24 hours.",
    //   });
    //   setIsLoading(false);
    //   onClose();
    //   setFormData({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     storeName: "",
    //     location: "",
    //   });
    // }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Start Your 30-Day Free Trial
          </DialogTitle>
          <p className="text-center text-foreground-secondary">
            No credit card required • Full access • Cancel anytime
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-secondary" />
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-secondary" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-secondary" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 555 123 4567"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Store Name */}
            <div className="space-y-2">
              <Label htmlFor="storeName">Store Name *</Label>
              <div className="relative">
                <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-secondary" />
                <Input
                  id="storeName"
                  placeholder="Fresh Market"
                  value={formData.storeName}
                  onChange={(e) =>
                    handleInputChange("storeName", e.target.value)
                  }
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location (City, State) *</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-secondary" />
                <Input
                  id="location"
                  placeholder="Austin, TX"
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="button-primary w-full text-lg py-6"
            disabled={isLoading}
          >
            {isLoading ? "Setting up your trial..." : "Start My Free Trial"}
          </Button>

          <p className="text-xs text-center text-foreground-secondary">
            By starting your trial, you agree to our Terms of Service and
            Privacy Policy. No credit card required. Cancel anytime.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TrialModal;
