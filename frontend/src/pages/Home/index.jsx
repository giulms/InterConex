import Header from '../../components/Header';
import LeftSideBar from '../../components/HomeComponents/LeftSidebar';
import MainContent from '../../components/HomeComponents/MainContent';
import RightSidebar from '../../components/HomeComponents/RightSidebar';


const Home = () => {
  return (<>
    <Header/>
    <LeftSideBar/>
    <MainContent/>
    <RightSidebar/>
  </>);
}

export default Home;