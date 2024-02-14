import { motion } from "framer-motion";
import { IChildren } from "../../interfaces";

const Transition = ({ children }: IChildren) => {
  const transitions = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <motion.div
      variants={transitions}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="animatedPage"
    >
      {children}
    </motion.div>
  );
};

export default Transition;
