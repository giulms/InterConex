import {  useNavigate, useLocation } from 'react-router-dom';
import styles from './styles.module.css';

import { LoginTemplate } from "../../components/LoginComponents/templates/LoginTemplate";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === '/login';

  const handleSetIsLogin = () => {
    const newScreen = isLogin ? '/registro' : '/login';
    navigate(newScreen);
  }

    return (
      <main className={styles.main}>
        <LoginTemplate isLogin={isLogin} handleSetIsLogin={handleSetIsLogin} className={styles.loginTemplateStyle}/>
      </main>
    )
  }
  
  export default Login;