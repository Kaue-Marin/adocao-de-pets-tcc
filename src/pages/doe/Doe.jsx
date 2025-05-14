import { useState, useEffect } from "react";
import "../../styles/doe.css";
import cidadesSp from "../../assets/json/cidades";
import { RenderSelect } from "./renderSelect/RenderSelect";
import { RenderInput } from "./renderInput/RenderInput";
import { submitForm } from "../../utils/SubmitForm";

export const Doe = () => {
  const [form, setForm] = useState({
    idDono: 1,
    tutor: "",
    celular: "",
    email: "",
    descricaoPet: "",
    localizacaoPet: "",
    especie: "Cachorro",
    sexo: "Macho",
    porte: "Pequeno",
    cidade: cidadesSp[0],
    estado: "São Paulo",
    nomeAnimal: "",
  });

  const [imagemPet, setImagemPet] = useState(null);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setForm((prev) => ({ ...prev, idDono: userId }));
      console.log("ID do usuário:", userId);
    }
  }, []); 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImagemPet(file);
    setFileName(file ? file.name : "");
  };

  const inputs = [
  { label: "Tutor", id: "tutor" },
  { label: "Celular", id: "celular", type: "tel" },
  { label: "Email", id: "email", type: "email" },
  { label: "Localização do Pet", id: "localizacaoPet" },
  { label: "Nome do Animal", id: "nomeAnimal" },
  { label: "Estado", id: "estado" },
  ];

  const selects = [
    { label: "Sexo", id: "sexo", options: ["Macho", "Fêmea"] },
    { label: "Porte", id: "porte", options: ["Pequeno", "Médio", "Grande"] },
    { label: "Cidade", id: "cidade", options: cidadesSp },
  ];


  return (
    <section
      className="form-container-Doe"
      style={{
        marginTop: "20rem",
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div className="formDoe">
        <form className="form" onSubmit={(e) => submitForm(e, form, imagemPet, setForm, setImagemPet, setFileName)}>
          
          {inputs.map((input) => (
            <RenderInput
              key={input.id}
              label={input.label}
              id={input.id}
              type={input.type || "text"}
              value={form[input.id]}
              onChange={handleChange}
            />
          ))}

          <div className="form-group">
            <label htmlFor="descricaoPet">Descrição do Pet:</label>
            <textarea
              id="descricaoPet"
              value={form.descricaoPet}
              onChange={handleChange}
              required
            />
          </div>

          {selects.map((select) => (
            <RenderSelect
              key={select.id}
              label={select.label}
              id={select.id}
              value={form[select.id]}
              onChange={handleChange}
              options={select.options}
            />
          ))}

          <div className="form-group">
            <label htmlFor="imagemPet">Imagem do Pet:</label>
            <label className="custom-file-upload-doe">
              <input type="file" id="imagemPet" onChange={handleFileChange} />
              Escolher arquivo
            </label>
            <span id="file-name" className={fileName ? "visible" : ""}>
              {fileName || "Nenhum arquivo selecionado"}
            </span>
          </div>

          <button type="submit">Cadastrar Pet</button>
        </form>

      </div>
    </section>
  );
};
