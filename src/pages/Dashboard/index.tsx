import styles from "./styles.module.css";
import Header from "../../layouts/Header";
import { Link } from "react-router-dom";
import Filter from "../../components/Filter";
import CardList from "../../layouts/CardList";
import Footer from "../../layouts/Footer";
import Transition from "../../components/Transition";
import { mockLocations, mockServices, users } from "../../mock/workers";
import UserDropdown from "../../components/UserDropdown";
import { Avatar } from "@mui/material";
import woman from "../../assets/woman.png";

const Dashboard = () => {
  return (
    <>
      <Header>
        <UserDropdown>
          <Avatar src={woman} />
        </UserDropdown>
      </Header>
      <Transition>
        <div className={styles.content}>
          <section>
            <h2>Encontre aqui as opções mais seguras</h2>
            <div>
              <Filter label="Serviços" data={mockServices} />
              <Filter label="Localização" data={mockLocations} />
            </div>
          </section>
          <CardList user={users} />
        </div>
      </Transition>
      <Footer />
    </>
  );
};

export default Dashboard;
