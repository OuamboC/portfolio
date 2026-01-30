import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaMobile, FaServer } from "react-icons/fa";
import { useLanguage } from "../i18n";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const services = [
    {
      icon: FaCode,
      title: t.services.webDev,
      description: t.services.webDevDesc,
      features: t.services.webDevFeatures,
    },
    {
      icon: FaServer,
      title: t.services.backendDev,
      description: t.services.backendDevDesc,
      features: t.services.backendDevFeatures,
    },
    {
      icon: FaMobile,
      title: t.services.cloudServices,
      description: t.services.cloudServicesDesc,
      features: t.services.cloudServicesFeatures,
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-950">
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
              {t.services.title}{" "}
              <span className="text-blue-500">{t.services.titleHighlight}</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              {t.services.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group p-6 md:p-8 bg-slate-800/30 hover:bg-slate-800/60 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <service.icon className="text-2xl md:text-3xl text-blue-500" />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4 group-hover:text-blue-500 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm md:text-base text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4 text-base md:text-lg">
              {t.services.ctaText}
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300"
            >
              {t.services.ctaButton}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
