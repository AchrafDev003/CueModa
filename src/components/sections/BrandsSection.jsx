import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

// 🔥 Ejemplo: aquí deberías usar logos reales
import tommy from "../../assets/brands/brand1.png";
import pepe from "../../assets/brands/brand2.png";
import lois from "../../assets/brands/brand3.png";
import jack from "../../assets/brands/brand4.png";
import levis from "../../assets/brands/brand5.png";
import only from "../../assets/brands/brand6.png";

const brands = [
  { name: "Privata", logo: tommy },
  { name: "Cool Bike", logo: pepe },
  { name: "Walking Pitas", logo: lois },
  { name: "Ojal & Boton", logo: jack },
  { name: "Spagnolo", logo: levis },
  { name: "TIFFOSI", logo: only },
];

function BrandsSection() {
  return (
    <section id="brands" className="bg-[#F8F8F8] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
  <FaStar className="text-[#C7A86B] text-lg" />

  <span className="text-[#C7A86B] uppercase tracking-[12px] text-sm md:text-base">
    Marcas
  </span>
</div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2A44] mt-4">
            Las mejores marcas
          </h2>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                group
                bg-gradient-to-br
                from-[#C7A86B]/10
                to-transparent
                rounded-3xl
                border
                border-black/5
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-500
                p-4
                flex
                flex-col
                items-center
                justify-center
                gap-6
                relative
                overflow-hidden
              "
            >
              {/* GLOW SUAVE */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#C7A86B]/10
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
              " />

              {/* LOGO */}
              <img
                src={brand.logo}
                alt={brand.name}
                className="
                  w-32
                  h-20
                  object-contain
                  
                  opacity-80
                  group-hover:grayscale-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              />

              {/* NOMBRE */}
              <h3 translate="no" className="
                text-[#1F2A44]
                font-medium
                tracking-wide
                text-lg
                group-hover:text-[#C7A86B]
                transition-colors
                duration-300
              ">
                {brand.name}
              </h3>

              {/* LINEA ZARA STYLE */}
              <div className="
                w-0
                h-[1px]
                bg-[#C7A86B]
                group-hover:w-16
                transition-all
                duration-500
              " />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default BrandsSection;