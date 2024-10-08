import { ButtonPrimary } from "../atoms/Button";
import { InputPrimary } from "../atoms/Input";

import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import styles from './molecules.module.css'

// eslint-disable-next-line react/prop-types
export const FormsRegistro = ({ handleSetIsLogin }) => {
  return (
    <form action="">
        <InputPrimary 
           leftIcon={<FontAwesomeIcon icon={faUser} className={styles.iconeInput}/>}
           name="nome"
           type="text"
           title="Nome e Sobrenome"
           placeholder="Insira seu nome"
           required 
        />

        <InputPrimary
            leftIcon={<FontAwesomeIcon icon={faEnvelope} className={styles.iconeInput}/>}
            name="email"
            type="email"
            title="Login"
            placeholder="Informe seu email"
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
            <ButtonPrimary type="submit" title="Registrar" onClick={handleSetIsLogin}/>
    </form>
  )
}
