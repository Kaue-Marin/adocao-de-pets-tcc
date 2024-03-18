import React, { useState } from "react";
import imgPet from "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg";

export const Adote = () => {
  const [numPetsVisiveis, setNumPetsVisiveis] = useState(6); // Inicialmente, mostraremos apenas 6 pets

  const pets = [
    {
      id: 1,
      nome: "Bolinha",
      cidade: "São Paulo",
      imagem:
        "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg",
    },
    {
      id: 2,
      nome: "Rex",
      cidade: "Rio de Janeiro",
      imagem:
        "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg",
    },
    {
      id: 3,
      nome: "Luna",
      cidade: "Curitiba",
      imagem:
        "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg",
    },
    {
      id: 4,
      nome: "Bob",
      cidade: "Belo Horizonte",
      imagem:
        "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg",
    },
    {
      id: 5,
      nome: "Bella",
      cidade: "Porto Alegre",
      imagem:
        "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg",
    },
    {
      id: 6,
      nome: "Max",
      cidade: "Recife",
      imagem:
        "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg",
    },
    {
      id: 7,
      nome: "Mel",
      cidade: "Salvador",
      imagem:
        "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg",
    },
    {
      id: 8,
      nome: "Thor",
      cidade: "Fortaleza",
      imagem:
        "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg",
    },
    {
      id: 9,
      nome: "Nina",
      cidade: "Brasília",
      imagem:
        "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg",
    },
    {
      id: 10,
      nome: "Lucky",
      cidade: "Manaus",
      imagem:
        "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg",
    },
    {
      id: 11,
      nome: "Pitoco",
      cidade: "Belém",
      imagem:
        "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg",
    },
    {
      id: 12,
      nome: "Pretinha",
      cidade: "Goiânia",
      imagem:
        "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg",
    },
  ];

  // Função para aumentar o número de pets visíveis
  const mostrarMaisPets = () => {
    setNumPetsVisiveis((prevNumPets) => prevNumPets + 6); // Aumenta o número de pets visíveis em 6
  };

  // Função para diminuir o número de pets visíveis
  const mostrarMenosPets = () => {
    setNumPetsVisiveis((prevNumPets) => Math.max(6, prevNumPets - 6)); // Garante que o número de pets visíveis nunca seja menor que 6
  };

  return (
    <section className="adoteSection">
      <div className="titlesSection">
        <h1 className="titleAdote">novos peludos por aqui</h1>
        <p className="subtitleAdote">
          nosso site está cheio de doguinhos e gatinhos por uma família
        </p>
      </div>
      <div className="petsBox">
        {pets.slice(0, numPetsVisiveis).map((pet) => (
          <div className="pet" key={pet.id}>
            <img src={imgPet} alt="" />
            <h2>{pet.nome}</h2>
            <p>{pet.cidade}</p>
          </div>
        ))}
      </div>
      {numPetsVisiveis < pets.length ? ( // Renderiza o botão "Ver Mais" apenas se houver mais pets para mostrar
        <button
          onClick={mostrarMaisPets}
          className="btn"
          style={{ marginTop: "2rem" }}
        >
          Ver Mais
        </button>
      ) : (
        <button
          onClick={mostrarMenosPets}
          className="btn"
          style={{ marginTop: "2rem" }}
        >
          Ver Menos
        </button>
      )}
    </section>
  );
};
