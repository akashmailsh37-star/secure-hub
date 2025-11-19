import { Phone, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-support.jpg";
import nortonImage from "@/assets/norton-support.jpg";
import mcafeeImage from "@/assets/mcafee-support.jpg";

const Index = () => {
  const phoneNumber = "+18884419106";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative border-b overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Cybersecurity and technical support" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
        </div>
        
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        {/* Support Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Norton Support Card */}
          <Link to="/norton-support">
            <Card className="border-2 hover:shadow-xl hover:border-primary/50 transition-all cursor-pointer overflow-hidden h-full">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden border-2 border-border">
                  <img 
                    src={nortonImage} 
                    alt="Norton Antivirus Support" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl mb-2">Norton Support</CardTitle>
                <CardDescription className="text-base">
                  Get expert help with Norton antivirus, security, and installation issues
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" size="lg" className="w-full group">
                  View Norton Support
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* McAfee Support Card */}
          <Link to="/mcafee-support">
            <Card className="border-2 hover:shadow-xl hover:border-primary/50 transition-all cursor-pointer overflow-hidden h-full">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden border-2 border-border">
                  <img 
                    src={mcafeeImage} 
                    alt="McAfee Antivirus Support" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl mb-2">McAfee Support</CardTitle>
                <CardDescription className="text-base">
                  Professional support for McAfee antivirus, security, and troubleshooting
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" size="lg" className="w-full group">
                  View McAfee Support
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Services Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6">We Can Help With</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Installation & Setup</h4>
              <p className="text-sm text-muted-foreground">
                Complete installation and configuration assistance
              </p>
            </div>
            <div className="bg-card border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Virus Removal</h4>
              <p className="text-sm text-muted-foreground">
                Expert virus and malware removal services
              </p>
            </div>
            <div className="bg-card border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Performance Issues</h4>
              <p className="text-sm text-muted-foreground">
                Troubleshoot slow scans and system performance
              </p>
            </div>
            <div className="bg-card border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Subscription Help</h4>
              <p className="text-sm text-muted-foreground">
                Renewal and subscription management support
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-muted border-2">
            <CardContent className="pt-6">
              <p className="text-sm text-center text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important Disclaimer:</strong> We are an independent third-party technical support service provider. 
                We are not affiliated with, endorsed by, or directly connected to Norton, McAfee, or their parent companies. 
                Norton and McAfee are registered trademarks of their respective owners. We provide independent technical 
                support services for these products on a fee-for-service basis. Official support from the manufacturers 
                may be available through their respective websites and customer service channels.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
