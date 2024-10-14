import { FormsLogin } from "../molecules/FormsLogin"
import LogoInterConex from '../../../assets/logoInterConexRedonda.png'

import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { LoginFormsContainer, LFConteudo, TextContainer, LoginRow } from './styles';
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
  },

  exit:{
    opacity: 0,
    x: '-40vw',

    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150,
      duration: 1
    }
  }
}

// eslint-disable-next-line react/prop-types
export const LoginForms = () => {
  return (
    <LoginFormsContainer
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      mode="sync"
    >
        <img src={LogoInterConex} alt="Logo da InterConex" className={styles.logoInterLogin}/>

      <LFConteudo>
        <TextContainer>
          <h3>Boas-vindas novamente!</h3>
          <h1>Faça Login</h1>
        </TextContainer>

        <FormsLogin />
        <p>Ou faça login com:</p>

        <LoginRow>
          <a href="#" className={styles.iconesRow}><FontAwesomeIcon icon={faGoogle}/></a>
          <a href="#" className={styles.iconesRow}><FontAwesomeIcon icon={faFacebookF}/></a>
        </LoginRow>

      </LFConteudo>
    </LoginFormsContainer>
  )
}
