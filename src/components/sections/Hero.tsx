import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-block rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900">
            Trusted Construction Partner
          </span>

          <h1 className="mt-6 max-w-xl text-5xl font-extrabold leading-tight tracking-tight lg:text-6xl">
            Building Quality Spaces Across South Africa
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
            Johachisi Construction provides reliable construction,
            renovation, maintenance and infrastructure services with a
            strong focus on quality workmanship, safety and client
            satisfaction.
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

          <div className="mt-12 flex flex-wrap gap-10">
            <div>
              <p className="text-3xl font-bold text-amber-400">Construction</p>
              <p className="mt-1 text-sm text-slate-300">
                Residential & Commercial
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-amber-400">Quality</p>
              <p className="mt-1 text-sm text-slate-300">
                Workmanship You Can Trust
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-amber-400">Safety</p>
              <p className="mt-1 text-sm text-slate-300">
                Every Project, Every Time
              </p>
            </div>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="Johachisi Construction team working on site"
            className="h-[560px] w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;