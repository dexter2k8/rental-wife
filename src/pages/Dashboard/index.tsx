import styles from "./styles.module.css";
import Header from "../../layouts/Header";
import { Link } from "react-router-dom";
import Autocomplete from "../../components/Autocomplete";
import CardList from "../../layouts/CardList";
import Footer from "../../layouts/Footer";
import Transition from "../../components/Transition";
import { mockLocations, mockServices, mockWorkersList } from "../../mock/workersList";
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
              <Autocomplete label="Serviços" data={mockServices} />
              <Autocomplete label="Localização" data={mockLocations} />
            </div>
          </section>
          <CardList user={mockWorkersList} />
        </div>
      </Transition>
      <Footer />
    </>
  );
};

export default Dashboard;
