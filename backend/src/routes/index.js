import express from "express";
import usuariosRoutes from './usuariosRoutes.js';
import empresasRoutes from "./empresasRoutes.js";

const routes = (app) => {
    // Define a rota raiz
    app.get("/", (req, res) => res.status(200).send("Inicializado"));

    // Usa middleware para processar JSON
    app.use(express.json());

    // Usa as rotas de usuários e empresas
    app.use("/", usuariosRoutes, empresasRoutes); // prefixo para rotas de usuários
};

export default routes;
