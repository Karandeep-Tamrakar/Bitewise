import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card ">
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
                <Input placeholder="Enter your email" className="flex-1" />
                <Button variant="outline" size="sm">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get the latest updates and industry insights
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Features", "Hardware", "Plans", "Reviews"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
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
              © 2024 BiteWise. All rights reserved. Powered by QualWebs.
            </p>

            <div className="flex items-center gap-4">
              {/* <Button
                asChild
                size="sm"
                className="bg-primary hover:opacity-90 transition-opacity"
              >
                <a
                  href="https://www.qualwebs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Get Started
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import { Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Footer = () => {
//   return (
//     <footer id="contact" className="bg-foreground text-background">
//       <div className="container-custom">
//         {/* Main Footer Content */}
//         <div className="py-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Company Info */}
//             <div className="space-y-6">
//               <div className="flex items-center space-x-2">
//                 <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
//                   <span className="text-xl font-bold text-primary-foreground">C</span>
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold">BiteWise</h3>
//                   <p className="text-sm text-background/80">Meat & Grocery Solutions</p>
//                 </div>
//               </div>
//               <p className="text-background/80 leading-relaxed">
//                 Empowering meat and grocery stores with innovative cloud-based solutions for complete business management.
//               </p>
//               <div className="flex space-x-4">
//                 <a
//                   href="https://www.facebook.com/qualwebs"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
//                 >
//                   <Facebook className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="https://www.instagram.com/qualwebs.in/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
//                 >
//                   <Instagram className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="https://twitter.com/qualwebs1?lang=en"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
//                 >
//                   <Twitter className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/company/qualwebs/mycompany/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
//               <ul className="space-y-4">
//                 <li><a href="#hero" className="text-background/80 hover:text-background transition-colors">About</a></li>
//                 <li><a href="#modules" className="text-background/80 hover:text-background transition-colors">Features</a></li>
//                 <li><a href="#contact" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
//               </ul>
//             </div>

//             {/* Contact Info */}
//             <div>
//               <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
//               <div className="space-y-4">
//                 <div className="flex items-start space-x-3">
//                   <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                   <div>
//                     <a
//                       href="mailto:engage@qualwebs.com"
//                       className="text-background font-medium hover:text-primary transition-colors"
//                     >
//                       engage@qualwebs.com
//                     </a>
//                     <p className="text-background/80 text-sm">We reply within 24 hours</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                   <div>
//                     <a
//                       href="https://maps.google.com/?q=Dover,Delaware,USA"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-background font-medium hover:text-primary transition-colors"
//                     >
//                       Dover, Delaware, USA
//                     </a>
//                     <p className="text-background/80 text-sm">Serving stores nationwide</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Newsletter Signup */}
//             <div>
//               <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
//               <p className="text-background/80 text-sm mb-4">
//                 Get the latest updates and features
//               </p>
//               <div className="space-y-3">
//                 <div className="flex">
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="flex-1 px-3 py-2 bg-background/10 border border-background/20 rounded-l-lg text-background placeholder-background/60 focus:outline-none focus:border-primary"
//                   />
//                   <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 rounded-r-lg border-0">
//                     Subscribe
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-background/20 py-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
//               <p className="text-background/80 text-sm">
//                 © 2024 BiteWise. All rights reserved.
//               </p>
//               <div className="flex space-x-6 text-sm">
//                 <a href="#" className="text-background/80 hover:text-background transition-colors">Privacy Policy</a>
//                 <a href="#" className="text-background/80 hover:text-background transition-colors">Terms of Service</a>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2 text-sm text-background/80">
//               <span>🔒 Secure & Reliable</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// const Footer = () => {
//   return (
//     <footer id="contact" className="bg-foreground text-background py-12 px-10">
//       <div className="container mx-auto mt-10 px-4">
//         <div className="grid md:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-sm">B</span>
//               </div>
//               <span className="text-2xl font-bold">Bitewise</span>
//             </div>
//             <p className="text-background/70 leading-relaxed">
//               Streamlining meal planning businesses with powerful, easy-to-use tools.
//             </p>
//             <p className="text-background/70 text-sm mt-2">
//               Dover, Delaware, USA<br/>
//               engage@qualwebs.com
//             </p>
//           </div>

//           {/* Product */}
//           <div>
//             <h3 className="font-semibold mb-4">Product</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Features</a></li>
//               <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Pricing</a></li>
//               <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Demo</a></li>
//               <li><a href="#" className="text-background/70 hover:text-background transition-smooth">API</a></li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="font-semibold mb-4">Company</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-background/70 hover:text-background transition-smooth">About</a></li>
//               <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Blog</a></li>
//               <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Careers</a></li>
//               <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Contact</a></li>
//             </ul>
//           </div>

//           {/* Support */}
//           <div>
//             <h3 className="font-semibold mb-4">Support</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Help Center</a></li>
//               <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Documentation</a></li>
//               <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Privacy Policy</a></li>
//               <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Terms of Service</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-background/20 mt-8 pt-8 text-center">
//           <p className="text-background/70">
//             © 2024 Bitewise. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
