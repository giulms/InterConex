import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, require: true },
    sobrenome: { type: String, require: true },
    email: { type: String, require: true },
    senha: { type: String, require: true },
}, {versionKey: false});

const usuarios = mongoose.model("usuarios", usuariosSchema);    

export default usuarios;