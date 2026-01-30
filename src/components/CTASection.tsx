import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-navy rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss your LPG requirements. Our team is ready to provide 
            the best solutions for your residential, commercial, or automotive needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="flame" size="lg" className="gap-2">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:03091173737">
              <Button variant="hero" size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                0309 117 3737
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
