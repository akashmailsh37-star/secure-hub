import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import nortonImage from "@/assets/norton-support.jpg";

const NortonSupport = () => {
  const phoneNumber = "+18884419106";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative border-b overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={nortonImage} 
            alt="Norton Antivirus Support" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mx-auto mb-6 w-32 h-32 rounded-full overflow-hidden border-4 border-border">
              <img 
                src={nortonImage} 
                alt="Norton Support" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Norton Support Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert technical assistance for all your Norton antivirus and security needs
            </p>
            <div className="bg-card border-2 rounded-lg p-6 mb-6">
              <p className="text-sm text-muted-foreground mb-3">24/7 Toll-Free Support Line</p>
              <a
                href={`tel:${phoneNumber}`}
                className="text-4xl md:text-5xl font-bold text-primary hover:text-primary/90 transition-colors"
              >
                {phoneNumber}
              </a>
            </div>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href={`tel:${phoneNumber}`}>
                <Phone className="mr-2 h-6 w-6" />
                Call Now for Immediate Help
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        {/* Services We Provide */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">How We Can Help You</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Installation & Setup</h3>
                <p className="text-sm text-muted-foreground">
                  Complete installation, configuration, and initial setup of Norton products on your devices
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Virus & Malware Removal</h3>
                <p className="text-sm text-muted-foreground">
                  Expert removal of viruses, malware, spyware, and other security threats
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Performance Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Fix slow scans, high CPU usage, and optimize Norton for better system performance
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Subscription Management</h3>
                <p className="text-sm text-muted-foreground">
                  Assistance with renewals, upgrades, and subscription-related issues
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Error Resolution</h3>
                <p className="text-sm text-muted-foreground">
                  Troubleshoot and fix Norton error codes and installation failures
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Security Configuration</h3>
                <p className="text-sm text-muted-foreground">
                  Configure firewall settings, parental controls, and advanced security features
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Need Help Right Now?</h3>
              <p className="text-muted-foreground mb-6">
                Our Norton experts are standing by 24/7 to assist you with any technical issues
              </p>
              <Button asChild size="lg" className="text-lg">
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {phoneNumber}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-muted border-2">
            <CardContent className="pt-6">
              <p className="text-sm text-center text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important Disclaimer:</strong> We are an independent third-party technical support service provider. 
                We are not affiliated with, endorsed by, or directly connected to Norton or its parent company NortonLifeLock. 
                Norton is a registered trademark of NortonLifeLock Inc. We provide independent technical 
                support services for Norton products on a fee-for-service basis. Official support from the manufacturer 
                may be available through their website and customer service channels.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NortonSupport;
