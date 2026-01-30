import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import serviceFilling from "@/assets/service-filling.jpg";
import serviceStorage from "@/assets/service-storage.jpg";
import serviceDelivery from "@/assets/service-delivery.jpg";

const services = [
  {
    title: "Cylinder Filling",
    description:
      "High-capacity LPG cylinder filling for domestic and commercial use. Our automated filling stations ensure precision and safety with every fill.",
    image: serviceFilling,
    features: [
      "Domestic Cylinders (11.8 kg & 15 kg)",
      "Commercial Tanks (45.4 kg)",
      "Automated Filling Systems",
      "Quality Tested & Certified",
      "Fast Turnaround Time",
    ],
  },
  {
    title: "Bulk Storage",
    description:
      "Large-scale LPG storage solutions with state-of-the-art safety systems and 24/7 monitoring technology for maximum reliability.",
    image: serviceStorage,
    features: [
      "High Capacity Storage Tanks",
      "24/7 Safety Monitoring",
      "Temperature Controlled",
      "Fire Safety Systems",
      "Regular Maintenance",
    ],
  },
  {
    title: "Distribution & Delivery",
    description:
      "Reliable LPG distribution network serving businesses across KPK with timely bulk deliveries and professional service.",
    image: serviceDelivery,
    features: [
      "Fleet of Delivery Vehicles",
      "Regional Coverage Across KPK",
      "Timely & Reliable Delivery",
      "Bulk & Commercial Orders",
      "Flexible Scheduling",
    ],
  },
];

const Services = () => {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Complete LPG Solutions for All Your Needs"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Services List */}
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative rounded-3xl overflow-hidden group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                      Service 0{index + 1}
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                            <Check className="h-3 w-3 text-accent" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact">
                      <Button variant="flame" className="gap-2">
                        Get Quote
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-24 bg-gradient-navy rounded-3xl p-8 md:p-12 text-center"
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                Contact us today to discuss your specific LPG requirements. Our team is ready 
                to provide tailored solutions for your business.
              </p>
              <Link to="/contact">
                <Button variant="flame" size="lg" className="gap-2">
                  Contact Us Today
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
