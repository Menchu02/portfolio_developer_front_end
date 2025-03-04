import React, { useState, useEffect } from 'react';

export default function Saludo({ nombre }) {
  const [visible, setVisible] = useState(true);
  const [cont, setCont] = useState(0);
  const [mensaje, setMensaje] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log('error', error));
  }, []);
  // Función para eliminar un usuario
  const eliminarUsuario = (id) => {
    setUser(user.filter((user) => user.id !== id));
  };

  let sumar = () => {
    setCont(cont + 1);
  };

  let restar = () => {
    setCont(cont - 1);
  };

  let adeu = () => {
    setMensaje(!mensaje);
  };
  // Función para cambiar el estado
  const toggleMensaje = () => {
    setVisible(!visible); // Alterna entre true y false
  };
  return (
    <div>
      <h1>hOLA {nombre}</h1>
      {/* Si visible es true, se muestra el mensaje */}
      {visible && <p>¡Hola! Este es un mensaje condicional.</p>}

      {/* Botón para mostrar/ocultar mensaje */}
      <button onClick={toggleMensaje}>
        {visible ? 'Ocultar mensaje' : 'Mostrar mensaje'}
      </button>
      <div>
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
          <li key={item.id}>
            <button onClick={() => eliminarUsuario(item.id)}>eliminar</button>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
