import styled from "./styles.module.css";
import Modal from "../../components/Modal";
import { Button, TextField } from "@mui/material";

interface IModalContractProps {
  open: boolean;
  onClose: () => void;
}

const ModalContract: React.FC<IModalContractProps> = ({ open, onClose }) => {
  return (
    <Modal title="Faça uma proposta" open={open} onClose={onClose}>
      <div className={styled.container}>
        <div>
          <h3>Qual trabalho você precisa?</h3>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Ex: Troca de Chuveiro"
            fullWidth
          />
        </div>
        <div>
          <h3>Descrição do trabalho a ser feito</h3>
          <TextField
            placeholder="Digite a descrição detalhada"
            multiline
            fullWidth
            rows={4}
            style={{ backgroundColor: "#E8E9EC", borderRadius: "0.25rem" }}
          />
        </div>
        <Button variant="contained" fullWidth onClick={onClose}>
          Faça uma proposta
        </Button>
      </div>
    </Modal>
  );
};

export default ModalContract;
