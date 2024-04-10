import styles from "./styles.module.css";
import logoForm from "../../assets/logoForm.svg";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Transition from "../../components/Transition";

const Login = () => {
  return (
    <div className={styles.content}>
      <Transition>
        <div className={styles.formField}>
          <figure>
            <img src={logoForm} alt="Rental Wife" />
          </figure>
          <form>
            <h2>Login</h2>
            <div>
              <FaEnvelope />
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <FaLock />
              <input type="password" placeholder="Senha" />
            </div>
            <Link className={styles.enter} to="/dashboard">
              Entrar
            </Link>
            <Link to="/register">Esqueceu sua senha?</Link>
            <Link className={styles.goToRegister} to="/register">
              {" "}
              Criar uma conta
            </Link>
          </form>
        </div>
      </Transition>
    </div>
  );
};

export default Login;
