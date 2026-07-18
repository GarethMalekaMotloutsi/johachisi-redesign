function Hero() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
          Building Excellence
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
          Building South Africa's Future, One Project at a Time
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Johachisi Construction delivers dependable construction,
          renovation, maintenance, and infrastructure solutions for
          residential, commercial, and industrial clients.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Request a Quote
          </a>

          <a
            href="#projects"
            className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-900"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;