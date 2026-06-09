
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  FiBarChart2,
  FiFileText,
  FiSettings,
  FiDatabase,
  FiShield,
} from "react-icons/fi";

const highlights = [
  { icon: FiDatabase, label: "ETL Pipelines" },
  { icon: FiShield, label: "Data Governance" },
  { icon: FiSettings, label: "Snowflake & Databricks" },
  { icon: FiBarChart2, label: "Real-Time Analytics" },
  { icon: FiFileText, label: "ML Data Platforms" },
];

const counters = [
  { target: 4, suffix: "+", label: "Years Experience" },
  { target: 8, suffix: "TB+", label: "Daily Data Processed" },
  { target: 100, suffix: "%", label: "Cloud-Native Solutions" },
];

const Counter = ({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const step = duration / target;

    const timer = setInterval(() => {
      start++;
      setCount(start);

      if (start >= target) {
        clearInterval(timer);
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      className="text-center p-10 rounded-[2.5rem] bg-card border border-border card-3d-hover shadow-xl"
      initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
      viewport={{ once: true }}
    >
      <p className="text-5xl md:text-7xl font-heading font-black text-accent drop-shadow-md card-3d-content">
        {count}
        {suffix}
      </p>

      <p className="text-muted-foreground font-heading font-bold text-sm mt-4 uppercase tracking-widest">
        {label}
      </p>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.4em] uppercase font-heading font-black mb-4">
            About Me
          </p>

          <h2 className="text-6xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Building Modern Data Platforms
          </h2>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          className="relative max-w-5xl mx-auto text-center mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground font-body text-xl md:text-2xl leading-relaxed">
            Data Engineer with 4+ years of experience building ETL
            pipelines, cloud-native data platforms, and ML-integrated
            analytics solutions using AWS, Azure, PySpark, SQL,
            Snowflake, Kafka, and Databricks.
            <br />
            <br />
            Engineered batch and real-time data processing frameworks
            handling 5TB–8TB+ enterprise datasets daily, improving
            data ingestion performance and analytics reporting
            efficiency across business operations.
            <br />
            <br />
            Developed ML-ready data pipelines, feature engineering
            workflows, and analytics layers supporting fraud
            detection, risk scoring, predictive analytics, and
            customer reporting initiatives using Airflow, MLflow,
            Power BI, and Tableau.
            <br />
            <br />
            Collaborated with data scientists, reporting teams, and
            compliance stakeholders to deliver governed,
            high-quality data solutions aligned with enterprise
            data governance, HIPAA, and PCI-DSS standards.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <div className="h-1 w-20 bg-accent rounded-full" />
            <div className="h-1 w-4 bg-accent/30 rounded-full" />
            <div className="h-1 w-2 bg-accent/10 rounded-full" />
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center p-8 rounded-[2rem] bg-card border border-border cursor-pointer card-3d-hover group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 card-3d-content shadow-inner">
                <item.icon size={32} />
              </motion.div>

              <p className="text-foreground font-heading font-black text-xs text-center uppercase tracking-wider card-3d-content">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {counters.map((counter) => (
            <Counter
              key={counter.label}
              target={counter.target}
              suffix={counter.suffix}
              label={counter.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
