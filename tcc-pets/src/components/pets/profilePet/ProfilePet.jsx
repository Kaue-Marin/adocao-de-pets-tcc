import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faUser,
  faEye,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import IsAuthenticated from "../../../utils/IsAuthenticate";

export const ProfilePet = ({ pets }) => {
  const { petId } = useParams();
  const navigate = useNavigate();
  const [exitOverlay, setExitOverlay] = useState(false);
  const authenticated = IsAuthenticated(); // Verifica se o usuário está autenticado
  const toggleOverlay = () => {
    if (authenticated === false) {
      navigate("/login");
    } else {
      setExitOverlay(!exitOverlay); // Mova esta linha para o else para garantir que o overlay só seja exibido se o usuário estiver autenticado
    }
  };

  const pet = pets[petId];

  return (
    <>
      <section className="profilePet">
        <div className="caracteristicasPet">
          <h1 className="titlePet">{pet.nome}</h1>
          <div className="algumasCaracteristicasDoPetBox">
            <span className="algumasCaracteristicasDoPet">{pet.especie}</span>
            <span className="separandoCaracteristicas">|</span>
            <span className="algumasCaracteristicasDoPet">{pet.sexo}</span>
            <span className="separandoCaracteristicas">|</span>
            <span className="algumasCaracteristicasDoPet">{pet.porte}</span>
          </div>

          <div className="informacoesDoPet">
            <span className="informacaoPet">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="iconInformacaoPet"
              />
              Está em {pet.cidade}, {pet.estado}
            </span>

            <span className="informacaoPet">
              <FontAwesomeIcon icon={faUser} className="iconInformacaoPet" />
              Publicado por {pet.autor.nome} em {pet.dataPublicacao}
            </span>
            <span className="informacaoPet">
              <FontAwesomeIcon icon={faEye} className="iconInformacaoPet" />
              Esta página foi vista {pet.visualizacoes} vezes
            </span>
          </div>

          <button
            className="btnForm"
            style={{
              marginTop: "2rem",
            }}
            onClick={toggleOverlay}
          >
            entrar em contato
          </button>

          <div className="descriptionPet">
            <h2 className="DescriptionTitlePet">A história de {pet.nome}</h2>

            <p className="descriptionHistoryPet">{pet.descricao}</p>
          </div>
        </div>

        <div className="imgPet">
          <img src={pet.imagem} alt={pet.nome} />
        </div>
      </section>

      <div
        className="overlay"
        onClick={toggleOverlay}
        style={{ display: exitOverlay === true ? "block" : "none" }}
      >
        <div className="informationsProfileAdocao">
          <FontAwesomeIcon
            icon={faTimes}
            className="ExitInformationsProfileAdocao"
            onClick={toggleOverlay}
          />
          <div className="informations">
            <h1 className="title">quer adotar?</h1>
            <p className="description">
              Para adotar esse pet ou saber mais sobre ele, entre em contato com
              o protetor:
            </p>
            <a
              target="_blank"
              className="email"
              href={`mailto:${pet.autor.email}`}
            >
              {pet.autor.email}
            </a>

            <a
              href={`https://api.whatsapp.com/send?phone=${pet.autor.telefone}`}
              className="phone"
              target="_blank"
            >
              {pet.autor.telefone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
