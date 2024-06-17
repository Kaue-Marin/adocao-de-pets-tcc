import React from "react";
import cidadesSp from "./assets/json/cidades.js";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Ajude } from "./pages/Ajude.jsx";
import { Apadrinhe } from "./pages/Apadrinhe.jsx";
import { Contato } from "./pages/Contato.jsx";
import { Cadastro } from "./pages/Cadastro.jsx";
import { Doe } from "./pages/Doe.jsx";
import { Login } from "./pages/Login.jsx";
import { Parceiros } from "./pages/Parceiros.jsx";
import Header from "./components/header/Header.jsx";
import "./styles/globals.css";
import { Adote } from "./pages/Adote.jsx";
import "./styles/medias.css";
import { ProfilePet } from "./components/pets/profilePet/ProfilePet.jsx";
import GerarPets from "./utils/GerarPet.js"; // Importe a função que gera os pets
import { Profile } from "./pages/Profile.jsx";
import { NewPassword } from "./pages/NewPassword.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import MeusPets from "./pages/MeusPets.jsx";
import EditarPet from "./pages/EditarPet.jsx";

const pets = GerarPets();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ajude" element={<Ajude />} />
        <Route path="/apadrinhe" element={<Apadrinhe />} />
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
