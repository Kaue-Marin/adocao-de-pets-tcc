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
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [genero, setGenero] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [endereco, setEndereco] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      nome: nome,
      email: email,
      senha: senha,
      telefone: telefone,
      genero: genero,
      data_nascimento: dataNascimento,
      cidade: cidade,
      estado: estado,
      endereco: endereco,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/register",
        formData
      );
      console.log(response.data);
      localStorage.setItem("cadastroData", JSON.stringify(formData));
      localStorage.setItem("isLoggedIn", true);
      navigate("/adote");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao enviar dados do formulário:", error);
    }
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

          <div className="inputBox">
            <label htmlFor="nome" className="labelInput">
              Nome completo
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              className="inputUser"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <br />
          <br />

          <div className="inputBox">
            <label htmlFor="senha" className="labelInput">
              Senha
            </label>
            <input
              type="password"
              name="senha"
              id="senha"
              className="inputUser"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <br />
          <br />

          <div className="inputBox">
            <label htmlFor="email" className="labelInput">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="inputUser"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <br />
          <br />

          <div className="inputBox">
            <label htmlFor="telefone" className="labelInput">
              Telefone
            </label>
            <input
              type="tel"
              name="telefone"
              id="telefone"
              className="inputUser"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>

          <p>Sexo:</p>

          <input
            type="radio"
            id="feminino"
            name="genero"
            value="feminino"
            onChange={(e) => setGenero(e.target.value)}
            required
          />
          <label htmlFor="feminino">Feminino</label>
          <br />
          <input
            type="radio"
            id="masculino"
            name="genero"
            value="masculino"
            onChange={(e) => setGenero(e.target.value)}
            required
          />
          <label htmlFor="masculino">Masculino</label>
          <br />
          <input
            type="radio"
            id="outro"
            name="genero"
            value="outro"
            onChange={(e) => setGenero(e.target.value)}
            required
          />
          <label htmlFor="outro">Outro</label>

          <br />
          <br />

          <label htmlFor="data_nascimento">
            <b>Data de Nascimento:</b>
          </label>
          <input
            type="date"
            name="data_nascimento"
            id="data_nascimento"
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />

          <br />
          <br />
          <br />

          <div className="inputBox">
            <label htmlFor="cidade" className="labelInput">
              Cidade
            </label>
            <input
              type="text"
              name="cidade"
              id="cidade"
              className="inputUser"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              required
            />
          </div>

          <br />
          <br />

          <div className="inputBox">
            <label htmlFor="estado" className="labelInput">
              Estado
            </label>
            <input
              type="text"
              name="estado"
              id="estado"
              className="inputUser"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              required
            />
          </div>

          <br />
          <br />

          <div className="inputBox">
            <label htmlFor="endereco" className="labelInput">
              Endereço
            </label>
            <input
              type="text"
              name="endereco"
              id="endereco"
              className="inputUser"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
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
