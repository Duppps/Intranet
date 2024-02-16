import './App.css';
import './input.css';
import Home from './pages/home/home.js';
import ContatosAdm from './pages/contatos/contatosAdmin.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contatos/Administrativo' element={<ContatosAdm />} />
      </Routes>
    </Router>
  );
}

export default App;
