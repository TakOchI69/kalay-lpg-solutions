import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import logo from "@/assets/kalay-logo.png";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb: BreadcrumbItem[];
}

export function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative bg-gradient-navy py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <img src={logo} alt="Kalay LPG" className="h-32 w-auto mx-auto" />
          </motion.div>

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            {breadcrumb.map((item, index) => (
              <span key={item.label} className="flex items-center gap-2">
                {item.href ? (
                  <Link
                    to={item.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-accent text-sm font-medium">{item.label}</span>
                )}
                {index < breadcrumb.length - 1 && (
                  <ChevronRight className="h-4 w-4 text-primary-foreground/40" />
                )}
              </span>
            ))}
          </motion.nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
