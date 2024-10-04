import Home from './pages/Home';
import Login from './pages/Login';
import Pesquisa from './pages/Pesquisa';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={Home}></Route>
          <Route path="/login" element={Login}></Route>
          <Route path="/pesquisar" element={Pesquisa}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
