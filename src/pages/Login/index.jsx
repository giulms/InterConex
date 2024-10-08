import { useState } from "react";
import styles from './styles.module.css';

import { LoginTemplate } from "../../components/LoginComponents/templates/LoginTemplate";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  

  const handleSetIsLogin = () => {
    setIsLogin(!isLogin);
  }

    return (
      <main className={styles.main}>
        <LoginTemplate isLogin={isLogin} handleSetIsLogin={handleSetIsLogin} className={styles.loginTemplateStyle}/>
      </main>
    )
  }
  
  export default Login;