import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cesta from "../pages/Cesta";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/Home";

const AppRouter = () => (
  <Router basename="/">
    <div className="h-screen bg-slate-300 ">
      <Navbar />
      <Routes>
        <Route path="/carrinho" element={<Cesta />}></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  </Router>
);

export default AppRouter;
