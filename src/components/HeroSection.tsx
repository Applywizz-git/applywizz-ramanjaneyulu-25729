
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiArrowDown, FiDownload } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-28"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -60, rotateY: 20 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ perspective: 1200 }}
        >
          <motion.p
            className="text-accent font-heading font-semibold text-sm tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            Cloud Data Engineer
          </motion.p>

          <h1 className="text-5xl md:text-8xl font-heading font-black text-foreground leading-[1.1] mb-6 tracking-tighter italic">
            Ramanjaneyulu
          </h1>

          <p className="text-muted-foreground font-body text-xl leading-relaxed max-w-xl mb-10 border-l-4 border-accent pl-6">
            Data Engineer with 4+ years of experience building cloud-native
            data platforms, ETL pipelines, and ML-integrated analytics
            solutions using AWS, Azure, PySpark, SQL, Snowflake, Kafka,
            Databricks, Airflow, and MLflow.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              to="projects"
              smooth
              offset={-80}
              duration={600}
            >
              <motion.button
                className="px-8 py-4 rounded-xl bg-accent text-accent-foreground font-heading font-bold flex items-center gap-3 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all card-3d-hover"
                whileHover={{ scale: 1.05, translateZ: 20 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <FiArrowDown className="animate-bounce" />
              </motion.button>
            </Link>

            <motion.a
              href="/resume.pdf"
              download="Ramanjaneyulu_Resume.pdf"
              className="px-8 py-4 rounded-xl border-2 border-border text-foreground font-heading font-bold flex items-center gap-3 hover:bg-card transition-all card-3d-hover shadow-lg"
              whileHover={{ scale: 1.05, translateZ: 20 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
              <FiDownload />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Profile Section */}
        <motion.div
          className="flex justify-center lg:justify-end perspective-1000 order-1 lg:order-2"
          initial={{ opacity: 0, x: 60, rotateY: -20 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-80 md:w-96 h-[450px] md:h-[550px] rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-2 border-border/50 tilt-3d"
            whileHover={{
              rotateY: 15,
              rotateX: -10,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
            }}
          >
            <img
              src="/profile.jpeg"
              alt="Ramanjaneyulu - Data Engineer"
              className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

            <motion.div
              className="absolute bottom-0 left-0 right-0 p-8 card-3d-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
                type: "spring",
              }}
            >
              <h3 className="text-3xl font-heading font-black text-foreground drop-shadow-lg">
                Ramanjaneyulu
              </h3>

              <p className="text-accent font-heading font-bold text-lg mt-1 tracking-wider uppercase">
                Cloud Data Engineer
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "AWS",
                  "Azure",
                  "PySpark",
                  "Snowflake",
                  "Kafka",
                  "Databricks",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 text-xs font-heading font-bold rounded-full bg-accent text-accent-foreground shadow-lg backdrop-blur-md border border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
