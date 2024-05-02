import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Importe o axios para fazer requisições HTTP
import "../styles/profile.css";

export const Profile = () => {
  const [userData, setUserData] = useState(null); // Inicialize userData como null
  const navigate = useNavigate();

  const splitName = (fullName) => {
    const spaceIndex = fullName.indexOf(" ");
    const firstName =
      spaceIndex !== -1 ? fullName.substring(0, spaceIndex) : fullName;
    const lastName =
      spaceIndex !== -1 ? fullName.substring(spaceIndex + 1) : "";
    return { firstName, lastName };
  };

  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState("");
  const [tempSurname, setTempSurname] = useState("");
  const [originalEmail, setOriginalEmail] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userId"); // Obtém o ID do usuário do localStorage
        if (!userId) {
          // Se o ID do usuário não estiver presente, redirecione para a página de login
          navigate("/login");
          return;
        }
        const response = await axios.get(
          `http://localhost:3001/userdata/${userId}`
        ); // Envie o ID do usuário na URL da solicitação GET
        setUserData(response.data);
        setOriginalEmail(response.data.email);
        const { firstName, lastName } = splitName(response.data.nome);
        setTempName(firstName);
        setTempSurname(lastName);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        // Aqui você pode lidar com o erro, como redirecionar o usuário para uma página de erro
      }
    };

    fetchUserData();
  }, []);

  const toggleEditing = () => {
    if (!isEditing) {
      setTempName(userData.nome.split(" ")[0]); // Obtenha o primeiro nome do usuário
      setTempSurname(userData.nome.split(" ")[1]); // Obtenha o sobrenome do usuário
    }
    setIsEditing(!isEditing);
  };

  const saveChanges = async () => {
    try {
      const updatedUserData = {
        ...userData,
        nome: `${tempName} ${tempSurname}`,
      };
      // Faça uma requisição PUT para atualizar os dados do usuário no backend
      await axios.put("http://localhost:3001/userdata", updatedUserData);
      setUserData(updatedUserData);
      setIsEditing(false);
    } catch (error) {
      console.error("Erro ao salvar alterações:", error);
      // Aqui você pode lidar com o erro, como exibir uma mensagem para o usuário
    }
  };

  const handleLogout = () => {
    // Lógica de logout
  };

  const handleImageChange = (e) => {
    // Lógica para alterar a foto do perfil
  };

  const handleSubmit = (e) => {
    // Lógica de submit do formulário
  };

  return (
    <section className="profileSection">
      {userData && (
        <div className="profileForm">
          <div className="profileImage">
            {/* Mostrar a foto de perfil da pessoa */}
            <img
              src={
                userData.fotoPerfil ||
                `https://ui-avatars.com/api/?name=${userData.nome}&background=random`
              }
              alt="Foto de Perfil"
            />
            <div className="profileLinks">
              <div className="DatasProfileBox">
                <Link to={"/Profile"} className="linkData">
                  Seus dados
                </Link>
              </div>
              <div className="separatorLine"></div> {/* Linha separadora */}
              <div className="DatasProfileBox">
                <Link to={"/newPassword"} className="linkData">
                  Alterar senha
                </Link>
              </div>
              <label htmlFor="fotoPet" className="custom-file-upload">
                Alterar foto
              </label>
              <input
                type="file"
                id="fotoPet"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>
          </div>
          <form className="profileDetails" onSubmit={handleSubmit}>
            <div className="name">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                value={isEditing ? tempName : userData.nome.split(" ")[0]} // Exibe o primeiro nome do usuário
                onChange={(e) => setTempName(e.target.value)}
                readOnly={!isEditing} // readOnly depende do modo de edição
              />
              <label htmlFor="surname">Sobrenome:</label>
              <input
                type="text"
                id="surname"
                value={isEditing ? tempSurname : userData.nome.split(" ")[1]} // Exibe o sobrenome do usuário
                onChange={(e) => setTempSurname(e.target.value)}
                readOnly={!isEditing} // readOnly depende do modo de edição
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={isEditing ? userData.email : userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                readOnly={!isEditing}
              />
            </div>
            <div className="phone">
              <label htmlFor="phone">Telefone:</label>
              <input
                type="tel"
                id="phone"
                value={isEditing ? userData.telefone : userData.telefone}
                onChange={(e) =>
                  setUserData({ ...userData, telefone: e.target.value })
                }
                readOnly={!isEditing}
              />
            </div>

            <div className="state">
              <label htmlFor="state">Estado:</label>
              <input
                type="text"
                id="state"
                value={isEditing ? userData.estado : userData.estado}
                onChange={(e) =>
                  setUserData({ ...userData, estado: e.target.value })
                }
                readOnly={!isEditing}
              />
            </div>
            <div className="city">
              <label htmlFor="city">Cidade:</label>
              <input
                type="text"
                id="city"
                value={isEditing ? userData.cidade : userData.cidade}
                onChange={(e) =>
                  setUserData({ ...userData, cidade: e.target.value })
                }
                readOnly={!isEditing}
              />
            </div>
            <div className="buttonContainer">
              {isEditing ? (
                <button onClick={saveChanges} type="button">
                  Salvar Alterações
                </button>
              ) : (
                <button onClick={toggleEditing} type="submit">
                  Alterar
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </section>
  );
};
