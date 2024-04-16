import { useState } from "react";
import "../styles/doe.css";

export const Doe = () => {
  const [tutor, setTutor] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [descricaoPet, setDescricaoPet] = useState("");
  const [localizacaoPet, setLocalizacaoPet] = useState("");
  const [fotoPet, setFotoPet] = useState(null); // Estado para armazenar a foto do pet
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o servidor ou fazer o que desejar com eles
    console.log({
      tutor,
      celular,
      email,
      descricaoPet,
      localizacaoPet,
      fotoPet // A foto do pet estará disponível aqui
    });

    // Limpar os campos após a submissão
    setTutor("");
    setCelular("");
    setEmail("");
    setDescricaoPet("");
    setLocalizacaoPet("");
    setFotoPet(null);
    setConfirm(false);
  };

  const handleConfirm = () => {
    setConfirm(true);
  };


  const handleFotoChange = (e) => {
    const fotoSelecionada = e.target.files[0];
    setFotoPet(fotoSelecionada);
  };

  return (
    <section className="form-container-Doe" style={{marginTop: '20rem', display: 'flex', width: '100%', justifyContent: 'center'}}>
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

         {/* Botão para selecionar a foto do pet */}
         <div className="form-group imgPet" onClick={handleConfirm}>
            <input
              type="file"
              id="fotoPet"
              accept="image/*" // Aceita apenas arquivos de imagem
              onChange={handleFotoChange}
              required
              style={{ display: 'none' }} // Esconde o campo de seleção de arquivo
            />
            <button
              className="btnImgPet"
              type="button"
              onClick={() => document.getElementById('fotoPet').click()}
            >
              Escolher foto do pet
            </button>
          </div>

          {/* Exibição da foto selecionada */}
          {fotoPet && (
            <div className="form-group" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img
                src={URL.createObjectURL(fotoPet)}
                alt="Foto do pet"
                style={{ maxWidth: '100%', maxHeight: '20rem' }}
              />
            </div>
          )}

          {/* Exibição das informações preenchidas */}
          {confirm && (
            <div className="form-group confirmData" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '.5rem'}}>
              <h2 style={{marginBottom: '1rem'}}>Confirme os dados:</h2>
              <p><strong style={{fontWeight: 'bold'}}>Tutor:</strong> {tutor}</p>
              <p><strong style={{fontWeight: 'bold'}}>Celular:</strong> {celular}</p>
              <p><strong style={{fontWeight: 'bold'}}>Email:</strong> {email}</p>
              <p><strong style={{fontWeight: 'bold'}}>Descrição do Pet:</strong> {descricaoPet}</p>
              <p><strong style={{fontWeight: 'bold'}}>Localização do Pet:</strong> {localizacaoPet}</p>
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
