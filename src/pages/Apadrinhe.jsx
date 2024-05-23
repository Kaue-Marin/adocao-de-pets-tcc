import React, { useState } from "react";
import axios from "axios";

export const Apadrinhe = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:3001/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Imagem enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar a imagem:", error);
      alert("Erro ao enviar a imagem.");
    }
  };

  return (
    <div style={{ marginTop: "50rem" }}>
      <h1>Apadrinhe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Escolha uma imagem:</label>
          <input type="file" id="image" onChange={handleImageChange} required />
        </div>
        <button type="submit">Enviar Imagem</button>
      </form>
    </div>
  );
};
