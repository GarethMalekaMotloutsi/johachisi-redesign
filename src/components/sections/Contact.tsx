import { motion } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
} from "react-icons/hi";

function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Contact Us
          </p>

          <h2 className="mt-4 text-5xl font-bold leading-tight">
            Let's build your next project together.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Whether you're planning a residential renovation, commercial
            development or infrastructure project, our experienced team is
            ready to help. Contact us today for a free quotation.
          </p>

          <div className="mt-10 space-y-8">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-amber-500/10 p-3">
                <HiOutlinePhone className="text-2xl text-amber-400" />
              </div>

              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                <p className="mt-1 text-slate-300">
                  083 693 1526 / 071 705 0484
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-amber-500/10 p-3">
                <HiOutlineMail className="text-2xl text-amber-400" />
              </div>

              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="mt-1 text-slate-300">
                  info@johachisi-construction.co.za
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-amber-500/10 p-3">
                <HiOutlineLocationMarker className="text-2xl text-amber-400" />
              </div>

              <div>
                <h3 className="font-semibold text-white">Service Area</h3>
                <p className="mt-1 text-slate-300">
                  Johannesburg & Gauteng, South Africa
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-amber-500/10 p-3">
                <HiOutlineClock className="text-2xl text-amber-400" />
              </div>

              <div>
                <h3 className="font-semibold text-white">Business Hours</h3>
                <p className="mt-1 text-slate-300">
                  Monday – Friday
                  <br />
                  08:00 – 17:00
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-slate-900 p-10 shadow-2xl"
        >
          <h3 className="mb-10 text-3xl font-bold text-white">
            Request a Free Quote
          </h3>

          <div className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
            />

            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
            />

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-amber-500 py-4 text-lg font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-amber-400"
            >
              Request Quote
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;