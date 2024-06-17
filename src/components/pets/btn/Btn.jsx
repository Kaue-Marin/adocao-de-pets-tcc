import React from "react";
import "./Btn.css";

export const Btn = ({ numPetsVisiveis, setNumPetsVisiveis }) => {
  // Função para aumentar o número de pets visíveis
  const mostrarMaisPets = () => {
    setNumPetsVisiveis((prevNumPets) => prevNumPets + 3); // Aumenta o número de pets visíveis em 3
  };

  const mostrarMenosPets = () => {
    setNumPetsVisiveis((prevNumPets) => Math.max(3, prevNumPets - 3)); // Diminui o número de pets visíveis em 3, mas nunca menos que 3
  };

  return (
    <div style={{ marginTop: "2rem" }} className="boxBtn">
      <button onClick={mostrarMaisPets} className="btnForm">
        Ver Mais
      </button>
      {numPetsVisiveis > 3 && ( // Renderiza o botão "Ver Menos" apenas se houver mais de 3 pets visíveis
        <button onClick={mostrarMenosPets} className="btnForm">
          Ver Menos
        </button>
      )}
    </div>
  );
};
