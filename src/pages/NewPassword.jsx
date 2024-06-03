import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Importe o axios para fazer requisições HTTP
import "../styles/newPassword.css";

export const NewPassword = () => {
  // Supondo que os dados da pessoa estejam armazenados em localStorage
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("cadastroData"))
  );

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordIncorrect, setPasswordIncorrect] = useState(false); // Estado para verificar se a senha atual está incorreta

  // Parte de handleSubmit em NewPassword.jsx
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("userId");
      // Verifique se as senhas nova e confirmada são iguais
      if (newPassword !== confirmNewPassword) {
        // Lógica para lidar com senhas diferentes
        return;
      }
      // Envie a solicitação para atualizar a senha
      await axios.put(`http://localhost:3001/userdata/${userId}/password`, {
        senha: newPassword,
      });
      // Limpe os campos
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      setPasswordIncorrect(false); // Resetar o aviso de senha incorreta
      // Lógica de sucesso
    } catch (error) {
      console.error("Erro ao atualizar senha do usuário:", error);
      // Verificar se o erro indica que a senha atual está incorreta
      if (error.response && error.response.status === 401) {
        setPasswordIncorrect(true);
      }
      // Lógica para lidar com outros erros
    }
  };

  return (
    <section className="profileSection">
      <div className="profileForm">
        <div className="profileImage">
          {/* Mesmo link para a foto de perfil */}
          {userData.fotoPerfil ? (
            <img src={userData.fotoPerfil} alt="Foto de Perfil" />
          ) : (
            <img
              src={`https://ui-avatars.com/api/?name=${userData.nome}&background=random`}
              alt="Foto de Perfil"
            />
          )}
          <div className="profileLinks">
            <div className="DatasProfileBox">
              <Link to={"/profile"} className="linkData">
                Seus dados
              </Link>
            </div>
            <div className="separatorLine"></div> {/* Linha separadora */}
            <div className="DatasProfileBox">
              <Link to={"/newPassword"} className="linkData">
                Alterar senha
              </Link>
            </div>
          </div>
        </div>
        <form className="profileDetails" onSubmit={handleSubmit}>
          <div className="passwordFields">
            <div className="passwordField">
              <label htmlFor="currentPassword">Senha atual:</label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              {passwordIncorrect && (
                <span className="passwordIncorrect">Senha atual incorreta</span>
              )}
            </div>
            <div className="passwordField">
              <label htmlFor="newPassword">Nova senha:</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="passwordField">
              <label htmlFor="confirmNewPassword">Confirmar nova senha:</label>
              <input
                type="password"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="buttonContainer">
            <button type="submit">Alterar Senha</button>
          </div>
        </form>
      </div>
    </section>
  );
};
