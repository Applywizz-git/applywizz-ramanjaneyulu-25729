import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { FiPhone, FiMail, FiMapPin, FiSend, FiLinkedin } from "react-icons/fi";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: FiPhone, label: "Phone", value: "+1 (217) 691-3997", href: "tel:+12176913997" },
    { icon: FiMail, label: "Email", value: "rsimha084@gmail.com", href: "mailto:rsimha084@gmail.com" },
    { icon: FiLinkedin, label: "LinkedIn", value: "Ramanjaneyulu Simhadri", href: "https://www.linkedin.com/in/ramanjaneyulu-simhadri-545a90216/" },
    { icon: FiMapPin, label: "Location", value: "Cincinnati, OH" },
  ];

  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-widest uppercase font-body mb-2">Get In Touch</p>
          <h2 className="text-6xl md:text-8xl font-heading font-black text-foreground tracking-tighter">Contact</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-card border border-border p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: -50, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ perspective: 1200, transformStyle: "preserve-3d" }}
          >
            <div className="absolute top-0 left-0 w-full h-2 gradient-accent opacity-50" />
            
            {(["name", "email"] as const).map((field) => (
              <div key={field} className="card-3d-content">
                <label className="text-foreground font-heading font-black text-xs uppercase tracking-widest mb-2 block">{field}</label>
                <motion.input
                  type={field === "email" ? "email" : "text"}
                  required
                  placeholder={`Your ${field}...`}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-background/50 border-2 border-border text-foreground font-body text-base focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all backdrop-blur-sm"
                  whileFocus={{ translateZ: 20, scale: 1.02 }}
                />
              </div>
            ))}
            <div className="card-3d-content">
              <label className="text-foreground font-heading font-black text-xs uppercase tracking-widest mb-2 block">Message</label>
              <motion.textarea
                required
                placeholder="How can I help you?"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-6 py-4 rounded-2xl bg-background/50 border-2 border-border text-foreground font-body text-base focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all resize-none backdrop-blur-sm"
                whileFocus={{ translateZ: 20, scale: 1.02 }}
              />
            </div>
            <motion.button
              type="submit"
              className="w-full py-5 rounded-2xl bg-accent text-accent-foreground font-heading font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-accent/20 hover:shadow-accent/40 active:scale-95 transition-all card-3d-content"
              whileHover={{ translateZ: 40, scale: 1.05 }}
              disabled={submitted}
            >
              {submitted ? "Message Sent!" : <>Send Message <FiSend size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
            </motion.button>
          </motion.form>

          {/* Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ perspective: 1200 }}
          >
            {contactInfo.map((item, i) => {
              const Content = (
                <motion.div
                  className="flex items-center gap-6 p-6 rounded-[2rem] bg-card border border-border cursor-pointer card-3d-hover group shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-2xl gradient-accent flex items-center justify-center shrink-0 shadow-lg card-3d-content group-hover:rotateY-180 transition-all duration-700"
                  >
                    <item.icon className="text-accent-foreground" size={24} />
                  </motion.div>
                  <div className="card-3d-content">
                    <p className="text-accent font-heading font-black text-[10px] uppercase tracking-[0.3em] mb-0.5">{item.label}</p>
                    <p className="text-lg font-heading font-black text-foreground group-hover:text-accent transition-colors truncate max-w-[200px] md:max-w-xs">{item.value}</p>
                  </div>
                </motion.div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                  {Content}
                </a>
              ) : (
                <div key={item.label}>{Content}</div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
