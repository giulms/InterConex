import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

import { LoginTemplate } from "../../components/LoginComponents/templates/LoginTemplate";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const screen = params.get('screen');
    if (screen === 'registro') {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [location.search])

  const handleSetIsLogin = () => {
    const newScreen = isLogin ? 'registro' : 'login';
    navigate(`?screen=${newScreen}`);
    setIsLogin(!isLogin);
  }

    return (
      <main className={styles.main}>
        <LoginTemplate isLogin={isLogin} handleSetIsLogin={handleSetIsLogin} className={styles.loginTemplateStyle}/>
      </main>
    )
  }
  
  export default Login;