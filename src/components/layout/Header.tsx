function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Johachisi
          </h1>
          <p className="-mt-1 text-xs uppercase tracking-[0.25em] text-amber-600">
            Construction
          </p>
        </div>

        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-700">
            <li>
              <a href="#about" className="transition hover:text-amber-600">
                About
              </a>
            </li>

            <li>
              <a href="#services" className="transition hover:text-amber-600">
                Services
              </a>
            </li>

            <li>
              <a href="#projects" className="transition hover:text-amber-600">
                Projects
              </a>
            </li>

            <li>
              <a href="#testimonials" className="transition hover:text-amber-600">
                Testimonials
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="rounded-md bg-amber-500 px-4 py-2 font-semibold text-slate-900 transition hover:bg-amber-400"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;