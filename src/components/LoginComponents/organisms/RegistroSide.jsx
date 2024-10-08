import { RegistroSideContainer } from './styles';
import ImgSide from '../../../assets/innovation-amico.svg'

import { ButtonSecondary } from "../atoms/Button";

// eslint-disable-next-line react/prop-types
export const RegistroSide = ({ handleSetIsLogin }) => {
  return (
    <RegistroSideContainer>
        <h1>Já nos conhece?</h1>
        <ButtonSecondary title="Faça Login!" onClick={handleSetIsLogin}/>
        <img src={ImgSide} alt="SVG da ilustração"/>
    </RegistroSideContainer>
  )
}
