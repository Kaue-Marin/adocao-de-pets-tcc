import { useState } from "react";
import bg from "../assets/bg-login.png";
import logo from "../assets/dog.png";
import { Link, useNavigate } from "react-router-dom";
import "../styles/cadastro.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [cidade, setCidade] = useState("");
  const [isLoggedInGoogle, setIsLoggedInGoogle] = useState(false);
  const [nomeGoogle, setNomeGoogle] = useState("");
  const [emailGoogle, setEmailGoogle] = useState("");
  const [profilePicGoogle, setProfilePicGoogle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com o envio do formulário de cadastro
  };

  const handleSubmitLoginGoogle = (decoded) => {
    setNomeGoogle(decoded.name);
    setEmailGoogle(decoded.email);
    setProfilePicGoogle(decoded.picture);
    setIsLoggedInGoogle(true);

    // Salvando os dados no localStorage
    localStorage.setItem("googleData", JSON.stringify(decoded));
    navigate("/adote");
    window.location.reload();
  };

  return (
    <section className="login">
      <div className="bg">
        <img src={bg} alt="Background" />
      </div>

      <div className="formRegister">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <form onSubmit={handleSubmit} style={{marginTop: '20rem'}}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmacaoSenha">Confirmação de senha:</label>
            <input
              type="password"
              id="confirmacaoSenha"
              value={confirmacaoSenha}
              onChange={(e) => setConfirmacaoSenha(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="whatsapp">WhatsApp:</label>
            <input
              type="text"
              id="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cidade">Cidade:</label>
            <input
              type="text"
              id="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btnLogin">
            Salvar
          </button>

          <div className="form-group google" style={{marginTop: '1rem', display: 'flex', width: '100%', alignItems: 'center'}}>
            <GoogleOAuthProvider clientId="14862496524-9qqvbugd7bh2hg87dv9j8o00ed381vqv.apps.googleusercontent.com">
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