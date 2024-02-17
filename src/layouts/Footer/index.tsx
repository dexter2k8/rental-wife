import styles from "./styles.module.css";
import logoFooter from "../../assets/logoWhite.svg";
import { Avatar } from "@mui/material";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export interface IEquip {
  id: number;
  nome: string;
  img: string;
  linkedIn: string;
  github: string;
}

const Footer = () => {
  return (
    <footer
      className={styles.container}
      onMouseEnter={(e) => e.currentTarget.classList.add(styles.show)}
      onMouseLeave={(e) => e.currentTarget.classList.remove(styles.show)}
    >
      <div className={`${styles.content}`}>
        <img src={logoFooter} alt="logo" />
        <div className={styles.members}>
          <h3>Colaboradores</h3>
          <ul>
            {teamMembers.map((el) => (
              <li key={el.id}>
                <Avatar src={el.img} />
                <span>{el.nome}</span>
                <a href={el.linkedIn} target="_blank">
                  <AiFillLinkedin size={25} />
                </a>
                <a href={el.github} target="_blank">
                  <AiFillGithub size={25} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.copyright}></div>
      </div>
    </footer>
  );
};

export default Footer;

const teamMembers: Array<IEquip> = [
  {
    id: 1,
    nome: "Mário",
    img: "https://avatars.githubusercontent.com/u/105565220?v=4",
    linkedIn: "https://www.linkedin.com/in/mariolucass/",
    github: "https://github.com/mariolucass",
  },
  {
    id: 2,
    nome: "Danilo",
    img: "https://avatars.githubusercontent.com/u/30331948?v=4",
    linkedIn: "https://www.linkedin.com/in/daniloacardoso/",
    github: "https://github.com/DaniloCardoso93",
  },
  {
    id: 3,
    nome: "Juliana",
    img: "https://avatars.githubusercontent.com/u/106631577?v=4",
    linkedIn: "https://www.linkedin.com/in/juliana-tissiani-diorio-4b1553165/",
    github: "https://github.com/JulianaDiorio",
  },
  {
    id: 4,
    nome: "Juan",
    img: "https://avatars.githubusercontent.com/u/106753628?v=4",
    linkedIn: "https://www.linkedin.com/in/juansgarbi/",
    github: "https://github.com/JuanSgarbi",
  },
  {
    id: 5,
    nome: "Alexson",
    img: "https://avatars.githubusercontent.com/u/105828867?v=4",
    linkedIn: "https://www.linkedin.com/in/alexsonpereira",
    github: "https://github.com/AlexsonPereira",
  },
  {
    id: 6,
    nome: "Alfredo",
    img: "https://avatars.githubusercontent.com/u/101817225?v=4",
    linkedIn: "https://www.linkedin.com/in/alfredopfneto/",
    github: "https://github.com/Alfredo-Fontinele",
  },
  {
    id: 7,
    nome: "Sidnei",
    img: "https://avatars.githubusercontent.com/u/104247636?v=4",
    linkedIn: "https://www.linkedin.com/in/sidnei-alves-20b547a5/",
    github: "https://github.com/dexter2k8/",
  },
];
