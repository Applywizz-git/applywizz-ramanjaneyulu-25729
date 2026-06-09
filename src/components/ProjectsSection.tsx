
import { motion } from "framer-motion";
import {
  FiShield,
  FiCloud,
  FiActivity,
  FiExternalLink,
} from "react-icons/fi";

import projectBiDashboard from "@/assets/project-bi-dashboard.jpg";
import projectCloudCost from "@/assets/project-cloud-cost.jpg";
import projectRiskAnalytics from "@/assets/project-risk-analytics.jpg";

const projects = [
  {
    icon: FiShield,
    title: "Insurance Claims Risk Analytics Platform",
    description:
      "Developed a cloud-native claims analytics platform using AWS Glue, PySpark, and Snowflake to process underwriting and claims datasets, enabling faster fraud analysis and reducing reporting latency across insurance operations.",

    tags: [
      "AWS Glue",
      "PySpark",
      "Snowflake",
      "Kafka",
      "MLflow",
      "Tableau",
    ],

    highlights: [
      "Processed underwriting and claims datasets using AWS Glue and PySpark",
      "Built Kafka-based streaming pipelines for near real-time fraud monitoring",
      "Implemented MLflow feature engineering workflows for anomaly detection",
      "Improved fraud flagging accuracy and accelerated investigation processes",
      "Integrated Snowflake reporting layers with Tableau dashboards",
      "Centralized operational KPIs and claims performance insights",
    ],

    image: projectRiskAnalytics,
  },

  {
    icon: FiCloud,
    title: "Enterprise Banking Data Modernization System",
    description:
      "Engineered Azure Data Factory and Databricks ingestion pipelines to centralize customer and transaction datasets into Synapse Analytics, improving enterprise reporting scalability and reducing manual reconciliation activities.",

    tags: [
      "Azure Data Factory",
      "Databricks",
      "PySpark",
      "Synapse",
      "Airflow",
      "Power BI",
    ],

    highlights: [
      "Centralized customer and transaction datasets into Synapse Analytics",
      "Designed PySpark transformation workflows for large-scale banking data",
      "Implemented Airflow orchestration pipelines",
      "Enabled faster fraud monitoring and operational analytics",
      "Built dimensional analytics models",
      "Delivered Power BI dashboards with near real-time KPI visibility",
    ],

    image: projectBiDashboard,
  },

  {
    icon: FiActivity,
    title: "Healthcare Operations Analytics Framework",
    description:
      "Developed SQL and Python-based healthcare analytics workflows to consolidate patient and operational datasets, improving reporting accuracy and enabling faster clinical decision-making across hospital departments.",

    tags: [
      "SQL",
      "Python",
      "Power BI",
      "Tableau",
      "Healthcare Analytics",
      "Reporting",
    ],

    highlights: [
      "Consolidated patient and operational datasets",
      "Automated recurring reporting processes",
      "Improved visibility into patient flow and resource utilization",
      "Created interactive Tableau dashboards",
      "Built analytical reporting views",
      "Optimized care delivery planning through analytics",
    ],

    image: projectCloudCost,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-widest uppercase font-body mb-2">
            Portfolio
          </p>

          <h2 className="text-6xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group rounded-[2rem] bg-card border border-border overflow-hidden card-3d-hover shadow-lg"
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                type: "spring",
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center shadow-xl card-3d-content">
                  <project.icon
                    className="text-accent-foreground"
                    size={24}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 card-3d-content">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-heading font-black text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <FiExternalLink
                    className="text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    size={20}
                  />
                </div>

                <p className="text-muted-foreground font-body text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-3 text-sm font-heading font-semibold text-foreground"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 text-xs font-heading font-bold rounded-xl bg-accent/5 text-accent border border-accent/10 hover:bg-accent hover:text-accent-foreground transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;