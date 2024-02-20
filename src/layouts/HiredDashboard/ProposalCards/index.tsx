import { Button } from "@mui/material";
import styles from "./styles.module.css";
import { useState } from "react";
import Modal from "../../../components/Modal";
import { IProposal } from "../../../interfaces";

interface IProposals {
  proposals: IProposal[];
}

const ProposalCards = ({ proposals }: IProposals) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState<IProposal>({} as IProposal);

  const handleClose = () => setOpenModal(false);

  return (
    <>
      <ul className={styles.container}>
        {proposals.map((el, i) => (
          <li key={i} className={styles.content}>
            <div className={styles.card}>
              <figure>
                <img src={el.user.avatar_img} alt={el.user.username} />
              </figure>
              <div className={styles.info}>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <div className={styles.buttonContainer}>
                  <Button
                    onClick={() => {
                      setOpenModal(true);
                      setSelectedProposal(el);
                    }}
                    variant="contained"
                    size="small"
                    style={{ textTransform: "none" }}
                  >
                    {el.status}
                  </Button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Modal title={selectedProposal.title} open={openModal} onClose={handleClose}>
        <div className={styles.modalContent}>
          <p>{selectedProposal.description}</p>
          <div>
            <h3>Contato do Contratante</h3>
            <p>
              {selectedProposal?.user?.username}: {selectedProposal?.user?.contact}
            </p>
          </div>
          {selectedProposal.status === "Analisar" && (
            <div className={styles.buttonContainer}>
              <Button onClick={handleClose} variant="outlined">
                Recusar
              </Button>
              <Button onClick={handleClose} variant="contained">
                Aceitar
              </Button>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ProposalCards;
