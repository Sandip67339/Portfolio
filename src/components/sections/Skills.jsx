import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "../../utils/animations";
import { portfolioData } from "../../data/portfolio";

export default function Skills() {
  const skillCategories = [
    { name: "Frontend", skills: portfolioData.skills.Frontend, color: "from-accent" },
    { name: "QA & Testing", skills: portfolioData.skills["QA & Testing"], color: "from-blue-400" },
    { name: "Testing Knowledge", skills: portfolioData.skills["Testing Knowledge"], color: "from-green-400" },
    { name: "Tools", skills: portfolioData.skills.Tools, color: "from-accent" },
    { name: "Database", skills: portfolioData.skills.Database, color: "from-blue-400" }
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="p-8 rounded-xl border border-accent/20 bg-gradient-to-br from-secondary/50 to-primary/50 backdrop-blur-md hover:border-accent/50 transition-all"
            >
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} to-white bg-clip-text text-transparent mb-6`}>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 hover:border-accent/50 transition-all cursor-pointer font-semibold text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Bars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-accent/20"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Proficiency</h3>
          <div className="space-y-6">
            {[
              { name: "ReactJS", level: 90 },
              { name: "JavaScript", level: 85 },
              { name: "Tailwind CSS", level: 92 },
              { name: "NextJS", level: 80 },
              { name: "Node.js", level: 70 },
              { name: "MongoDB", level: 75 }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-semibold">{skill.name}</span>
                  <span className="text-accent text-sm">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-accent to-blue-400 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
