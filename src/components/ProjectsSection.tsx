import { motion } from "framer-motion";
import { FiLayers, FiCloud, FiUsers, FiCpu, FiExternalLink } from "react-icons/fi";
import projectBiDashboard from "@/assets/project-bi-dashboard.jpg";
import projectCloudCost from "@/assets/project-cloud-cost.jpg";
import projectRiskAnalytics from "@/assets/project-risk-analytics.jpg";
import projectReportingAutomation from "@/assets/project-reporting-automation.jpg";

const projects = [
  {
    icon: FiLayers,
    title: "Customer Behavior Analytics Pipeline",
    description: "Constructed a batch analytics pipeline using Apache Airflow and Amazon Redshift to aggregate multi-source customer interaction data.",
    tags: ["Airflow", "Redshift", "SQL", "ETL"],
    highlights: ["Aggregate multi-source customer interaction data", "Modeled dimensional reporting tables in Redshift", "20% reduction in reporting inconsistencies"],
    image: projectBiDashboard,
  },
  {
    icon: FiCpu,
    title: "Streaming Operations Monitoring Data Platform",
    description: "Developed a Spark Streaming pipeline processing high-volume application event data for near real-time service usage visibility.",
    tags: ["Spark Streaming", "Azure Synapse", "Python", "Monitor"],
    highlights: ["Near real-time service usage visibility", "Integrated outputs into Synapse staging layers", "25% faster issue detection via Monitor alerts"],
    image: projectReportingAutomation,
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
          <p className="text-accent text-sm tracking-widest uppercase font-body mb-2">Portfolio</p>
          <h2 className="text-6xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group rounded-[2rem] bg-card border border-border overflow-hidden card-3d-hover shadow-lg"
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  width={800}
                  height={512}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center shadow-xl card-3d-content">
                  <project.icon className="text-accent-foreground" size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 card-3d-content">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-heading font-black text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <FiExternalLink className="text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                </div>
                <p className="text-muted-foreground font-body text-base mb-6 leading-relaxed">{project.description}</p>

                <ul className="space-y-3 mb-8">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-sm font-heading font-semibold text-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(var(--accent),0.5)]" />
                      {h}
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
