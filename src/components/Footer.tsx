import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">₦</span>
                </div>
                <div>
                  <div className="font-bold text-xl">FastCash</div>
                  <div className="text-sm text-white/80">Quick Loans Nigeria</div>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Nigeria's leading digital lending platform providing quick, 
                secure, and affordable loans to individuals and businesses across the country.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Apply for Loan</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Loan Calculator</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Check Loan Status</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Customer Portal</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 mt-0.5 text-white/60" />
                  <div>
                    <div className="text-white">+234 (0) 800 FAST LOAN</div>
                    <div className="text-white/60">24/7 Customer Support</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 mt-0.5 text-white/60" />
                  <div>
                    <div className="text-white">support@fastcash.ng</div>
                    <div className="text-white/60">Email Support</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-white/60" />
                  <div>
                    <div className="text-white">Lagos, Nigeria</div>
                    <div className="text-white/60">Head Office</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60">
              © {currentYear} FastCash Nigeria. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span>Licensed by CBN</span>
              <span>•</span>
              <span>NDIC Insured</span>
              <span>•</span>
              <span>SSL Secured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;