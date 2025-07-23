import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingUp } from "lucide-react";

const LoanCalculator = () => {
  const [amount, setAmount] = useState([100000]);
  const [duration, setDuration] = useState("3");

  const interestRates = {
    "1": 5,
    "3": 12,
    "6": 20,
    "12": 35
  };

  const calculateLoan = () => {
    const principal = amount[0];
    const months = parseInt(duration);
    const rate = interestRates[duration as keyof typeof interestRates];
    const interest = (principal * rate) / 100;
    const total = principal + interest;
    const monthly = total / months;

    return {
      principal,
      interest,
      total,
      monthly,
      rate
    };
  };

  const loan = calculateLoan();

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Calculate Your Loan</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Use our loan calculator to estimate your repayment amount and see how much you can borrow.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-0 bg-white">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Calculator className="w-6 h-6 text-primary" />
                Loan Calculator
              </CardTitle>
              <CardDescription>
                Adjust the amount and duration to see your loan details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-4">
                      Loan Amount: ₦{amount[0].toLocaleString()}
                    </label>
                    <Slider
                      value={amount}
                      onValueChange={setAmount}
                      max={500000}
                      min={10000}
                      step={10000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>₦10,000</span>
                      <span>₦500,000</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Loan Duration
                    </label>
                    <Select value={duration} onValueChange={setDuration}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Month</SelectItem>
                        <SelectItem value="3">3 Months</SelectItem>
                        <SelectItem value="6">6 Months</SelectItem>
                        <SelectItem value="12">12 Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Results Section */}
                <div className="bg-accent/50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Loan Summary
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Loan Amount:</span>
                      <span className="font-semibold">₦{loan.principal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Interest ({loan.rate}%):</span>
                      <span className="font-semibold">₦{loan.interest.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-muted-foreground">Total Repayment:</span>
                      <span className="font-bold text-lg">₦{loan.total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monthly Payment:</span>
                      <span className="font-bold text-primary text-lg">₦{Math.ceil(loan.monthly).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="px-8">
                  Apply for This Loan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;