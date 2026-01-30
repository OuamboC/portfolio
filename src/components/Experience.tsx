import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase } from "react-icons/fa";
import { useLanguage } from "../i18n";

const technologies = [
  ["Java", "Spring Boot", "ERP Systems", "RBAC"],
  ["Java", "System Design", "Agile", "ERP"],
  ["Social Media", "Content Strategy", "Market Analysis"],
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const experiences = t.experience.jobs.map((job, index) => ({
    id: index + 1,
    ...job,
    technologies: technologies[index],
  }));

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t.experience.title}{" "}
              <span className="text-blue-500">
                {t.experience.titleHighlight}
              </span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              {t.experience.description}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-slate-700" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-5 md:p-6 lg:p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="flex items-start gap-3 md:gap-4 mb-4">
                        <div className="p-2 md:p-3 bg-blue-500/10 rounded-xl">
                          <FaBriefcase className="text-blue-500 text-lg md:text-xl" />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-white">
                            {exp.role}
                          </h3>
                          <p className="text-blue-500 font-medium text-sm md:text-base">
                            {exp.company}
                          </p>
                          <p className="text-gray-500 text-xs md:text-sm">
                            {exp.duration}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-400 text-sm md:text-base"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 md:px-3 py-1 text-xs md:text-sm bg-slate-700/50 text-blue-400 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
