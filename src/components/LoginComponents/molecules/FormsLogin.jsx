import { ButtonPrimary } from "../atoms/Button";
import { InputPrimary } from "../atoms/Input";

import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import styles from './molecules.module.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const FormsLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const navigateFeed = useNavigate();

  const handleSubmitForm = () => {
    navigateFeed('/');
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <form action="" onSubmit={handleSubmitForm}>
      <InputPrimary
        leftIcon={<FontAwesomeIcon icon={faEnvelope} className={styles.iconeInput}/>}
        name="email"
        type="email"
        title="Login"
        placeholder="Insira seu email"
        spellcheck="false"
        required
      />    

      <InputPrimary
        leftIcon={<FontAwesomeIcon icon={faLock} className={styles.iconeInput}/>}
        name="senha"
        type={showPassword ? "text" : "password"}
        title="Senha"
        placeholder="Digite sua senha"
        spellcheck="false"
        required
        rightIcon={<FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className={styles.iconeInputRight} onClick={handleShowPassword} />}
      />  
        <ButtonPrimary type="submit" title="Entrar"/>
    </form>
  )
}
