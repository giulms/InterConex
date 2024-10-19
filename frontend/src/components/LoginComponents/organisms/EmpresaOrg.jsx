import FormsEmpresa from '../molecules/FormsEmpresa'
import { EmpresaContainer, TextContainer } from './styles'

import { Link } from "react-router-dom";
import styles from './organisms.module.css';

const containerVariants = {
    initial: {
        opacity: 0,
        x: '-40vw'
    },

    animate: {
        opacity: 1,
        x: 0,

        transition: {
            type: "spring",
            damping: 15,
            stiffness: 150,
            duration: 1,
            ease: "easeInOut"
        }
    }
}

const EmpresaOrg = () => {
  return (
    <EmpresaContainer
        variants={containerVariants}
        initial="initial"
        animate="animate"
    >
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