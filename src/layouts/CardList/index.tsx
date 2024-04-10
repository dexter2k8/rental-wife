import { useState } from "react";
import ModalGoToRegister from "../ModalGoToRegister";
import styles from "./styles.module.css";
import { Avatar, Button } from "@mui/material";
import { useNavigate, useNavigation } from "react-router-dom";

interface ICardUserProps {
  id: number;
  avatar: string;
  name: string;
  description: string;
}

interface ICardListProps {
  user: ICardUserProps[];
  isLogged?: boolean;
}

const CardList = ({ user, isLogged }: ICardListProps) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (!isLogged) return setOpenModal(true);
    navigate("/details");
  };
  return (
    <>
      <ul className={styles.listContainer}>
        {user.map((el) => (
          <li key={el.id}>
            <Avatar sx={{ width: 128, height: 128 }} src={el.avatar} alt={el.name} />
            <h2>{el.name}</h2>
            <p>{el.description}</p>
            <Button
              onClick={handleButtonClick}
              variant="contained"
              style={{ textTransform: "none", width: "9rem" }}
            >
              Visualizar
            </Button>
          </li>
        ))}
      </ul>
      <ModalGoToRegister open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default CardList;
