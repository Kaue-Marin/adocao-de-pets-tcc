import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/doe.css";
import cidadesSp from "../assets/json/cidades"; // Assumindo que o JSON está nessa localização

export const Doe = () => {
  const [idDono, setIdDono] = useState(1); // Defina um idDono fictício para teste
  const [tutor, setTutor] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [descricaoPet, setDescricaoPet] = useState("");
  const [localizacaoPet, setLocalizacaoPet] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [especie, setEspecie] = useState("Cachorro");
  const [sexo, setSexo] = useState("Macho");
  const [porte, setPorte] = useState("Pequeno");
  const [cidade, setCidade] = useState(cidadesSp[0]); // Cidade inicial
  const [estado] = useState("São Paulo"); // Estado fixo
  const [nomeAnimal, setNomeAnimal] = useState("");
  const [imagemPet, setImagemPet] = useState(null);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    // Obtenha o idDono do localStorage
    const userId = localStorage.getItem("userId");
    if (userId) {
      setIdDono(userId);
      console.log(userId);
    }
  }, []);

  // Log cidade inicial
  useEffect(() => {
    console.log("Cidade inicial:", cidade);
  }, [cidade]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log cidade no momento do envio
    console.log("Cidade selecionada ao enviar:", cidade);

    const formData = new FormData();
    formData.append("idDono", idDono); // Inclua o idDono no FormData
    formData.append("tutor", tutor);
    formData.append("celular", celular);
    formData.append("email", email);
    formData.append("descricaoPet", descricaoPet);
    formData.append("localizacaoPet", localizacaoPet);
    formData.append("especie", especie);
    formData.append("sexo", sexo);
    formData.append("porte", porte);
    formData.append("cidade", cidade);
    formData.append("estado", estado);
    formData.append("nomeAnimal", nomeAnimal);
    if (imagemPet) {
      formData.append("imagemPet", imagemPet);
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/pets",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);

      // Limpar os campos após a submissão
      setTutor("");
      setCelular("");
      setEmail("");
      setDescricaoPet("");
      setLocalizacaoPet("");
      setConfirm(false);
      setEspecie("Cachorro");
      setSexo("Macho");
      setPorte("Pequeno");
      setCidade(cidadesSp[0]); // Reset para a cidade inicial
      setNomeAnimal("");
      setImagemPet(null);
      setFileName("");
    } catch (error) {
      console.error("Erro ao enviar os dados para o backend:", error);
    }
  };

  const handleFileChange = (e) => {
    setImagemPet(e.target.files[0]);
    setFileName(e.target.files[0] ? e.target.files[0].name : "");
  };

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
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="tutor">Tutor:</label>
            <input
              type="text"
              id="tutor"
              value={tutor}
              onChange={(e) => setTutor(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="celular">Celular:</label>
            <input
              type="tel"
              id="celular"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="descricaoPet">Descrição do Pet:</label>
            <textarea
              id="descricaoPet"
              value={descricaoPet}
              onChange={(e) => setDescricaoPet(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="localizacaoPet">Localização do Pet:</label>
            <input
              type="text"
              id="localizacaoPet"
              value={localizacaoPet}
              onChange={(e) => setLocalizacaoPet(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="nomeAnimal">Nome do Animal:</label>
            <input
              type="text"
              id="nomeAnimal"
              value={nomeAnimal}
              onChange={(e) => setNomeAnimal(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="especie">Espécie:</label>
            <select
              id="especie"
              value={especie}
              onChange={(e) => setEspecie(e.target.value)}
            >
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sexo">Sexo:</label>
            <select
              id="sexo"
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
            >
              <option value="Macho">Macho</option>
              <option value="Fêmea">Fêmea</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="porte">Porte:</label>
            <select
              id="porte"
              value={porte}
              onChange={(e) => setPorte(e.target.value)}
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
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              required
            >
              {cidadesSp.map((cidade) => (
                <option key={cidade} value={cidade}>
                  {cidade}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="estado">Estado:</label>
            <input type="text" id="estado" value={estado} readOnly required />
          </div>

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
