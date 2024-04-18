import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/profile.css";

export const Profile = () => {
  // Supondo que os dados da pessoa estejam armazenados em localStorage
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("cadastroData"))
  );
  const navigate = useNavigate();

  // Função para separar o nome e sobrenome
  const splitName = (fullName) => {
    const spaceIndex = fullName.indexOf(" ");
    const firstName =
      spaceIndex !== -1 ? fullName.substring(0, spaceIndex) : fullName;
    const lastName =
      spaceIndex !== -1 ? fullName.substring(spaceIndex + 1) : "";
    return { firstName, lastName };
  };

  // Estado para controlar o modo de edição
  const [isEditing, setIsEditing] = useState(false);

  // Estado para armazenar temporariamente os valores editados
  const [tempName, setTempName] = useState("");
  const [tempSurname, setTempSurname] = useState("");

  // Estado para armazenar nome e sobrenome
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  // Estado para armazenar o email original
  const [originalEmail, setOriginalEmail] = useState(userData.email);
  // Histórico para redirecionar após o logout
  // Efeito para atualizar o nome, sobrenome e email quando userData mudar
  useEffect(() => {
    const { firstName, lastName } = splitName(userData.nome);
    setName(firstName);
    setSurname(lastName);
  }, [userData]);

  // Função para alternar entre os modos de leitura e edição
  const toggleEditing = () => {
    // Se estiver entrando no modo de edição, inicialize os valores temporários com os atuais
    if (!isEditing) {
      setTempName(name);
      setTempSurname(surname);
    }
    setIsEditing(!isEditing);
  };

  // Função para salvar as alterações
  const saveChanges = () => {
    // Atualiza os dados no localStorage
    const updatedUserData = { ...userData, nome: `${tempName} ${tempSurname}` };
    localStorage.setItem("cadastroData", JSON.stringify(updatedUserData));
    setUserData(updatedUserData);

    // Desativa o modo de edição após salvar as alterações
    setIsEditing(false);
  };

  // Função para lidar com a alteração de email
  const handleEmailChange = (newEmail) => {
    if (newEmail !== originalEmail) {
      handleLogout();
    }
  };

  // Função para deslogar o usuário
  const handleLogout = () => {
    window.location.reload();
    localStorage.removeItem("googleData");
    localStorage.removeItem("cadastroData");
    localStorage.setItem("isLoggedIn", false);
    navigate("/cadastro");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(originalEmail, userData.email);
    // Verifica se o e-mail foi alterado
    if (userData.email !== originalEmail) {
      localStorage.removeItem("googleData");
      localStorage.removeItem("cadastroData");
      localStorage.setItem("isLoggedIn", false);
      navigate("/cadastro");
      window.location.reload();
    }
  };

  return (
    <section className="profileSection">
      <div className="profileForm">
        <div className="profileImage">
          {/* Mostrar a foto de perfil da pessoa */}
          <img
            src={`https://ui-avatars.com/api/?name=${userData.nome}&background=random`}
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
          </div>
        </div>
        <form className="profileDetails" onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={isEditing ? tempName : name}
              onChange={(e) => setTempName(e.target.value)}
              readOnly={!isEditing} // readOnly depende do modo de edição
            />
            <label htmlFor="surname">Sobrenome:</label>
            <input
              type="text"
              id="surname"
              value={isEditing ? tempSurname : surname}
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
    </section>
  );
};
