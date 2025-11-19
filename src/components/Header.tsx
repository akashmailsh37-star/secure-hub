import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const phoneNumber = "+18884419106";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">SH</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Secure Hub</h1>
          </div>
          
          <Button asChild size="lg" className="gap-2">
            <a href={`tel:${phoneNumber}`}>
              <Phone className="h-5 w-5" />
              <span className="hidden sm:inline">{phoneNumber}</span>
              <span className="sm:hidden">Call Now</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
