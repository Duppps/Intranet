import './App.css';
import './input.css';
import Home from './pages/home/home.js';
import {ContatosAdm, ContatosManutencao} from './pages/contatos/contatos.js';
import CriadorPost  from './pages/posts_creator.js';
import Login from './pages/login.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contatos/administrativo' element={<ContatosAdm />} />
        <Route path='/contatos/manutencao' element={<ContatosManutencao />} />
        <Route path='/cria' element={<CriadorPost />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
