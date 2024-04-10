import styles from "./styles.module.css";
import Header from "../../layouts/Header";
import UserDropdown from "../../components/UserDropdown";
import { useState } from "react";
import { Avatar, Button } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";
import Footer from "../../layouts/Footer";
import { Link } from "react-router-dom";
import ModalContract from "../../layouts/ModalContract";
import ModalEditProfile from "../../layouts/ModalEditProfile";

const Details = () => {
  const { userData } = useAuthContext();
  const [editModalContractOpen, setEditModalContractOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  return (
    <>
      <Header>
        <UserDropdown actionEdit={() => setEditModalOpen((prev) => !prev)}>
          <Avatar src={userData?.avatar_img} />
        </UserDropdown>
      </Header>
      <div className={styles.container}>
        <h2>Perfil da Colaboradora</h2>
        <main className={styles.content}>
          <div className={styles.info}>
            <div className={styles.profile}>
              <Avatar
                sx={{ width: 200, height: 200 }}
                src={userData?.avatar_img}
                alt={userData?.name}
              />
              <div>
                <h1>{userData?.name}</h1>
                <h3>{userData?.location}</h3>
              </div>
            </div>
            <div className={styles.competenciesContainer}>
              <h3>Competências</h3>
              <ul className={styles.competencies}>
                {userData?.services?.length ? (
                  userData.services.map((el, i) => (
                    <li key={i}>
                      <span>{el}</span>
                    </li>
                  ))
                ) : (
                  <li>
                    <span>Não há competências</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className={styles.description}>
            <p>Descrição</p>
            <div>
              {userData?.description ? <p>{userData?.description}</p> : <h2>Sem descrição</h2>}
            </div>
          </div>

          <div className={styles.description}>
            <p>Recomendações</p>
            <div>
              {userData?.description ? <p>{userData?.description}</p> : <h2>Sem recomendações</h2>}
            </div>
          </div>

          <div className={styles.buttonsContainer}>
            <Link className={styles.buttonLink} type="button" to={"/dashboard"}>
              VOLTAR
            </Link>
            <Button variant="contained" onClick={() => setEditModalContractOpen(true)}>
              Contratar
            </Button>
          </div>
        </main>
      </div>
      <Footer />
      <ModalContract open={editModalContractOpen} onClose={() => setEditModalContractOpen(false)} />
      <ModalEditProfile open={editModalOpen} onClose={() => setEditModalOpen(false)} />
    </>
  );
};
export default Details;
