import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditarPet() {
  const [pet, setPet] = useState({
    tutor: "",
    celular: "",
    email: "",
    descricaoPet: "",
    localizacaoPet: "",
    nomeAnimal: "",
    especie: "Cachorro",
    sexo: "Macho",
    porte: "Pequeno",
    cidade: "",
    estado: "",
    fileName: "",
    file: null,
  });
  const [loading, setLoading] = useState(true);
  const [mensagem, setMensagem] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/pets/${id}`);
        const petData = response.data;
        setPet({
          ...pet,
          tutor: petData.tutor,
          celular: petData.celular,
          email: petData.email,
          descricaoPet: petData.descricaoPet,
          localizacaoPet: petData.localizacaoPet,
          nomeAnimal: petData.nomeAnimal,
          especie: petData.especie,
          sexo: petData.sexo,
          porte: petData.porte,
          cidade: petData.cidade,
          estado: petData.estado,
          fileName: petData.fileName,
        });
      } catch (error) {
        console.error("Erro ao obter dados do pet:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPetData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("tutor", pet.tutor);
      formData.append("celular", pet.celular);
      formData.append("email", pet.email);
      formData.append("descricaoPet", pet.descricaoPet);
      formData.append("localizacaoPet", pet.localizacaoPet);
      formData.append("nomeAnimal", pet.nomeAnimal);
      formData.append("especie", pet.especie);
      formData.append("sexo", pet.sexo);
      formData.append("porte", pet.porte);
      formData.append("cidade", pet.cidade);
      formData.append("estado", pet.estado);
      formData.append("imagemPet", pet.file);

      await axios.put(`http://localhost:3001/atualizarPet/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMensagem("Pet atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar o pet:", error);
      setMensagem("Erro ao atualizar o pet. Por favor, tente novamente.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPet({
        ...pet,
        fileName: file.name,
        file: file,
      });
    }
  };

  return (
    <section className="form-container-Doe">
      <div className="formDoe" style={{ marginTop: "20rem" }}>
        {loading ? (
          <p style={{ fontSize: "2.5rem" }}>Carregando dados do pet...</p>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="tutor">Tutor:</label>
              <input
                type="text"
                id="tutor"
                value={pet.tutor}
                onChange={(e) => setPet({ ...pet, tutor: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="celular">Celular:</label>
              <input
                type="tel"
                id="celular"
                value={pet.celular}
                onChange={(e) => setPet({ ...pet, celular: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={pet.email}
                onChange={(e) => setPet({ ...pet, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="descricaoPet">Descrição do Pet:</label>
              <textarea
                id="descricaoPet"
                value={pet.descricaoPet}
                onChange={(e) =>
                  setPet({ ...pet, descricaoPet: e.target.value })
                }
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="localizacaoPet">Localização do Pet:</label>
              <input
                type="text"
                id="localizacaoPet"
                value={pet.localizacaoPet}
                onChange={(e) =>
                  setPet({ ...pet, localizacaoPet: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="nomeAnimal">Nome do Animal:</label>
              <input
                type="text"
                id="nomeAnimal"
                value={pet.nomeAnimal}
                onChange={(e) => setPet({ ...pet, nomeAnimal: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="especie">Espécie:</label>
              <select
                id="especie"
                value={pet.especie}
                onChange={(e) => setPet({ ...pet, especie: e.target.value })}
              >
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="sexo">Sexo:</label>
              <select
                id="sexo"
                value={pet.sexo}
                onChange={(e) => setPet({ ...pet, sexo: e.target.value })}
              >
                <option value="Macho">Macho</option>
                <option value="Fêmea">Fêmea</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="porte">Porte:</label>
              <select
                id="porte"
                value={pet.porte}
                onChange={(e) => setPet({ ...pet, porte: e.target.value })}
              >
                <option value="Pequeno">Pequeno</option>
                <option value="Médio">Médio</option>
                <option value="Grande">Grande</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="cidade">Cidade:</label>
              <select
                id="cidade"
                value={pet.cidade}
                onChange={(e) => setPet({ ...pet, cidade: e.target.value })}
                required
              >
                <option value="São Paulo">São Paulo</option>
                {/* Adicione outras opções de cidades aqui */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="estado">Estado:</label>
              <input
                type="text"
                id="estado"
                value={pet.estado}
                onChange={(e) => setPet({ ...pet, estado: e.target.value })}
                readOnly
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="imagemPet">Imagem do Pet:</label>
              <label className="custom-file-upload-doe">
                <input
                  type="file"
                  id="imagemPet"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                Escolher arquivo
              </label>
              <span id="file-name" className={pet.fileName ? "visible" : ""}>
                {pet.fileName || "Nenhum arquivo selecionado"}
              </span>
            </div>
            <button type="submit">Atualizar Pet</button>
            {mensagem && (
              <p
                style={{
                  marginTop: "3rem",
                  fontSize: "1.6rem",
                  color: "#2ecc71",
                  textAlign: "center",
                }}
              >
                {mensagem}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
