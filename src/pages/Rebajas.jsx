import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import saleHero from "../assets/images/gallery11.jpg";
import product1 from "../assets/images/article1.jpg";
import product2 from "../assets/images/gallery1.png";
import product3 from "../assets/images/gallery2.jpg";

const offers = [
  {
    title: "Moda Hombre",
    discount: "Hasta -50%",
    image: product1,
  },
  {
    title: "Colección Joven",
    discount: "Hasta -40%",
    image: product2,
  },
  {
    title: "Complementos",
    discount: "Hasta -30%",
    image: product3,
  },
];

function Rebajas() {
  return (
    <>
      <Navbar />
    <main className="bg-[#F8F6F2] overflow-hidden">

      {/* HERO */}

      <section className="relative h-screen">

        <img
          src={saleHero}
          alt="Rebajas CÚE Moda"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        <div className="absolute inset-0 bg-black/55" />

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
                tracking-[12px]
                text-[#C8A977]
              "
            >
              OFERTAS ESPECIALES
            </span>

            <h1
              className="
                text-white
                text-6xl
                md:text-8xl
                font-light
                mt-8
              "
            >
              Rebajas
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
              Descubre descuentos exclusivos en una selección
              de prendas y complementos.
            </p>
          </motion.div>
        </div>

      </section>

      {/* INTRO */}

      <section className="max-w-5xl mx-auto px-6 py-24 text-center">

        <span
          className="
            uppercase
            tracking-[10px]
            text-[#C8A977]
          "
        >
          TEMPORADA DE REBAJAS
        </span>

        <h2
          className="
            text-4xl
            md:text-6xl
            font-light
            mt-8
            text-[#111]
          "
        >
          Moda de calidad al mejor precio
        </h2>

        <p
          className="
            mt-10
            text-gray-600
            text-lg
            leading-9
          "
        >
          Aprovecha nuestras promociones especiales y encuentra
          tus marcas favoritas con descuentos limitados.
        </p>

      </section>

      {/* OFERTAS */}

      <section className="max-w-7xl mx-auto px-6 pb-28">

        <div className="grid md:grid-cols-3 gap-8">

          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="
                bg-white
                rounded-[30px]
                overflow-hidden
                shadow-lg
                group
              "
            >
              <div className="overflow-hidden">

                <img
                  src={offer.image}
                  alt={offer.title}
                  className="
                    h-[550px]
                    w-full
                    object-cover
                    transition-all
                    duration-1000
                    group-hover:scale-110
                  "
                />

              </div>

              <div className="p-8">

                <span
                  className="
                    text-[#C8A977]
                    uppercase
                    tracking-[4px]
                    text-xs
                  "
                >
                  {offer.discount}
                </span>

                <h3
                  className="
                    text-3xl
                    font-light
                    mt-4
                  "
                >
                  {offer.title}
                </h3>

              </div>
            </motion.div>
          ))}

        </div>

      </section>

      {/* BENEFICIOS */}

      <section className="bg-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div>
              <h3 className="text-2xl font-light mb-4">
                Marcas Premium
              </h3>

              <p className="text-gray-600">
                Selección de firmas reconocidas por su calidad y diseño.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-4">
                Atención Personalizada
              </h3>

              <p className="text-gray-600">
                Asesoramiento profesional para ayudarte a encontrar tu estilo.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-4">
                Ofertas Limitadas
              </h3>

              <p className="text-gray-600">
                Descuentos exclusivos disponibles por tiempo limitado.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-28">

        <div className="max-w-4xl mx-auto text-center px-6">

          <span
            className="
              uppercase
              tracking-[10px]
              text-[#C8A977]
            "
          >
            VISÍTANOS
          </span>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-light
              mt-8
            "
          >
            No dejes escapar estas oportunidades
          </h2>

          <p
            className="
              mt-8
              text-gray-600
              leading-8
            "
          >
            Ven a nuestra tienda y descubre todas las promociones disponibles.
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
            Consultar Disponibilidad
          </a>

        </div>

      </section>

    </main>
    <Footer />
    </>
  );
}

export default Rebajas;