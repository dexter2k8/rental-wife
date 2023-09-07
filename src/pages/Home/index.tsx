import Header from "../../layouts/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header>
        <Link to="/register">Cadastrar</Link>
      </Header>
    </>
  );
};

export default Home;
