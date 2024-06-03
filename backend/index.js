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
  connectTimeout: 60000,
  acquireTimeout: 60000,
  timeout: 60000,
});

app.use(express.json());
app.use(cors());
app.use(express.json({ limit: "50mb" }));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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
  const dataPublicacao = new Date().toISOString().slice(0, 10);
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

app.get("/pets/:id", (req, res) => {
  const petId = req.params.id;
  const query = "SELECT * FROM pets WHERE id = ?";

  db.query(query, [petId], (err, result) => {
    if (err) {
      console.error("Erro ao buscar pet no banco de dados:", err);
      return res.status(500).send("Erro interno ao processar a requisição");
    }

    if (result.length === 0) {
      return res.status(404).json({ error: "Pet não encontrado" });
    }

    const pet = result[0];
    const petWithBase64Image = {
      ...pet,
      imagemPet: pet.imagemPet ? pet.imagemPet.toString("base64") : null,
    };

    res.status(200).json(petWithBase64Image);
  });
});

app.get("/pets", (req, res) => {
  const query = "SELECT * FROM pets";

  db.query(query, (err, result) => {
    if (err) {
      console.error("Erro ao buscar pets no banco de dados:", err);
      return res.status(500).send("Erro interno ao processar a requisição");
    }

    const pets = result.map((pet) => ({
      ...pet,
      imagemPet: pet.imagemPet ? pet.imagemPet.toString("base64") : null,
    }));

    res.status(200).json(pets);
  });
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
        // Obter o ID do usuário inserido
        const userId = response.insertId;
        // Enviar o ID do usuário na resposta
        res
          .status(200)
          .send({ message: "Usuário cadastrado com sucesso", userId });
      }
    }
  );
});

app.put("/userdata/:id", (req, res) => {
  const userId = req.params.id;
  const { nome, email, telefone, cidade, estado } = req.body;

  const query = `
    UPDATE usuarios
    SET nome = ?, email = ?, telefone = ?, cidade = ?, estado = ?
    WHERE id = ?
  `;

  db.query(
    query,
    [nome, email, telefone, cidade, estado, userId],
    (err, result) => {
      if (err) {
        console.error("Erro ao atualizar dados do usuário:", err);
        return res
          .status(500)
          .json({ error: "Erro interno ao processar a requisição" });
      }
      res.status(200).send("Dados do usuário atualizados com sucesso");
    }
  );
});

// Parte de app.put em server.js
app.put("/userdata/:id/password", (req, res) => {
  const userId = req.params.id;
  const { senha } = req.body;

  // Execute a consulta para atualizar a senha do usuário
  const query = `
    UPDATE usuarios
    SET senha = ?
    WHERE id = ?
  `;

  db.query(query, [senha, userId], (err, result) => {
    if (err) {
      console.error("Erro ao atualizar senha do usuário:", err);
      return res
        .status(500)
        .json({ error: "Erro interno ao processar a requisição" });
    }
    res.status(200).send("Senha do usuário atualizada com sucesso");
  });
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
