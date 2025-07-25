import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Bridge Your Gap
              </h1>
              <p className="text-xl text-white/90 max-w-lg">
                Turn financial hurdles into opportunities.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">5 Minutes</div>
                  <div className="text-sm text-white/80">Application</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">100% Secure</div>
                  <div className="text-sm text-white/80">Bank Grade</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Mobile First</div>
                  <div className="text-sm text-white/80">Easy to Use</div>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8 py-6 h-auto"
              >
                <Smartphone className="mr-2 w-5 h-5" />
                Google Play
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
              >
                <Smartphone className="mr-2 w-5 h-5" />
                App Store
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Nigerian professionals using mobile banking" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute top-8 -left-8 bg-white rounded-xl p-6 shadow-xl z-20 max-w-xs">
              <div className="text-sm text-muted-foreground mb-2">Loan Approved!</div>
              <div className="text-2xl font-bold text-primary">₦250,000</div>
              <div className="text-sm text-muted-foreground">in 2 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;