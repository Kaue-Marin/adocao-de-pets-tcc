import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faUser,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

export const ProfilePet = () => {
  const { petId } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [exitOverlay, setExitOverlay] = useState(false);
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("isLoggedIn")
  );

  useEffect(() => {
    const fetchPet = async () => {
      try {
        // Realizar a requisição para obter os dados do pet específico com o ID fornecido
        const response = await axios.get(`http://localhost:3001/pets/${petId}`);
        const petData = response.data;
        setPet(petData);
      } catch (error) {
        console.error("Erro ao buscar os dados do pet:", error);
      }
    };

    fetchPet();
  }, [petId]);

  const toggleOverlay = () => {
    if (authenticated !== "true") {
      navigate("/cadastro");
    } else {
      setExitOverlay(!exitOverlay);
    }
  };

  if (!pet) {
    return <div>Carregando...</div>;
  }

  const {
    tutor,
    celular,
    email,
    descricaoPet,
    localizacaoPet,
    especie,
    sexo,
    porte,
    cidade,
    estado,
    dataPublicacao,
    nomeAnimal,
    imagemPet,
    imagemMimeType,
  } = pet;

  const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
  };

  const formattedDate = format(new Date(dataPublicacao), "dd/MM/yyyy");

  return (
    <>
      <section className="profilePet">
        <div className="caracteristicasPet">
          <h1 className="titlePet">{pet.nomeAnimal}</h1>
          <div className="algumasCaracteristicasDoPetBox">
            <span className="algumasCaracteristicasDoPet">{especie}</span>
            <span className="separandoCaracteristicas">|</span>
            <span className="algumasCaracteristicasDoPet">{sexo}</span>
            <span className="separandoCaracteristicas">|</span>
            <span className="algumasCaracteristicasDoPet">{porte}</span>
          </div>

          <div className="informacoesDoPet">
            <span className="informacaoPet">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="iconInformacaoPet"
              />
              Está em {cidade}, {estado}
            </span>

            <span className="informacaoPet">
              <FontAwesomeIcon icon={faUser} className="iconInformacaoPet" />
              Publicado por {tutor} em {formattedDate}
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
            <h2 className="DescriptionTitlePet">
              A história de {getFirstName(nomeAnimal)}
            </h2>

            <p className="descriptionHistoryPet">{descricaoPet}</p>
          </div>
        </div>

        <div className="imgPet">
          <img
            src={`data:${pet.imagemMimeType};base64,${pet.imagemPet}`}
            alt=""
          />
        </div>
      </section>

      <div
        className="overlay"
        onClick={toggleOverlay}
        style={{ display: exitOverlay ? "block" : "none" }}
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
              o tutor:
            </p>
            <a target="_blank" className="email" href={`mailto:${email}`}>
              {email}
            </a>

            <a
              href={`https://api.whatsapp.com/send?phone=${celular}`}
              className="phone"
              target="_blank"
            >
              {celular}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
