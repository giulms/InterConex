import { ButtonPrimary } from "../atoms/Button";
import { InputPrimary } from "../atoms/Input";

import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import styles from './molecules.module.css'

// eslint-disable-next-line react/prop-types
export const FormsLogin = ({ handleSetIsLogin }) => {
  return (
    <form action="">
      <InputPrimary
        leftIcon={<FontAwesomeIcon icon={faEnvelope} className={styles.iconeInput}/>}
        name="email"
        type="email"
        title="Login"
        placeholder="Insira seu email"
        required
      />    

      <InputPrimary
        leftIcon={<FontAwesomeIcon icon={faLock} className={styles.iconeInput}/>}
        name="senha"
        type="password"
        title="Senha"
        placeholder="Digite sua senha"
        required
      />  
        <ButtonPrimary type="submit" title="Entrar" onClick={handleSetIsLogin}/>
    </form>
  )
}
