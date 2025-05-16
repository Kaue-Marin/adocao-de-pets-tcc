import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useFetchPet } from './hooks/useFetchPet.js'
import { TextAreaField } from "./textAreaField/textAreaField.jsx";
import { InputField } from "./inputField/inputField.jsx";
import { SelectField } from "./selectField/SelectField.jsx";

export default function EditarPet() {
  const [mensagem, setMensagem] = useState("");
  const { id } = useParams(); // pega o id da rota
  const { pet, setPet, loading } = useFetchPet(id);


  const handleChange = useCallback((e) => {
    const { id, value } = e.target;
    setPet((prevPet) => ({ ...prevPet, [id]: value }));
  }, []);

  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    setPet((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPet((prevPet) => ({
        ...prevPet,
        fileName: file.name,
        file,
      }));
    }
  };

  const createFormData = () => {
    const formData = new FormData();
    Object.entries(pet).forEach(([key, value]) => {
      if (key === "fileName") return;
      if (key === "file") {
        if (value) formData.append("imagemPet", value);
      } else {
        formData.append(key, value);
      }
    });
    return formData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = createFormData();
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

  return (
    <section className="form-container-Doe">
      <div className="formDoe" style={{ marginTop: "20rem" }}>
        {loading ? (
          <p style={{ fontSize: "2.5rem" }}>Carregando dados do pet...</p>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <InputField id="tutor" label="Tutor" value={pet.tutor} onChange={handleChange} required />
            <InputField id="celular" label="Celular" value={pet.celular} onChange={handleChange} required />
            <InputField id="email" label="Email" value={pet.email} onChange={handleChange} required type="email" />
            <TextAreaField id="descricaoPet" label="Descrição do Pet" value={pet.descricaoPet} onChange={handleChange} />
            <InputField id="localizacaoPet" label="Localização do Pet" value={pet.localizacaoPet} onChange={handleChange} required />
            <InputField id="nomeAnimal" label="Nome do Animal" value={pet.nomeAnimal} onChange={handleChange} required />

            <SelectField id="especie" label="Espécie" value={pet.especie} onChange={handleSelectChange} options={["Cachorro", "Gato"]} />
            <SelectField id="sexo" label="Sexo" value={pet.sexo} onChange={handleSelectChange} options={["Macho", "Fêmea"]} />
            <SelectField id="porte" label="Porte" value={pet.porte} onChange={handleSelectChange} options={["Pequeno", "Médio", "Grande"]} />

            <SelectField id="cidade" label="Cidade" value={pet.cidade} onChange={handleSelectChange} options={["São Paulo"]} required />
            <InputField id="estado" label="Estado" value={pet.estado} readOnly required />

          <div className="form-group">
            <label htmlFor="imagemPet">Imagem do Pet:</label>

            {pet.imagemPet && (
              <div className="imagem-preview" style={{ marginBottom: "1rem" }}>
                <p style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Imagem atual:</p>
                <img
                  src={`data:image/jpeg;base64,${pet.imagemPet}`}
                  alt="Imagem atual do pet"
                  style={{
                    width: "200px",
                    height: "auto",
                    borderRadius: "1rem",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </div>
            )}

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

