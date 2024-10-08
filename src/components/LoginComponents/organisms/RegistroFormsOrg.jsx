import { FormsRegistro } from "../molecules/FormsRegistro"
import LogoInterConex from '../../../assets/logoInterConexRedonda.png'

import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { RegistroFormsContainer, LFConteudo, TextContainer, RegistroRow } from "./styles"
import styles from './organisms.module.css';

// eslint-disable-next-line react/prop-types
export const RegistroForms = ({ handleSetIsLogin }) => {
  return (
    <RegistroFormsContainer>
        <img src={LogoInterConex} alt="Logo da InterConex" className={styles.logoInterRegistro}/>

      <LFConteudo>
        <TextContainer>
          <h1>Cadastre-se!</h1>
        </TextContainer>

        <FormsRegistro handleSetIsLogin={handleSetIsLogin} />
        <p>Ou registre-se com:</p>

        <RegistroRow>
          <a href="#" className={styles.iconesRow}><FontAwesomeIcon icon={faGoogle}/></a>
          <a href="#" className={styles.iconesRow}><FontAwesomeIcon icon={faFacebookF}/></a>
        </RegistroRow>

      </LFConteudo>
    </RegistroFormsContainer>
  )
}
