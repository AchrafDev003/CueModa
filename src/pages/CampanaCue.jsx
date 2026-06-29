import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import campaignVideo from "../assets/images/trend1.mp4";

import image1 from "../assets/images/gallery1.png";
import image2 from "../assets/images/gallery2.jpg";
import image3 from "../assets/images/gallery3.jpg";

function CampanaCue() {
  return (
    <>
      <Navbar />
    <main className="bg-[#F8F6F2] text-[#111] overflow-hidden">

      {/* HERO */}

      <section className="relative h-[260svh] overflow-hidden">

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
    object-center
    scale-[1.05]
  "
>
  <source src={campaignVideo} type="video/mp4" />
</video>

        <div className="absolute inset-0 " />
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/50" />

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
  pt-24
  md:pt-0
"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span
              className="
                uppercase
                tracking-[12px]
                text-[#C8A977]
              "
            >
              CÚE MODA
            </span>

            <h1
              className="
                mt-8
                text-white
                text-5xl
                md:text-8xl
                font-light
              "
            >
              Campaña CÚE
            </h1>

            <p
              className="
                mt-8
                text-white/80
                max-w-2xl
                mx-auto
                text-lg
              "
            >
              Una visión de la moda basada en la elegancia,
              la autenticidad y el estilo cotidiano.
            </p>
          </motion.div>
        </div>

      </section>

      {/* HISTORIA */}

      <section className="max-w-6xl mx-auto px-6 py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="
                uppercase
                tracking-[8px]
                text-[#C8A977]
              "
            >
              Nuestra Esencia
            </span>

            <h2
              className="
                text-5xl
                font-light
                mt-6
              "
            >
              Moda con personalidad
            </h2>

            <p className="mt-8 text-gray-600 leading-9">
              En CÚE Moda creemos que vestir bien no es seguir
              tendencias, sino expresar quién eres.
            </p>

            <p className="mt-6 text-gray-600 leading-9">
              Seleccionamos cuidadosamente prendas y marcas
              que combinan calidad, comodidad y diseño para
              ofrecer una experiencia única a nuestros clientes.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={image1}
            alt="Campaña CÚE"
            className="
              rounded-[30px]
              h-[680px]
              w-full
              object-cover
            "
          />
        </div>

      </section>

      {/* GALERÍA */}

      <section className="max-w-7xl mx-auto px-6 pb-28">

        <div className="grid md:grid-cols-3 gap-8">

          {[image1, image2, image3].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="
                overflow-hidden
                rounded-[30px]
                group
              "
            >
              <img
                src={img}
                alt=""
                className="
                  h-[500px]
                  w-full
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

      {/* MARCAS */}

      <section className="bg-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <span
            className="
              uppercase
              tracking-[10px]
              text-[#C8A977]
            "
          >
            Marcas Destacadas
          </span>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-light
              mt-8
            "
          >
            Selección Premium
          </h2>

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              gap-10
              mt-16
            "
          >
            <div>Tommy Hilfiger</div>
            <div>Levi's</div>
            <div>Pepe Jeans</div>
            <div>Jack & Jones</div>
            <div>Lois</div>
            <div>Only & Sons</div>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-28">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2
            className="
              text-4xl
              md:text-6xl
              font-light
            "
          >
            Ven a descubrir CÚE Moda
          </h2>

          <p
            className="
              mt-8
              text-gray-600
              leading-8
            "
          >
            Te esperamos con una selección exclusiva
            de moda para hombre.
          </p>

          <a
            href="https://wa.me/34625165311"
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
            Contactar
          </a>

        </div>

      </section>

    </main>
     <Footer />
    </> 
  );
}

export default CampanaCue;