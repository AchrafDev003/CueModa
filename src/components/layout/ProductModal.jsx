import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes, FaRulerCombined } from "react-icons/fa";
import { useEffect } from "react";

const sizes = ["S", "M", "L", "XL"];

function ProductModal({ product, onClose }) {
  // ❗ Hooks siempre arriba
  useEffect(() => {
    if (!product) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hola, estoy interesado en el producto "${product.title}" (${product.price}) que he visto en la web de Cúe Moda.`
  );

  return (
    <AnimatePresence>
      <motion.div
        className="
          fixed inset-0 z-[9999]
          flex items-center justify-center
          bg-black/60 backdrop-blur-xl
          p-5 cursor-pointer
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="
            relative w-full max-w-4xl
            max-h-[90vh] overflow-y-auto
            cursor-default rounded-3xl
            bg-[#111]
            border border-[#C8A97E]/20
            shadow-[0_30px_80px_rgba(0,0,0,.6)]
          "
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.35 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* BOTÓN CERRAR (UNO SOLO) */}
          <button
            onClick={onClose}
            className="
              absolute top-4 right-4
              w-10 h-10
              rounded-full
              bg-white/10
              hover:bg-[#C8A97E]
              hover:text-black
              transition-all
              flex items-center justify-center
              z-50
            "
          >
            <FaTimes />
          </button>

          <div className="flex flex-col lg:grid lg:grid-cols-2">
            {/* IMAGEN */}
            <div className="
              relative bg-gradient-to-br
              from-[#1B1B1B] to-[#0B0B0B]
              flex items-start justify-center
              p-10 pt-6
            ">
              <img
                src={product.image}
                alt={product.title}
                className="
                  w-full
                  max-h-[380px]
                  lg:max-h-[520px]
                  object-contain
                  transition-transform duration-500
                  hover:scale-105
                  drop-shadow-[0_25px_50px_rgba(0,0,0,.5)]
                "
              />
            </div>

            {/* INFO */}
            <div className="p-10 lg:p-14 flex flex-col">
              <span className="uppercase tracking-[6px] text-[#C8A97E] text-sm">
                {product.category}
              </span>

              <h2 className="text-white text-3xl lg:text-5xl font-bold mt-4">
                {product.title}
              </h2>

              <p className="text-[#C8A97E] text-2xl lg:text-4xl font-semibold mt-6">
                {product.price}
              </p>

              <p className="text-gray-400 mt-8 leading-8">
                Descubre una prenda confeccionada con materiales de alta calidad,
                diseñada para ofrecer comodidad y estilo.
              </p>

              {/* TALLAS */}
              <div className="mt-10">
                <h4 className="text-white mb-4 font-semibold">
                  Selecciona tu talla
                </h4>

                <div className="flex gap-3 flex-wrap">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className="
                        w-14 h-14 rounded-xl
                        border border-white/10
                        text-white
                        hover:bg-[#C8A97E]
                        hover:text-black
                        transition-all
                      "
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="mt-12">
                <a
                  href={`https://wa.me/34625165311?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1 inline-flex justify-center items-center
                    gap-3 py-4 px-8 rounded-full
                    bg-[#C8A97E] text-black font-semibold
                    hover:scale-105 transition-all
                  "
                >
                  <FaWhatsapp size={20} />
                  Comprar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProductModal;