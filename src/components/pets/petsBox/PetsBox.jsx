import { useState, useEffect } from "react";
import axios from "axios";
import "./PetsBox.css";
import "../filter/FilterForm.css";
import cidadesSp from "../../../assets/json/cidades";
import { Link } from "react-router-dom";

export const PetsBox = () => {
  const [numPetsVisiveis, setNumPetsVisiveis] = useState(6); // Inicialmente, mostraremos apenas 6 pets
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [especie, setEspecie] = useState("");
  const [sexo, setSexo] = useState("");
  const [porte, setPorte] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [nome, setNome] = useState("");

  const mostrarMaisPets = () => {
    setNumPetsVisiveis((prevNumPets) => prevNumPets + 6); // Aumenta o número de pets visíveis em 6
  };

  const mostrarMenosPets = () => {
    setNumPetsVisiveis((prevNumPets) => Math.max(6, prevNumPets - 6)); // Diminui o número de pets visíveis em 6, mas nunca menos que 6
  };

  const fetchPets = async () => {
    setIsLoading(true); // Começa a carregar
    try {
      const response = await axios.get("http://localhost:3001/pets");
      const petsData = response.data;

      const filteredPets = petsData.filter((pet) => {
        return (
          (especie === "" ||
            pet.especie.toLowerCase() === especie.toLowerCase()) &&
          (sexo === "" || pet.sexo.toLowerCase() === sexo.toLowerCase()) &&
          (porte === "" || pet.porte.toLowerCase() === porte.toLowerCase()) &&
          (estado === "" ||
            pet.estado.toLowerCase() === estado.toLowerCase()) &&
          (cidade === "" ||
            pet.cidade.toLowerCase() === cidade.toLowerCase()) &&
          (nome === "" ||
            pet.nomeAnimal.toLowerCase().includes(nome.toLowerCase()))
        );
      });

      setPets(filteredPets);
    } catch (error) {
      console.error("Erro ao buscar os dados dos pets:", error);
    } finally {
      setIsLoading(false); // Termina de carregar
    }
  };

  useEffect(() => {
    fetchPets();
  }, [especie, sexo, porte, estado, cidade, nome]);

  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <form
          className="filterForm"
          onSubmit={(e) => {
            e.preventDefault();
            fetchPets();
          }}
        >
          <div className="boxForm">
            <div>
              <select
                name="especie"
                id="especie"
                value={especie}
                onChange={(e) => setEspecie(e.target.value)}
              >
                <option value="">Escolha uma espécie</option>
                <option value="gato">Gato</option>
                <option value="cachorro">Cachorro</option>
              </select>
            </div>
            <div>
              <select
                name="sexo"
                id="sexo"
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}
              >
                <option value="">Escolha um sexo</option>
                <option value="macho">Macho</option>
                <option value="femea">Fêmea</option>
              </select>
            </div>
            <div>
              <select
                name="porte"
                id="porte"
                value={porte}
                onChange={(e) => setPorte(e.target.value)}
              >
                <option value="">Escolha um porte</option>
                <option value="pequeno">Pequeno</option>
                <option value="medio">Médio</option>
                <option value="grande">Grande</option>
              </select>
            </div>
          </div>
          <div className="boxForm">
            <div>
              <select
                name="estado"
                id="estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="">Escolha um estado</option>
                <option value="SP">São Paulo</option>
                {/* Adicione outras opções de estado aqui, se necessário */}
              </select>
            </div>
            <div>
              <select
                name="cidade"
                id="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              >
                <option value="">Escolha uma cidade</option>
                {cidadesSp.map((cidade) => (
                  <option key={cidade}>{cidade}</option>
                ))}
              </select>
            </div>
            <div>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="nome do animal"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
          </div>

          <button className="btnPets" type="submit">
            Filtrar
          </button>
        </form>
        <div className="petsBox">
          {isLoading ? (
            <p style={{ fontSize: "2rem" }}>Carregando...</p>
          ) : (
            pets.slice(0, numPetsVisiveis).map((pet) => (
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
            ))
          )}
          {!isLoading && pets.length === 0 && (
            <p style={{ fontSize: "2rem" }}>
              Nenhum pet encontrado com os filtros selecionados.
            </p>
          )}
          <br />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "3rem",
          }}
        >
          <button onClick={mostrarMaisPets} className="btnForm">
            Ver Mais
          </button>
          {numPetsVisiveis > 6 && ( // Renderiza o botão "Ver Menos" apenas se houver mais de 6 pets visíveis
            <button onClick={mostrarMenosPets} className="btnForm">
              Ver Menos
            </button>
          )}
        </div>
      </div>
    </>
  );
};
