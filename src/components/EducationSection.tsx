import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Illinois Springfield, IL",
    icon: FiAward,
  },
  {
    degree: "Bachelor of Computer Science",
    school: "VelTech University, India",
    icon: FiBookOpen,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card/50">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-widest uppercase font-body mb-2">Academic</p>
          <h2 className="text-6xl md:text-8xl font-heading font-black text-foreground tracking-tighter">Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="rounded-[2.5rem] bg-card border border-border p-10 cursor-pointer card-3d-hover shadow-xl group"
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="w-20 h-20 rounded-[1.5rem] gradient-accent flex items-center justify-center mb-8 shadow-lg card-3d-content group-hover:rotateY-180"
                whileHover={{ rotateY: 180, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <edu.icon className="text-accent-foreground" size={32} />
              </motion.div>
              <h3 className="text-2xl font-heading font-black text-foreground group-hover:text-accent transition-colors card-3d-content leading-tight">{edu.degree}</h3>
              <p className="text-muted-foreground font-heading font-bold text-sm mt-4 uppercase tracking-[0.2em] card-3d-content">{edu.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
