import Typewriter from 'typewriter-effect';

export default function Header() {
  // const [cont, setCont] = useState(0);
  // const [mensaje, setMensaje] = useState(true);
  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((data) => setUser(data))
  //     .catch((error) => console.log('error', error));
  // });
  // let sumar = () => {
  //   setCont(cont + 1);
  // };

  // let restar = () => {
  //   setCont(cont - 1);
  // };

  // let adeu = () => {
  //   setMensaje(!mensaje);
  // };
  return (
    <div className='header-wraper'>
      <div className='main-info'>
        <h1 className='header-h1'>
          <Typewriter
            className='typerwriter'
            options={{
              strings: ['Bienvenidx a mi portfolio :) '],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </h1>
      </div>
      {/* <div>
        <p>Contador:{cont}</p>
        <button onClick={sumar}></button>
        <button onClick={restar}>+</button>
      </div>
      <div>
        <h1>{mensaje ? 'Hola bienvenido' : 'Hasta luego'}</h1>
        <button onClick={adeu}>Cambia</button>
      </div>
      <ul>
        {user.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
}
