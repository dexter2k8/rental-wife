import styles from "./styles.module.css";
import logoForm from "../../assets/logoForm.svg";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  return (
    <div className={styles.content}>
      <div className={styles.formField}>
        <figure>
          <img src={logoForm} alt="Rental Wife" />
        </figure>
        <form>
          <h2>Cadastro</h2>
          <div>
            <FaUser />
            <input type="text" placeholder="Nome" />
          </div>
          <div>
            <FaEnvelope />
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <FaLock />
            <input type="password" placeholder="Senha" />
          </div>
          <div>
            <FaLock />
            <input type="password" placeholder="Repita a senha" />
          </div>
          <fieldset>
            <input type="radio" name="userType" value="client" />
            <label htmlFor="client">Cliente</label>
            <input type="radio" name="userType" value="worker" />
            <label htmlFor="worker">Prestador de Serviço</label>
          </fieldset>
          <button>Cadastrar</button>
          <Link className={styles.goToLogin} to="/login">
            Já sou cadastrado
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
