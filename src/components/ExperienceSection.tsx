import { motion } from "framer-motion";
import { useState } from "react";
import { FiBriefcase, FiChevronDown, FiChevronUp, FiMapPin, FiCalendar, FiTrendingUp } from "react-icons/fi";

const experiences = [
  {
    title: "Data Engineer",
    company: "Capital One",
    location: "McLean, VA",
    period: "Aug 2023 - Present",
    highlights: [
      "Designed Snowflake SQL transformation pipelines for multi-million record datasets, improving segmentation dataset readiness",
      "Built modular dbt transformation models with automated testing and documentation, reducing manual validation by 30%",
      "Optimized complex join strategies and aggregation logic in Snowflake, decreasing transformation runtime by 28%",
      "Collaborated with BI analysts to structure dimensional reporting datasets supporting customer growth measurement",
      "Implemented relational transformation-layer validation checks using SQL data-quality controls",
      "Resolved upstream schema inconsistencies by coordinating with ingestion engineering teams",
      "Improved transformation lineage transparency by documenting dbt model dependencies",
      "Refined dimensional modeling structures supporting segmentation workflows across stakeholder groups",
    ],
  },
  {
    title: "Data Pipeline Engineer",
    company: "Bajaj Finserv Finance",
    location: "India",
    period: "May 2021 - Dec 2022",
    highlights: [
      "Developed Azure Data Factory ingestion pipelines integrating financial datasets into centralized storage",
      "Engineered Spark transformation jobs in Azure Databricks, improving ETL throughput by nearly 30%",
      "Implemented Kafka streaming pipelines enabling near real-time availability of operational financial metrics",
      "Migrated legacy warehouse datasets into Synapse Analytics and ADLS lakehouse, reducing costs by 35%",
      "Automated SQL and Python validation frameworks, improving downstream analytics reliability by 45%",
      "Collaborated with reporting stakeholders to refine dimensional models supporting finance dashboards",
      "Integrated anomaly-detection logic within Spark transformation pipelines identifying irregular behavior",
      "Containerized repeatable transformation workloads using Docker to improve release consistency",
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      className="rounded-[2rem] bg-card border border-border overflow-hidden card-3d-hover shadow-xl relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? 15 : -15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, type: "spring" }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-8 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-6">
          <motion.div
            className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center shrink-0 shadow-lg card-3d-content"
            whileHover={{ rotateY: 180, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <FiBriefcase className="text-accent-foreground" size={28} />
          </motion.div>
          <div>
            <h3 className="text-2xl font-heading font-black text-foreground group-hover:text-accent transition-colors leading-none">{exp.title}</h3>
            <p className="text-accent font-heading font-bold text-base mt-2 tracking-wide uppercase">{exp.company}</p>
            <div className="flex flex-wrap gap-4 mt-3 text-muted-foreground text-xs font-heading font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full"><FiCalendar size={14} className="text-accent" />{exp.period}</span>
              <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full"><FiMapPin size={14} className="text-accent" />{exp.location}</span>
            </div>
          </div>
        </div>
        <motion.div
          className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
          animate={{ rotate: expanded ? 180 : 0, scale: expanded ? 1.1 : 1 }}
        >
          <FiChevronDown size={24} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-10 pt-2 card-3d-content">
          <div className="h-px w-full bg-border mb-8" />
          <ul className="grid md:grid-cols-2 gap-4">
            {exp.highlights.map((h, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-muted-foreground font-body text-base group/item"
                initial={{ opacity: 0, y: 10 }}
                animate={expanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-accent group-hover/item:text-accent-foreground transition-all">
                  <FiTrendingUp size={16} />
                </div>
                <span className="group-hover/item:text-foreground transition-colors">{h}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] -z-10 rounded-full" />
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm tracking-[0.4em] uppercase font-heading font-black mb-4">Journey</p>
          <h2 className="text-6xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
