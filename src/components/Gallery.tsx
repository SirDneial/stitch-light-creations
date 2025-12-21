import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import sample1 from "@/assets/embroidery-sample-1.jpg";
import sample2 from "@/assets/embroidery-sample-2.jpg";
import sample3 from "@/assets/embroidery-sample-3.jpg";
import sample4 from "@/assets/embroidery-sample-4.jpg";

const Gallery = () => {
  const images = [
    { src: sample1, alt: "Stitch the Light booth at local craft market with handmade goods" },
    { src: sample2, alt: "Packaged handmade bow with gingham ribbon and Stitch the Light branding" },
    { src: sample3, alt: "Handmade quilted knot bag with floral fabric and velvet bow" },
    { src: sample4, alt: "Custom UGA sweatshirt with appliqué letters and pink gingham pennant" },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-widest uppercase text-sage mb-4">
            Recent Work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Gallery
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            A glimpse at some of my favorite custom pieces. Each one made with love.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-muted"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Social CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-body text-muted-foreground mb-4">
            See more of my work on social media
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="sage-outline" size="lg" asChild>
              <a
                href="https://instagram.com/stitchthelight"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram size={20} />
                @stitchthelight
              </a>
            </Button>
            <Button variant="pink-outline" size="lg" asChild>
              <a
                href="https://www.tiktok.com/@stitchthelight"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                @stitchthelight
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
