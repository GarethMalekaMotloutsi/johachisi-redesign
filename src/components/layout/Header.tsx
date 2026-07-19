import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Header() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
            Johachisi
          </h1>

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
            Construction
          </p>
        </div>

        {/* Navigation */}

        <nav>
          <ul className="flex items-center gap-10">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-medium text-slate-700 transition duration-300 hover:text-amber-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}

        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-amber-400"
        >
          Request Quote
          <HiArrowRight size={18} />
        </a>
      </div>
    </motion.header>
  );
}

export default Header;