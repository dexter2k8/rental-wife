import styles from "./styles.module.css";
import { motion, Variants } from "framer-motion";
import { IChildren } from "../../interfaces";
import { useState } from "react";
import { CgProfile, CgLogOut, CgUserList } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const UserDropdown = ({ children }: IChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // const { user, logout } = UseRentalContext();

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"} className={styles.menu}>
      <motion.div
        className={styles.buttonMenu}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        ></motion.div>
      </motion.div>
      <motion.ul
        className={styles.listDropdown}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li
          variants={itemVariants}
          onClick={() => {
            navigate("/profile");
          }}
        >
          <div className={styles.divIcon}>
            <CgProfile />
          </div>
          <span>Editar</span>
        </motion.li>
        {/* {!user?.is_hired && ( */}
        <motion.li
          variants={itemVariants}
          onClick={() => {
            navigate("/dashboard/contractorproposals");
          }}
        >
          <div className={styles.divIcon}>
            <CgUserList />
          </div>
          <span>Propostas</span>
        </motion.li>
        {/* )} */}
        <motion.li
          variants={itemVariants}
          onClick={() => {
            // logout();
          }}
        >
          <div className={styles.divIcon}>
            <CgLogOut />
          </div>
          <span>Logout</span>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default UserDropdown;
