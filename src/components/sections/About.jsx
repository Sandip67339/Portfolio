import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "../../utils/animations";
import { portfolioData } from "../../data/portfolio";

export default function About() {
  const achievements = [
    { label: "Projects", value: "15+" },
    { label: "Experience", value: "2+ years" },
    { label: "Happy Clients", value: "10+" }
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-primary"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Icon */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-8xl"
              >
                👨‍💻
              </motion.div>
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 212, 255, 0.3)",
                    "0 0 40px rgba(0, 212, 255, 0.6)",
                    "0 0 20px rgba(0, 212, 255, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            {...fadeInUp}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              {portfolioData.summary}
            </p>

            <div className="space-y-4">
              <p className="text-gray-300">
                <span className="text-accent font-semibold">Education:</span> BSc CSIT (Tribhuvan University)
              </p>
              <p className="text-gray-300">
                <span className="text-accent font-semibold">Location:</span> {portfolioData.location}
              </p>
              <p className="text-gray-300">
                <span className="text-accent font-semibold">Focus:</span> Frontend Development, Web Design, QA Testing
              </p>
            </div>

            {/* Achievements */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-accent/20"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="text-center"
                >
                  <motion.h3 className="text-3xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                    {achievement.value}
                  </motion.h3>
                  <p className="text-gray-400 text-sm">{achievement.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
