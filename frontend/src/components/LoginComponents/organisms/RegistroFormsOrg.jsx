import { FormsRegistro } from "../molecules/FormsRegistro"
import LogoInterConex from '../../../assets/logoInterConexRedonda.png'

import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { RegistroFormsContainer, LFConteudo, TextContainer, RegistroRow } from "./styles"
import styles from './organisms.module.css';
import { Link } from "react-router-dom";

const containerVariants = {
  initial: {
    opacity: 0,
    x: '40vw'
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
  },

  exit:{
    opacity: 0,
    x: '40vw',
    
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150,
      duration: 1
    }
  }
}


// eslint-disable-next-line react/prop-types
export const RegistroForms = () => {
  return (
    <RegistroFormsContainer
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      mode="sync"
    >
        <img src={LogoInterConex} alt="Logo da InterConex" className={styles.logoInterRegistro}/>

      <LFConteudo>
        <TextContainer>
          <h1>Cadastre-se!</h1>
        </TextContainer>

        <FormsRegistro />
        <p>Ou registre-se com:</p>

        <RegistroRow>
          <a href="#" className={styles.iconesRow}><FontAwesomeIcon icon={faGoogle}/></a>
          <a href="#" className={styles.iconesRow}><FontAwesomeIcon icon={faFacebookF}/></a>
        </RegistroRow>

        <Link to="/registro-empresa" className={styles.empresasLink}>
              É uma empresa/start-up? Cadastre-se!
        </Link>
      </LFConteudo>


    </RegistroFormsContainer>
  )
}
