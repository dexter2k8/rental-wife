import styles from "./styles.module.css";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";

interface IModalGoToRegisterProps {
  open: boolean;
  onClose: () => void;
}

const ModalGoToRegister: React.FC<IModalGoToRegisterProps> = ({ open, onClose }) => {
  return (
    <Modal title="Crie sua conta" open={open} onClose={onClose}>
      <div className={styles.container}>
        <p>
          Para acessar as informações detalhadas de nossas colaboradoras é necessário estar
          conectado à plataforma.
        </p>
        <div className={styles.buttonContainer}>
          <Link to="/register">Cadastrar</Link>
        </div>
      </div>
    </Modal>
  );
};

export default ModalGoToRegister;
