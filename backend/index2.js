const express = require("express");
const mysql = require("mysql");
const multer = require("multer");
const cors = require("cors");

const app = express();
const port = 3001;

// Configuração do MySQL
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "samanta22",
  database: "image_db",
});

app.use(cors());

// Configuração do Multer para upload de arquivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Endpoint para upload de imagens
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("Nenhuma imagem foi carregada.");
  }

  const name = req.file.originalname;
  const data = req.file.buffer;
  const mimeType = req.file.mimetype;

  const query = "INSERT INTO images (name, data, mime_type) VALUES (?, ?, ?)";
  db.query(query, [name, data, mimeType], (err, result) => {
    if (err) {
      console.error("Erro ao salvar imagem no banco de dados:", err);
      return res.status(500).send("Erro interno ao processar a requisição");
    }
    res.status(200).send("Imagem carregada com sucesso");
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
