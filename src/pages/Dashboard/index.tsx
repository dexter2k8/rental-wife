import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Transition from "../../components/Transition";
import UserDropdown from "../../components/UserDropdown";
import { Avatar } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";
import UserDashboard from "../../layouts/UserDashboard";
import Loading from "../../layouts/Loading";
import HiredDashboard from "../../layouts/HiredDashboard";

const Dashboard = () => {
  const { userData } = useAuthContext();
  return (
    <>
      <Header>
        <UserDropdown>
          <Avatar src={userData?.avatar_img} />
        </UserDropdown>
      </Header>
      <Transition>
        {/* <Loading /> */}
        <UserDashboard />
        {/* <HiredDashboard /> */}
      </Transition>
      <Footer />
    </>
  );
};

export default Dashboard;
