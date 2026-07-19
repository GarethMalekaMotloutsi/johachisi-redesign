import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="bg-slate-950 pt-10 pb-20">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="inline-block rounded-full bg-amber-500/15 px-4 py-2 text-sm font-semibold text-amber-400">
            Trusted Construction Partner
          </span>

          <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-extrabold leading-tight text-white lg:text-7xl">
            Building South Africa's Future
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Johachisi Construction delivers dependable construction,
            renovation and infrastructure solutions with a commitment to
            quality workmanship, safety and long-term client relationships.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-amber-500 px-7 py-4 font-semibold text-slate-900 transition hover:bg-amber-400"
            >
              Request Quote
              <HiArrowRight />
            </a>

            <a
              href="#services"
              className="rounded-full border border-slate-600 px-7 py-4 font-semibold text-white transition hover:border-amber-500 hover:text-amber-400"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="overflow-hidden rounded-[28px] shadow-2xl"
        >
          <img
            src={heroImage}
            alt="Johachisi Construction"
            className="h-[620px] w-full object-cover"
          />
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-bold text-amber-400">
              Residential
            </h3>

            <p className="mt-2 text-slate-300">
              Building quality homes and residential developments.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-bold text-amber-400">
              Commercial
            </h3>

            <p className="mt-2 text-slate-300">
              Reliable construction solutions for businesses and industry.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-bold text-amber-400">
              Infrastructure
            </h3>

            <p className="mt-2 text-slate-300">
              Delivering projects with safety, quality and professionalism.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;