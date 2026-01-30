import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceFilling from "@/assets/service-filling.jpg";
import serviceStorage from "@/assets/service-storage.jpg";
import serviceDelivery from "@/assets/service-delivery.jpg";

const services = [
  {
    title: "Cylinder Filling",
    description: "High-capacity LPG cylinder filling for domestic and commercial use.",
    image: serviceFilling,
  },
  {
    title: "Bulk Storage",
    description: "Large-scale LPG storage with state-of-the-art safety systems.",
    image: serviceStorage,
  },
  {
    title: "Distribution",
    description: "Reliable LPG distribution network serving businesses across KPK.",
    image: serviceDelivery,
  },
];

export function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete LPG solutions from processing and storage to filling and distribution.
            </p>
          </motion.div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 border border-border hover:border-accent/30 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                    <h3 className="absolute bottom-4 left-6 font-display text-xl font-bold text-primary-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <Link to="/services">
              <Button variant="outline" size="lg" className="gap-2 hover:bg-accent hover:text-accent-foreground hover:border-accent">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
