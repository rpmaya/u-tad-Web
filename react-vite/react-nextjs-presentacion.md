## Unidad: Formularios y Peticiones HTTP

### Formularios en React

#### Formularios Controlados

```jsx
const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, email });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
      />
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### useEffect Hook

El hook `useEffect` permite ejecutar código después del renderizado:

```jsx
import { useEffect, useState } from "react";

const Mensaje = () => {
  const [num, setNum] = useState(0);

  // Se ejecuta después de cada render
  useEffect(() => {
    console.log('useEffect ejecutado');
  });

  // Se ejecuta solo una vez (al montar)
  useEffect(() => {
    console.log('Componente montado');
  }, []);

  // Se ejecuta cuando cambia 'num'
  useEffect(() => {
    console.log('Número cambió:', num);
  }, [num]);

  return (
    <div>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>Aumentar</button>
    </div>
  );
};
```

### Peticiones HTTP

#### Con Axios

```jsx
import { useEffect, useState } from "react";
import axios from 'axios';

const PersonList = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://swapi.dev/api/people');
      setPeople(response.data.results);
    }
    
    fetchData();
  }, []);

  return (
    <ul>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ul>
  );
}
```

#### Con Fetch

```jsx
useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('https://swapi.dev/api/people');
      const data = await response.json();
      setPeople(data.results);
    } catch(error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();
}, []);
```

#### Petición con Dependencias

```jsx
const PersonDetail = ({ url }) => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      setPerson(response.data);
    }
    
    if (url) fetchData();
  }, [url]); // Se ejecuta cuando 'url' cambia

  if (!person) {
    return <h2>Ninguna persona seleccionada</h2>;
  }

  return (
    <div>
      <h3>{person.name}</h3>
    </div>
  );
}
```
