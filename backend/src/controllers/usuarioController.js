import usuarios from "../models/usuarios.js";
import empresas from "../models/empresas.js";

class usuariosController {

    //Requisição de login do usuário
    static async requisicaoLogin (req, res) {
    try {
        // Recebendo email e senha via corpo da requisição (POST)
        const { email, senha } = req.body;

        // Verificando se o usuário existe no banco
        const user = await usuarios.findOne({ email, senha });

        if (user) {
            //Retorna os dados da conta
            return res.status(200).json(user);
        } else {
            //Se os dados forem errados retorna isso
            return res.status(401).json({ message: 'Email ou senha inválidos.' });
        }
    } catch (error) {
        console.error("Erro no login:", error);
        return res.status(500).json({ message: 'Erro interno no servidor.' });
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

    // Requisição de registro de usuário
    static async requisicaoRegistro (req, res) {
        try {
            const { nome, sobrenome, email, senha } = req.body;

            // Verifica se o email já está em uso por um usuário ou empresa
            const userExists = await usuarios.findOne({ email });
            const companyExists = await empresas.findOne({ email });

            if (userExists || companyExists) {
                return res.status(409).json({ message: 'Email já está em uso.' });
            }

            // Cria o novo usuário
            const novoUsuario = new usuarios({
                nome,
                sobrenome: sobrenome,
                email,
                senha: senha,  // Armazena a senha em texto puro 
            });

            // Salva o usuário no banco de dados
            await novoUsuario.save();

            // Responde com sucesso
            return res.status(201).json({ message: 'Usuário registrado com sucesso.' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    // Requisição para deletar um usuário
    static async requisicaoDeletar(req, res) {
    try {
        const { email, senha } = req.body;

        // Verificar se o usuário existe no banco
        const usuario = await usuarios.findOne({ email, senha });

        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado ou senha inválida.' });
        }

        // Deletar o usuário encontrado
        await usuarios.deleteOne({ email });

        return res.status(200).json({ message: 'Usuário removido com sucesso.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
    }
};

export default usuariosController;