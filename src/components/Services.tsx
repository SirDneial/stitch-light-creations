import { motion } from "framer-motion";
import { Shirt, Baby, ShoppingBag, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const ORDER_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeGmycU_uBljpq8X5K2l2NrHGsvDduOtvR1YZbgSvYprANGMQ/viewform";

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: "Custom Apparel",
      description: "Sweatshirts, t-shirts, and more with personalized embroidery — names, initials, or custom designs.",
      color: "bg-sage-light",
      iconColor: "text-sage",
    },
    {
      icon: Baby,
      title: "Baby Items",
      description: "Sweet onesies, blankets, and bibs embroidered with your little one's name or special design.",
      color: "bg-pink-light",
      iconColor: "text-pink",
    },
    {
      icon: ShoppingBag,
      title: "Accessories",
      description: "Tote bags, hats, and pouches customized with beautiful hand-stitched details.",
      color: "bg-yellow-light",
      iconColor: "text-yellow",
    },
    {
      icon: Gift,
      title: "Custom Gifts",
      description: "One-of-a-kind gifts for weddings, graduations, birthdays, or just because.",
      color: "bg-sage-light",
      iconColor: "text-sage",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background relative">
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
            What I Create
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Services & Offerings
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            From personalized apparel to meaningful gifts, each piece is crafted just for you.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-sage/30 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-card rounded-3xl p-8 lg:p-12 border border-border/50"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
              How It Works
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-primary-foreground font-heading text-xl font-bold mb-4">
                  1
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Fill Out Form
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  Tell me about your custom order
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-pink flex items-center justify-center text-foreground font-heading text-xl font-bold mb-4">
                  2
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Get Confirmation
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  I'll email you with details & payment
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center text-foreground font-heading text-xl font-bold mb-4">
                  3
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Receive Your Piece
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  1-2 weeks processing + shipping
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href={ORDER_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Start Your Order
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
