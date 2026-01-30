import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaLightbulb, FaRocket } from "react-icons/fa";
import { useLanguage } from "../i18n";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const highlights = [
    {
      icon: FaCode,
      title: t.about.experience,
      description: t.about.experienceDesc,
    },
    {
      icon: FaLightbulb,
      title: t.about.projects,
      description: t.about.projectsDesc,
    },
    {
      icon: FaRocket,
      title: t.about.users,
      description: t.about.usersDesc,
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
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
              {t.about.title}{" "}
              <span className="text-blue-500">{t.about.titleHighlight}</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">
                {t.about.subtitle}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-base md:text-lg">
                {t.about.description1}
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed text-base md:text-lg">
                {t.about.description2}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="text-center p-4 md:p-6 bg-slate-800/50 rounded-xl"
                  >
                    <item.icon className="text-blue-500 text-2xl md:text-3xl mx-auto mb-2" />
                    <h4 className="text-white font-semibold text-base md:text-lg">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm md:text-base">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-blue-500 font-medium">
                    {t.about.name}
                  </span>
                  <span className="text-gray-400">Canis Breal Ouambo</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-blue-500 font-medium">
                    {t.about.location}
                  </span>
                  <span className="text-gray-400">Manchester, UK</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-blue-500 font-medium">
                    {t.about.email}
                  </span>
                  <span className="text-gray-400 break-all">
                    ouambocanis@gmail.com
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-blue-500 font-medium">
                    {t.about.availability}
                  </span>
                  <span className="text-green-500">{t.about.openToWork}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
