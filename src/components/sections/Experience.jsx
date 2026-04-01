import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "../../utils/animations";
import { portfolioData } from "../../data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-blue-400 opacity-30" />

          {/* Experience Items */}
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={staggerItem}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex md:w-1/2 justify-center relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-primary z-10"
                  />
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                  className="md:w-1/2"
                >
                  <div className="p-8 rounded-xl bg-gradient-to-br from-primary/50 to-secondary/50 border border-accent/20 hover:border-accent/50 transition-all backdrop-blur-md">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {exp.position}
                        </h3>
                        <p className="text-accent font-semibold mt-1">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
