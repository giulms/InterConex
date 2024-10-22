import Header from '../../components/Header';
import LeftSideBar from '../../components/HomeComponents/LeftSidebar';
import MainContent from '../../components/HomeComponents/MainContent';
import RightSidebar from '../../components/HomeComponents/RightSidebar';
import styles from './styles.module.css'

const Home = () => {
  return (<>
    <Header/>
     <div className={styles.divGeral}>
    <LeftSideBar/>
    <MainContent/>
    <RightSidebar/>
    </div>
  </>);
}

export default Home;