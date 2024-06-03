import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/profile.css";

export const Profile = () => {
  const [userData, setUserData] = useState(null);
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
        const userId = localStorage.getItem("userId");
        if (!userId) {
          navigate("/login");
          return;
        }
        const response = await axios.get(
          `http://localhost:3001/userdata/${userId}`
        );
        setUserData(response.data);
        setOriginalEmail(response.data.email);
        const { firstName, lastName } = splitName(response.data.nome);
        setTempName(firstName);
        setTempSurname(lastName);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    fetchUserData();
  }, []);

  const toggleEditing = () => {
    if (!isEditing) {
      setTempName(userData.nome.split(" ")[0]);
      setTempSurname(userData.nome.split(" ")[1]);
    }
    setIsEditing(!isEditing);
  };

  const handleLogout = () => {
    // Lógica de logout
  };

  const handleImageChange = (e) => {
    // Lógica para alterar a foto do perfil
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("userId");
      const updatedUser = {
        nome: `${tempName} ${tempSurname}`,
        email: userData.email,
        telefone: userData.telefone,
        cidade: userData.cidade,
        estado: userData.estado,
      };
      await axios.put(`http://localhost:3001/userdata/${userId}`, updatedUser);
      setUserData(updatedUser);
      setIsEditing(false);
    } catch (error) {
      console.error("Erro ao atualizar dados do usuário:", error);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  return (
    <section className="profileSection">
      {userData && (
        <div className="profileForm">
          <div className="profileImage">
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
              <div className="separatorLine"></div>
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
                value={isEditing ? tempName : userData.nome.split(" ")[0]}
                onChange={(e) => setTempName(e.target.value)}
                readOnly={!isEditing}
              />
              <label htmlFor="surname">Sobrenome:</label>
              <input
                type="text"
                id="surname"
                value={isEditing ? tempSurname : userData.nome.split(" ")[1]}
                onChange={(e) => setTempSurname(e.target.value)}
                readOnly={!isEditing}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={userData.email}
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
                value={userData.telefone}
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
                value={userData.estado}
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
                value={userData.cidade}
                onChange={(e) =>
                  setUserData({ ...userData, cidade: e.target.value })
                }
                readOnly={!isEditing}
              />
            </div>
            <div className="buttonContainer">
              {isEditing ? (
                <button type="button" onClick={handleSubmit}>
                  Salvar Alterações
                </button>
              ) : (
                <button type="button" onClick={toggleEditing}>
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
