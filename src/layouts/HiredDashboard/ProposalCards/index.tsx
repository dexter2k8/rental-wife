import { Button } from "@mui/material";
import styles from "./styles.module.css";

interface IProposal {
  username: string;
  avatar_img: string;
  title: string;
  description: string;
}

interface IProposals {
  proposals: IProposal[];
}

const ProposalCards = ({ proposals }: IProposals) => {
  return (
    <ul className={styles.container}>
      {proposals.map((el, i) => (
        <li key={i} className={styles.content}>
          <div className={styles.card}>
            <figure>
              <img src={el.avatar_img} alt={el.username} />
            </figure>
            <div className={styles.info}>
              <h3>{el.title}</h3>
              <p>{el.description}</p>
              <div className={styles.buttonContainer}>
                <Button variant="contained" size="small" style={{ textTransform: "none" }}>
                  Analisar
                </Button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProposalCards;
