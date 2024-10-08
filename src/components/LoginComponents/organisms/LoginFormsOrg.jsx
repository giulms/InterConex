import { FormsLogin } from "../molecules/FormsLogin"
import LogoInterConex from '../../../assets/logoInterConexRedonda.png'

import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { LoginFormsContainer, LFConteudo, TextContainer, LoginRow } from './styles';
import styles from './organisms.module.css';

// eslint-disable-next-line react/prop-types
export const LoginForms = ({ handleSetIsLogin }) => {
  return (
    <LoginFormsContainer>
        <img src={LogoInterConex} alt="Logo da InterConex" className={styles.logoInterLogin}/>

      <LFConteudo>
        <TextContainer>
          <h3>Boas-vindas novamente!</h3>
          <h1>Faça Login</h1>
        </TextContainer>

        <FormsLogin handleSetIsLogin={handleSetIsLogin} />
        <p>Ou faça login com:</p>

        <LoginRow>
          <a href="#" className={styles.iconesRow}><FontAwesomeIcon icon={faGoogle}/></a>
          <a href="#" className={styles.iconesRow}><FontAwesomeIcon icon={faFacebookF}/></a>
        </LoginRow>

      </LFConteudo>
    </LoginFormsContainer>
  )
}
