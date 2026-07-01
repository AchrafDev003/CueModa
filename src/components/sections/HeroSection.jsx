import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import ProductModal from "../layout/ProductModal";

import article1 from "../../assets/images/article6.png";
import article2 from "../../assets/images/article7.png";
import article3 from "../../assets/images/article3.png";
import article4 from "../../assets/images/article4.png";
const featuredProducts = [
  {
    id: 1,
    image: article1,
    title: "Americana Premium",
    category: "Nueva Colección",
    price: "89,99€",
  },
  {
    id: 2,
    image: article2,
    title: "Camisa Elegance",
    category: "Tendencias",
    price: "49,99€",
  },
  {
    id: 3,
    image: article4,
    title: "Look Casual",
    category: "Exclusivo",
    price: "69,99€",
  },
  {
    id: 4,
    image: article3,
    title: "Moda Urbana",
    category: "Destacado",
    price: "79,99€",
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === featuredProducts.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="home"
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#0B0B0B]
      pt-28
      "
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0">

        {/* círculo principal */}
        <div
          className="
          absolute
          right-[-250px]
          top-[-100px]
          w-[850px]
          h-[850px]
          rounded-full
          bg-gradient-to-br
          from-[#C8A97E]/20
via-[#E7D7C1]/10
          to-transparent
          "
        />

        {/* diagonal superior */}
        <div
          className="
          absolute
          top-0
          right-0
          w-[60%]
          h-[300px]
          bg-[#C8A97E]/10
          rotate-[-12deg]
          translate-x-40
          -translate-y-32
          opacity-40
          "
        />

        {/* diagonal inferior */}
        <div
          className="
          absolute
          bottom-[-250px]
          left-[-150px]
          w-[700px]
          h-[500px]
          bg-[#171717]
          rotate-12
          opacity-40
          "
        />

        {/* glow */}
        <div
          className="
          absolute
          right-20
          top-40
          w-96
          h-96
          rounded-full
          bg-[#C8A97E]/15
          blur-[120px]
          "
        />
      </div>

      {/* CONTENT */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:-mt-20  lg:grid-cols-[40%_60%] gap-6 items-center">

          {/* LEFT */}

          <motion.div
  initial={{
    opacity: 0,
    x: -50,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 0.8,
  }}
  className="lg:-mt-20"
>
            <span
              className="
              text-[#C8A97E]
              uppercase
              tracking-[6px]
              text-sm
              lg:-mt-20
              "
            >
              Nueva colección
            </span>

            <h1
              className="
              text-white
              font-bold
              text-5xl
              md:text-7xl
              leading-tight
              mt-4
              
              "
            >
              Viste tu
              <br />
              propio
              <span className="text-[#C8A97E]">
                {" "}
                estilo
              </span>
            </h1>

            <p
              className="
              text-gray-400
              text-lg
              mt-6
              max-w-lg
              "
            >
              Descubre las últimas tendencias en moda
              masculina. Diseños modernos, elegantes y
              pensados para destacar.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
  href="https://wa.me/34625165311?text=Hola,%20he%20visitado%20la%20web%20de%20Cúe%20Moda."
  target="_blank"
  rel="noopener noreferrer"
  className="
  inline-flex
  items-center
  gap-3
  px-8
  py-4
  rounded-full
  bg-[#C8A97E]
  text-black
  font-semibold
  hover:bg-[#D6B890]
  transition-all
  duration-300
  hover:scale-105
  "
>
  <FaWhatsapp size={20} />
  Comprar ahora
</a>

              <a
                href="#events"
                className="
      px-8
      py-4
      rounded-full
      border
      border-[#C8A97E]/40
      text-white
      hover:bg-[#C8A97E]/10
      transition-all
      duration-300
    "
              >
                Explorar
              </a>
            </div>

            <div className="flex flex-wrap gap-12 mt-18">
              <div>
                <h3 className="text-[#C8A97E] text-3xl font-bold">
                  +500
                </h3>
                <p className="text-gray-500">
                  Productos
                </p>
              </div>

              <div>
                <h3 className="text-[#C8A97E] text-3xl font-bold">
                  +20
                </h3>
                <p className="text-gray-500">
                  Marcas
                </p>
              </div>

              <div>
                <h3 className="text-[#C8A97E] text-3xl font-bold">
                  +10K
                </h3>
                <p className="text-gray-500">
                  Clientes
                </p>
              </div>
            </div>


          </motion.div>

          {/* RIGHT */}

         {/* RIGHT */}

<motion.div
  initial={{
    opacity: 0,
    y: 60,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1,
  }}
  className="relative"
>
  {/* círculo visual */}

  <div
    className="
    absolute
    inset-0
    flex
    items-center
    justify-center
    "
  >
    <div
      className="
      w-[650px]
      h-[650px]
      rounded-full
      bg-gradient-to-br
      from-[#C8A97E]/20
      via-[#E7D7C1]/10
      to-transparent
      "
    />
  </div>

  {/* PRODUCT SHOWCASE */}

  <div className="relative z-10 mt-7 flex flex-col items-center">

    {/* PRODUCTO PRINCIPAL */}

    <motion.div
      key={current}
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: {
          duration: 0.8,
        },
        scale: {
          duration: 0.8,
        },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative"
    >
      <img
        src={featuredProducts[current].image}
        alt={featuredProducts[current].title}
        className="
        relative
        z-10
        w-full
        max-w-[700px]
        max-h-[400px]
        object-contain
        mx-auto
        drop-shadow-[0_30px_70px_rgba(0,0,0,.45)]
        pt-4
        "
      />
    </motion.div>

    {/* INFO PRODUCTO */}

    <motion.div
      key={`info-${current}`}
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
mt-4
text-center
bg-[#171717]/60
backdrop-blur-2xl
border
border-[#C8A97E]/15
shadow-[0_20px_60px_rgba(200,169,126,0.15)]
rounded-3xl
px-8
py-6
mt-0
"
    >
      <p className="text-[#C8A97E] uppercase tracking-[4px] text-sm">
        {featuredProducts[current].category}
      </p>

      <h3 className="text-white text-3xl font-bold mt-2">
        {featuredProducts[current].title}
      </h3>

      

      <button
  onClick={() => setSelectedProduct(featuredProducts[current])}
  className="
    mt-6
    px-8
    py-4
    rounded-full
    bg-[#C8A97E]
    text-black
    font-semibold
    hover:scale-105
    transition-all
    duration-300
  "
>
  Ver Producto
</button>
    </motion.div>

    {/* MINIATURAS */}

    <div
      className="
      flex
      justify-center
      gap-4
      mt-8
      flex-wrap
      "
    >
      {featuredProducts.map((product, index) => (
        <motion.button
          key={product.id}
          whileHover={{
            y: -5,
            scale: 1.05,
          }}
          onClick={() => setCurrent(index)}
          className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
            current === index
              ? "border-[#C8A97E] scale-110"
              : "border-white/10"
          }`}
        >
          <img
            src={product.image}
            alt={product.title}
            className="
            w-24
            h-24
            object-cover
            "
          />
        </motion.button>
      ))}
    </div>

    {/* INDICADORES */}

    <div className="flex justify-center gap-3 mt-6">
      {featuredProducts.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrent(index)}
          className={`rounded-full transition-all duration-300 ${
            current === index
              ? "w-10 h-2 bg-[#C8A97E]"
              : "w-2 h-2 bg-white/30"
          }`}
        />
      ))}
    </div>

  </div>
</motion.div>

</div>
</div>
<ProductModal
  product={selectedProduct}
  onClose={() => setSelectedProduct(null)}
/>
</section>
);
}

export default HeroSection;
    
