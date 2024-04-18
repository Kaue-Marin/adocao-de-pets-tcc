import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/newPassword.css";

export const NewPassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obter os dados do localStorage
    const formData = JSON.parse(localStorage.getItem("cadastroData"));

    // Exibir a senha antiga e a nova no console
    console.log("Senha antiga:", formData.senha);
    console.log("Nova senha:", newPassword);

    // Atualizar a senha nos dados do localStorage com a nova senha
    formData.senha = newPassword;
    localStorage.setItem("cadastroData", JSON.stringify(formData));
    console.log(formData);
  };

  return (
    <section className="profileSection">
      <div className="profileForm">
        <div className="profileImage">
          {/* Mesmo link para a foto de perfil */}
          <img
            src={`https://ui-avatars.com/api/?name=John+Doe&background=random`}
            alt="Foto de Perfil"
          />
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
