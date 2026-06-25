import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {

  const scrollToSection = (id) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <footer className="bg-[#0B0F19] text-white relative overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,#C8A977,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-14">

          {/* BRAND */}
          <div>
            <h3 className="text-3xl font-light tracking-[6px]">
              CÚE MODA
            </h3>

            <p className="text-gray-400 mt-6 leading-7">
              Moda contemporánea con esencia elegante.
              Selección premium de marcas y tendencias
              para hombre y mujer.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-xs uppercase tracking-[6px] text-[#C8A977]">
              Navegación
            </h4>

            <ul className="mt-6 space-y-3 text-gray-400">

              <li>
                <button onClick={() => scrollToSection("home")} className="hover:text-white transition">
                  Inicio
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-white transition">
                  Sobre Nosotros
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("brands")} className="hover:text-white transition">
                  Marcas
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("events")} className="hover:text-white transition">
                  Actualidad
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("gallery")} className="hover:text-white transition">
                  Galería
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-white transition">
                  Contacto
                </button>
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs uppercase tracking-[6px] text-[#C8A977]">
              Contacto
            </h4>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>Calle Álamos 12, Alcalá la Real</li>
              <li>+34 953 581 802</li>
              <li>+34 657 891 449</li>
            </ul>

            {/* SOCIAL */}
            <div className="flex items-center gap-6 mt-8">

              <a
                href="https://www.instagram.com/cue_moda_alcalalareal/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition"
              >
                <FaInstagram />
                Instagram
              </a>

              <a
                href="https://wa.me/34657891449"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-14" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Cúe Moda. Todos los derechos reservados.
          </p>

          <p className="text-gray-600 text-xs tracking-[3px] uppercase">
            Designed with elegance
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;