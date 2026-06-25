import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logos/logo.jpg";
import { useScrollToSection } from "../../hooks/useScrollToSection";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const goToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", id: "home" },
    { name: "Nosotros", id: "about" },
    { name: "Marcas", id: "brands" },
    { name: "Eventos", id: "events" },
    { name: "Contacto", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B0B0B]/90 backdrop-blur-2xl border-b border-[#C8A97E]/10 shadow-[0_10px_30px_rgba(0,0,0,.35)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex items-center justify-between h-24">

          {/* LOGO */}
          <a
            onClick={() => goToSection("home")}
            className="flex items-center gap-4 cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-14 h-14 rounded-full overflow-hidden border border-[#C8A97E]/30"
            >
              <img src={logo} alt="Cúe Moda" className="w-full h-full object-cover" />
            </motion.div>

            <div className="hidden md:block">
              <h1 className="text-[#C8A97E] text-4xl tracking-[3px] leading-none">
                Cúe Moda
              </h1>

              <p className="text-[#E7D7C1] text-[11px] tracking-[6px] uppercase mt-1">
                Moda & Tendencia
              </p>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-10">

            {links.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => goToSection(link.id)}
                  className="
                    relative
                    text-[#F5F5F5]
                    font-medium
                    tracking-wide
                    hover:text-[#C8A97E]
                    group
                    transition
                  "
                >
                  {link.name}

                  <span className="
                    absolute left-0 -bottom-2 h-[1px] w-0 bg-[#C8A97E]
                    group-hover:w-full transition-all duration-300
                  " />
                </button>
              </li>
            ))}

          </ul>

          {/* CTA */}
          <a
            href="https://wa.me/34613266710"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden lg:flex
              items-center
              px-7 py-3
              rounded-full
              bg-[#C8A97E]
              text-black
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            WhatsApp
          </a>

          {/* MOBILE */}
          <button
            className="lg:hidden text-[#F5F5F5]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-[#0B0B0B]/95 backdrop-blur-2xl"
          >
            <ul className="flex flex-col items-center py-10 gap-7">

              {links.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      goToSection(link.id);
                      setIsOpen(false);
                    }}
                    className="text-lg text-[#F5F5F5] hover:text-[#C8A97E]"
                  >
                    {link.name}
                  </button>
                </li>
              ))}

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;