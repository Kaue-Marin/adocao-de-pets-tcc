import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/about/About.jsx";
import { Ajude } from "./pages/ajude/Ajude.jsx";
import { Contato } from "./pages/contato/Contato.jsx";
import { Cadastro } from "./pages/cadastro/Cadastro.jsx";
import { Doe } from "./pages/doe/Doe.jsx";
import { Login } from "./pages/Login.jsx";
import { Parceiros } from "./pages/Parceiros.jsx";
import Header from "./components/header/Header.jsx";
import "./styles/globals.css";
import { Adote } from "./pages/adote/Adote.jsx";
import "./styles/medias.css";
import { ProfilePet } from "./pages/adote/pets/profilePet/ProfilePet.jsx";
import GerarPets from "./utils/GerarPet.js"; // Importe a função que gera os pets
import { Profile } from "./pages/Profile.jsx";
import { NewPassword } from "./pages/NewPassword.jsx"; 
import MeusPets from "./pages/MeusPets.jsx";
import EditarPet from "./pages/editarPet/EditarPet.jsx";
import { Home } from "./pages/home/Home.jsx";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const pets = GerarPets();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ajude" element={<Ajude />} />
        <Route path="/adote" element={<Adote petsProps={pets} />} />
        {/* Passar os pets como propriedade para o componente Adote */}
        <Route path="/contato" element={<Contato />} />
        <Route path="/profilePet/:petId" element={<ProfilePet pets={pets} />} />
        {/* Passar os pets como propriedade para o componente ProfilePet */}
        <Route path="/doe" element={<Doe />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="meuspets" element={<MeusPets />} />
        <Route path="/editarPet/:id" element={<EditarPet />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
