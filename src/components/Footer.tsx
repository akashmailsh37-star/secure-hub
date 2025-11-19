const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SH</span>
            </div>
            <h2 className="text-xl font-bold text-foreground">Secure Hub</h2>
          </div>
          
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Independent third-party technical support services for antivirus and security software.
          </p>
          
          <div className="pt-4 border-t">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Secure Hub. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              We are not affiliated with Norton, McAfee, or their parent companies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
