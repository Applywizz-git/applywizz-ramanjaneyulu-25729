import { motion } from "framer-motion";
import { useState } from "react";
import { FiBriefcase, FiChevronDown, FiChevronUp, FiMapPin, FiCalendar, FiTrendingUp } from "react-icons/fi";

const experiences = [
  {
    title: "Data Engineer",
    company: "Chubb",
    location: "New York, NY",
    period: "Aug 2023 - Present",
    highlights: [
      "Engineered PySpark and AWS Glue ETL pipelines to process 8TB+ of underwriting and claims data daily, reducing ingestion latency by 42% and improving downstream analytics availability across enterprise reporting teams.",
      "Architected Kafka and AWS Kinesis streaming pipelines for policyholder event processing, enabling near real-time operational dashboards with data freshness maintained under five minutes.",
      "Automated Airflow-based workflow orchestration for batch and incremental data pipelines integrating 20+ source systems, reducing manual operational effort by 45% across distributed environments.",
      "Optimized Snowflake warehouse performance using clustering keys, query tuning, and partition strategies, improving analytical query execution by 50% while lowering compute utilization costs.",
      "Implemented ML feature engineering pipelines using PySpark and MLflow to support fraud detection and actuarial risk scoring models, reducing model preparation time by 38%.",
      "Integrated AWS S3-based data lake architecture with curated Snowflake reporting layers, enabling centralized access to governed datasets for analytics, finance, and actuarial teams.",
      "Collaborated with data scientists, reporting analysts, and compliance stakeholders to deploy anomaly detection workflows supporting fraud monitoring and PCI-DSS aligned reporting requirements.",
      "Streamlined CI/CD deployment processes using Terraform, Docker, and Jenkins, improving cloud-native release consistency and reducing production deployment issues by 32%.",
    ],
  },
  {
    title: "Data Engineer",
    company: "ICICI Bank",
    location: "India",
    period: "Jan 2022 - Dec 2022",
    highlights: [
      "Developed Azure Data Factory and Databricks ETL workflows to consolidate high-volume banking transaction data into centralized Azure analytics platforms supporting fraud and customer reporting initiatives.",
      "Designed PySpark-based transformation pipelines processing more than 5TB of structured and semi-structured financial datasets daily, reducing batch processing runtime by 34% across enterprise workloads.",
      "Built Azure Synapse and ADLS Gen2 ingestion frameworks to centralize customer, compliance, and transactional datasets for operational analytics and regulatory reporting teams.",
      "Coordinated with risk, compliance, and reporting stakeholders to deliver governed datasets supporting audit readiness and enterprise regulatory reporting requirements across banking operations.",
      "Enhanced SQL query performance and Databricks notebook execution processes, improving Power BI dashboard refresh speed by 41% for leadership and operational reporting users.",
      "Implemented Apache Airflow monitoring and automated recovery mechanisms for enterprise pipelines, reducing production workflow failures by 29% and improving platform reliability.",
      "Consolidated third-party customer and financial datasets through REST API integration pipelines, improving enterprise reporting consistency and reducing manual reconciliation activities.",
      "Designed dimensional data models and curated analytics layers supporting customer activity analysis, branch operations reporting, and executive KPI monitoring across business intelligence platforms.",
    ],
  },
  {
    title: "Data Analyst",
    company: "Medanta",
    location: "India",
    period: "Jan 2021 - Dec 2021",
    highlights: [
      "Analyzed large-scale clinical and operational datasets using SQL and Python to support patient outcome reporting, treatment analysis, and hospital operations monitoring across multi-specialty healthcare units.",
      "Developed interactive Power BI and Tableau dashboards for finance, supply chain, and clinical operations teams, reducing manual reporting effort by 50% through automated KPI reporting solutions.",
      "Transformed structured and semi-structured healthcare datasets from multiple reporting systems using Python and SQL, improving enterprise data completeness from 78% to 96%.",
      "Collaborated with clinical informatics and IT teams to standardize reporting datasets and implement HIPAA-compliant data handling processes across operational analytics workflows.",
      "Automated recurring reporting and validation workflows using Python scripting and Excel automation, saving approximately 15 analyst hours per week across reporting operations.",
      "Identified patient readmission trends and operational bottlenecks through cohort analysis and statistical reporting, contributing to a 12% reduction in 30-day readmission rates.",
      "Streamlined source-to-report reconciliation processes for healthcare reporting datasets, improving reporting consistency and reducing manual validation effort for analytics teams.",
      "Supported executive reporting initiatives by building SQL reporting views and operational dashboards used for hospital capacity planning and treatment performance analysis.",
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
