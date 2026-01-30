import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";
import { useLanguage } from "../i18n";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/OuamboC", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/canis-breal-ouambo/",
    label: "LinkedIn",
  },
  {
    icon: SiUpwork,
    href: "https://www.upwork.com/freelancers/~01c31cae57effe820f",
    label: "Upwork",
  },
  {
    icon: SiFiverr,
    href: "https://www.fiverr.com/breal_ouambo",
    label: "Fiverr",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white inline-block mb-2"
            >
              Canis Ouambo<span className="text-blue-500">.</span>
            </motion.a>
            <p className="text-gray-500 text-sm">{t.footer.subtitle}</p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-6">
            {footerLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-500 hover:text-white transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © {currentYear} Canis Breal Ouambo. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
