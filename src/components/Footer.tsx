import { Heart, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Logo & Tagline */}
          <div className="text-center mb-8">
            <h3 className="font-script text-3xl text-sage mb-2">Stitch the Light</h3>
            <p className="font-heading italic text-muted-foreground text-sm">
              "You are the light of the world." — Matthew 5:14
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="https://instagram.com/stitchthelight"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center text-sage hover:bg-sage hover:text-primary-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:stitchthelight@gmail.com"
              className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center text-sage hover:bg-sage hover:text-primary-foreground transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-8" />

          {/* Copyright */}
          <div className="text-center">
            <p className="font-body text-sm text-muted-foreground flex items-center justify-center gap-1">
              © {currentYear} Stitch the Light. Made with{" "}
              <Heart size={14} className="text-pink fill-pink" /> and lots of thread.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
