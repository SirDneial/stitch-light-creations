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
              href="https://www.tiktok.com/@stitchthelight"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center text-sage hover:bg-sage hover:text-primary-foreground transition-all duration-300"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
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
