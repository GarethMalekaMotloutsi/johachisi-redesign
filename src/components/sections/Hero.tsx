import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900">
            Trusted Construction Partner
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
            Building Quality Spaces Across South Africa
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Johachisi Construction provides reliable construction, renovation,
            maintenance and infrastructure services with a strong focus on
            quality workmanship, safety and client satisfaction.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
            >
              Request a Quote
            </a>

            <a
              href="#services"
              className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              Our Services
            </a>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="Johachisi Construction team working on site"
            className="h-[600px] w-full rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;