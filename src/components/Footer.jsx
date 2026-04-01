import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      {...fadeInUp}
      className="py-12 px-4 sm:px-6 lg:px-8 bg-primary border-t border-accent/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left */}
          <motion.div
            whileHover={{ x: -5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent mb-2">
              Sandip Nyoupane
            </h3>
            <p className="text-gray-400">Frontend Developer | QA Enthusiast</p>
          </motion.div>

          {/* Links */}
          <div className="flex gap-6">
            {[
              { name: "GitHub", href: "https://github.com/Sandip67339", icon: Github },
              { name: "LinkedIn", href: "https://www.linkedin.com/in/sandeep-neupane-8b6717381/?skipRedirect=true", icon: Linkedin },
              { name: "Email", href: "mailto:sandipnyoupane45@gmail.com", icon: Mail }
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#00d4ff" }}
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm"
        >
          <p>
            © {currentYear} Sandip Nyoupane. All rights reserved. | Built with React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
