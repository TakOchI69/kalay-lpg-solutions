import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import logo from "@/assets/kalay-logo.jpg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-navy py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo & Brand */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <img src={logo} alt="Kalay LPG" className="h-12 w-auto rounded-lg" />
              <div>
                <h3 className="font-display text-xl font-bold text-primary-foreground">
                  Kalay LPG
                </h3>
                <p className="text-primary-foreground/60 text-sm">
                  (Pvt.) Ltd.
                </p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <div className="flex items-center gap-6">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                  className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/10 my-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-primary-foreground/60">
              © {currentYear} Kalay LPG (Pvt.) Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-primary-foreground/60">
              <span>Powering Pakistan with</span>
              <Flame className="h-4 w-4 text-accent animate-pulse-glow" />
              <span className="text-accent font-medium">Premium LPG</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
