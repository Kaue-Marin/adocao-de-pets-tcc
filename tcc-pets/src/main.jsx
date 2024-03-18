import React from "react";
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
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ajude" element={<Ajude />} />
        <Route path="/apadrinhe" element={<Apadrinhe />} />
        <Route path="/adote" element={<Adote />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/doe" element={<Doe />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
