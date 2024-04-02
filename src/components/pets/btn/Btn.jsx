import React from 'react'
import './Btn.css'

export const Btn = ({ numPetsVisiveis, setNumPetsVisiveis}) => {

      // Função para aumentar o número de pets visíveis
  const mostrarMaisPets = () => {
    setNumPetsVisiveis((prevNumPets) => prevNumPets + 15); // Aumenta o número de pets visíveis em 15
  };

  const mostrarMenosPets = () => {
    setNumPetsVisiveis((prevNumPets) => Math.max(15, prevNumPets - 15)); // Diminui o número de pets visíveis em 15, mas nunca menos que 15
  };

  return (
        
  <div style={{ marginTop: "2rem" }} className="boxBtn">
  <button onClick={mostrarMaisPets} className="btnForm">
    Ver Mais
  </button>
  {numPetsVisiveis > 15 && ( // Renderiza o botão "Ver Menos" apenas se houver mais de 15 pets visíveis
    <button onClick={mostrarMenosPets} className="btnForm">ver menos</button>
  )}
</div>

  )
}
