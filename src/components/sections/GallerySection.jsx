import { motion } from "framer-motion";

import img1 from "../../assets/images/gallery1.png";
import img2 from "../../assets/images/gallery2.jpg";
import img3 from "../../assets/images/gallery3.jpg";
import img4 from "../../assets/images/gallery4.jpg";
import img5 from "../../assets/images/gallery5.png";
import img6 from "../../assets/images/gallery6.jpg";
import img7 from "../../assets/images/gallery7.jpg";
import img8 from "../../assets/images/gallery8.jpg";
import img9 from "../../assets/images/gallery9.jpg";
import img10 from "../../assets/images/gallery10.jpg";

const images = [
  { src: img1, span: "row-span-2 col-span-1" },
  { src: img2, span: "row-span-1 col-span-1" },
  { src: img3, span: "row-span-1 col-span-2" },
  { src: img4, span: "row-span-2 col-span-1" },
  { src: img5, span: "row-span-1 col-span-1" },
  { src: img6, span: "row-span-1 col-span-1" },
  { src: img7, span: "row-span-2 col-span-1" },
  { src: img8, span: "row-span-1 col-span-2" },
  { src: img9, span: "row-span-1 col-span-1" },
  { src: img10, span: "row-span-2 col-span-1" },
  { src: img10, span: "row-span-2 col-span-1" },
  { src: img10, span: "row-span-1 col-span-2" },
];

function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-32 bg-[#0B0F19] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center mb-20">
          <span className="text-[#C8A977] tracking-[12px] text-sm uppercase">
            CÚE MODA
          </span>

          <h2 className="text-white text-5xl md:text-7xl font-light mt-6">
            Gallery
          </h2>

          <div className="w-24 h-[2px] bg-[#C8A977] mx-auto mt-6" />
        </div>

        {/* GRID */}

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[170px] gap-4">

          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              className={`
                relative
                overflow-hidden
                rounded-2xl
                group
                ${img.span}
              `}
            >

              {/* IMAGE */}

              <motion.img
                src={img.src}
                alt=""
                className="
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                  group-hover:brightness-110
                "
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 6 + (index % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* OVERLAY */}

              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/20
                to-transparent
              " />

              {/* BORDER PREMIUM */}

              <div className="
                absolute
                inset-0
                border
                border-white/10
                group-hover:border-[#C8A977]/40
                transition-all
                duration-500
                rounded-2xl
              " />

              {/* GLOW EFFECT */}

              <div className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                bg-[radial-gradient(circle_at_center,rgba(200,169,119,0.25),transparent_60%)]
                transition-all duration-700
              " />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default GallerySection;