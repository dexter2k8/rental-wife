import { motion, Variants } from "framer-motion";
import { IChildren } from "../../interfaces";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const UserDropdown = ({ children }: IChildren) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default UserDropdown;
