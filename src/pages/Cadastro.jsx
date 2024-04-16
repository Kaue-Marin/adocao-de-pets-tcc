import axios from "axios";
import { useState } from "react";
import bg from "../assets/bg-login.png";
import logo from "../assets/dog.png";
import { Link, useNavigate } from "react-router-dom";
import "../styles/cadastro.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [nomeGoogle, setNomeGoogle] = useState("");
  const [emailGoogle, setEmailGoogle] = useState("");
  const [profilePicGoogle, setProfilePicGoogle] = useState("");
  const [loggedInGoogle, setIsLoggedInGoogle] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [genero, setGenero] = useState(""); // Adicionando o estado para gênero
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [endereco, setEndereco] = useState("");
  const [senha, setSenha] = useState(""); // Adicionando o estado para senha
  const navigate = useNavigate();

  const handleSubmitLoginGoogle = (decoded) => {
    setNomeGoogle(decoded.name);
    setEmailGoogle(decoded.email);
    setProfilePicGoogle(decoded.picture);
    setIsLoggedInGoogle(true);

    // Salvando os dados no localStorage
    localStorage.setItem("googleData", JSON.stringify(decoded));
    localStorage.setItem("isLoggedIn", true); // Adicionando a informação de login
    navigate("/adote");
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Criando um objeto com os dados do cadastro
    const formData = {
      nome: nome + " " + sobrenome,
      email: email,
      telefone: telefone,
      genero: genero,
      cidade: cidade,
      estado: estado,
      endereco: endereco,
      senha: senha,
    };

    console.log(formData);
    localStorage.setItem("cadastroData", JSON.stringify(formData));
    localStorage.setItem("isLoggedIn", true); // Adicionando a informação de login
    navigate("/adote");
    window.location.reload();
  };

  return (
    <section className="form-container-cadastro" style={{ marginTop: "20rem" }}>
      <div className="bg">
        <img src={bg} alt="Background" />
      </div>

      <div className="formRegister">
        <form className="form " onSubmit={handleSubmit}>
          <div className="logo-register-box">
            <img src={logo} alt="logo register" />
          </div>

          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="sobrenome">Sobrenome:</label>
            <input
              type="text"
              name="sobrenome"
              id="sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="text"
              name="telefone"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="radio"
              id="feminino"
              name="genero"
              value="feminino"
              required
            />

            <label htmlFor="feminino">Feminino</label>
            <br />
            <input
              type="radio"
              id="masculino"
              name="genero"
              value="masculino"
              required
            />
            <label htmlFor="masculino">Masculino</label>
            <br />
            <input
              type="radio"
              id="outro"
              name="genero"
              value="outro"
              required
            />
            <label htmlFor="outro">Outro</label>
          </div>
          <div className="form-group nasciment">
            <label htmlFor="data_nascimento ">data de nascimento</label>
            <input
              type="date"
              name="data_nascimento"
              id="data_nascimento"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cidade">Cidade:</label>
            <input
              type="text"
              id="cidade"
              value={cidade}
              name="cidade"
              onChange={(e) => setCidade(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="estado">estado:</label>
            <input
              type="text"
              id="estado"
              value={estado}
              name="estado"
              onChange={(e) => setEstado(e.target.value)} // Corrigido para setEstado
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="endereco">endereco:</label>
            <input
              type="text"
              id="endereco"
              value={endereco}
              name="endereco"
              onChange={(e) => setEndereco(e.target.value)} // Corrigido para setEndereco
              required
            />
          </div>

          <button type="submit" className="btnLogin">
            Salvar
          </button>

          <div
            className="form-group google"
            style={{
              marginTop: "1rem",
              display: "flex",
              width: "100%",
              alignItems: "center",
            }}
          >
            <GoogleOAuthProvider clientId="919109909084-qk7ticblv5l7t0ootnr5sojbbf2ditha.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const decoded = jwtDecode(credentialResponse.credential);
                  handleSubmitLoginGoogle(decoded);
                }}
                onError={() => {
                  console.log("Login do Google falhou");
                }}
              />
            </GoogleOAuthProvider>
          </div>

          <div className="form-group login-links">
            <p>
              Já tem conta? <Link to={"/login"}>Faça login</Link>
            </p>
            <p>
              Esqueceu sua senha? <Link to={"/senha"}>Recupere aqui</Link>
            </p>
            <p>
              Não confirmou sua conta?{" "}
              <Link to={"/confirmacao"}>Clique aqui</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
