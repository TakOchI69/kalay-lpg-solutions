import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Factory, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Your Trusted LPG Partner
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Kalay LPG (Pvt.) Ltd. is a leading LPG processing and distribution facility 
                serving residential, commercial, and automotive sectors across KPK, Pakistan.
              </p>
              <p className="text-muted-foreground mb-8">
                Located in Sheikhanonao Mera Umerzai, District and Tehsil Charsadda, our modern 
                facility ensures the highest standards of quality and safety in all operations.
              </p>
              
              <Link to="/about">
                <Button variant="outline" className="gap-2 hover:bg-accent hover:text-accent-foreground hover:border-accent">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 gap-4"
            >
              {[
                { icon: Factory, title: "Modern Facility", desc: "State-of-the-art LPG processing plant" },
                { icon: Shield, title: "Safety First", desc: "100% safety certified operations" },
                { icon: Award, title: "Quality Assured", desc: "Premium grade LPG products" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 bg-card rounded-2xl p-5 border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-flame flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
