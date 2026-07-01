import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import trendVideo from "../../assets/images/trend2.mp4";
import saleImg from "../../assets/images/gallery3.jpg";
import collectionImg from "../../assets/images/article1.jpg";

const news = [
  {
    title: "Nueva Colección",
    description:
      "Descubre las prendas que marcarán tendencia esta temporada.",
    media: collectionImg,
    type: "image",
    tag: "NEW",
    slug: "/actualidad/nueva-coleccion",
  },
  {
    title: "Campaña CÚE",
    description:
      "Una experiencia visual que refleja nuestra identidad y estilo.",
    media: trendVideo,
    type: "video",
    tag: "VIDEO",
    slug: "/actualidad/campana-cue",
  },
  {
    title: "Rebajas Exclusivas",
    description:
      "Selección de artículos con descuentos especiales por tiempo limitado.",
    media: saleImg,
    type: "image",
    tag: "SALE",
    slug: "/actualidad/rebajas",
  },
];

function EventsSection() {
  return (
    <section
      id="events"
      className="py-32 bg-[#F8F6F2] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[12px] text-[#C8A977] text-sm">
            CÚE MODA
          </span>

          <h2 className="mt-4 text-5xl md:text-7xl font-light text-[#111]">
            Actualidad
          </h2>

          <div className="w-24 h-[2px] bg-[#C8A977] mx-auto mt-6" />

          <p className="max-w-2xl mx-auto mt-8 text-gray-500 leading-relaxed">
            Novedades, tendencias y campañas exclusivas
            seleccionadas para nuestros clientes.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {news.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
              }}
              className="
                group
                relative
                h-[600px]
                overflow-hidden
                rounded-[32px]
                bg-black
                shadow-2xl
                cursor-pointer
              "
            >

              {/* Media */}

              {item.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-[2500ms]
                    group-hover:scale-110
                  "
                >
                  <source src={item.media} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={item.media}
                  alt={item.title}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-[2500ms]
                    group-hover:scale-110
                  "
                />
              )}

              {/* Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/40
                  to-black/10
                "
              />

              {/* Gold Border */}

              <div
                className="
                  absolute
                  inset-0
                  border
                  border-[#C8A977]/20
                  rounded-[32px]
                "
              />

              {/* Tag */}

              <div
                className="
                  absolute
                  top-6
                  left-6
                  px-4
                  py-2
                  text-xs
                  tracking-[3px]
                  uppercase
                  text-[#C8A977]
                  border
                  border-[#C8A977]/40
                  backdrop-blur-md
                "
              >
                {item.tag}
              </div>

              {/* Content */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-10
                  z-10
                "
              >
                <h3 className="text-white text-4xl font-light mb-4">
                  {item.title}
                </h3>

                <p className="text-white/80 leading-relaxed">
                  {item.description}
                </p>

                <Link
  to={item.slug}
  className="
    mt-8
    inline-flex
    items-center
    gap-3
    text-[#C8A977]
    uppercase
    tracking-[4px]
    text-xs
    hover:text-[#d4b47b]
    transition-all
    duration-300
  "
>
  Descubrir

  <span
    className="
      transition-transform
      duration-300
      group-hover:translate-x-2
    "
  >
    →
  </span>
</Link>
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default EventsSection;