import { motion } from "framer-motion";
import { FiAward, FiCloud, FiBarChart2, FiFileText, FiDatabase, FiPieChart } from "react-icons/fi";

const certifications = [
  { name: "IBM Data Engineering Professional Certificate", provider: "Coursera", icon: FiDatabase },
  { name: "Google Cloud Data Engineering Professional Certificate", provider: "Coursera", icon: FiCloud },
  { name: "Data Warehousing for Business Intelligence Specialization", provider: "Coursera", icon: FiBarChart2 },
  { name: "Modern Big Data Analysis with SQL Specialization", provider: "Coursera", icon: FiDatabase },
  { name: "Databricks Data Engineering Professional Certificate", provider: "Coursera", icon: FiPieChart },
  { name: "Microsoft Azure Data Engineering Associate (DP-203) Preparation Specialization", provider: "Coursera", icon: FiCloud },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-widest uppercase font-body mb-2">Credentials</p>
          <h2 className="text-6xl md:text-8xl font-heading font-black text-foreground tracking-tighter">Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              className="flex items-center gap-6 rounded-[1.5rem] bg-card border border-border p-6 cursor-pointer card-3d-hover shadow-lg group overflow-hidden relative"
              initial={{ opacity: 0, y: 20, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 blur-3xl -z-10 rounded-full group-hover:bg-accent/20 transition-all duration-700" />
              <motion.div
                className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center shrink-0 shadow-lg card-3d-content"
                whileHover={{ rotateY: 360, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "anticipate" }}
              >
                <cert.icon className="text-accent-foreground" size={24} />
              </motion.div>
              <div className="card-3d-content">
                <p className="text-foreground font-heading font-black text-xs uppercase tracking-wider leading-relaxed">{cert.name}</p>
                <p className="text-accent font-heading font-bold text-[10px] uppercase tracking-[0.2em] mt-2 opacity-80">{cert.provider}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
