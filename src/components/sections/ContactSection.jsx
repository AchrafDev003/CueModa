import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 bg-[#0B0F19] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#C8A977] tracking-[12px] text-sm uppercase">
            CÚE MODA
          </span>

          <h2 className="text-white text-5xl md:text-7xl font-light mt-6">
            Contacto
          </h2>

          <div className="w-24 h-[2px] bg-[#C8A977] mx-auto mt-6" />

          <p className="text-gray-400 mt-8 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Visítanos o contáctanos
            a través de cualquiera de nuestros canales.
          </p>
        </motion.div>

        {/* CARDS */}

        <div className="grid md:grid-cols-3 gap-8">

          {/* ADDRESS */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              p-10
              rounded-3xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              text-center
              group
            "
          >
            <MapPin
              size={42}
              className="mx-auto mb-6 text-[#C8A977]"
            />

            <h3 className="text-white text-xl font-light mb-3">
              Ubicación
            </h3>

            <p className="text-gray-400 leading-7">
              Avenida Andalucía 9<br />
              23680 Alcalá la Real
            </p>
          </motion.div>

          {/* PHONE */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              p-10
              rounded-3xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              text-center
            "
          >
            <Phone
              size={42}
              className="mx-auto mb-6 text-[#C8A977]"
            />

            <h3 className="text-white text-xl font-light mb-3">
              Teléfono
            </h3>

            <p className="text-gray-400">
              +34 953 581 802<br />
              +34 625 165 311
            </p>
          </motion.div>

          {/* EMAIL */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              p-10
              rounded-3xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              text-center
            "
          >
            <Mail
              size={42}
              className="mx-auto mb-6 text-[#C8A977]"
            />

            <h3 className="text-white text-xl font-light mb-3">
              Email
            </h3>

            <p className="text-gray-400">
              info@cuemoda.com
            </p>
          </motion.div>

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <a
            href="https://wa.me/34625165311"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              px-12
              py-4
              border
              border-[#C8A977]
              text-[#C8A977]
              uppercase
              tracking-[4px]
              hover:bg-[#C8A977]
              hover:text-black
              transition-all
              duration-300
            "
          >
            Contactar por WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default ContactSection;