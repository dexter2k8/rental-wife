import styles from "./styles.module.css";
import logoWhite from "../../assets/logoWhite.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={styles.content}>
      <figure>
        <img src={logoWhite} alt="Rental Wife" />
      </figure>
      <section>
        <h1>Você está precisando realizar serviços de manutenção em casa?</h1>
        <h3>Entre em nosso site e resolva todos os seus problemas!</h3>
        <div>
          <Link to="/home">Quero conhecer</Link>
          <Link to="/login">Fazer login</Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
