import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Smartphone, 
  Shield, 
  Clock, 
  CreditCard, 
  Users, 
  TrendingUp,
  CheckCircle,
  Banknote
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "No Collateral Required",
      description: "Borrow with confidence; no assets or guarantors needed."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Disbursement", 
      description: "Funds transferred directly to your bank account."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Higher Loan Limits",
      description: "Access increased loan amounts upon timely repayments."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Your information is protected with advanced encryption and handled with utmost care."
    }
  ];

  const benefits = [
    "Instant loan disbursement to your bank account",
    "Competitive interest rates starting from 5%",
    "No hidden fees or charges",
    "24/7 customer support",
    "Credit score improvement tracking",
    "Loan amount up to ₦500,000"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Features Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Our Loans?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We make borrowing simple, fast, and secure with features designed for modern Nigerians.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-accent/30 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Banknote className="w-8 h-8 text-primary" />
                Loan Benefits
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h4 className="text-2xl font-bold mb-4 text-center">Loan Limits</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-accent/50 rounded-lg">
                  <span className="font-medium">Minimum Loan</span>
                  <span className="text-xl font-bold text-primary">₦10,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-accent/50 rounded-lg">
                  <span className="font-medium">Maximum Loan</span>
                  <span className="text-xl font-bold text-primary">₦500,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-accent/50 rounded-lg">
                  <span className="font-medium">Interest Rate (from)</span>
                  <span className="text-xl font-bold text-primary">5%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-accent/50 rounded-lg">
                  <span className="font-medium">Repayment Period</span>
                  <span className="text-xl font-bold text-primary">1-12 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;