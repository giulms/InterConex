import { ButtonPrimary } from "../atoms/Button";
import { InputPrimary } from "../atoms/Input";

import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import styles from './molecules.module.css'
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from '../../../services/api'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useForm } from "react-hook-form";

import { UserContext } from '../../../context/auth';

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  senha: yup.string().min(6, 'Senha muito curta, mínimo 6 caracteres').required('Senha obrigatória'),
});

export const FormsLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [enviando, setEnviando] = useState(false);
  
  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const { setUser } = useContext(UserContext);
  const navigateFeed = useNavigate();

  const onSubmit = async formData => {
    setEnviando(true);
    try{
      const { data } = await api.get(`/login?email=${formData.email}&password=${formData.senha}`);

      if(data.length === 1){
        setUser(data[0]);
        navigateFeed('/');
      } else {
        alert('Email ou senha inválido');
        setEnviando(false);
      }
    } catch {
      alert('Houve um erro, tente novamente!');
      setEnviando(false);
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <InputPrimary
        leftIcon={<FontAwesomeIcon icon={faEnvelope} className={styles.iconeInput}/>}
        name="email"
        errorMessage={errors?.email?.message}
        control={control}
        type="email"
        placeholder="Insira seu email"
        spellCheck="false"
      />    

      <InputPrimary
        leftIcon={<FontAwesomeIcon icon={faLock} className={styles.iconeInput}/>}
        name="senha"
        errorMessage={errors?.senha?.message}
        control={control}
        type={showPassword ? "text" : "password"}
        placeholder="Digite sua senha"
        spellCheck="false"
        rightIcon={
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className={styles.iconeInputRight}
            onClick={handleShowPassword}
          />
        }
      />  
        <ButtonPrimary type="submit" title={enviando ? 'Entrando...' : 'Entrar'} disabled={!isValid || enviando}/>
    </form>
  )
}
