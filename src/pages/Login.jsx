// Login.jsx

import { useState } from "react";
import "../styles/login.css";
import bg from "../assets/bg-login.png";
import logo from "../assets/dog.png";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [emailGoogle, setEmailGoogle] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email: email,
        senha: password,
      });
      console.log(response.data);

      // Se a requisição for bem-sucedida, você pode adicionar lógica adicional aqui,
      // como redirecionar o usuário para outra página
      // ou armazenar informações no localStorage

      // Exemplo: Se estiver buscando apenas o primeiro usuário retornado
      if (response.data.length > 0) {
        const userId = response.data[0].id;
        console.log(userId);
        localStorage.setItem("userId", userId);
        localStorage.setItem("cadastroData", JSON.stringify(response.data[0]));
        localStorage.setItem("isLoggedIn", true);
        navigate("/adote");
        window.location.reload();
      } else {
        console.log("Usuário não encontrado");
        // Lógica para lidar com usuário não encontrado
      }
    } catch (error) {
      console.error("Erro ao enviar dados do formulário:", error);
      // Você pode lidar com o erro de forma apropriada aqui, como exibir uma mensagem de erro para o usuário
    }
  };

  return (
    <section className="login">
      <div className="bg">
        <img src={bg} alt="Background" />
      </div>

      <div className="form">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {isLoggedIn ? (
            <div className="user-details">
              <h2>Bem-vindo, {nome}</h2>
              <p>Email: {emailGoogle}</p>
              <img src={profilePic} alt="Profile" />
            </div>
          ) : (
            <div className="form-group google">
              <div className="newRegisterAndPassword">
                <Link to={"/cadastro"} className="newAccount">
                  Registrar
                </Link>
              </div>
            </div>
          )}

          <button type="submit" className="btnLogin">
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
};
