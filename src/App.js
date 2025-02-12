import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navBar/Navbar';
import Header from './components/header/Header';
import Sobremi from './components/sobremi/Sobremi';
import Contacto from './components/contacto/Contacto';

function App() {
  return (
    <div className='App'>
      {/* <Navigation /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='about' element={<Sobremi />} />
        <Route path='contact' element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
