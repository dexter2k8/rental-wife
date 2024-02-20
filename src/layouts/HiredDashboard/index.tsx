import { useState } from "react";
import { mockProposals } from "../../mock/proposals";
import ProposalCards from "./ProposalCards";
import styles from "./styles.module.css";
import { Chip } from "@mui/material";
import { TStatus } from "../../interfaces";

const HiredDashboard = () => {
  const [selectedStatus, setSelectedStatus] = useState<TStatus>("Analisar");
  const filteredProposals = (status: string) => {
    return mockProposals.filter((el) => el.status === status);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left_content}>
        <div className={styles.header}>
          <h2>Propostas</h2>
          <div className={styles.chips}>
            <Chip
              label="Recebidas"
              color={selectedStatus === "Analisar" ? "secondary" : "default"}
              onClick={() => setSelectedStatus("Analisar")}
            />
            <Chip
              label="Aceitas"
              color={selectedStatus === "Aceita" ? "secondary" : "default"}
              onClick={() => setSelectedStatus("Aceita")}
            />
          </div>
        </div>
        <div className={styles.cards}>
          <ProposalCards proposals={filteredProposals(selectedStatus)} />
        </div>
      </div>
      <div className={styles.right_content}>
        <h2>Trabalhos finalizados</h2>
        <div className={styles.cards}></div>
      </div>
    </div>
  );
};

export default HiredDashboard;
