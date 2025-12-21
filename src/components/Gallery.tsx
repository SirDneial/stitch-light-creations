import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import sample1 from "@/assets/embroidery-sample-1.jpg";
import sample2 from "@/assets/embroidery-sample-2.jpg";
import sample3 from "@/assets/embroidery-sample-3.jpg";
import sample4 from "@/assets/embroidery-sample-4.jpg";

const Gallery = () => {
  const images = [
    { src: sample1, alt: "Custom monogram embroidery on linen fabric" },
    { src: sample2, alt: "Embroidered baby onesie with floral design" },
    { src: sample3, alt: "Custom embroidered tote bag with quote" },
    { src: sample4, alt: "Embroidered sweatshirt neckline with custom letters" },
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

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-body text-muted-foreground mb-4">
            See more of my work on Instagram
          </p>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
