import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kartar-singh-259b17103",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/kartar-singh",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:kartars162@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-bold gradient-text" data-testid="footer-name">
              Kartar Singh
            </span>
            <p className="text-muted-foreground text-sm mt-1" data-testid="footer-title">
              MERN Stack Developer
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
                aria-label={social.label}
                data-testid={`footer-social-${index}`}
              >
                <social.icon className="text-xl" />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="border-t border-border mt-6 pt-6 text-center">
          <p className="text-muted-foreground text-sm" data-testid="footer-copyright">
            © 2025 Kartar Singh. All rights reserved. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
