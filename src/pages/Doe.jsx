import { useState } from "react";
import "../styles/doe.css";

export const Doe = () => {
  const [tutor, setTutor] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [descricaoPet, setDescricaoPet] = useState("");
  const [localizacaoPet, setLocalizacaoPet] = useState("");
  const [fotoPet, setFotoPet] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [especie, setEspecie] = useState("Cachorro");
  const [sexo, setSexo] = useState("Macho");
  const [porte, setPorte] = useState("Pequeno");
  const [id, setId] = useState(""); 
  const [cidade, setCidade] = useState(""); 
  const [estado, setEstado] = useState(""); 
  const [dataPublicacao, setDataPublicacao] = useState(new Date().toLocaleDateString()); // Data atual
  const [visualizacoes, setVisualizacoes] = useState(Math.floor(Math.random() * 1000)); 
  const [nomeAnimal, setNomeAnimal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Atualizar o localStorage apenas quando o formulário for submetido
    const storedData = JSON.parse(localStorage.getItem("pets")) || [];
    const newData = [
      ...storedData,
      {
        tutor,
        celular,
        email,
        descricaoPet,
        localizacaoPet,
        especie,
        sexo,
        porte,
        id,
        cidade,
        estado,
        dataPublicacao,
        visualizacoes,
        nomeAnimal,
        autor: tutor, // Autor assumido como tutor para este exemplo
        imagem: fotoPet ? URL.createObjectURL(fotoPet) : null, // URL da imagem se houver uma foto selecionada
        descricao: "Descrição padrão", // Descrição padrão para este exemplo
      }
    ];
    localStorage.setItem("pets", JSON.stringify(newData));
    console.log(newData);
    // Limpar os campos após a submissão
    setTutor("");
    setCelular("");
    setEmail("");
    setDescricaoPet("");
    setLocalizacaoPet("");
    setFotoPet(null);
    setConfirm(false);
    setEspecie("Cachorro");
    setSexo("Macho");
    setPorte("Pequeno");
    setId("");
    setCidade("");
    setEstado("");
    setDataPublicacao(new Date().toLocaleDateString());
    setVisualizacoes(Math.floor(Math.random() * 1000));
    setNomeAnimal("");
  };

  const handleConfirm = () => {
    setConfirm(true);
  };

  const handleFotoChange = (e) => {
    const fotoSelecionada = e.target.files[0];
    setFotoPet(fotoSelecionada);
  };

  return (
    <section
      className="form-container-Doe"
      style={{ marginTop: "20rem", display: "flex", width: "100%", justifyContent: "center" }}
    >
      <div className="formDoe">
        <form className="form" onSubmit={handleSubmit}>
          {/* Adicione os campos de ID, cidade, estado e outros aqui */}
          <input type="hidden" value={id} onChange={(e) => setId(e.target.value)} />
          <input type="hidden" value={cidade} onChange={(e) => setCidade(e.target.value)} />
          <input type="hidden" value={estado} onChange={(e) => setEstado(e.target.value)} />
          <input type="hidden" value={dataPublicacao} onChange={(e) => setDataPublicacao(e.target.value)} />
          <input type="hidden" value={visualizacoes} onChange={(e) => setVisualizacoes(e.target.value)} />

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

          {/* Seleção de espécie */}
          <div className="form-group">
            <label htmlFor="especie">Espécie:</label>
            <select id="especie" value={especie} onChange={(e) => setEspecie(e.target.value)}>
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
            </select>
          </div>

          {/* Seleção de sexo */}
          <div className="form-group">
            <label htmlFor="sexo">Sexo:</label>
            <select id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
              <option value="Macho">Macho</option>
              <option value="Fêmea">Fêmea</option>
            </select>
          </div>

          {/* Seleção de porte */}
          <div className="form-group">
            <label htmlFor="porte">Porte:</label>
            <select id="porte" value={porte} onChange={(e) => setPorte(e.target.value)}>
              <option value="Pequeno">Pequeno</option>
              <option value="Médio">Médio</option>
              <option value="Grande">Grande</option>
            </select>
          </div>

          {/* Botão para selecionar a foto do pet */}
          <div className="form-group imgPet" onClick={handleConfirm}>
            <input
              type="file"
              id="fotoPet"
              accept="image/*" // Aceita apenas arquivos de imagem
              onChange={handleFotoChange}
              required
              style={{ display: "none" }} // Esconde o campo de seleção de arquivo
            />
            <button
              className="btnImgPet"
              type="button"
              onClick={() => document.getElementById("fotoPet").click()}
            >
              Escolher foto do pet
            </button>
          </div>

          {/* Exibição da foto selecionada */}
          {fotoPet && (
            <div
              className="form-group"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <img
                src={URL.createObjectURL(fotoPet)}
                alt="Foto do pet"
                style={{ maxWidth: "100%", maxHeight: "20rem" }}
              />
            </div>
          )}

          {/* Exibição das informações preenchidas */}
          {confirm && (
            <div
              className="form-group confirmData"
              style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: ".5rem" }}
            >
              <h2 style={{ marginBottom: "1rem" }}>Confirme os dados:</h2>
              <p>
                <strong style={{ fontWeight: "bold" }}>Tutor:</strong> {tutor}
              </p>
              <p>
                <strong style={{ fontWeight: "bold" }}>Celular:</strong> {celular}
              </p>
              <p>
                <strong style={{ fontWeight: "bold" }}>Email:</strong> {email}
              </p>
              <p>
                <strong style={{ fontWeight: "bold" }}>Descrição do Pet:</strong> {descricaoPet}
              </p>
              <p>
                <strong style={{ fontWeight: "bold" }}>Localização do Pet:</strong> {localizacaoPet}
              </p>
              <p>
                <strong style={{ fontWeight: "bold" }}>Nome do Animal:</strong> {nomeAnimal}
              </p>
              <p>
                <strong style={{ fontWeight: "bold" }}>Espécie:</strong> {especie}
              </p>
              <p>
                <strong style={{ fontWeight: "bold" }}>Sexo:</strong> {sexo}
              </p>
              <p>
                <strong style={{ fontWeight: "bold" }}>Porte:</strong> {porte}
              </p>
            </div>
          )}

          <div className="form-group btn-group">
            <button type="submit" className="btnConcluir">
              Concluir
            </button>
            <button type="button" className="btnCancelar">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
