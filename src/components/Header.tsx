import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ORDER_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeGmycU_uBljpq8X5K2l2NrHGsvDduOtvR1YZbgSvYprANGMQ/viewform";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="font-script text-2xl lg:text-3xl text-sage">Stitch the Light</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-sage transition-colors duration-300 font-body text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Social */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://instagram.com/stitchthelight"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-sage transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:stitchthelight@gmail.com"
              className="text-foreground/60 hover:text-sage transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <Button variant="sage" size="default" asChild>
              <a href={ORDER_FORM_URL} target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground/80 hover:text-sage transition-colors duration-300 font-body text-lg py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a
                  href="https://instagram.com/stitchthelight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-sage transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="mailto:stitchthelight@gmail.com"
                  className="text-foreground/60 hover:text-sage transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
              <Button variant="sage" size="lg" className="w-full mt-4" asChild>
                <a href={ORDER_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
