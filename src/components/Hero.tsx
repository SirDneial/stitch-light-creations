import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-embroidery.jpg";

const ORDER_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeGmycU_uBljpq8X5K2l2NrHGsvDduOtvR1YZbgSvYprANGMQ/viewform";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful hand embroidery with floral designs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pink/20 blur-3xl animate-float" />
      <div className="absolute bottom-32 right-10 w-40 h-40 rounded-full bg-sage/20 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-yellow/20 blur-3xl animate-float" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-body text-sm lg:text-base tracking-widest uppercase text-sage mb-4"
          >
            Hand-Embroidered with Love
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight"
          >
            <span className="font-script text-sage">Stitch</span> the{" "}
            <span className="font-script text-yellow">Light</span>
          </motion.h1>

          {/* Scripture */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-heading italic text-lg md:text-xl text-foreground/80 mb-8 max-w-xl mx-auto"
          >
            "You are the light of the world. A city set on a hill cannot be hidden."
            <cite className="block text-sm mt-2 text-muted-foreground not-italic">— Matthew 5:14</cite>
          </motion.blockquote>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-body text-muted-foreground text-base lg:text-lg mb-10 max-w-lg mx-auto"
          >
            Custom embroidery pieces crafted with intention and care. Each stitch tells a story.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href={ORDER_FORM_URL} target="_blank" rel="noopener noreferrer">
                Place Custom Order
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#gallery">View My Work</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-sage transition-colors duration-300"
          >
            <span className="text-xs font-body tracking-wider">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
