# Curso Completo de React y Next.js

---

## Unidad 1: Introducción a ReactJS

### ¿Qué es React?

React es una **biblioteca de JavaScript** para crear interfaces de usuario interactivas. Se basa en el concepto de componentes, que son unidades de código reutilizables que encapsulan la lógica y la presentación de una parte de la interfaz de usuario.

### Características Principales

**Ventajas:**
- Uso de **JSX** - sintaxis familiar que mezcla HTML y JavaScript
- No existe separación entre la lógica y la vista
- **Open-source** mantenida por Facebook
- Patrón **One-way Binding** que aporta estabilidad
- Componentes fácilmente extraíbles y reutilizables
- Herramientas para desarrollo multiplataforma (React Native)
- Herramientas para manejo de SEO
- Gran documentación y comunidad

**Consideraciones:**
- Necesita librerías externas para routing y peticiones HTTP
- Tamaño considerable de la librería

### Conceptos Fundamentales

#### One-way Data Binding
El flujo de información es **unidireccional**. Los datos viajan de padres a hijos, pero no al revés. Las propiedades recibidas en componentes hijo son de **solo lectura**.

#### Componentes
Las aplicaciones se dividen en unidades independientes llamadas **Componentes**:

- **Componentes Contenedor**: Se centran en cómo funcionan las cosas, mantienen el estado y lo pasan a componentes hijo
- **Componentes Presentacionales**: Se centran en cómo se ven las cosas, reciben datos por props

### JSX (JavaScript XML)

JSX permite escribir HTML dentro de JavaScript:

```jsx
const elemento = <h1>Hola Mundo</h1>;

// Con expresiones JavaScript
const nombre = "Juan";
const saludo = <h1>Hola {nombre}</h1>;

// Comentarios en JSX
<div>
  {/* Comentario dentro de JSX */}
  <img {...attrs} />
</div>
```

### Estructura de Proyecto React

**Con JSX:**
```
my-app/
├── node_modules/
├── package.json
├── public/
│   └── index.html
└── src/
    ├── App.css
    ├── App.js
    ├── index.css
    └── index.js
```

**Con TSX (TypeScript):**
```
my-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Tarjeta.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── styles/
│   │   ├── App.css
│   │   └── Tarjeta.css
│   └── utils/
├── package.json
└── tsconfig.json
```

### Inicio del Proyecto

```bash
npm start
```

Esto inicia el servidor en `http://localhost:3000`

---

## Unidad 2: Componentes en ReactJS

### Tipos de Componentes

#### Componentes Funcionales

```jsx
const Texto = ({ children }) => {
  return <p>Este es el mensaje: {children}</p>
}

export default Texto;
```

#### Componentes de Clase

```jsx
import React from 'react';

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: 'Título de la card',
      texto: 'Texto de la card'
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.titulo}</h2>
        <p>{this.state.texto}</p>
      </div>
    );
  }
}
```

### Props (Propiedades)

Las props permiten pasar datos de componentes padres a hijos:

```jsx
// Componente hijo
const Tarjeta = ({ nombre, cargo, email, telefono }) => {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p>{cargo}</p>
      <p>{email}</p>
      <p>{telefono}</p>
    </div>
  );
}

// Uso desde el padre
<Tarjeta 
  nombre="Juan Pérez" 
  cargo="Desarrollador" 
  email="juan@email.com" 
  telefono="123456789" 
/>
```

### State en Componentes de Clase

```jsx
class Cronometro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: this.props.inicio
    };
  }

  render() {
    return <div>{this.state.contador}</div>;
  }
}
```

### useState Hook

El hook `useState` permite manejar estado en componentes funcionales:

```jsx
import { useState } from "react";

const Animales = () => {
  const [animalsState, setAnimalsState] = useState([
    { nombre: 'Bobby', tipo: 'perro', edad: 12 },
    { nombre: 'Flipper', tipo: 'pajaro', edad: 5 },
    { nombre: 'Gary', tipo: 'gato', edad: 16 }
  ]);
  
  const [mensaje, setMensaje] = useState('Este es el mensaje');

  return (
    <div>
      <h1>{animalsState[0].nombre}</h1>
      <h2>{mensaje}</h2>
    </div>
  );
}
```

### Manejo de Eventos

React maneja eventos de forma eficiente siguiendo las librerías nativas de JavaScript:

