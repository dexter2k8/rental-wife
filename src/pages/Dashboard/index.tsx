import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Transition from "../../components/Transition";
import UserDropdown from "../../components/UserDropdown";
import { Avatar } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";
import UserDashboard from "../../layouts/UserDashboard";
import Loading from "../../layouts/Loading";
import HiredDashboard from "../../layouts/HiredDashboard";
import { useState } from "react";
import ModalEditProfile from "../../layouts/ModalEditProfile";

const Dashboard = () => {
  const { userData } = useAuthContext();
  const [editModalOpen, setEditModalOpen] = useState(false);
  return (
    <>
      <Header>
        <UserDropdown actionEdit={() => setEditModalOpen((prev) => !prev)}>
          <Avatar src={userData?.avatar_img} />
        </UserDropdown>
      </Header>
      <Transition>
        {/* <Loading /> */}
        <UserDashboard />
        {/* <HiredDashboard /> */}
      </Transition>
      <Footer />

      <ModalEditProfile open={editModalOpen} onClose={() => setEditModalOpen(false)} />
    </>
  );
};

export default Dashboard;
