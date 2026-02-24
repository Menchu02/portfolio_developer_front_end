import Typewriter from 'typewriter-effect';
import wellcome_photo from '../../assets/bienvenida.png';

export default function Header() {
  return (
    <div
      className='header-wraper'
      style={{ backgroundImage: `url(${wellcome_photo})` }}
    >
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
