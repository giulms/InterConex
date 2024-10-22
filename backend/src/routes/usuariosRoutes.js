import express from "express";
import usuariosController from "../controllers/usuarioController.js";

const routes = express.Router();

// Rota POST para verificar o email
routes.post("/check-email",usuariosController.checkMail);
//Rota POST para login do cadastro
routes.post("/login/usuario",usuariosController.requisicaoLogin);
//Rota POST para cadastro de usuario
routes.post("/registro/usuario",usuariosController.requisicaoRegistro);
//Rota DELETE para remover o usuário
routes.delete("/remove/usuario",usuariosController.requisicaoDeletar);

export default routes;