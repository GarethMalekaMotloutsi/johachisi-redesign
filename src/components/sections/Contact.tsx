import { motion } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
} from "react-icons/hi";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
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

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <HiOutlinePhone className="mt-1 text-2xl text-amber-400" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-slate-300">
                  083 693 1526 / 071 705 0484
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <HiOutlineMail className="mt-1 text-2xl text-amber-400" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-slate-300">
                  info@johachisi-construction.co.za
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <HiOutlineLocationMarker className="mt-1 text-2xl text-amber-400" />
              <div>
                <h3 className="font-semibold">Service Area</h3>
                <p className="text-slate-300">
                  Johannesburg and surrounding Gauteng areas
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <HiOutlineClock className="mt-1 text-2xl text-amber-400" />
              <div>
                <h3 className="font-semibold">Business Hours</h3>
                <p className="text-slate-300">
                  Monday – Friday
                  <br />
                  08:00 – 17:00
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-slate-900 p-8 shadow-2xl"
        >
          <h3 className="mb-8 text-3xl font-bold">
            Request a Free Quote
          </h3>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 outline-none transition focus:border-amber-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 outline-none transition focus:border-amber-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 outline-none transition focus:border-amber-500"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 outline-none transition focus:border-amber-500"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-amber-500 py-4 font-semibold text-slate-900 transition hover:bg-amber-400"
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