const express = require("express");
const mysql = require("mysql");
const multer = require("multer");
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

// Middleware para parsing de JSON
app.use(express.json({ limit: "50mb" })); // Aumentar o limite para suportar uploads de imagem

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Endpoint para cadastro de pets com imagem
app.post("/pets", upload.single("imagemPet"), (req, res) => {
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
  const imagemPet = req.file ? req.file.buffer : null;
  const imagemMimeType = req.file ? req.file.mimetype : null;

  const query = `
    INSERT INTO pets (tutor, celular, email, descricaoPet, localizacaoPet, especie, sexo, porte, cidade, estado, dataPublicacao, visualizacoes, nomeAnimal, imagemPet, imagemMimeType)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
      imagemPet,
      imagemMimeType,
    ],
    (err, result) => {
      if (err) {
        console.error("Erro ao inserir pet no banco de dados:", err);
        return res.status(500).send("Erro interno ao processar a requisição");
      }
      res.status(200).send("Pet cadastrado com sucesso");
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

// Endpoint para buscar todos os pets com suas imagens
app.get("/pets", (req, res) => {
  const query = "SELECT * FROM pets";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Erro ao buscar pets no banco de dados:", err);
      return res.status(500).send("Erro interno ao processar a requisição");
    }

    // Converter as imagens para base64
    const pets = results.map((pet) => ({
      ...pet,
      imagemPet: pet.imagemPet ? pet.imagemPet.toString("base64") : null,
    }));

    res.status(200).json(pets);
  });
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
