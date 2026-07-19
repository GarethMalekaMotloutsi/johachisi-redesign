import { motion } from "framer-motion";
import {
  HiHome,
  HiBuildingOffice2,
  HiWrenchScrewdriver,
  HiTruck,
  HiShieldCheck,
  HiClipboardDocumentCheck,
} from "react-icons/hi2";

const services = [
  {
    icon: HiHome,
    title: "Residential Construction",
    description:
      "New homes, renovations and residential developments built with quality workmanship.",
  },
  {
    icon: HiBuildingOffice2,
    title: "Commercial Construction",
    description:
      "Construction solutions for offices, retail spaces and commercial developments.",
  },
  {
    icon: HiWrenchScrewdriver,
    title: "Renovations",
    description:
      "Modernising and improving existing buildings to meet today's requirements.",
  },
  {
    icon: HiTruck,
    title: "Infrastructure",
    description:
      "Supporting infrastructure projects with dependable construction services.",
  },
  {
    icon: HiShieldCheck,
    title: "Maintenance",
    description:
      "Reliable maintenance services that keep facilities operating efficiently.",
  },
  {
    icon: HiClipboardDocumentCheck,
    title: "Project Management",
    description:
      "Professional planning, coordination and supervision from start to finish.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
            Our Services
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Construction solutions tailored to your project.
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            We provide a range of professional construction services with
            a focus on quality, reliability and client satisfaction.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-2xl"
              >
                <Icon className="mb-6 text-5xl text-amber-500" />

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Services;