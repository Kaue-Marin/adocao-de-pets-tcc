import cidadesSp from "../../../assets/json/cidades";
import "./FilterForm.css";

export const FilterForm = ({
  especie,
  setEspecie,
  sexo,
  setSexo,
  porte,
  setPorte,
  estado,
  setEstado,
  cidade,
  setCidade,
  nome,
  setNome,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <form className="filterForm" onSubmit={handleSubmit}>
      <div className="boxForm">
        <div>
          <select
            name="especie"
            id="especie"
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
          >
            <option value="todos">todas as espécies</option>
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
            <option value="todos">todos os sexos</option>
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
            <option value="todos">Todos os portes</option>
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
            <option value="todos">Todos os estados</option>
            {/* Inserir opções de estados aqui */}
          </select>
        </div>
        <div>
          <select
            name="cidade"
            id="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          >
            <option value="todos">Todas as cidades</option>
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
    </form>
  );
};
