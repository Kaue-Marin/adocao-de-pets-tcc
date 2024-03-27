// Login.jsx

import { useState } from "react";
import "../styles/login.css";
import bg from "../assets/bg-login.png";
import logo from "../assets/dog.png";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [emailGoogle, setEmailGoogle] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com o envio do formulário
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
                <Link to={"/login"} className="newPassword">
                  Esqueceu a senha?
                </Link>
                <Link to={"/registrar"} className="newAccount">
                  Registrar
                </Link>
              </div>
              <GoogleOAuthProvider clientId="14862496524-9qqvbugd7bh2hg87dv9j8o00ed381vqv.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    const decoded = jwtDecode(credentialResponse.credential);
                    console.log(decoded);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
                ;
              </GoogleOAuthProvider>
              ;
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
