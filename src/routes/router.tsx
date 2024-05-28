import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cesta from "../pages/Cesta";
import Navbar from "../components/navbar/Navbar";

const AppRouter = () => (
  <Router basename="/">
    <div className="h-screen bg-slate-300 ">
      <Navbar />
      <Routes>
        <Route path="/cesta" element={<Cesta />}></Route>
      </Routes>
    </div>
  </Router>
);

export default AppRouter;
