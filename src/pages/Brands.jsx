import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";

const brands = [
  {
    name: "Cúe Signature",
    logo: "/assets/brands/cue.png",
    description: "Luxury streetwear with a minimalist soul.",
  },
  {
    name: "Urban Nova",
    logo: "/assets/brands/urban.png",
    description: "Future-driven urban fashion aesthetics.",
  },
  {
    name: "Noir Atelier",
    logo: "/assets/brands/noir.png",
    description: "Dark elegance meets modern couture.",
  },
  {
    name: "Velvet Line",
    logo: "/assets/brands/velvet.png",
    description: "Soft textures, bold identity.",
  },
];

const Brands = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest">
            OUR BRANDS
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Discover the universe of modern fashion identities crafted under one vision.
          </p>
        </motion.div>
      </section>

      {/* FEATURED BRAND */}
      <section className="py-20 px-6 md:px-16">
        <SectionTitle title="Featured Brand" subtitle="Spotlight of the season" />

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="/assets/brands/featured.jpg"
            alt="Featured Brand"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
            whileHover={{ scale: 1.02 }}
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">Cúe Signature Collection</h2>
            <p className="text-gray-400 leading-relaxed">
              A refined expression of modern street luxury. Designed for those who
              move differently, think differently, and define their own identity.
            </p>

            <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* BRANDS GRID */}
      <section className="py-20 px-6 md:px-16 bg-zinc-950">
        <SectionTitle title="All Brands" subtitle="Explore our ecosystem" />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-black border border-zinc-800 rounded-2xl p-6 text-center hover:border-white/30 transition"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-20 h-20 mx-auto object-contain mb-4"
              />

              <h3 className="text-lg font-semibold">{brand.name}</h3>
              <p className="text-gray-500 text-sm mt-2">
                {brand.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold">Build your identity with us</h2>
        <p className="text-gray-400 mt-3">
          Fashion is not what you wear. It's what you represent.
        </p>

        <button className="mt-8 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Brands;