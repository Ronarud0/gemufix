import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GEMU
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Experience luxury gaming and entertainment in a sophisticated environment. Where every moment becomes unforgettable.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-display font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+62xxx"
                className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+62 xxx xxxx xxxx</span>
              </a>
              <a
                href="mailto:info@gemu-indonesia.com"
                className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@gemu-indonesia.com</span>
              </a>
              <div className="flex items-start gap-3 text-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-display font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Gallery", "Booking"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-foreground/70 hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-xl font-display font-semibold text-foreground">Opening Hours</h4>
            <div className="space-y-2 text-foreground/70">
              <p>Monday - Thursday</p>
              <p className="font-semibold text-foreground">2:00 PM - 2:00 AM</p>
              <p className="mt-3">Friday - Sunday</p>
              <p className="font-semibold text-foreground">12:00 PM - 3:00 AM</p>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Gemu Indonesia. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/gemu_indonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@gemu_indonesia</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
