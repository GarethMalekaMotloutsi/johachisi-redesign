import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import heroImage from "../../assets/images/hero.png";

const projects = [
  {
    title: "Commercial Development",
    category: "Commercial",
    image: heroImage,
  },
  {
    title: "Residential Estate",
    category: "Residential",
    image: heroImage,
  },
  {
    title: "Infrastructure Project",
    category: "Infrastructure",
    image: heroImage,
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Featured Projects
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Delivering projects with quality and precision.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A selection of construction projects demonstrating our commitment
            to quality workmanship and reliable delivery.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                  {project.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Professional construction delivered with a focus on quality,
                  safety and long-term value.
                </p>

                <button className="mt-6 flex items-center gap-2 font-semibold text-amber-600 hover:text-amber-700">
                  Learn More
                  <HiArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;