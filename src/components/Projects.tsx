import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projectsData } from "../data/projects";
import { useLanguage } from "../i18n";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
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
              {t.projects.title}{" "}
              <span className="text-blue-500">{t.projects.titleHighlight}</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              {t.projects.description}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition-colors"
                    >
                      <FaGithub size={18} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5 md:p-6">
                  {(() => {
                    const translated = t.projects.items.find(
                      (item: {
                        id: number;
                        title: string;
                        description: string;
                      }) => item.id === project.id,
                    );
                    return (
                      <>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-blue-500 transition-colors">
                          {translated?.title || project.title}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-2">
                          {translated?.description || project.description}
                        </p>
                      </>
                    );
                  })()}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 md:px-3 py-1 text-xs md:text-sm bg-slate-700/50 text-blue-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/OuamboC"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500/10 font-medium rounded-lg transition-colors duration-300"
            >
              <FaGithub size={20} />
              {t.projects.viewMoreOnGithub}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
