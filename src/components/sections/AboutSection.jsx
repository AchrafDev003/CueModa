import { motion } from "framer-motion";
import about from "../../assets/images/about1.jpeg";
import { FaInstagram } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 px-6 bg-[#0B0B0B] text-[#F5F5F5] overflow-hidden"
    >
      {/* Glow decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[600px] h-[500px] md:h-[600px] bg-[#C8A97E]/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">

        {/* TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.span
            variants={item}
            className="text-[#C8A97E] uppercase tracking-[6px] text-sm"
          >
            Quiénes Somos
          </motion.span>

          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-5 leading-tight"
          >
            Más que moda, <br />
            una forma de expresar tu personalidad.
          </motion.h2>

          <motion.div
            variants={item}
            className="w-24 h-[2px] bg-[#C8A97E] mt-6"
          />

          <motion.p
            variants={item}
            className="text-[#E7D7C1] mt-8 leading-8 text-base md:text-lg max-w-xl"
          >
            En Cúe Moda seleccionamos cuidadosamente las mejores marcas
            para ofrecer prendas que combinan calidad, elegancia y tendencia,
            pensadas para un estilo moderno y sofisticado.
          </motion.p>

          <motion.a
  href="https://www.instagram.com/cue_moda_alcalalareal/"
  target="_blank"
  rel="noopener noreferrer"
  variants={item}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className="
    mt-10
    inline-flex
    items-center
    gap-3
    px-8
    py-3
    rounded-full
    border
    border-[#C8A97E]
    text-[#C8A97E]
    font-medium
    relative
    overflow-hidden
    transition-all
    duration-300
    group
  "
>
  {/* SHINE EFFECT */}
  <span
    className="
      absolute
      top-0
      -left-[120%]
      w-[60%]
      h-full
      bg-gradient-to-r
      from-transparent
      via-[#C8A97E]/30
      to-transparent
      rotate-12
      group-hover:left-[140%]
      transition-all
      duration-700
    "
  />

  {/* GLOW BACKGROUND */}
  <span
    className="
      absolute
      inset-0
      bg-[#C8A97E]/10
      opacity-0
      group-hover:opacity-100
      transition-all
      duration-300
      blur-xl
    "
  />

  {/* ICON */}
  <FaInstagram
  size={18}
  className="relative z-10 transition-transform duration-300 group-hover:rotate-12"
/>

  {/* TEXT */}
  <span className="relative z-10">
    Descubrir más
  </span>
</motion.a>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative flex justify-center"
        >
         <div className="relative w-full max-w-[520px] mx-auto">

  {/* GLOW (DETRÁS) */}
  <div
    className="
      absolute
      inset-0
      scale-110
      rounded-[60px]
      bg-[#C8A97E]/20
      blur-[80px]
      opacity-60
      z-0
    "
  />

  {/* MARCO */}
  <div
    className="
      absolute
      inset-0
      translate-x-3
      translate-y-3
      border
      border-[#C8A97E]/30
      rounded-[40px]
      pointer-events-none
      z-10
    "
  />

  {/* IMAGEN */}
  <motion.img
    src={about}
    alt="About Cúe Moda"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.4 }}
    className="
      relative
      z-20
      w-full
      h-[480px]
      sm:h-[450px]
      md:h-[680px]
      object-cover
      rounded-[40px]
      border
      border-[#C8A97E]/20
      shadow-[0_30px_80px_rgba(0,0,0,.45)]
    "
  />
</div>
        </motion.div>

      </div>
    </section>
  );
}

export default AboutSection;