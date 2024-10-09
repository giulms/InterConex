import styles from './Header.module.css'
import LogoImage from '../../assets/logoInterConex.jpg'
import { faBars, faBoxArchive, faUser } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Header() {
    return (    
        <header className={styles.headerContainer}>

        <div className={styles.headerPosition}>
          <FontAwesomeIcon icon={faBars} className={styles.iconButton} /> 
          <img src= {LogoImage} alt="Logo do app" className={styles.logo}/>
        </div>

        <div className={styles.headerPosition}>
          <form action="">
            <input className={styles.pesquisa} placeholder='Pesquise aqui...' type="text" />
            
          </form>
        </div>

        <div className={styles.headerPosition}> 
          <FontAwesomeIcon icon={faBoxArchive} className={styles.iconButton}/>
          <FontAwesomeIcon icon={faUser} className={styles.iconButton} />
        </div>
      </header>
    )
}

export default Header;