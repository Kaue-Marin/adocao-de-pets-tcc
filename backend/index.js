const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "samanta22",
  database: "cadastro_db",
});

app.use(express.json());
app.use(cors());

app.post("/pets", (req, res) => {
  const {
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
  } = req.body;

  const dataPublicacao = new Date().toISOString().slice(0, 10); // Formato 'YYYY-MM-DD'
  const visualizacoes = 0;

  const query = `
    INSERT INTO pets (tutor, celular, email, descricaoPet, localizacaoPet, especie, sexo, porte, cidade, estado, dataPublicacao, visualizacoes, nomeAnimal)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
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
      dataPublicacao,
      visualizacoes,
      nomeAnimal,
    ],
    (err, result) => {
      if (err) {
        console.error("Erro ao inserir pet no banco de dados:", err);
        res.status(500).send("Erro interno ao processar a requisição");
      } else {
        console.log("Pet cadastrado com sucesso:", result);
        res.status(200).send("Pet cadastrado com sucesso");
      }
    }
  );
});

app.post("/register", (req, res) => {
  const data = req.body;
  const {
    nome,
    email,
    senha,
    telefone,
    genero,
    data_nascimento,
    cidade,
    estado,
    endereco,
  } = data;

  db.query(
    "INSERT INTO usuarios (nome, email, senha, telefone, genero, data_nascimento, cidade, estado, endereco) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      nome,
      email,
      senha,
      telefone,
      genero,
      data_nascimento,
      cidade,
      estado,
      endereco,
    ],
    (err, response) => {
      if (err) {
        console.error("Erro ao inserir usuário no banco de dados:", err);
        res.status(500).send("Erro interno ao processar a requisição");
      } else {
        console.log("Usuário cadastrado com sucesso:", response);
        res.status(200).send("Usuário cadastrado com sucesso");
      }
    }
  );
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;

  db.query(
    "SELECT * FROM usuarios WHERE email = ? AND senha = ?",
    [email, senha],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      res.send(result);
    }
  );
});

app.get("/userdata/:id", (req, res) => {
  const userId = req.params.id; // Obtém o ID do usuário dos parâmetros da URL
  const query = "SELECT * FROM usuarios WHERE id = ?"; // Supondo que a tabela se chame 'usuarios'
  db.query(query, [userId], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao buscar dados do usuário" });
    } else {
      if (result.length > 0) {
        res.json(result[0]);
      } else {
        res.status(404).json({ error: "Usuário não encontrado" });
      }
    }
  });
});

// Rota para atualizar os dados do usuário
app.put("/userdata", (req, res) => {
  const userData = req.body;
  const userId = req.body.id; // Obtém o ID do usuário do corpo da requisição
  const query = "UPDATE usuarios SET ? WHERE id = ?"; // Supondo que você tenha uma coluna 'id' na tabela 'usuarios'
  db.query(query, [userData, userId], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao atualizar dados do usuário" });
    } else {
      res.json({ message: "Dados do usuário atualizados com sucesso" });
    }
  });
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
