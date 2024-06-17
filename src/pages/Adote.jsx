import { useState } from "react";
import cidadesSp from "../assets/json/cidades";
import GerarPets from "../utils/GerarPet";
import { FilterForm } from "../components/pets/filter/FilterForm";
import { PetsBox } from "../components/pets/petsBox/PetsBox";
import { TitleSection } from "../components/titlesection/TitleSection";

export const Adote = ({ petsProps }) => {
  const [especie, setEspecie] = useState("todos");
  const [sexo, setSexo] = useState("todos");
  const [porte, setPorte] = useState("todos");
  const [estado, setEstado] = useState("todos");
  const [cidade, setCidade] = useState("todos");
  const [nome, setNome] = useState("");

  const pets = petsProps;

  return (
    <section className="adoteSection" style={{ marginTop: "15rem" }}>
      <TitleSection
        title="novos peludos por aqui"
        subtitle="nosso site está cheio de doguinhos e gatinhos por uma família"
      />

      <PetsBox
        pets={pets}
        especie={especie}
        sexo={sexo}
        porte={porte}
        estado={estado}
        cidade={cidade}
        nome={nome}
      />
    </section>
  );
};
