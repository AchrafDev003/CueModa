import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import heroVideo from "../assets/images/trend1.mp4";

import look1 from "../assets/images/gallery1.png";
import look2 from "../assets/images/gallery2.jpg";
import look3 from "../assets/images/gallery3.jpg";

function NuevaColeccion() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F8F6F2] text-[#111] overflow-hidden">

      {/* HERO */}

      <section className="relative h-screen">

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
          "
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/45" />

        <div
          className="
            relative
            z-10
            h-full
            flex
            items-center
            justify-center
            text-center
            px-6
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span
              className="
                uppercase
                tracking-[14px]
                text-[#C8A977]
                text-sm
              "
            >
              CÚE MODA
            </span>

            <h1
              className="
                text-white
                text-5xl
                md:text-8xl
                font-light
                mt-8
              "
            >
              Nueva Colección
            </h1>

            <p
              className="
                text-white/80
                mt-8
                max-w-2xl
                mx-auto
                text-lg
              "
            >
              Elegancia contemporánea, estilo auténtico y
              prendas seleccionadas para cada ocasión.
            </p>
          </motion.div>
        </div>

      </section>

      {/* INTRO */}

      <section className="max-w-5xl mx-auto px-6 py-28">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light">
            Una colección pensada para destacar
          </h2>

          <div className="w-24 h-[2px] bg-[#C8A977] mt-8" />

          <p className="mt-10 text-gray-600 text-lg leading-9">
            En CÚE Moda seleccionamos cuidadosamente cada
            prenda para ofrecer un equilibrio perfecto entre
            tendencia, calidad y comodidad.
          </p>

          <p className="mt-6 text-gray-600 text-lg leading-9">
            Nuestra nueva colección incorpora diseños
            actuales, tejidos premium y marcas reconocidas
            que marcan la diferencia.
          </p>
        </motion.div>

      </section>

      {/* GALERÍA */}

      <section className="max-w-7xl mx-auto px-6 pb-28">

        <div className="grid md:grid-cols-3 gap-8">

          {[look1, look2, look3].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
              }}
              className="
                overflow-hidden
                rounded-[30px]
                group
              "
            >
              <img
                src={image}
                alt=""
                className="
                  w-full
                  h-[600px]
                  object-cover
                  transition-all
                  duration-1000
                  group-hover:scale-110
                "
              />
            </motion.div>
          ))}

        </div>

      </section>

      {/* DESTACADO */}

      <section className="bg-white py-28">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <span
            className="
              uppercase
              tracking-[12px]
              text-[#C8A977]
            "
          >
            NUEVA TEMPORADA
          </span>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-light
              mt-8
            "
          >
            Descubre tu estilo
          </h2>

          <p
            className="
              mt-8
              text-gray-600
              leading-8
              max-w-3xl
              mx-auto
            "
          >
            Encuentra las últimas tendencias en moda
            masculina con una selección exclusiva
            de prendas, accesorios y complementos.
          </p>

          <a
            href="https://wa.me/34657891449"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              mt-12
              px-10
              py-4
              border
              border-[#C8A977]
              text-[#C8A977]
              uppercase
              tracking-[4px]
              hover:bg-[#C8A977]
              hover:text-white
              transition-all
            "
          >
            Solicitar Información
          </a>

        </div>

      </section>

    </main>
    <Footer />
    </>
  );
}

export default NuevaColeccion;