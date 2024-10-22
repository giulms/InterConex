// index.js
import "dotenv/config";
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import conectaBanco from './src/config/dbconnect.js';
import routes from "./src/routes/index.js";

// Obter o diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
routes(app);
const PORT = 3000;

// Middleware para servir arquivos estáticos da pasta frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Iniciar o servidor
app.listen(PORT, async () => {
  const conexao = await conectaBanco();

  conexao.on("error", (erro) => {
      console.error("erro de conexão ao banco de dados", erro);
  });

  conexao.once("open", () => {
      console.log("Conexão com o banco feita com sucesso!");
  });

  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


