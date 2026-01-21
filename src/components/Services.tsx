import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceFilling from "@/assets/service-filling.jpg";
import serviceStorage from "@/assets/service-storage.jpg";
import serviceDelivery from "@/assets/service-delivery.jpg";

const services = [
  {
    title: "Cylinder Filling",
    description:
      "High-capacity LPG cylinder filling for domestic and commercial use. Our automated filling stations ensure precision and safety.",
    image: serviceFilling,
    features: ["Domestic Cylinders", "Commercial Tanks", "Quality Tested"],
  },
  {
    title: "Bulk Storage",
    description:
      "Large-scale LPG storage solutions with state-of-the-art safety systems and monitoring technology.",
    image: serviceStorage,
    features: ["Massive Capacity", "24/7 Monitoring", "Safety Certified"],
  },
  {
    title: "Distribution",
    description:
      "Reliable LPG distribution network serving businesses across KPK with timely bulk deliveries.",
    image: serviceDelivery,
    features: ["Fleet Service", "Timely Delivery", "Regional Coverage"],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-background" ref={ref}>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 border border-border hover:border-accent/30 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                    <h3 className="absolute bottom-4 left-6 font-display text-2xl font-bold text-primary-foreground">
                      {service.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group/btn hover:bg-accent hover:text-accent-foreground hover:border-accent"
                      onClick={scrollToContact}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
