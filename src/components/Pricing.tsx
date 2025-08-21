import { Crown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Pricing = () => {
  const features = [
    "Branded website & mobile app",
          "Orders, payments, and customer profiles",
          "Basic inventory & real-time alerts",
          "Standard support",
          "No yearly commitments",
  ];

  return (
    <section id="plans" className="py-20 bg-background border-b-2 border-t-2">
      <div className="container mx-auto px-4 mt-10">
        {/* Heading */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Flexible <span className="text-primary">Subscription Plans</span>{" "}
            for Your Business
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Everything you need to run and grow your meat and grocery business.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8 p-6 bg-white rounded-xl shadow-lg relative overflow-hidden group transition hover:bg-green-50">
          {/* Icon & Heading */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="w-16 h-16 rounded-xl bg-primary p-4 mb-6 mx-auto lg:mx-0 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
              BiteWise
            </h3>
            <p className="text-muted-foreground mb-6">
              Complete business management solution for meat and grocery stores
            </p>

            {/* CTA Button */}
            <Button
              asChild
              className="w-full lg:w-auto bg-primary hover:opacity-90 transition-opacity shadow-red"
            >
              <a
                href="https://www.qualwebs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Request a Demo
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Features List */}
          <div className="lg:col-span-2 mt-8 lg:mt-0">
            <h4 className="text-lg font-semibold mb-6 text-foreground">
              Everything included:
            </h4>
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Pricing Note */}
            <div className="mt-8 p-4 bg-muted/20 rounded-lg border border-border/30">
              <p className="text-sm text-muted-foreground">
                Pricing starting at{" "}
                <span className="font-medium text-foreground">$99/month</span>{" "}
                based on your store size and needs. Contact us for a
                personalized quote and demo.
              </p>
            </div>
          </div>

          {/* Hover Indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-green-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl"></div>
        </div>
      </div>

      {/* Contact Modal */}
    </section>
  );
};

export default Pricing;

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Check } from "lucide-react";

// const plans = [
//   {
//     name: "Starter",
//     price: "$99",
//     period: "/mo",
//     features: [
//       "Branded website & mobile app",
//       "Orders, payments, and customer profiles",
//       "Basic inventory & real-time alerts",
//       "Standard support",
//       "No yearly commitments"
//     ]
//   },
//   {
//     name: "Growth",
//     price: "$179",
//     period: "/mo",
//     features: [
//       "Everything in Starter",
//       "Custom meal-plan builder & daily selections",
//       "Delivery scheduling & live tracking",
//       "Chef labels + \"To the Kitchen\" checklists",
//       "Reports & analytics"
//     ],
//     popular: true
//   },
//   {
//     name: "Pro",
//     price: "$299",
//     period: "/mo",
//     features: [
//       "Everything in Growth",
//       "Multi-location & team roles",
//       "Priority support & onboarding",
//       "Advanced inventory (bundles, BOM)",
//       "Loyalty & coupons"
//     ]
//   }
// ];

// const Pricing = () => {
//   return (
//     <section className="py-20 bg-green-50">
//       <div className="container mx-auto mt-10 px-4">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-4xl font-bold mb-4">
//             Simple, Transparent
//             <span className="text-primary"> Pricing</span>
//           </h2>
//           <p className="text-xl text-muted-foreground">
//             Choose the plan that fits your business size and needs.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {plans.map((plan, index) => (
//             <Card key={index} className={`shadow-lg border-0 relative overflow-hidden ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
//               {plan.popular && (
//                 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-hero"></div>
//               )}
//               {plan.popular && (
//                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//                   <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
//                     Most Popular
//                   </span>
//                 </div>
//               )}

//               <CardHeader className="text-center pb-8 pt-8">
//                 <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
//                 <div className="mt-4">
//                   <span className="text-4xl font-bold">{plan.price}</span>
//                   <span className="text-muted-foreground ml-1">{plan.period}</span>
//                 </div>
//               </CardHeader>

//               <CardContent className="space-y-6">
//                 <div className="space-y-4">
//                   {plan.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-center gap-3">
//                       <div className="flex-shrink-0 w-5 h-5 bg-success rounded-full flex items-center justify-center">
//                         <Check className="w-3 h-3 text-white" />
//                       </div>
//                       <span className="text-foreground text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="pt-6">
//                   <Button
//                     variant={plan.popular ? "cta" : "outline"}
//                     size="lg"
//                     className="w-full"
//                   >
//                     Start Your Free Demo
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <p className="text-muted-foreground">
//             Need a custom solution?
//             <a href="#contact" className="text-primary hover:underline ml-1">Contact our sales team</a>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;