```jsx
const Formulario = () => {
  const [texto, setTexto] = useState('');

  const handleChange = (e) => {
    setTexto(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviado:', texto);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={texto}
        onChange={handleChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### Comunicación Hijo-Padre

```jsx
// Componente Padre
function App() {
  const [tareas, setTareas] = useState([]);

  const handleTareaEnviada = (tarea) => {
    setTareas([...tareas, tarea]);
  }

  return (
    <div>
      <Formulario tareaEnviada={handleTareaEnviada} />
      <Lista arrTareas={tareas} />
    </div>
  );
}

// Componente Hijo
const Formulario = ({ tareaEnviada }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = { texto: '...', prioridad: 'alta' };
    tareaEnviada(nuevaTarea); // Llama a la función del padre
  }
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```

### Ciclo de Vida de Componentes

#### Fases del Ciclo de Vida (Componentes de Clase)

**1. Mounting (Montaje)**
- `constructor()`: Inicialización
- `getDerivedStateFromProps()`: Sincronización de estado
- `render()`: Generación del JSX
- `componentDidMount()`: Después de insertar en el DOM

**2. Updating (Actualización)**
- `getDerivedStateFromProps()`
- `shouldComponentUpdate()`: Decide si re-renderizar
- `render()`
- `getSnapshotBeforeUpdate()`: Antes de actualizar el DOM
- `componentDidUpdate()`: Después de actualizar

**3. Unmounting (Desmontaje)**
- `componentWillUnmount()`: Limpieza antes de destruir

```jsx
class CicloVida extends Component {
  constructor(props) {
    super(props);
    this.state = { mensaje: 'Mensaje inicial' }
    console.log('[CicloVida] constructor');
  }

  componentDidMount() {
    console.log('[CicloVida] componentDidMount');
    // Llamadas a APIs externas
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[CicloVida] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[CicloVida] componentWillUnmount');
    // Limpieza de recursos
  }

  render() {
    return <div>{this.state.mensaje}</div>;
  }
}
```

---

## Unidad 3: Manejo de Estilos

### Métodos para Aplicar Estilos

#### 1. Estilos en Línea

```jsx
const Componente = () => {
  const estilos = {
    color: 'blue',
    fontSize: '20px',
    backgroundColor: 'lightgray'
  };

  return <div style={estilos}>Texto con estilos</div>;
}
```

#### 2. Archivos CSS Externos

```jsx
import './App.css';

const App = () => {
  return <div className="contenedor">Contenido</div>;
}
```

#### 3. CSS Modules

```jsx
import styles from './Tarjeta.module.css';

const Tarjeta = () => {
  return <div className={styles.tarjeta}>Contenido</div>;
}
```

#### 4. Styled Components

```jsx
import styled from 'styled-components';

const Boton = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  
  &:hover {
    opacity: 0.8;
  }
`;

const App = () => {
  return (
    <>
      <Boton primary>Primario</Boton>
      <Boton>Secundario</Boton>
    </>
  );
}
```

### Estilos Condicionales

#### Con Operador Ternario

```jsx
const CondicionalTernario = () => {
  const [mostrar, setMostrar] = useState(true);

  const handleClick = () => {
    setMostrar(!mostrar);
  }

  return (
    <div>
      <button onClick={handleClick}>Mostrar/Ocultar</button>
      <h2>Título</h2>
      {mostrar ? <p>Contenido de la página</p> : null}
    </div>
  );
}
```

#### Con Variables

```jsx
const CondicionalVariables = () => {
  const [mostrar, setMostrar] = useState(true);
  
  let contenido = null;
  if (mostrar) {
    contenido = <div><p>Contenido</p></div>;
  }

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        Mostrar/Ocultar
      </button>
      <p>Título</p>
      {contenido}
    </div>
  );
}
```

### Clases Dinámicas

```jsx
const Boton = ({ activo }) => {
  const clases = activo ? 'boton boton-activo' : 'boton';
  
  return <button className={clases}>Click</button>;
}
```

### Renderizado de Listas

```jsx
const Lista = ({ arrTareas }) => {
  return (
    <ul>
      {arrTareas.map((tarea, index) => (
        <li key={index}>
          {tarea.texto} - {tarea.prioridad}
        </li>
      ))}
    </ul>
  );
}
```

**Importante**: Siempre usar la prop `key` única para identificar elementos en listas.

---

## Unidad 4: Formularios y Peticiones HTTP

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

---

## Unidad 5: Framework Next.js

### ¿Qué es Next.js?

Next.js es un **framework de desarrollo web** basado en React que permite:
- **Renderización del lado del servidor (SSR)**
- **Generación de sitios estáticos (SSG)**
- Configuración mínima y automática
- Optimización de rendimiento y SEO
- Enrutamiento automático basado en archivos
- Optimización de imágenes
- API Routes integradas

