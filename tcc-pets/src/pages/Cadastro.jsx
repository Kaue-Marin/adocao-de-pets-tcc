import { useState } from "react";
import bg from "../assets/bg-login.png";
import logo from "../assets/dog.png";
import { Link } from "react-router-dom";
import "../styles/cadastro.css";

export const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [estado, setEstado] = useState("");
  const [whatsappSecundario, setWhatsappSecundario] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [cidade, setCidade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com o envio do formulário de cadastro
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
            <label htmlFor="estado">Estado:</label>
            <input
              type="text"
              id="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="whatsappSecundario">WhatsApp secundário:</label>
            <input
              type="text"
              id="whatsappSecundario"
              value={whatsappSecundario}
              onChange={(e) => setWhatsappSecundario(e.target.value)}
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
