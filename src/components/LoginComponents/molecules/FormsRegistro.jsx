import { ButtonPrimary } from "../atoms/Button";
import { InputPrimary } from "../atoms/Input";

import { faEnvelope, faLock, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import styles from './molecules.module.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const FormsRegistro = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigateFeed = useNavigate();

  const handleSubmitForm = () => {
    navigateFeed('/');
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form action="" onSubmit={handleSubmitForm}>
        <InputPrimary 
           leftIcon={<FontAwesomeIcon icon={faUser} className={styles.iconeInput}/>}
           name="nome"
           type="text"
           placeholder="Insira seu nome completo"
           spellcheck="false"
           required 
        />

        <InputPrimary
            leftIcon={<FontAwesomeIcon icon={faEnvelope} className={styles.iconeInput}/>}
            name="email"
            type="email"
            placeholder="Informe seu email"
            spellcheck="false"
            required
        />    

        <InputPrimary
            leftIcon={<FontAwesomeIcon icon={faLock} className={styles.iconeInput}/>}
            name="senha"
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
            spellcheck="false"
            rightIcon={<FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className={styles.iconeInputRight} onClick={handleShowPassword}/>}
            required
        />  
            <ButtonPrimary type="submit" title="Registrar"/>
    </form>
  )
}
