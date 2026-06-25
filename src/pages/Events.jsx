import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";

const events = [
  {
    title: "Cúe Moda Launch Night",
    date: "12 July 2026",
    location: "Madrid, Spain",
    description:
      "Exclusive launch event presenting the new summer collection with live performances and runway showcase.",
  },
  {
    title: "Urban Identity Pop-Up",
    date: "28 July 2026",
    location: "Barcelona, Spain",
    description:
      "Temporary immersive store experience focused on streetwear culture and digital fashion interaction.",
  },
  {
    title: "Night of Minimalism",
    date: "10 August 2026",
    location: "Seville, Spain",
    description:
      "A curated fashion night celebrating minimal design, architecture, and modern aesthetics.",
  },
];

const Events = () => {
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
            EVENTS
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Experiences that define culture, fashion, and identity.
          </p>
        </motion.div>
      </section>

      {/* FEATURED EVENT */}
      <section className="py-20 px-6 md:px-16">
        <SectionTitle
          title="Featured Experience"
          subtitle="The next big moment"
        />

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-3xl font-bold">Cúe Moda Launch Night</h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Join us for an exclusive evening where fashion meets performance.
              A curated experience blending runway, music, and immersive design.
            </p>

            <div className="mt-6 space-y-2 text-sm text-gray-300">
              <p>📅 12 July 2026</p>
              <p>📍 Madrid, Spain</p>
              <p>🎟 Limited access invitation only</p>
            </div>

            <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition">
              Get Invitation
            </button>
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/assets/events/featured.jpg"
              alt="Featured Event"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* EVENTS LIST */}
      <section className="py-20 px-6 md:px-16 bg-zinc-950">
        <SectionTitle title="Upcoming Events" subtitle="Stay connected" />

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-black border border-zinc-800 rounded-2xl p-6 hover:border-white/30 transition"
              whileHover={{ y: -8 }}
            >
              <h3 className="text-xl font-semibold">{event.title}</h3>

              <div className="mt-4 text-sm text-gray-400 space-y-1">
                <p>📅 {event.date}</p>
                <p>📍 {event.location}</p>
              </div>

              <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                {event.description}
              </p>

              <button className="mt-6 text-sm font-semibold text-white underline underline-offset-4 hover:opacity-70">
                Learn more
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold">Be part of the experience</h2>
        <p className="text-gray-400 mt-3">
          Fashion is not just worn — it is lived.
        </p>

        <button className="mt-8 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition">
          Contact & Invitations
        </button>
      </section>
    </div>
  );
};

export default Events;