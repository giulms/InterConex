import { LoginSideContainer } from './styles';
import ImgSide from '../../../assets/innovation-bro.svg'

import { ButtonSecondary } from "../atoms/Button";

// eslint-disable-next-line react/prop-types
export const LoginSide = ({ handleSetIsLogin }) => {
  return (
    <LoginSideContainer>
        <img src={ImgSide} alt="SVG da ilustração"/>
        <h1>Primeira vez?</h1>
        <ButtonSecondary title="Registre-se!" onClick={handleSetIsLogin}/>
    </LoginSideContainer>
  )
}
