import styles from "./styles.module.css";
import logoForm from "../../assets/logoForm.svg";
import PropagateLoader from "react-spinners/PropagateLoader";

const Loading = () => {
  return (
    <div className={styles.content}>
      <img src={logoForm} alt="Logo Rental Wife" />
      <PropagateLoader color="#5C0884" loading size={20} speedMultiplier={1} />
    </div>
  );
};

export default Loading;
