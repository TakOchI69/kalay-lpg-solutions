import { motion } from "framer-motion";
import { MapPin, Award, Users, Factory, Shield, Target, Eye } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

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

const About = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Your Trusted LPG Partner in Pakistan"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Company Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Who We Are
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                  Leading LPG Solutions Provider in KPK
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Kalay LPG (Pvt.) Ltd. is a leading LPG processing and distribution facility 
                  serving residential, commercial, and automotive sectors across KPK, Pakistan.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our plant is located in Sheikhanonao Mera Umerzai, District and Tehsil Charsadda, 
                  strategically positioned to serve the entire region with premium quality LPG products.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We provide quality LPG to our consumers with the right ratio combination of Butane & 
                  Propane with high pressure, ensuring clean and efficient fuel for all your needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-flame rounded-3xl p-8 md:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-accent-foreground mb-2">10+</div>
                      <div className="text-accent-foreground/80 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-accent-foreground mb-2">50+</div>
                      <div className="text-accent-foreground/80 text-sm">Tons Daily</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-accent-foreground mb-2">100%</div>
                      <div className="text-accent-foreground/80 text-sm">Safety Certified</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-accent-foreground mb-2">24/7</div>
                      <div className="text-accent-foreground/80 text-sm">Operations</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-navy rounded-3xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Target className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary-foreground">
                    Our Mission
                  </h3>
                </div>
                <p className="text-primary-foreground/80 leading-relaxed">
                  To provide safe, reliable, and cost-effective LPG solutions while maintaining 
                  the highest standards of quality and customer service. We are committed to 
                  powering growth and improving lives across Pakistan.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card rounded-3xl p-8 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Our Vision
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted and preferred LPG supplier in KPK, known for our 
                  commitment to safety, quality, and customer satisfaction while contributing 
                  to the energy needs of growing Pakistan.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
