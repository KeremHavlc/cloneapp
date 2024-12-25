import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import AddPage from "./pages/AddPage";
import AddVasita from "./pages/AddVasita";
import AddEmlak from "./pages/AddEmlak";
import VasitaDetails from "./pages/VasitaDetails";
import VasitaVitrinPage from "./pages/VasitaVitrinPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/add/vasita" element={<AddVasita />} />
        <Route path="/add/emlak" element={<AddEmlak />} />
        <Route path="/add/vasita/details" element={<VasitaDetails />} />
        <Route path="/vasitavitrin" element={<VasitaVitrinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
