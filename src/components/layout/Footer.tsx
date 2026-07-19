import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        {/* Company */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            Johachisi Construction
          </h3>

          <p className="mt-5 leading-7">
            Delivering trusted residential, commercial and infrastructure
            construction services with quality workmanship and a commitment to
            excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white">
            Quick Links
          </h4>

          <ul className="mt-5 space-y-3">
            <li>
              <a href="#about" className="hover:text-amber-400 transition">
                About
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-amber-400 transition">
                Services
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-amber-400 transition">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-amber-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white">
            Contact
          </h4>

          <div className="mt-5 space-y-4">
            <div className="flex items-center gap-3">
              <HiOutlinePhone className="text-xl text-amber-400" />
              <span>083 693 1526</span>
            </div>

            <div className="flex items-center gap-3">
              <HiOutlineMail className="text-xl text-amber-400" />
              <span>info@johachisi-construction.co.za</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-400 md:flex-row">
          <p>
            © {year} Johachisi Construction. All rights reserved.
          </p>

          <p>
            Designed & Developed by Gareth Maleka Motloutsi
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;