import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  "home", "about", "experience", "projects", "skills", "education", "certifications", "contact"
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] backdrop-blur-2xl" : "bg-transparent"
        }`}
        initial={{ y: -100, rotateX: -20 }}
        animate={{ y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto flex items-center justify-between py-6">
          <Link to="home" smooth duration={600} className="cursor-pointer group">
            <motion.span 
              className="text-3xl font-heading font-black text-foreground tracking-tighter flex items-center gap-1"
              whileHover={{ scale: 1.05, rotateY: 10 }}
            >
              Ramanjaneyulu<span className="text-accent group-hover:animate-ping">.</span>
            </motion.span>
          </Link>

          <nav className="hidden lg:flex items-center gap-2 bg-muted/20 p-1.5 rounded-2xl border border-border/50">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                spy
                smooth
                offset={-80}
                duration={600}
                className="px-5 py-2.5 text-xs font-heading font-black uppercase tracking-widest text-muted-foreground hover:text-accent cursor-pointer transition-all rounded-xl relative group"
                activeClass="!text-accent font-black bg-accent/10 shadow-sm"
              >
                {item}
                <motion.span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-accent rounded-full transition-all group-hover:w-1/2" />
              </Link>
            ))}
          </nav>

          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-3 text-foreground bg-card border border-border rounded-xl shadow-lg active:scale-90 transition-all"
              aria-label="Open menu"
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-foreground"
              aria-label="Close menu"
            >
              <FiX size={28} />
            </button>
            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={item}
                    spy
                    smooth
                    offset={-80}
                    duration={600}
                    className="text-2xl font-heading capitalize text-foreground hover:text-accent cursor-pointer transition-colors"
                    activeClass="!text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
