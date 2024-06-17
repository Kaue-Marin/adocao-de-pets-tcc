import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Importe o Link
import "../styles/meusPets.css";

export default function MeusPets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null); // Novo estado para exclusão
  const idDono = localStorage.getItem("userId"); // Obtenha o ID do dono do localStorage

  useEffect(() => {
    if (!idDono) {
      console.error("ID de dono não encontrado no localStorage");
      setLoading(false);
      return;
    }

    // Função para buscar os pets do dono desejado
    const fetchPets = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/meusPets/${idDono}`
        );
        setPets(response.data);
      } catch (error) {
        console.error("Erro ao buscar pets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, [idDono]);

  // Função para lidar com a exclusão de um pet
  const handleExcluirPet = async (idPet) => {
    if (deleting !== null) return; // Evita cliques repetidos

    setDeleting(idPet); // Define o estado de exclusão
    try {
      // Atualiza a lista de pets após a exclusão
      await axios.delete(`http://localhost:3001/meusPets/${idPet}`);
      setPets((prevPets) => prevPets.filter((pet) => pet.id !== idPet));
    } catch (error) {
      console.error("Erro ao excluir pet:", error);
    } finally {
      setDeleting(null); // Redefine o estado de exclusão
    }
  };

  return (
    <div className="containerMeusPets">
      <h2>Meus Pets</h2>
      {loading ? (
        <p style={{ fontSize: "2.5rem" }}>Carregando...</p>
      ) : (
        <div className="meusPets">
          {pets.map((pet) => (
            <div className="meusPetsBox" key={pet.id}>
              <img
                src={`data:image/png;base64,${pet.imagemPet}`}
                alt="Pet"
                className="imgMyPet"
              />
              <p style={{ fontSize: "1.2rem", color: "rgb(97 51 135 / 1)" }}>
                {pet.nomeAnimal}
              </p>
              <Link to={`/editarPet/${pet.id}`} className="btnAtualizarPet">
                Atualizar
              </Link>
              <button
                className="btnExcluirPet"
                onClick={() => handleExcluirPet(pet.id)}
                disabled={deleting !== null} // Desativa o botão enquanto estiver excluindo
              >
                {deleting !== null && deleting === pet.id
                  ? "Excluindo..."
                  : "Excluir"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
