import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download, UserCheck, FileText, Clock, Banknote } from "lucide-react";

const ApplicationForm = () => {
  const { toast } = useToast();

  const steps = [
    {
      number: 1,
      title: "Download & Register",
      description: "Install Online Loan from Google Play Store and sign up.",
      icon: <Download className="w-8 h-8" />
    },
    {
      number: 2,
      title: "Complete Personal Information", 
      description: "Submit required details and check your credit limit.",
      icon: <UserCheck className="w-8 h-8" />
    },
    {
      number: 3,
      title: "Apply for Loan",
      description: "Confirm loan plan and submit application.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      number: 4,
      title: "Get Result",
      description: "Instant system review.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      number: 5,
      title: "Receive Funds",
      description: "If approved, loan disbursed directly to your bank account.",
      icon: <Banknote className="w-8 h-8" />
    }
  ];

  const handleApply = () => {
    toast({
      title: "Get Started!",
      description: "Download the Online Loan app from Google Play Store to begin your application.",
    });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How to Apply</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your loan in 5 simple steps. Quick, easy, and secure process.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {steps.map((step, index) => (
              <Card key={step.number} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md relative">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30 transform -translate-y-1/2 z-10"></div>
                )}
              </Card>
            ))}
          </div>

          {/* About Us Section */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">About Online Loan App</h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Online Loan App is the simplest, fastest, and most secure way to borrow funds directly from your mobile device. 
                Our application provides essential short-term financial support, empowering you to cover urgent expenses or seize business opportunities. 
                With flexible repayment terms and a streamlined process, managing your finances has never been easier.
              </p>
            </div>

            <div className="text-center">
              <Button size="lg" onClick={handleApply} className="px-8 py-6 h-auto text-lg">
                <Download className="mr-2 w-5 h-5" />
                Download App & Get Started
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Available on Google Play Store
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;