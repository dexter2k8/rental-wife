import styles from "./styles.module.css";
import Header from "../../layouts/Header";
import { Avatar, Button } from "@mui/material";
import UserDropdown from "../../components/UserDropdown";
import { useAuthContext } from "../../contexts/AuthContext";
import Footer from "../../layouts/Footer";
import { mockProposals } from "../../mock/proposals";

const UserProposals = () => {
  const { userData } = useAuthContext();

  return (
    <>
      <Header>
        <UserDropdown>
          <Avatar src={userData?.avatar_img} />
        </UserDropdown>
      </Header>
      <div className={styles.container}>
        <h2>Minhas propostas</h2>
        <ul className={styles.listContainer}>
          {mockProposals.map((el, i) => (
            <li key={i} className={styles.card}>
              <div className={styles.headLine}>
                <h3>{el.title}</h3>
                <p>
                  Status: <span>{el.status}</span>
                </p>
              </div>
              <p>{el.description}</p>
              {el.status === "Aceita" && (
                <div className={styles.buttonContainer}>
                  <Button variant="contained">Concluir</Button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default UserProposals;
