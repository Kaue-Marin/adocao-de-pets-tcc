import { useState } from "react";
import axios from "axios";
import "../styles/doe.css";

export const Doe = () => {
  const [tutor, setTutor] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [descricaoPet, setDescricaoPet] = useState("");
  const [localizacaoPet, setLocalizacaoPet] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [especie, setEspecie] = useState("Cachorro");
  const [sexo, setSexo] = useState("Macho");
  const [porte, setPorte] = useState("Pequeno");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [nomeAnimal, setNomeAnimal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/pets", {
        tutor,
        celular,
        email,
        descricaoPet,
        localizacaoPet,
        especie,
        sexo,
        porte,
        cidade,
        estado,
        nomeAnimal,
      });
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
      setCidade("");
      setEstado("");
      setNomeAnimal("");
    } catch (error) {
      console.error("Erro ao enviar os dados para o backend:", error);
    }
  };

  const handleConfirm = () => {
    setConfirm(true);
  };

  return (
    <section className="form-container-Doe" style={{ marginTop: "20rem", display: "flex", width: "100%", justifyContent: "center" }}>
      <div className="formDoe">
        <form className="form" onSubmit={handleSubmit}>
          {/* Campos do formulário */}
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
            <select id="especie" value={especie} onChange={(e) => setEspecie(e.target.value)}>
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sexo">Sexo:</label>
            <select id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
              <option value="Macho">Macho</option>
              <option value="Fêmea">Fêmea</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="porte">Porte:</label>
            <select id="porte" value={porte} onChange={(e) => setPorte(e.target.value)}>
              <option value="Pequeno">Pequeno</option>
              <option value="Médio">Médio</option>
              <option value="Grande">Grande</option>
            </select>
          </div>

          {confirm && (
            <div className="form-group confirmData" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: ".5rem" }}>
              <h2 style={{ marginBottom: "1rem" }}>Confirme os dados:</h2>
              <p>Tutor: {tutor}</p>
              <p>Celular: {celular}</p>
              <p>Email: {email}</p>
              <p>Descrição do Pet: {descricaoPet}</p>
              <p>Localização do Pet: {localizacaoPet}</p>
              <p>Espécie: {especie}</p>
              <p>Sexo: {sexo}</p>
              <p>Porte: {porte}</p>
              <p>Cidade: {cidade}</p>
              <p>Estado: {estado}</p>
              <p>Nome do Animal: {nomeAnimal}</p>
            </div>
          )}

          <div className="form-group btn-group">
            <button type="submit" className="btnConcluir">Concluir</button>
            <button type="button" className="btnCancelar">Cancelar</button>
          </div>
        </form>
      </div>
    </section>
  );
};
