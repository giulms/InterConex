import { ButtonPrimary } from "../atoms/Button";
import { InputPrimary } from "../atoms/Input";

import { faEnvelope, faLock, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import styles from './molecules.module.css'
import { useState } from "react";

import { api } from '../../../services/api'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  nome: yup.string().required('Nome obrigatório'),
  email: yup.string().email('Email inválido').required('Email obrigatório')
  .test('checarEmail', 'Email já está em uso', async (value) => {
    if (!value) return true;
    try{
      const response = await api.post('/check-email', { email: value })
      return !response.data.exists;
    } catch (error) {
      console.error("Erro ao verificar o email: ", error);
      return false;
    }
  }),
  senha: yup.string().min(6, 'Senha muito curta, mínimo 6 caracteres').required('Senha obrigatória'),
});

export const FormsRegistro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const { control, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit = async (data) => {
    setEnviando(true);
    try{
      await api.post('/usuarios', {
        name: data.nome,
        email: data.email,
        password: data.senha,
      });

      reset();
    } catch (error){
      console.error('Erro ao enviar dados: ', error)
    } finally {
      setEnviando(false);
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <InputPrimary 
           leftIcon={<FontAwesomeIcon icon={faUser} className={styles.iconeInput}/>}
           name="nome"
           control={control}
           errorMessage={errors?.nome?.message}
           type="text"
           placeholder="Insira seu nome completo"
           spellCheck="false"
        />

        <InputPrimary
            leftIcon={<FontAwesomeIcon icon={faEnvelope} className={styles.iconeInput}/>}
            name="email"
            control={control}
            errorMessage={errors?.email?.message}
            type="email"
            placeholder="Informe seu email"
            spellCheck="false"
        />    

        <InputPrimary
            leftIcon={<FontAwesomeIcon icon={faLock} className={styles.iconeInput}/>}
            name="senha"
            control={control}
            errorMessage={errors?.senha?.message}
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
            spellCheck="false"
            rightIcon={
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className={styles.iconeInputRight}
                onClick={handleShowPassword}
              />
          }
        />  
            <ButtonPrimary type="submit" title={enviando ? 'Cadastrando...' : 'Cadastrar'} disabled={!isValid || enviando}/>
    </form>
  )
}
