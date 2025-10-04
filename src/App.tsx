import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Briefcase,
  User,
  ChevronDown,
  Phone,
  Sparkles,
  Zap,
  Rocket,
} from "lucide-react";
import AnimatedGrid from "./components/AnimatedGrid";
import FloatingParticles from "./components/FloatingParticles";
import GlassCard from "./components/GlassCard";
import { useTypewriter } from "./hooks/useTypewriter";
import { useDocumentTitle, useDocumentMeta } from "./hooks/useDocumentTitle";
import { useEffect, useState } from "react";
import { portfolioConfig, getFeaturedProjects } from "./config/portfolio";
import "./App.css";

function App() {
  const [isReady, setIsReady] = useState(false);

  // Update document title and meta
  useDocumentTitle(portfolioConfig.seo.title);
  useDocumentMeta(
    portfolioConfig.seo.description,
    portfolioConfig.seo.keywords
  );

  // Prevent flash of animations on initial load
  useEffect(() => {
    const app = document.querySelector(".app");
    if (app) {
      app.classList.add("preload");
      // Give more time for Framer Motion to initialize
      const timer = setTimeout(() => {
        app.classList.remove("preload");
        // Wait a bit more before showing animated elements
        setTimeout(() => setIsReady(true), 50);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, []);
  // Get data from configuration
  const projects = getFeaturedProjects();
  const skills = portfolioConfig.skills;

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const { displayText: typedName, isComplete } = useTypewriter(
    portfolioConfig.personal.name,
    portfolioConfig.animations.typewriterSpeed,
    portfolioConfig.animations.typewriterDelay
  );

  return (
    <div className="app preload">
      {/* Animated Background */}
      <AnimatedGrid />
      <FloatingParticles />

      {/* Navigation */}
      <motion.nav
        className="nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="nav-container">
          <motion.div
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Zap className="nav-logo-icon" />
            <span>Portfolio</span>
          </motion.div>
          <div className="nav-links">
            {portfolioConfig.navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => scrollToSection(item.href.replace("#", ""))}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                whileHover={{
                  scale: 1.1,
                  color: "#60a5fa",
                  transition: { duration: 0.2 },
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hero-text"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hero-greeting"
            >
              <Sparkles className="greeting-icon" />
              <span>Hello, I'm</span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="hero-name">{typedName}</span>
              <motion.span
                className="hero-cursor"
                animate={{ opacity: isComplete ? 0 : [1, 0, 1] }}
                transition={{ duration: 1, repeat: isComplete ? 0 : Infinity }}
              >
                |
              </motion.span>
            </motion.h1>

            <motion.div
              className="hero-subtitle-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h2 className="hero-subtitle">
                <Rocket className="subtitle-icon" />
                {portfolioConfig.personal.title}
              </h2>
            </motion.div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {portfolioConfig.personal.bio}
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.button
                className="btn btn-primary"
                onClick={() => scrollToSection("projects")}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Briefcase className="btn-icon" />
                Explore My Work
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                onClick={() => scrollToSection("contact")}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="btn-icon" />
                Let's Connect
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-scroll"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="scroll-icon" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <User className="section-icon" />
            <h2>About Me</h2>
            <p>Crafting digital experiences with passion and precision</p>
          </motion.div>

          <div className="about-content">
            <GlassCard delay={0.2} className="about-card">
              <div className="about-text">
                <h3>My Journey</h3>
                {portfolioConfig.about.journey.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </GlassCard>

            <GlassCard delay={0.4} className="skills-card">
              <h3>Skills & Technologies</h3>
              <div className="skills-grid">
                <AnimatePresence>
                  {isReady &&
                    skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="skill-tag"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{
                          delay: index * 0.05 + 0.2,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                          transition: { duration: 0.2 },
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                        style={{ opacity: 0, transform: "translateY(10px)" }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                </AnimatePresence>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <Briefcase className="section-icon" />
            <h2>Featured Projects</h2>
            <p>
              Innovative solutions that push the boundaries of web development
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <GlassCard
                key={project.title}
                delay={index * 0.2}
                className="project-card"
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github />
                      </motion.a>
                      <motion.a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink />
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    <AnimatePresence>
                      {isReady &&
                        project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="tech-tag"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{
                              delay: index * 0.2 + techIndex * 0.1 + 0.3,
                              duration: 0.3,
                            }}
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(59, 130, 246, 0.3)",
                            }}
                            viewport={{ once: true }}
                            style={{ opacity: 0, transform: "scale(0.8)" }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                    </AnimatePresence>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <Mail className="section-icon" />
              <h2>Let's Work Together</h2>
              <p>
                I'm always interested in new opportunities and exciting
                projects.
              </p>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <span>{portfolioConfig.personal.email}</span>
                </div>
              </div>
              <div className="social-links">
                <a
                  href={portfolioConfig.personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href={portfolioConfig.personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a href={`mailto:${portfolioConfig.personal.email}`}>
                  <Mail />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;
