import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { useLanguage } from "../i18n";

const education = [
  {
    id: 1,
    type: "degree",
    title: "BSc (Hons) Software Engineering",
    institution: "Manchester Metropolitan University",
    duration: "2022 - 2025",
    description:
      "Software Architecture, Full-Stack Development, Problem Solving",
    grade: "First-Class Honours",
  },
  {
    id: 2,
    type: "foundation",
    title: "Foundation in Sciences and Engineering",
    institution: "INTO Manchester",
    duration: "2020 - 2021",
    description: "Mathematical Engineering, Physics, Chemistry",
    grade: "A*A*A*",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-slate-950">
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
              {t.education.title}{" "}
              <span className="text-blue-500">
                {t.education.titleHighlight}
              </span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              {t.education.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap className="text-blue-500 text-xl md:text-2xl" />
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {t.education.academicHistory}
              </h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 md:p-6 lg:p-8 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-base md:text-lg font-semibold text-white">
                      {edu.title}
                    </h4>
                    <span className="text-xs md:text-sm text-gray-500">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-blue-500 font-medium mb-2 text-sm md:text-base">
                    {edu.institution}
                  </p>
                  <p className="text-gray-400 text-sm md:text-base mb-2">
                    {edu.description}
                  </p>
                  {edu.grade && (
                    <p className="text-sm md:text-base">
                      <span className="text-gray-400">
                        {t.education.grade}{" "}
                      </span>
                      <span className="text-green-500 font-medium">
                        {edu.grade}
                      </span>
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
