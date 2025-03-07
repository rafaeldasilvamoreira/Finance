import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Etiquetas from './Etiquetas';
import Configuracao from './Configuracao';
import Home from './home';
import Login from './Login';






function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={<Menu />}>
          <Route path='/Home' element={<Home />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Etiquetas' element={<Etiquetas />} />
          <Route path='/Configuracao' element={<Configuracao />} />
        </Route>
        <Route path='*' element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
