import { useState } from "react";
import { PetsBox } from "./pets/petsBox/PetsBox";
import { TitleSection } from "../../components/titlesection/TitleSection";

export const Adote = ({ petsProps }) => {
  const [filtros, setFiltros] = useState({
    especie: "todos",
    sexo: "todos",
    porte: "todos",
    estado: "todos",
    cidade: "todos",
    nome: "",
  });


  return (
    <section className="adoteSection" style={{ marginTop: "15rem" }}>
      <TitleSection
        title="novos peludos por aqui"
        subtitle="nosso site está cheio de doguinhos e gatinhos por uma família"
      />

      <PetsBox
        pets={petsProps}
        {...filtros}
      />
    </section>
  );
};
