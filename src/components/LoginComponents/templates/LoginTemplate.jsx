import { LoginForms } from "../organisms/LoginFormsOrg"
import { LoginSide } from "../organisms/LoginSide";
import { RegistroForms } from "../organisms/RegistroFormsOrg"
import { RegistroSide } from "../organisms/RegistroSide";

import { TemplateContainer, SlideContainer } from './styles';

// eslint-disable-next-line react/prop-types
export const LoginTemplate = ({ isLogin, handleSetIsLogin }) => {
  return (
    <TemplateContainer>
      <SlideContainer isLogin={isLogin}>
        {isLogin ?
            (<>
                <LoginSide handleSetIsLogin={handleSetIsLogin}/>
                <LoginForms/>
            </>)
            :
            (<>
                <RegistroForms/>
                <RegistroSide handleSetIsLogin={handleSetIsLogin}/>
            </>)
            
        }
      </SlideContainer>
    </TemplateContainer>
  )
}
