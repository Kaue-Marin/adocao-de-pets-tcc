import { useState, useEffect } from "react";
import axios from "axios";
import "./PetsBox.css";
import { Link } from "react-router-dom";

export const PetsBox = ({ filters }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        // Realizar a requisição para obter os dados do banco de dados
        const response = await axios.get("http://localhost:3001/pets");
        const petsData = response.data;

        // Filtrar os pets de acordo com os critérios especificados
        const filteredPets = petsData.filter((pet) => {
          // Verificar se o pet atende a todos os critérios de filtro
          for (let key in filters) {
            if (filters[key] !== "todos" && pet[key] !== filters[key]) {
              return false;
            }
          }
          return true;
        });

        setPets(filteredPets);
      } catch (error) {
        console.error("Erro ao buscar os dados dos pets:", error);
      }
    };

    fetchPets();
  }, [filters]);

  return (
    <div className="petsBox">
      {pets.map((pet) => (
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
