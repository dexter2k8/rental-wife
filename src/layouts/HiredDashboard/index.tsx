import { mockProposals } from "../../mock/proposals";
import ProposalCards from "./ProposalCards";
import styles from "./styles.module.css";

const HiredDashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_content}>
        <h2>Propostas</h2>
        <div className={styles.cards}>
          <ProposalCards proposals={mockProposals} />
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
