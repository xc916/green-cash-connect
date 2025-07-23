import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { UserCheck, FileText, Lock } from "lucide-react";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bvn: '',
    loanAmount: '',
    loanPurpose: '',
    employmentStatus: '',
    monthlyIncome: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 24 hours.",
    });
  };

  const steps = [
    {
      number: 1,
      title: "Personal Information",
      icon: <UserCheck className="w-5 h-5" />
    },
    {
      number: 2,
      title: "Loan Details",
      icon: <FileText className="w-5 h-5" />
    },
    {
      number: 3,
      title: "Verification",
      icon: <Lock className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Apply for Your Loan</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete your application in 3 simple steps. It takes less than 5 minutes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`
                    flex items-center justify-center w-12 h-12 rounded-full border-2 
                    ${currentStep >= step.number 
                      ? 'bg-primary border-primary text-white' 
                      : 'border-muted-foreground text-muted-foreground'
                    }
                  `}>
                    {step.icon}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <div className={`text-sm font-medium ${
                      currentStep >= step.number ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      Step {step.number}
                    </div>
                    <div className="text-xs text-muted-foreground">{step.title}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 ml-8 ${
                      currentStep > step.number ? 'bg-primary' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Loan Application Form</CardTitle>
              <CardDescription>
                Fill in your details below to get started with your loan application.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+234 801 234 5678"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="bvn">BVN (Bank Verification Number)</Label>
                      <Input
                        id="bvn"
                        value={formData.bvn}
                        onChange={(e) => handleInputChange('bvn', e.target.value)}
                        placeholder="Enter your 11-digit BVN"
                        maxLength={11}
                        required
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="loanAmount">Loan Amount (₦)</Label>
                        <Select value={formData.loanAmount} onValueChange={(value) => handleInputChange('loanAmount', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select loan amount" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10000">₦10,000</SelectItem>
                            <SelectItem value="25000">₦25,000</SelectItem>
                            <SelectItem value="50000">₦50,000</SelectItem>
                            <SelectItem value="100000">₦100,000</SelectItem>
                            <SelectItem value="250000">₦250,000</SelectItem>
                            <SelectItem value="500000">₦500,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="loanPurpose">Loan Purpose</Label>
                        <Select value={formData.loanPurpose} onValueChange={(value) => handleInputChange('loanPurpose', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="What do you need the loan for?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="medical">Medical Emergency</SelectItem>
                            <SelectItem value="personal">Personal</SelectItem>
                            <SelectItem value="home">Home Improvement</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="employmentStatus">Employment Status</Label>
                        <Select value={formData.employmentStatus} onValueChange={(value) => handleInputChange('employmentStatus', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select employment status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="employed">Employed</SelectItem>
                            <SelectItem value="self-employed">Self Employed</SelectItem>
                            <SelectItem value="business-owner">Business Owner</SelectItem>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="unemployed">Unemployed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="monthlyIncome">Monthly Income (₦)</Label>
                        <Select value={formData.monthlyIncome} onValueChange={(value) => handleInputChange('monthlyIncome', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select income range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-50000">Under ₦50,000</SelectItem>
                            <SelectItem value="50000-100000">₦50,000 - ₦100,000</SelectItem>
                            <SelectItem value="100000-250000">₦100,000 - ₦250,000</SelectItem>
                            <SelectItem value="250000-500000">₦250,000 - ₦500,000</SelectItem>
                            <SelectItem value="over-500000">Over ₦500,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="text-center space-y-6">
                    <div className="bg-accent/50 rounded-xl p-8">
                      <h3 className="text-2xl font-bold mb-4">Review Your Application</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-left">
                        <div>
                          <strong>Name:</strong> {formData.firstName} {formData.lastName}
                        </div>
                        <div>
                          <strong>Email:</strong> {formData.email}
                        </div>
                        <div>
                          <strong>Phone:</strong> {formData.phone}
                        </div>
                        <div>
                          <strong>Loan Amount:</strong> ₦{formData.loanAmount}
                        </div>
                        <div>
                          <strong>Purpose:</strong> {formData.loanPurpose}
                        </div>
                        <div>
                          <strong>Employment:</strong> {formData.employmentStatus}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      By submitting this application, you agree to our terms and conditions 
                      and authorize us to verify the information provided.
                    </p>
                  </div>
                )}

                <div className="flex justify-between pt-6">
                  {currentStep > 1 && (
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setCurrentStep(currentStep - 1)}
                    >
                      Previous
                    </Button>
                  )}
                  {currentStep < 3 ? (
                    <Button 
                      type="button"
                      onClick={() => setCurrentStep(currentStep + 1)}
                      className="ml-auto"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button type="submit" className="ml-auto">
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;