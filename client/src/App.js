import './App.css';
import './input.css';
import Home from './pages/home/home.js';
import {ContatosAdm, ContatosManutencao} from './pages/contatos/contatos.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contatos/administrativo' element={<ContatosAdm />} />
        <Route path='/contatos/manutencao' element={<ContatosManutencao />} />
      </Routes>
    </Router>
  );
}

export default App;
