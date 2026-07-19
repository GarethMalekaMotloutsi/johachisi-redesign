import { motion } from "framer-motion";
import { HiShieldCheck, HiWrenchScrewdriver, HiBuildingOffice2 } from "react-icons/hi2";
import aboutImage from "../../assets/images/about.png";

function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          <div>
            <img
              src={aboutImage}
              alt="Johachisi Construction"
              className="h-[520px] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              About Us
            </p>

            <h2 className="text-5xl font-bold leading-tight text-slate-900">
              Building with integrity and delivering quality that lasts.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Johachisi Construction provides professional construction,
              renovation and infrastructure services across South Africa.
              Our approach combines quality workmanship, attention to
              detail and dependable project delivery.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We believe every successful project starts with strong
              planning, open communication and a commitment to exceeding
              our clients' expectations.
            </p>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <HiBuildingOffice2 className="mb-5 text-5xl text-amber-500" />

            <h3 className="text-2xl font-bold text-slate-900">
              Professional Service
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Every project is managed with professionalism, clear
              communication and attention to detail.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <HiWrenchScrewdriver className="mb-5 text-5xl text-amber-500" />

            <h3 className="text-2xl font-bold text-slate-900">
              Quality Workmanship
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              We deliver durable construction solutions built to meet
              modern industry standards.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <HiShieldCheck className="mb-5 text-5xl text-amber-500" />

            <h3 className="text-2xl font-bold text-slate-900">
              Safety First
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Safety remains at the centre of every project from planning
              through to completion.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;