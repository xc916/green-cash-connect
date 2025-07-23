import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LoanCalculator from "@/components/LoanCalculator";
import ApplicationForm from "@/components/ApplicationForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="calculator">
          <LoanCalculator />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="apply">
          <ApplicationForm />
        </section>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
