import { motion } from "framer-motion";
import { FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-card/30 backdrop-blur-md overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px gradient-accent opacity-30" />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.p 
          className="text-muted-foreground font-heading font-bold text-sm flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          © {new Date().getFullYear()} — <span className="text-foreground font-black uppercase tracking-widest">Ramanjaneyulu Simhadri</span>
          <FiHeart className="text-accent animate-pulse" size={14} />
        </motion.p>
        <div className="flex gap-6">
          {[
            { icon: FiMail, href: "mailto:rsimha084@gmail.com", label: "Email" },
            { icon: FiLinkedin, href: "https://www.linkedin.com/in/ramanjaneyulu-simhadri-545a90216/", label: "LinkedIn" }
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-500 shadow-lg"
              aria-label={social.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.2, rotateY: 180, translateZ: 20 }}
              style={{ perspective: 400 }}
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
