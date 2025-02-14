import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navBar/Navbar';
import Header from './components/header/Header';
import Sobremi from './components/sobremi/Sobremi';
import Contacto from './components/contacto/Contacto';
import Portfolio from './components/portfolio/Portfolio';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='about' element={<Sobremi />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contacto />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
