import express from "express";
import sequelize from "./src/models/database.js"; // Importa a conexão com o banco
import router from "./src/routes/routes.js"; // Importa as rotas

const app = express();
app.use(express.json());

app.use("/api", router);

app.use((err, req, res, next) => {
  console.error(err);

  if (res.headersSent) {
    return next(err); // Se os headers já foram enviados, passa o erro para o próximo middleware
  }

  res.status(err.status || 500).json({
    message: err.message || "Erro interno no servidor",
    error: process.env.NODE_ENV === "development" ? err.stack : undefined, // Mostra o stack trace apenas no ambiente de desenvolvimento
  });
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
