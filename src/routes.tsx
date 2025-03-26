import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LaunchDetails from "./pages/LaunchDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/launch/:id" element={<LaunchDetails />} />
    </Routes>
  );
};

export default AppRoutes;
