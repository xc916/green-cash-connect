import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import successImage from "@/assets/success-image.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chioma Okafor",
      role: "Small Business Owner",
      content: "I needed quick funding for my boutique and got approved within hours. The process was so simple and the customer service was excellent.",
      rating: 5,
      avatar: "CO"
    },
    {
      name: "Ahmed Ibrahim",
      role: "University Student",
      content: "The education loan helped me complete my final year without stress. Flexible repayment terms made it perfect for my situation.",
      rating: 5,
      avatar: "AI"
    },
    {
      name: "Grace Adebayo",
      role: "Healthcare Worker",
      content: "When I had a medical emergency, this platform came through for me. Fast approval and money in my account the same day.",
      rating: 5,
      avatar: "GA"
    },
    {
      name: "Emeka Nwosu",
      role: "Entrepreneur",
      content: "I've used several loan platforms, but this one stands out. Transparent pricing, no hidden fees, and excellent mobile app.",
      rating: 5,
      avatar: "EN"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have successfully gotten loans through our platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Testimonials Grid */}
          <div className="grid gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary text-white font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{testimonial.role}</p>
                      <div className="relative">
                        <Quote className="w-5 h-5 text-primary/30 absolute -top-1 -left-1" />
                        <p className="text-muted-foreground italic pl-6">
                          "{testimonial.content}"
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Success Image */}
          <div className="relative">
            <img 
              src={successImage} 
              alt="Nigerian professionals celebrating financial success" 
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute top-6 left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-sm text-muted-foreground">Total Loans Disbursed</div>
              <div className="text-2xl font-bold text-primary">₦2.5B+</div>
            </div>
            <div className="absolute bottom-6 right-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-sm text-muted-foreground">Happy Customers</div>
              <div className="text-2xl font-bold text-primary">50,000+</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-accent/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Trusted by Thousands</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-muted-foreground">Customers Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">₦2.5B+</div>
              <div className="text-muted-foreground">Loans Disbursed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Approval Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;