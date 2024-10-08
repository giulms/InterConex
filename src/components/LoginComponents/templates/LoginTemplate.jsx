import { LoginForms } from "../organisms/LoginFormsOrg"
import { LoginSide } from "../organisms/LoginSide";
import { RegistroForms } from "../organisms/RegistroFormsOrg"
import { RegistroSide } from "../organisms/RegistroSide";

import { TemplateContainer } from './styles';

// eslint-disable-next-line react/prop-types
export const LoginTemplate = ({ isLogin, handleSetIsLogin }) => {
  return (
    <TemplateContainer>
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
    </TemplateContainer>
  )
}