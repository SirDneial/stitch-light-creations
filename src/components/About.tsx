import { motion } from "framer-motion";
import { Heart, Sparkles, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every stitch is placed with intention, care, and a whole lot of love.",
    },
    {
      icon: Sparkles,
      title: "Faith-Inspired",
      description: "Each piece is a reflection of light and hope, inspired by Matthew 5:14.",
    },
    {
      icon: Clock,
      title: "Handcrafted",
      description: "No machines here — just hands, thread, and time dedicated to your vision.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-body text-sm tracking-widest uppercase text-sage mb-4">
              Welcome to
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              <span className="font-script text-sage">Stitch</span> the Light
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sage via-pink to-yellow mx-auto rounded-full" />
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              Hi there! I'm so glad you're here. Stitch the Light is my small embroidery 
              business where I create custom, hand-stitched pieces for people who want 
              something truly special.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Whether it's a personalized gift, custom apparel, or a meaningful keepsake, 
              every piece is made just for you — with care, creativity, and a little bit 
              of my heart stitched in.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-background shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-sage" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
