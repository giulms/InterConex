import empresas from "../models/empresas.js";
import usuarios from "../models/usuarios.js";

class empresasController {

    //Requisição de login da empresa
    static async requisicaoLogin (req,res){
        const { email, senha } = req.query;

        const user = await usuarios.findOne({ email, password: senha });
        const company = await empresas.findOne({ email, password: senha });
      
        if (user) {
            return res.status(200).json(user);
        } else if (company) {
            return res.status(200).json(company);
        } else {
            return res.status(401).json({ message: 'Email ou senha inválidos.' });
        }
    }

    //Requisição de verificar o email
    static async checkMail (req,res){
        const { email } = req.body;

        const userExists = await usuarios.findOne({ email });
        const companyExists = await empresas.findOne({ email });
      
        if (userExists || companyExists) {
            return res.status(200).json({ exists: true });
        }
      
        return res.status(200).json({ exists: false });
    }

    // Requisição de registro de empresa
    static async requisicaoRegistro(req, res) {
        try {
            const { nomeEmpresa, email, senha, cnpj, tipo1, tipo2 } = req.body;

            // Verifica se o email ou CNPJ já está em uso por outra empresa ou usuário
            const emailExistente = await empresas.findOne({ email });
            const cnpjExistente = await empresas.findOne({ cnpj });

            if (emailExistente) {
                return res.status(409).json({ message: 'O Email já está em uso.' });
            }

            if (cnpjExistente) {
                return res.status(409).json({ message: 'CNPJ já está cadastrado.' });
            }

            // Cria e salva a nova empresa
            const novaEmpresa = new empresas({
                nome: nomeEmpresa,
                email,
                senha: senha,  // Armazenando a senha em texto puro
                cnpj,
                tipo1: tipo1,
                tipo2: tipo2,
            });

            await novaEmpresa.save();

            return res.status(201).json({ message: 'Empresa registrada com sucesso.' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    // Requisição para deletar uma empresa
    static async requisicaoDeletar(req, res) {
        try {
            const { email, senha } = req.body;
    
            // Verificar se a empresa existe no banco
            const usuario = await empresas.findOne({ email, senha });
    
            if (!usuario) {
                return res.status(404).json({ message: 'Empresa não encontrada ou senha inválida.' });
            }
    
            // Deleta a empresa encontrada
            await empresas.deleteOne({ email });
    
            return res.status(200).json({ message: 'Empresa removida com sucesso.' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
        }
};

export default empresasController;