import { useState } from "react";
import cidadesSp from "../assets/json/cidades";
import GerarPets from "../utils/GerarPet";
import { FilterForm } from "../components/pets/filter/FilterForm";
import { PetsBox } from "../components/pets/petsBox/PetsBox";
import { Btn } from "../components/pets/btn/Btn";
import { TitleSection } from "../components/titlesection/TitleSection";

export const Adote = ({ petsProps }) => {
  const [numPetsVisiveis, setNumPetsVisiveis] = useState(15); // Inicialmente, mostraremos apenas 15 pets
  const [especie, setEspecie] = useState("todos");
  const [sexo, setSexo] = useState("todos");
  const [porte, setPorte] = useState("todos");
  const [estado, setEstado] = useState("todos");
  const [cidade, setCidade] = useState("todos");
  const [nome, setNome] = useState("");

  const pets = petsProps;

  return (
    <section className="adoteSection" style={{marginTop: '15rem'}}>
      <TitleSection
        title="novos peludos por aqui"
        subtitle="nosso site está cheio de doguinhos e gatinhos por uma família"
      />

      {/* Formulário de filtros */}
      <FilterForm
        especie={especie}
        setEspecie={setEspecie}
        sexo={sexo}
        setSexo={setSexo}
        porte={porte}
        setPorte={setPorte}
        estado={estado}
        setEstado={setEstado}
        cidade={cidade}
        setCidade={setCidade}
        nome={nome}
        setNome={setNome}
      />

      <PetsBox
        pets={pets}
        especie={especie}
        sexo={sexo}
        porte={porte}
        estado={estado}
        cidade={cidade}
        nome={nome}
        numPetsVisiveis={numPetsVisiveis}
      />

      <Btn
        numPetsVisiveis={numPetsVisiveis}
        setNumPetsVisiveis={setNumPetsVisiveis}
      />
    </section>
  );
};
