import styles from "./styles.module.css";
import MuiModal from "@mui/material/Modal";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface IModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ title, open, onClose, children }: IModalProps) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <div className={styles.container}>
        <header>
          <h2>{title}</h2>
          <AiOutlineCloseCircle
            onClick={onClose}
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
          />
        </header>
        {children}
      </div>
    </MuiModal>
  );
};

export default Modal;
