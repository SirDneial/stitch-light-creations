import { motion } from "framer-motion";
import { Mail, Instagram, Clock, CreditCard, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ORDER_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeGmycU_uBljpq8X5K2l2NrHGsvDduOtvR1YZbgSvYprANGMQ/viewform";

const Contact = () => {
  const policies = [
    {
      icon: Clock,
      title: "Processing Time",
      description: "1-2 weeks (plus shipping)",
    },
    {
      icon: CreditCard,
      title: "Payment",
      description: "Venmo or PayPal, due within 24 hours of confirmation",
    },
    {
      icon: AlertCircle,
      title: "Refund Policy",
      description: "All sales are final since each item is custom made",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background relative">
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
              Let's Connect
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Ready to Order?
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
              I'd love to create something special for you. Fill out the order form and I'll be in touch soon!
            </p>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-sage-light via-card to-pink-light rounded-3xl p-8 lg:p-12 mb-12 border border-sage/20"
          >
            <div className="text-center">
              <h3 className="font-script text-3xl md:text-4xl text-sage mb-4">
                Let's create something beautiful
              </h3>
              <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
                Click below to fill out the custom order form. Tell me about your vision, and together we'll bring it to life.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href={ORDER_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Place Custom Order
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Policies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {policies.map((policy, index) => (
              <div
                key={policy.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50"
              >
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mb-4">
                  <policy.icon className="w-5 h-5 text-sage" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {policy.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  {policy.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
          >
            <a
              href="mailto:stitchthelight@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-sage transition-colors duration-300"
            >
              <Mail size={20} />
              <span className="font-body">stitchthelight@gmail.com</span>
            </a>
            <span className="hidden sm:inline text-border">•</span>
            <a
              href="https://instagram.com/stitchthelight"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-sage transition-colors duration-300"
            >
              <Instagram size={20} />
              <span className="font-body">@stitchthelight</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
