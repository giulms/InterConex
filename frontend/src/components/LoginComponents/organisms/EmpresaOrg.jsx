import FormsEmpresa from '../molecules/FormsEmpresa'
import { EmpresaContainer, TextContainer } from './styles'

import { Link } from "react-router-dom";
import styles from './organisms.module.css';

const EmpresaOrg = () => {
  return (
    <EmpresaContainer>
        <TextContainer>
            <h1>Registre sua Empresa/Startup</h1>
            <h3>Conecte-se com usuários que podem te ajudar a crescer seu negócio!</h3>
        </TextContainer>

        <FormsEmpresa/>

        <Link to="/registro" className={styles.empresasLink}>
            Não possui empresa/startup? Cadastre-se!
        </Link>
    </EmpresaContainer>
    )
}

export default EmpresaOrg