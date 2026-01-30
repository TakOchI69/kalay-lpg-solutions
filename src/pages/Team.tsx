import { motion } from "framer-motion";
import { User, Linkedin, Mail } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

const teamMembers = [
  {
    name: "Hassan Nawaz",
    role: "Chief Executive Officer",
    description: "Leading Kalay LPG with vision and dedication to excellence in the LPG industry.",
    isCEO: true,
  },
  {
    name: "Rehman Nawaz",
    role: "Director",
    description: "Overseeing operations and ensuring quality standards across all departments.",
    isCEO: false,
  },
  {
    name: "Zaheer Abbas",
    role: "Director",
    description: "Managing strategic partnerships and business development initiatives.",
    isCEO: false,
  },
  {
    name: "Agha Shahzad",
    role: "Director",
    description: "Driving safety protocols and compliance across all plant operations.",
    isCEO: false,
  },
];

const Team = () => {
  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="Meet the Leadership Behind Kalay LPG"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Team" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* CEO Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="bg-gradient-navy rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-accent/20 border-4 border-accent/40 flex items-center justify-center flex-shrink-0">
                    <User className="h-20 w-20 md:h-24 md:w-24 text-accent" />
                  </div>
                  <div className="text-center md:text-left">
                    <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                      Chief Executive Officer
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                      Hassan Nawaz
                    </h2>
                    <p className="text-primary-foreground/80 text-lg max-w-xl">
                      Leading Kalay LPG with vision, integrity, and a commitment to providing 
                      the highest quality LPG services to our customers across Pakistan. Under his 
                      leadership, Kalay LPG has grown to become a trusted name in the industry.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Directors Section */}
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Board of Directors
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
                Our Leadership Team
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers
                .filter((member) => !member.isCEO)
                .map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-card rounded-3xl p-8 text-center shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-accent/30 h-full">
                      <div className="w-28 h-28 rounded-full bg-secondary border-4 border-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:border-accent/40 transition-colors">
                        <User className="h-14 w-14 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                      <h4 className="font-display text-xl font-bold text-foreground mb-1">
                        {member.name}
                      </h4>
                      <span className="text-accent font-medium text-sm">
                        {member.role}
                      </span>
                      <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* Team Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 text-center"
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Our Core Values
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Safety First", "Quality Excellence", "Customer Focus", "Integrity"].map(
                  (value, index) => (
                    <motion.div
                      key={value}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-secondary rounded-2xl p-6"
                    >
                      <div className="w-3 h-3 rounded-full bg-accent mx-auto mb-3" />
                      <p className="font-semibold text-foreground">{value}</p>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
