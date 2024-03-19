import React, { useState } from "react";
import imgPet from "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg";

export const Adote = () => {
  const [numPetsVisiveis, setNumPetsVisiveis] = useState(15); // Inicialmente, mostraremos apenas 15 pets

  const nomes = [
    "Miguel",
    "Arthur",
    "Gael",
    "Théo",
    "Heitor",
    "Ravi",
    "Davi",
    "Bernardo",
    "Noah",
    "Gabriel",
    "Samuel",
    "Pedro",
    "Anthony",
    "Isaac",
    "Benício",
    "Benjamin",
    "Matheus",
    "Lucas",
    "Joaquim",
    "Nicolas",
    "Lucca",
    "Lorenzo",
    "Henrique",
    "João Miguel",
    "Rafael",
    "Henry",
    "Murilo",
    "Levi",
    "Guilherme",
    "Vicente",
    "Felipe",
    "Bryan",
    "Matteo",
    "Bento",
    "João Pedro",
    "Pietro",
    "Leonardo",
    "Daniel",
    "Gustavo",
    "Pedro Henrique",
    "João Lucas",
    "Emanuel",
    "João",
    "Caleb",
    "Davi Lucca",
    "Antônio",
    "Eduardo",
    "Enrico",
    "Caio",
    "José",
    "Enzo Gabriel",
    "Augusto",
    "Mathias",
    "Vitor",
    "Enzo",
    "Cauã",
    "Francisco",
    "Rael",
    "João Guilherme",
    "Thomas",
    "Yuri",
    "Yan",
    "Anthony Gabriel",
    "Oliver",
    "Otávio",
    "João Gabriel",
    "Nathan",
    "Davi Lucas",
    "Vinícius",
    "Theodoro",
    "Valentim",
    "Ryan",
    "Luiz Miguel",
    "Arthur Miguel",
    "João Vitor",
    "Léonovo",
    "Ravi Lucca",
    "Apollo",
    "Thiago",
    "Tomás",
    "Martin",
    "José Miguel",
    "Erick",
    "Liam",
    "Josué",
    "Luan",
    "Asafe",
    "Raul",
    "José Pedro",
    "Dominic",
    "Kauê",
    "Kalel",
    "Luiz Henrique",
    "Dom",
    "Davi Miguel",
    "Estevão",
    "Breno",
    "Davi Luiz",
    "Thales",
    "Israel",
  ];

  // Cidades fictícias
  const cidades = [
    "São Paulo",
    "Rio de Janeiro",
    "Curitiba",
    "Belo Horizonte",
    "Porto Alegre",
    "Recife",
    "Salvador",
    "Fortaleza",
    "Brasília",
    "Manaus",
  ];

  const pets = [];

  nomes.forEach((nome, index) => {
    const id = index + 1; // IDs começando de 1
    const cidadeIndex = Math.floor(Math.random() * cidades.length);
    const cidade = cidades[cidadeIndex];

    pets.push({
      id,
      nome,
      cidade,
      imagem:
        "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg",
    });
  });

  // Função para aumentar o número de pets visíveis
  const mostrarMaisPets = () => {
    setNumPetsVisiveis((prevNumPets) => prevNumPets + 15); // Aumenta o número de pets visíveis em 15
  };

  // Função para diminuir o número de pets visíveis
  const mostrarMenosPets = () => {
    setNumPetsVisiveis((prevNumPets) => Math.max(15, prevNumPets - 15)); // Diminui o número de pets visíveis em 15, mas nunca menos que 15
  };

  return (
    <section className="adoteSection">
      <div className="titlesSection">
        <h1 className="titleAdote">novos peludos por aqui</h1>
        <p className="subtitleAdote">
          nosso site está cheio de doguinhos e gatinhos por uma família
        </p>
      </div>

      {/* Formulário de filtros */}
      <form className="filterForm">
        <div className="boxForm">
          <div>
            <select name="especie" id="especie">
              <option value="todos">todas as especies</option>
              <option value="gato">Gato</option>
              <option value="cachorro">Cachorro</option>
            </select>
          </div>
          <div>
            <select name="sexo" id="sexo">
              <option value="todos">todos os sexos</option>
              <option value="macho">Macho</option>
              <option value="femea">Fêmea</option>
            </select>
          </div>
          <div>
            <select name="porte" id="porte">
              <option value="todos">Todos os portes</option>
              <option value="pequeno">Pequeno</option>
              <option value="medio">Médio</option>
              <option value="grande">Grande</option>
            </select>
          </div>
        </div>

        <div className="boxForm">
          <div>
            <select name="estado" id="estado">
              <option value="todos">Todos os estados</option>
              {/* Opções de estados */}
            </select>
          </div>
          <div>
            <select name="cidade" id="cidade">
              <option value="todos">Todas as cidades</option>
              {/* Opções de cidades */}
            </select>
          </div>
          <div>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="nome do animal"
            />
          </div>
        </div>

        <button type="submit" className="btn">
          Buscar
        </button>
      </form>

      <div className="petsBox">
        {pets.slice(0, numPetsVisiveis).map((pet) => (
          <div className="pet" key={pet.id}>
            <img src={imgPet} alt="" />
            <h2>{pet.nome}</h2>
            <p>{pet.cidade}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "2rem" }} className="boxBtn">
        <button onClick={mostrarMaisPets} className="btn">
          Ver Mais
        </button>
        {numPetsVisiveis > 15 && ( // Renderiza o botão "Ver Menos" apenas se houver mais de 15 pets visíveis
          <button onClick={mostrarMenosPets} className="btn"></button>
        )}
      </div>
    </section>
  );
};
