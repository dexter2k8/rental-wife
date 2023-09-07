import styles from "./styles.module.css";
import Header from "../../layouts/Header";
import { Link } from "react-router-dom";
import Filter from "../../components/Filter";
import CardList from "../../layouts/CardList";
import woman from "../../assets/woman.png";

const Home = () => {
  return (
    <>
      <Header>
        <div className={styles.headerLink}>
          <Link to="/register">Cadastrar</Link>
        </div>
      </Header>
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
    </>
  );
};

export default Home;

const mockServices = ["Encanador", "Eletricista", "Pedreiro", "Pintor", "Marceneiro"];
const mockLocations = ["São Paulo", "Rio de Janeiro", "Curitiba", "Fortaleza", "Belo Horizonte"];

const users = [
  {
    id: 0,
    avatar: woman,
    name: "Fulano de Tal da Silva Sauro",
    description:
      "Lorem ipsum dolor sit consectetur. Quia at nostrum provident, vero, eos quos! Corporis, modi?",
  },
  {
    id: 1,
    avatar: woman,
    name: "Ciclano de Souza",
    description:
      "Lorem ipsum dolor sit consectetur. Quia at nostrum provident, vero, eos quos! Corporis, modi?",
  },
  {
    id: 2,
    avatar: woman,
    name: "Beltrano Aparecido Mendes",
    description:
      "Lorem ipsum dolor sit consectetur. Quia at nostrum provident, vero, eos quos! Corporis, modi?",
  },
  {
    id: 3,
    avatar: woman,
    name: "Joana Dark",
    description:
      "Lorem ipsum dolor sit consectetur. Quia at nostrum provident, vero, eos quos! Corporis, modi?",
  },
  {
    id: 4,
    avatar: woman,
    name: "Lara Croft",
    description:
      "Lorem ipsum dolor sit consectetur. Quia at nostrum provident, vero, eos quos! Corporis, modi?",
  },
  {
    id: 5,
    avatar: woman,
    name: "Zelda Legend",
    description:
      "Lorem ipsum dolor sit consectetur. Quia at nostrum provident, vero, eos quos! Corporis, modi?",
  },
  {
    id: 6,
    avatar: woman,
    name: "Amy Rose Hedgehog",
    description:
      "Lorem ipsum dolor sit consectetur. Quia at nostrum provident, vero, eos quos! Corporis, modi?",
  },
  {
    id: 7,
    avatar: woman,
    name: "Mega Roll",
    description:
      "Lorem ipsum dolor sit consectetur. Quia at nostrum provident, vero, eos quos! Corporis, modi?",
  },
  {
    id: 8,
    avatar: woman,
    name: "Came Bomber Man",
    description:
      "Lorem ipsum dolor sit consectetur. Quia at nostrum provident, vero, eos quos! Corporis, modi?",
  },
  {
    id: 9,
    avatar: woman,
    name: "Bull Ma Vegeta",
    description:
      "Lorem ipsum dolor sit consectetur. Quia at nostrum provident, vero, eos quos! Corporis, modi?",
  },
  {
    id: 10,
    avatar: woman,
    name: "Renata Shi Pud Em",
    description:
      "Lorem ipsum dolor sit consectetur. Quia at nostrum provident, vero, eos quos! Corporis, modi?",
  },
];
