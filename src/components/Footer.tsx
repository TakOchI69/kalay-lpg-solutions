import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Flame, Phone, MapPin, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/kalay-logo.png";

// Custom icons for platforms not in Lucide
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const ThreadsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.842-.698 2.012-1.108 3.387-1.185 1.21-.068 2.348.082 3.387.436.025-.558.004-1.09-.063-1.584-.238-1.749-1.174-2.64-2.782-2.648-1.07.006-1.908.348-2.49 1.017-.488.56-.764 1.25-.825 2.054l-2.111-.175c.094-1.188.52-2.23 1.27-3.105.98-1.14 2.41-1.738 4.252-1.778 2.38.052 4.063 1.08 4.858 2.97.32.762.5 1.63.538 2.583l.007.252c1.104.648 1.974 1.51 2.53 2.59.757 1.468.873 3.596-.65 5.559-1.646 2.122-4.025 3.26-7.086 3.39zM9.197 14.212c-.046.839.286 1.5.962 1.905.525.313 1.214.478 1.988.435 1.417-.077 2.742-1.053 2.742-3.09 0-.058-.003-.115-.008-.172-.816-.272-1.71-.396-2.652-.368-1.603.064-3.008.653-3.032 1.29z"/>
  </svg>
);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Threads", icon: ThreadsIcon, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "TikTok", icon: TikTokIcon, href: "#" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-navy py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo & About */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-4">
                <img src={logo} alt="Kalay LPG" className="h-36 w-auto" />
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Leading LPG processing and distribution facility serving residential, 
                commercial, and automotive sectors across KPK, Pakistan.
              </p>
            </motion.div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-primary-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-semibold text-primary-foreground mb-4">
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:03091173737" className="flex items-start gap-2 text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                    <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>0309 117 3737</span>
                  </a>
                </li>
                <li>
                  <a href="tel:03424442249" className="flex items-start gap-2 text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                    <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>0342 444 2249</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/923418665166" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                    <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>0341 866 5166 (WhatsApp)</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@kalaylpg.com" className="flex items-start gap-2 text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                    <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>info@kalaylpg.com</span>
                  </a>
                </li>
                <li className="flex items-start gap-2 text-primary-foreground/70 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Sheikhanonao Mera Umerzai, District and Tehsil Charsadda, KPK, Pakistan</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-display font-semibold text-primary-foreground mb-4">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center text-primary-foreground/70 hover:text-accent-foreground transition-all"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
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
