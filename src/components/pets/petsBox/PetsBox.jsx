import imgPet from "../../../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg";
import "./PetsBox.css";
import { Link } from "react-router-dom";

export const PetsBox = ({
  pets,
  especie,
  sexo,
  porte,
  estado,
  cidade,
  nome,
  numPetsVisiveis,
}) => {


  return (
    <div className="petsBox">
      {pets
        .filter((pet) => {
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
        })
        .slice(0, numPetsVisiveis)
        .map((pet) => (
          <Link to={`/profilePet/${pet.id - 1}`} key={pet.id}>
            <div className="pet" key={pet.id}>
              <img src={imgPet} alt="" />
              <h2>{pet.nome}</h2>
              <p>{pet.cidade}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};
