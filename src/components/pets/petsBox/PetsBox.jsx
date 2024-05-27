import { useState, useEffect } from "react";
import axios from "axios";
import "./PetsBox.css";
import { Link } from "react-router-dom";

export const PetsBox = ({
  especie,
  sexo,
  porte,
  estado,
  cidade,
  nome,
  numPetsVisiveis,
}) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        // Realizar a requisição para obter os dados do banco de dados
        const response = await axios.get("http://localhost:3001/pets");
        const petsData = response.data;

        // Filtrar os pets de acordo com os critérios especificados
        const filteredPets = petsData.filter((pet) => {
          // Filtro de espécie
          if (especie !== "todos" && pet.especie !== especie) {
            return false;
          }
          // Filtro de sexo
          if (sexo !== "todos" && pet.sexo !== sexo) {
            return false;
          }
          // Filtro de porte
          if (porte !== "todos" && pet.porte !== porte) {
            return false;
          }
          // Filtro de estado
          if (estado !== "todos" && pet.estado !== estado) {
            return false;
          }
          // Filtro de cidade
          if (cidade !== "todos" && pet.cidade !== cidade) {
            return false;
          }
          // Filtro de nome
          if (
            nome.trim() !== "" &&
            !pet.nome.toLowerCase().includes(nome.toLowerCase())
          ) {
            return false;
          }
          return true;
        });

        setPets(filteredPets);
      } catch (error) {
        console.error("Erro ao buscar os dados dos pets:", error);
      }
    };

    fetchPets();
  }, [especie, sexo, porte, estado, cidade, nome]);

  return (
    <div className="petsBox">
      {pets.slice(0, numPetsVisiveis).map((pet) => (
        <Link to={`/profilePet/${pet.id}`} key={pet.id}>
          <div className="pet" key={pet.id}>
            <img
              src={`data:${pet.imagemMimeType};base64,${pet.imagemPet}`}
              alt=""
            />
            <h2>{pet.nomeAnimal}</h2>
            <p>{pet.cidade}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
