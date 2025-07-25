import ReactMarkdown from 'react-markdown';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const markdownContent = `
# Privacy Policy

Last updated: ${new Date().toLocaleDateString()}

## Information We Collect

We collect information you provide directly to us, such as when you create an account, apply for a loan, or contact us for support.

### Personal Information
- Name and contact information
- Financial information for loan assessment
- Identity verification documents
- Transaction history

### Automatically Collected Information
- Device and browser information
- IP address and location data
- Usage patterns and preferences

## How We Use Your Information

We use the information we collect to:
- Process and evaluate loan applications
- Provide customer support
- Improve our services
- Comply with legal requirements

## Information Sharing

We do not sell, trade, or otherwise transfer your personal information to third parties except:
- With your consent
- To service providers who assist us
- When required by law
- To protect our rights and safety

## Data Security

We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

## Your Rights

You have the right to:
- Access your personal information
- Correct inaccurate information
- Request deletion of your information
- Opt out of marketing communications

## Contact Us

If you have questions about this Privacy Policy, please contact us at:
- Email: privacy@fastcash.ng
- Phone: +234 (0) 800 FAST LOAN
  `;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;