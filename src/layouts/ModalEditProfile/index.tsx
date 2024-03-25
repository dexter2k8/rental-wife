import styles from "./styles.module.css";
import Modal from "../../components/Modal";
import { useAuthContext } from "../../contexts/AuthContext";
import { Button, TextField, Checkbox } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

interface IModalEditProfileProps {
  open: boolean;
  onClose: () => void;
}

const services = ["Alvenaria", "Hidráulica", "Marcenaria", "Mecânica", "Eletricista", "Diarista"];

const ModalEditProfile: React.FC<IModalEditProfileProps> = ({ open, onClose }) => {
  const { userData } = useAuthContext();
  const checked = (item: string) => {
    return userData?.services?.includes(item);
  };

  return (
    <Modal title="Edit Profile" open={open} onClose={onClose}>
      <>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <figure>
              <img src={userData?.avatar_img} alt="Avatar" />
            </figure>
            <Button size="small" variant="contained">
              Upload
            </Button>
          </div>
          <form>
            <TextField label="Nome" variant="standard" defaultValue={userData?.name} />
            <TextField label="Email" variant="standard" defaultValue={userData?.email} />
            <TextField label="Contato" variant="standard" defaultValue={userData?.contact} />
            <TextField label="Localidade" variant="standard" defaultValue={userData?.location} />
          </form>
        </div>
        <h3 className={styles.subTitle}>Preferência de serviços:</h3>
        <FormGroup row>
          {services.map((el, i) => (
            <FormControlLabel key={i} control={<Checkbox checked={checked(el)} />} label={el} />
          ))}
        </FormGroup>
        <div className={styles.buttonContainer}>
          <Button variant="contained" onClick={onClose}>
            Salvar
          </Button>
        </div>
      </>
    </Modal>
  );
};

export default ModalEditProfile;
