import express from "express";
import sequelize from "./src/models/database.js"; // Importa a conexão com o banco
import router from "./src/routes/routes.js"; // Importa as rotas

const app = express();
app.use(express.json());

app.use("/api", router);

// Middleware para tratar erros de forma centralizada
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message });
});

(async () => {
  try {
    await sequelize.authenticate(); // Verifica a conexão com o banco
    console.log("Conectado ao banco com sucesso!");

    await sequelize.sync({ force: false }); // Sincroniza o banco
    console.log("Banco sincronizado!");

    app.listen(3000, () => {
      console.log("Servidor rodando em http://localhost:3000");
    });
  } catch (error) {
    console.error("Erro ao conectar com o banco:" + error);
  }
})();
