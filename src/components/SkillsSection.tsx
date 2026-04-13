import { motion } from "framer-motion";
import {
  FiDatabase, FiBarChart2, FiLayers, FiCode, FiCloud, FiShield, FiSettings, FiCpu, FiActivity, FiZap
} from "react-icons/fi";

const skillCategories = [
  {
    icon: FiDatabase,
    title: "Data Engineering & ETL",
    skills: ["Data Engineering", "Data Pipelines", "ETL Development", "Data Transformation", "Data Integration", "Data Modeling (Dimensional & Relational)", "Analytics Engineering"],
  },
  {
    icon: FiCode,
    title: "Programming & Query Languages",
    skills: ["SQL", "Python", "PySpark"],
  },
  {
    icon: FiLayers,
    title: "Data Warehousing & Big Data",
    skills: ["Snowflake", "Amazon Redshift", "Apache Spark", "Kafka"],
  },
  {
    icon: FiCloud,
    title: "Cloud Data Platforms",
    skills: ["AWS (S3, Glue, Redshift)", "Azure (Data Factory, Databricks, Synapse Analytics, ADLS)"],
  },
  {
    icon: FiSettings,
    title: "Pipeline Orchestration",
    skills: ["dbt", "Apache Airflow", "Azure Data Factory"],
  },
  {
    icon: FiCpu,
    title: "Database Engineering",
    skills: ["Relational Databases", "SQL Optimization", "Query Performance Tuning"],
  },
  {
    icon: FiBarChart2,
    title: "Analytics & BI",
    skills: ["Business Intelligence Data Modeling", "Reporting Dataset Engineering"],
  },
  {
    icon: FiShield,
    title: "Data Quality & Governance",
    skills: ["Data Validation Frameworks", "Data Lineage", "Metadata Management"],
  },
  {
    icon: FiActivity,
    title: "Monitoring & Observability",
    skills: ["CloudWatch", "Azure Monitor", "Splunk"],
  },
  {
    icon: FiZap,
    title: "Engineering Practices",
    skills: ["Git", "Agile", "DataOps Collaboration"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-widest uppercase font-body mb-2">Expertise</p>
          <h2 className="text-6xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="rounded-3xl bg-card border border-border p-8 card-3d-hover group"
              initial={{ opacity: 0, y: 40, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center shadow-lg card-3d-content"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <cat.icon className="text-accent-foreground" size={28} />
                </motion.div>
                <h3 className="text-xl font-heading font-black text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 card-3d-content">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-heading font-bold rounded-lg bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all cursor-default"
                    whileHover={{ scale: 1.1, translateZ: 10 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
