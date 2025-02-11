import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navBar/Navbar';
import Header from './components/header/Header';
import Sobremi from './components/sobremi/Sobremi';
import Contacto from './components/contacto/Contacto';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Sobremi />
      <Contacto />
    </div>
  );
}

export default App;
