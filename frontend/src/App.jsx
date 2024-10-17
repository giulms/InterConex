import Home from './pages/Home';
import Login from './pages/Login';
import Pesquisa from './pages/Pesquisa';

import {
  Routes,
  Route,
} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/registro" element={<Login/>}></Route>
        <Route path="/pesquisa" element={<Pesquisa/>}></Route>
      </Routes>
    </>
  )
}

export default App
