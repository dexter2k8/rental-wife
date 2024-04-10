import styles from "./styles.module.css";
import Autocomplete from "../../components/Autocomplete";
import CardList from "../../layouts/CardList";
import { mockLocations, mockServices, mockWorkersList } from "../../mock/workersList";

const UserDashboard = () => {
  return (
    <div className={styles.container}>
      <section>
        <h2>Encontre aqui as opções mais seguras</h2>
        <div>
          <Autocomplete label="Serviços" data={mockServices} />
          <Autocomplete label="Localização" data={mockLocations} />
        </div>
      </section>
      <CardList isLogged user={mockWorkersList} />
    </div>
  );
};

export default UserDashboard;
