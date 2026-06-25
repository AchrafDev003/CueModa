import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-6 relative"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest">
            CONTACT
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Let’s build something meaningful together.
          </p>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 md:px-16">
        <SectionTitle
          title="Get in Touch"
          subtitle="We usually respond within 24 hours"
        />

        <div className="mt-10 grid md:grid-cols-2 gap-12 items-start">

          {/* FORM */}
          <motion.form
            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 space-y-6"
            whileHover={{ scale: 1.01 }}
          >
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-2 p-3 rounded-xl bg-black border border-zinc-800 focus:border-white outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full mt-2 p-3 rounded-xl bg-black border border-zinc-800 focus:border-white outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full mt-2 p-3 rounded-xl bg-black border border-zinc-800 focus:border-white outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* INFO BOX */}
          <div className="space-y-6">

            <motion.div
              className="bg-black border border-zinc-800 p-6 rounded-2xl"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-400 mt-2">contact@cuemoda.com</p>
            </motion.div>

            <motion.div
              className="bg-black border border-zinc-800 p-6 rounded-2xl"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-400 mt-2">+34 600 000 000</p>
            </motion.div>

            <motion.div
              className="bg-black border border-zinc-800 p-6 rounded-2xl"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-gray-400 mt-2">Spain · Remote Studio</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6 bg-zinc-950">
        <h2 className="text-4xl font-bold">Let’s collaborate</h2>
        <p className="text-gray-400 mt-3">
          Design, branding, fashion & digital experiences.
        </p>

        <button className="mt-8 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition">
          Start a project
        </button>
      </section>

    </div>
  );
};

export default Contact;