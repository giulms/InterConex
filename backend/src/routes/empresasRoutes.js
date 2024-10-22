import express from "express";
import empresasController from "../controllers/empresaController.js";

const routes = express.Router();

// Rota POST para verificar o email
routes.post("/check-email",empresasController.checkMail);
// Rota GET para fazer o login
routes.post("/login/empresa",empresasController.requisicaoLogin);
//Rota POST para cadastro de empresa
routes.post("/registro/empresa",empresasController.requisicaoRegistro);
//Rota DELETE para remover a empresa
routes.delete("/remove/empresa",empresasController.requisicaoDeletar);

export default routes;