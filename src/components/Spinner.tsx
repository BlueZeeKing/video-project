import { motion } from "framer-motion";

export default function Spinner() {
  return (
    <motion.div
      className="grid grid-rows-3 grid-cols-3 w-12 h-12 justify-center place-content-center content-center gap-1"
      animate={{ rotate: [0, 360] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
    >
      {[1, 2, 3, 4].map((item) => (
        <motion.div
          className={`${
            item % 2 == 0 ? "bg-blue-500" : "bg-blue-400"
          } w-full h-full rounded-full ${
            item == 1
              ? "col-start-2 row-start-1"
              : item == 2
              ? "col-start-1 row-start-2"
              : item == 3
              ? "col-start-2 row-start-3"
              : "col-start-3 row-start-2"
          }`}
          animate={{ scale: [1, 0.9, 1] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            delay: item % 2 == 0 ? 0 : 1,
            repeatDelay: 1,
            duration: 1,
          }}
        ></motion.div>
      ))}
    </motion.div>
  );
}
