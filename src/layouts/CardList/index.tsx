import styles from "./styles.module.css";
import { Avatar, Button } from "@mui/material";
import woman from "../../assets/woman.png";

interface ICardListProps {
  id: number;
  avatar: string;
  name: string;
  description: string;
}

const CardList = ({ user }: { user: ICardListProps[] }) => {
  return (
    <ul className={styles.listContainer}>
      {user.map((el) => (
        <li key={el.id}>
          <Avatar sx={{ width: 128, height: 128 }} src={el.avatar} alt={el.name} />
          <h2>{el.name}</h2>
          <p>{el.description}</p>
          <Button variant="contained" style={{ textTransform: "none", width: "9rem" }}>
            Visualizar
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default CardList;
