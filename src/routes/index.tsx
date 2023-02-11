import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/home" element={<h2>Home Page</h2>} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<h2>404 not found</h2>} />
  </Routes>
);

export default RoutesMain;
