import styles from "./styles.module.css";
import { ReactNode } from "react";
import logo from "/src/assets/logoWhite.svg";
import { Link } from "react-router-dom";

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header className={styles.container}>
        <div className={styles.content}>
          <Link to="/dashboard">
            <img src={logo} alt="Logo" />
          </Link>
          {children}
        </div>
      </header>
    </div>
  );
};

export default Header;
