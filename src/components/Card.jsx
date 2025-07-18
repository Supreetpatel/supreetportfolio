import { motion as Motion } from "framer-motion";
const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <Motion.img
      src={image}
      alt={text}
      className="absolute w-15 cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <Motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </Motion.div>
  );
};

export default Card;
