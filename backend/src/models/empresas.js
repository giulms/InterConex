import mongoose from "mongoose";

const empresasSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome_empresa: { type: String, require: true},
    cnpj: { type: String, require: true },
    email: { type: String, require: true },
    senha: { type: String, require: true },
    tipo1: { type: String, require: true },
    tipo2: { type: String },
}, {versionKey: false});

const empresas = mongoose.model("empresas", empresasSchema); 

export default empresas;