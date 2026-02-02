import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/PageHeader";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "0309 117 3737",
    href: "tel:03091173737",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0342 444 2249",
    href: "tel:03424442249",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "0341 866 5166",
    href: "https://wa.me/923418665166",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@kalaylpg.com",
    href: "mailto:info@kalaylpg.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sheikhanonao Mera Umerzai, District and Tehsil Charsadda, KPK, Pakistan",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 8AM - 6PM",
    href: "#",
  },
];

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in Touch for Your LPG Requirements"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-8">
                  Let's Connect
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-flame flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="text-foreground font-medium group-hover:text-accent transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-10 rounded-2xl overflow-hidden border border-border h-64 bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground p-6">
                    <MapPin className="h-10 w-10 mx-auto mb-3 text-accent" />
                    <p className="font-medium text-foreground mb-1">Kalay LPG Plant</p>
                    <p className="text-sm">
                      Sheikhanonao Mera Umerzai,<br />
                      District and Tehsil Charsadda,<br />
                      KPK, Pakistan
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                    Request a Quote
                  </h3>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        Thank You!
                      </h4>
                      <p className="text-muted-foreground">
                        We'll get back to you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Name
                          </label>
                          <Input placeholder="Your name" required className="bg-background" />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Phone
                          </label>
                          <Input placeholder="Phone number" required className="bg-background" />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="bg-background"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Service Required
                        </label>
                        <select
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="cylinder">Cylinder Filling</option>
                          <option value="bulk">Bulk Storage</option>
                          <option value="distribution">Distribution</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Message
                        </label>
                        <Textarea
                          placeholder="Tell us about your requirements..."
                          rows={4}
                          className="bg-background resize-none"
                        />
                      </div>

                      <Button variant="flame" size="lg" className="w-full gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
