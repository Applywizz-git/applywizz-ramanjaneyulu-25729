import { motion } from "framer-motion";
import {
  FiDatabase, FiBarChart2, FiLayers, FiCode, FiCloud, FiShield, FiSettings, FiCpu, FiActivity, FiZap
} from "react-icons/fi";


const skillCategories = [
  {
    icon: FiCode,
    title: "Programming & Query Languages",
    skills: [
      "Python",
      "SQL",
      "PySpark",
      "Scala",
      "Shell Scripting",
    ],
  },

  {
    icon: FiDatabase,
    title: "Data Engineering & Big Data",
    skills: [
      "Apache Spark",
      "Hadoop",
      "Hive",
      "Kafka",
      "Databricks",
      "Apache Airflow",
      "Snowflake",
      "Delta Lake",
      "Data Lakehouse Architecture",
      "ETL/ELT Pipelines",
      "Data Modeling",
      "Data Warehousing",
      "Real-Time Data Processing",
      "Batch Processing",
    ],
  },

  {
    icon: FiCloud,
    title: "Cloud & ML Integration",
    skills: [
      "AWS S3",
      "AWS Glue",
      "AWS EMR",
      "AWS Redshift",
      "AWS Lambda",
      "AWS Athena",
      "Azure Data Factory",
      "ML Data Pipelines",
      "Feature Engineering Pipelines",
      "ML Data Preparation",
      "MLOps Integration",
    ],
  },

  {
    icon: FiLayers,
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Oracle",
      "MongoDB",
    ],
  },

  {
    icon: FiBarChart2,
    title: "Analytics & Business Intelligence",
    skills: [
      "Power BI",
      "Tableau",
      "Business Intelligence",
      "KPI Reporting",
      "Data Visualization",
      "Analytics Engineering",
      "Customer Analytics",
      "Product Analytics",
      "Predictive Analytics Support",
    ],
  },

  {
    icon: FiSettings,
    title: "DataOps & DevOps",
    skills: [
      "Git",
      "GitHub",
      "CI/CD Pipelines",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Terraform",
      "DataOps",
      "Workflow Orchestration",
    ],
  },

  {
    icon: FiCpu,
    title: "Frameworks & Development",
    skills: [
      "Pandas",
      "NumPy",
      "REST APIs",
      "Microservices-Based Data Integration",
      "API Data Pipelines",
    ],
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
