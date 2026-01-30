import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillsData } from "../data/skills";
import { useLanguage } from "../i18n";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  // Map skill categories to translation keys
  const categoryTranslations: Record<string, string> = {
    Languages: t.skills.languages,
    Frontend: t.skills.frontend,
    Backend: t.skills.backend,
    Databases: t.skills.databases,
    "Cloud & DevOps": t.skills.cloudDevops,
    "Testing & Security": t.skills.testingSecurity,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4"
            >
              {t.skills.badge}
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t.skills.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {t.skills.titleHighlight}
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t.skills.description}
            </p>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-14"
          >
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {categoryTranslations[category.category] ||
                      category.category}
                  </span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{
                        scale: 1.08,
                        y: -10,
                        transition: { duration: 0.2 },
                      }}
                      className="group relative cursor-pointer"
                    >
                      {/* Glow effect - always visible subtle, stronger on hover */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-500" />

                      {/* Card content */}
                      <div className="relative p-4 md:p-6 bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 backdrop-blur-xl rounded-2xl border border-blue-500/20 group-hover:border-blue-400/50 shadow-xl shadow-blue-500/5 group-hover:shadow-blue-500/25 transition-all duration-300">
                        <div className="flex flex-col items-center gap-4">
                          {/* Icon container with glow */}
                          <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-xl group-hover:bg-blue-400/40 transition-all duration-300" />
                            <div className="relative p-3.5 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-blue-500/10 group-hover:border-blue-400/30 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                              <skill.icon className="text-2xl md:text-3xl text-blue-400 group-hover:text-blue-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(96,165,250,0.8)] transition-all duration-300" />
                            </div>
                          </div>
                          <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 text-center tracking-wide">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
