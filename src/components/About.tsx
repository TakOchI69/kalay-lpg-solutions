import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Award, Users, Factory } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "State-of-Art Facility",
    description: "Modern LPG plant equipped with latest technology for safe processing and storage.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Meeting all safety standards and regulations for commercial LPG operations.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals ensuring smooth operations and customer satisfaction.",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Located in Charsadda, KPK for efficient distribution across the region.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-secondary/50" ref={ref}>
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
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Your Trusted LPG Partner
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kalay LPG (Pvt.) Ltd. is a leading LPG processing and distribution facility 
              serving residential, commercial, and automotive sectors across KPK, Pakistan.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-6 h-full shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-accent/30">
                  <div className="w-12 h-12 rounded-xl bg-gradient-flame flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 bg-gradient-navy rounded-3xl p-8 md:p-12 text-center"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed">
              To provide safe, reliable, and cost-effective LPG solutions while maintaining 
              the highest standards of quality and customer service. We are committed to 
              powering growth and improving lives across Pakistan.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