### Crear un Proyecto Next.js

```bash
# Crear nueva aplicación
npx create-next-app my-app

# Navegar al directorio
cd my-app

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### Estructura de Directorios

```
my-app/
├── src/
│   └── app/
│       ├── page.jsx          # Página principal
│       ├── layout.jsx        # Layout global
│       ├── globals.css       # Estilos globales
│       ├── about/
│       │   └── page.jsx      # Ruta: /about
│       └── contact/
│           └── book/
│               └── page.js   # Ruta: /contact/book
├── public/                   # Archivos estáticos
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── next.config.js
└── package.json
```

### Páginas Básicas

**src/app/page.jsx** (Página principal)
```jsx
export default function HomePage() {
  return <h1>Hola Mundo</h1>
}
```

**src/app/about/page.jsx**
```jsx
export default function AboutPage() {
  return <h1>About</h1>
}
```

**src/app/contact/book/page.jsx**
```jsx
export default function Book() {
  return (
    <div>
      <h1>Reserva</h1>
    </div>
  );
}
```

### Layout Principal

**src/app/layout.jsx**
```jsx
import './globals.css'
import { Roboto } from 'next/font/google'
import Navbar from '@/components/Navbar'

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"]
})

export const metadata = {
  title: 'Bildy App',
  description: 'Gestiona tus albaranes',
  keywords: "tienda, online, ecommerce"
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
```

### Metadata y SEO

```jsx
export const metadata = {
  title: "Mi tienda",
  description: "Esta es la página principal de mi tienda",
  keywords: "tienda, online, ecommerce"
}
```

El metadata se renderiza en el `<head>` del HTML y mejora el SEO.

### Google Fonts

```jsx
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
})

// Uso en el body
<body className={roboto.className}>
  {children}
</body>
```

### Componentes en Next.js

**src/components/Navbar.jsx**
```jsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}
```

### Proyecto Práctico: Aplicación Bildy

**Objetivos del proyecto:**
- Implementar todos los conceptos de React
- Creación de componentes funcionales
- Manejo de Props y useState
- Gestión de eventos
- Comunicación hijo-padre
- Condicionales y renderizado de listas
- Aplicación de estilos (CSS Modules y Styled Components)
- Integración de librerías (Formik o React Hook Form)
- Peticiones HTTP a un API real (axios o fetch)

**Endpoints de ejemplo:**
- GET `/api/deliverynote` - Listar albaranes
- POST `/api/deliverynote` - Crear albarán
- GET `/api/deliverynote/{id}` - Detalle de albarán
- PUT `/api/deliverynote/{id}` - Actualizar albarán
- DELETE `/api/deliverynote/{id}` - Eliminar albarán
- GET `/api/deliverynote/pdf/{id}` - Descargar PDF

---

## Recursos Adicionales

### Documentación Oficial
- [Documentación de React](https://react.dev)
- [Tutoriales de React](https://reactjs.org/tutorial/)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code)

### Conceptos Clave a Dominar

**React Básico:**
- Componentes funcionales y de clase
- Props y State
- Hooks (useState, useEffect)
- Ciclo de vida
- Manejo de eventos

**Estilos:**
- CSS tradicional
- CSS Modules
- Styled Components
- Estilos inline
- Clases dinámicas

**Gestión de Datos:**
- Formularios controlados
- Peticiones HTTP (fetch/axios)
- Comunicación entre componentes
- Renderizado condicional
- Listas y keys

**Next.js:**
- Enrutamiento basado en archivos
- SSR y SSG
- Layouts y metadata
- Optimización de imágenes
- Google Fonts integration

---

## Buenas Prácticas

**Análisis Previo:**
- Realizar análisis de requerimientos antes de programar
- Seguir el patrón **Keep It Simple**
- Limitar el uso de librerías externas
- Usar herramientas conocidas por el equipo

**Componentes:**
- Crear componentes reutilizables y aislados
- Separar componentes contenedor y presentacionales
- Mantener componentes pequeños y enfocados
- Usar nombres descriptivos

**Estado:**
- Elevar el estado cuando sea necesario
- Mantener el estado lo más local posible
- No modificar el estado directamente
- Usar inmutabilidad

**Rendimiento:**
- Usar keys únicas en listas
- Evitar renderizados innecesarios
- Controlar dependencias en useEffect
- Optimizar peticiones HTTP

---

*Curso completo de React y Next.js - Versión actualizada 2025*