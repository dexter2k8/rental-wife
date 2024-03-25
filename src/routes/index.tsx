import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import UserProposals from "../pages/proposals";
import Details from "../pages/Details";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/home" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/proposals" element={<UserProposals />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/details" element={<Details />} />
    <Route path="*" element={<h2>404 not found</h2>} />
  </Routes>
);

export default RoutesMain;
