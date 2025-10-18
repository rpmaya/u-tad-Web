# FRONTEND: Formularios y Peticiones HTTP

## Introducción

En esta unidad veremos la interacción del usuario a través de formularios, destacando bibliotecas populares como **Formik** y **React Hook Form**. Estas herramientas nos facilitan la validación de formularios, el manejo de estados y la administración de eventos. Para construir aplicaciones verdaderamente dinámicas, necesitamos la capacidad de interactuar con servicios externos, por eso aprenderemos cómo se gestionan las peticiones HTTP pudiendo hacer que nuestras aplicaciones se conecten con el mundo exterior.

---

## 1. Librerías para la Creación de Formularios

Los formularios son una de las herramientas más importantes cuando trabajamos con una aplicación de Front. Se trata de la única herramienta con la cual podemos recuperar información directa del usuario permitiéndole introducir los datos que necesite sin influir en dicha introducción.

### 1.1 Formik

Formik es una de las librerías más potentes para la creación de formularios en React.

#### Instalación

```bash
npm install formik
```

#### Uso Básico con `useFormik`

El hook `useFormik` es el encargado de gestionar los campos, las validaciones y el envío del formulario.

**Ejemplo básico:**

```jsx
import { useFormik } from 'formik';

const Contacto = () => {
  const formik = useFormik({
    initialValues: { name: '', surname: '', email: '' },
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <>
      <h3>Formulario de contacto</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className="form-group">
          <label>Apellidos</label>
          <input
            type="text"
            name="surname"
            id="surname"
            onChange={formik.handleChange}
            value={formik.values.surname}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Contacto;
```

**Propiedades importantes:**

- **`initialValues`**: objeto con los valores iniciales de todos los campos del formulario
- **`onSubmit`**: función que se ejecuta cuando el formulario es válido y se envía

#### Validaciones Personalizadas

Podemos crear una función de validación que retorna un objeto con los errores encontrados:

```jsx
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.surname) {
    errors.surname = 'Required';
  } else if (values.surname.length > 20) {
    errors.surname = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const Contacto = () => {
  const formik = useFormik({
    initialValues: { name: '', surname: '', email: '' },
    validate,
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <>
      <h3>Formulario de contacto</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && <div>{formik.errors.name}</div>}
        </div>
        <div className="form-group">
          <label>Apellidos</label>
          <input
            type="text"
            name="surname"
            id="surname"
            onChange={formik.handleChange}
            value={formik.values.surname}
          />
          {formik.errors.surname && <div>{formik.errors.surname}</div>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && <div>{formik.errors.email}</div>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Contacto;
```

**Importante:** Si el objeto `errors` devuelto tiene alguna clave, significa que hay errores y el método `onSubmit` no se ejecutará.

#### Evento `onBlur` para validaciones más precisas

Podemos usar `onBlur` para validar solo cuando el usuario abandona un campo:

```jsx
const Contacto = () => {
  const formik = useFormik({
    initialValues: { name: '', surname: '', email: '' },
    validate,
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <>
      <h3>Formulario de contacto</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        {/* Similar para surname y email */}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
```

El objeto `formik.touched` indica qué campos han sido tocados por el usuario.

#### Validación con Yup

**Yup** es una librería que facilita la creación de esquemas de validación:

```bash
npm install yup
```

**Ejemplo con Yup:**

```jsx
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contacto = () => {
  const formik = useFormik({
    initialValues: { name: '', surname: '', email: '' },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      surname: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <>
      <h3>Formulario de contacto</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label>Apellidos</label>
          <input
            type="text"
            name="surname"
            id="surname"
            {...formik.getFieldProps('surname')}
          />
          {formik.touched.surname && formik.errors.surname ? (
            <div>{formik.errors.surname}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Contacto;
```

**Nota:** El método `getFieldProps()` aplica automáticamente `value`, `onChange`, `onBlur` al campo.

📚 **Más información sobre Yup:** [https://github.com/jquense/yup](https://github.com/jquense/yup)

---

### 1.2 React Hook Form

React Hook Form es una librería moderna que permite generar formularios con menos código y con un alto rendimiento.

#### Instalación

```bash
npm install react-hook-form
```

#### Ejemplo básico

```jsx
import { useForm } from "react-hook-form";

const Registro = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input {...register('username')} />
      </div>
      <div>
        <label>País</label>
        <select {...register('country')}>
          <option value="es">España</option>
          <option value="it">Italia</option>
          <option value="pt">Portugal</option>
        </select>
      </div>
      <div>
        <label>Dirección</label>
        <input {...register('address')} />
      </div>
      <input type="submit" />
    </form>
  );
}

export default Registro;
```

**Elementos clave:**

- **`register`**: registra cada campo del formulario
- **`handleSubmit`**: gestiona el evento onSubmit del formulario

#### Validaciones con React Hook Form

Las validaciones se definen dentro del método `register`:

```jsx
import { useForm } from "react-hook-form";

const Registro = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input {...register('username', { required: true, maxLength: 20 })} />
      </div>
      <div>
        <label>País</label>
        <select {...register('country', { required: true })}>
          <option value="es">España</option>
          <option value="it">Italia</option>
          <option value="pt">Portugal</option>
        </select>
      </div>
      <div>
        <label>Dirección</label>
        <input {...register('address', { required: true })} />
      </div>
      <input type="submit" />
    </form>
  );
}

export default Registro;
```

El formulario no ejecuta el método `onSubmit` hasta que no se cumplan todas las validaciones.

#### Mostrar errores de validación

```jsx
import { useForm } from "react-hook-form";

const Registro = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input {...register('username', { required: true, maxLength: 20 })} />
        {errors.username?.type === 'required' && "Username es requerido"}
        {errors.username?.type === 'maxLength' && "Username debe tener menos de 20 caracteres"}
      </div>
      <div>
        <label>País</label>
        <select {...register('country', { required: true })}>
          <option value="es">España</option>
          <option value="it">Italia</option>
          <option value="pt">Portugal</option>
        </select>
        {errors.country?.type === 'required' && "Country es requerido"}
      </div>
      <div>
        <label>Dirección</label>
        <input {...register('address', { required: true })} />
        {errors.address?.type === 'required' && "Dirección es requerida"}
      </div>
      <input type="submit" />
    </form>
  );
}

export default Registro;
```

---

## 2. Hook useEffect

El hook `useEffect` permite ejecutar código después del renderizado del componente.

### Uso básico

```jsx
import { useEffect, useState } from "react";

const Mensaje = () => {
  const [num, setNum] = useState(0);

  // Se ejecuta después de cada render
  useEffect(() => {
    console.log('[Mensaje] useEffect');
  });

  return (
    <div>
      <p>Este es el mensaje</p>
      <button onClick={() => setNum(num + 1)}>Aumenta</button>
    </div>
  );
};

export default Mensaje;
```

### Ejecutar solo una vez (al montar el componente)

Pasamos un array vacío como segundo parámetro:

```jsx
useEffect(() => {
  console.log('[Mensaje] useEffect - solo una vez');
}, []);
```

### Ejecutar cuando cambia una dependencia

```jsx
const Mensaje = () => {
  const [num, setNum] = useState(0);
  const [mensaje, setMensaje] = useState('Mensaje inicial');

  useEffect(() => {
    console.log('[Mensaje] useEffect - mensaje cambió');
  }, [mensaje]);

  return (
    <div>
      <p>{mensaje}</p>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>Aumenta</button>
      <input type="text" onChange={(e) => setMensaje(e.target.value)} />
    </div>
  );
};
```

El hook solo se ejecuta cuando cambia la variable `mensaje`.

---

## 3. Peticiones HTTP

Es el momento de salir hacia el exterior. Necesitamos conectar nuestras aplicaciones con servicios externos mediante peticiones HTTP.

### 3.1 Peticiones con Axios

**Axios** es una librería muy potente para realizar peticiones HTTP.

#### Instalación

```bash
npm install axios
```

📌 **Nota:** Hoy en día está muy extendido el uso de `fetch` (integrado en el navegador) en vez de axios (requiere instalación). Veremos ejemplos de ambos.

📌 **APIs de prueba:**
- **SWAPI** (solo GET): [https://swapi.dev/](https://swapi.dev/)
- **JSONPlaceholder** (todos los métodos): [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

#### Petición GET con Axios

```jsx
import axios from 'axios';
import { useEffect, useState } from 'react';

const PeopleList = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(response => {
        setPeople(response.data.results);
      });
  }, []);

  let listPeople = null;
  if (people.length > 0) {
    listPeople = people.map(person => (
      <div className="person" key={person.name}>
        <h3>{person.name}</h3>
        <p>Año Nacimiento: {person.birth_year}</p>
        <p>Núm. Películas: {person.films.length}</p>
      </div>
    ));
  }

  return (
    <div className="people">
      {listPeople}
    </div>
  );
}

export default PeopleList;
```

#### Petición GET con Fetch

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

Ejemplo de componente que recibe una URL y realiza una petición cuando esta cambia:

```jsx
import { useEffect, useState } from "react";
import axios from 'axios';

export default function PersonDetail({ url }) {
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

**Con Fetch:**

```jsx
useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPerson(data);
    } catch(error) {
      console.error('Error fetching data:', error);
    }
  }

  if (url) fetchData();
}, [url]);
```

#### Petición POST con Axios

```jsx
import axios from "axios";

const DataPost = () => {
  const handleClick = () => {
    const body = {
      title: 'Prueba de título',
      body: 'Cuerpo del post',
      author: 'Antonio Robles'
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', body)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <button onClick={handleClick}>Pulsa para POST</button>
    </div>
  );
}

export default DataPost;
```

**Con Fetch:**

```jsx
const handleClick = () => {
  const body = {
    title: 'Prueba de título',
    body: 'Cuerpo del post',
    author: 'Antonio Robles'
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
};
```

#### Petición PUT (Update) con Axios

```jsx
import axios from "axios";

const DataUpdate = () => {
  const handleClick = async () => {
    const body = {
      title: 'Título nuevo',
      body: 'Nuevo contenido',
      author: 'Rodrigo Lafuente'
    };

    const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', body);
    console.log(response.data);
  };

  return (
    <div>
      <button onClick={handleClick}>Pulsa para UPDATE</button>
    </div>
  );
}

export default DataUpdate;
```

**Con Fetch:**

```jsx
const handleClick = async () => {
  const body = {
    title: 'Título nuevo',
    body: 'Nuevo contenido',
    author: 'Rodrigo Lafuente'
  };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error updating data:', error);
  }
};
```

#### Petición DELETE con Axios

```jsx
import axios from "axios";

const DataDelete = () => {
  const handleClick = () => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <button onClick={handleClick}>Pulsa para DELETE</button>
    </div>
  );
}

export default DataDelete;
```

**Con Fetch:**

```jsx
const DataDelete = () => {
  const handleClick = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Pulsa para DELETE</button>
    </div>
  );
}

export default DataDelete;
```

---

### 3.2 Gestión de Errores

Es fundamental informar al usuario sobre el estado de las peticiones HTTP.

**Ejemplo con manejo de errores:**

```jsx
import axios from 'axios';
import { useEffect, useState } from 'react';
import PersonDetail from './PersonDetail';

const PeopleList = () => {
  const [people, setPeople] = useState([]);
  const [urlSelected, setUrlSelected] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(response => {
        setPeople(response.data.results);
      })
      .catch(error => setError(true));
  }, []);

  let listPeople = null;

  if (error) {
    listPeople = <p style={{ textAlign: 'center' }}>Ha ocurrido un error</p>;
  }

  if (!error && people.length > 0) {
    listPeople = people.map(person => (
      <div className="person" key={person.name}>
        <h3 onClick={() => setUrlSelected(person.url)}>{person.name}</h3>
        <p>Año Nacimiento: {person.birth_year}</p>
        <p>Núm. Películas: {person.films.length}</p>
      </div>
    ));
  }

  return (
    <div>
      <div className="people">
        {listPeople}
      </div>
      <PersonDetail url={urlSelected} />
    </div>
  );
}

export default PeopleList;
```

---

### 3.3 Interceptors de Axios

Los **interceptors** permiten interceptar peticiones o respuestas globalmente antes de que se procesen.

#### Definición en `index.js` o `main.jsx`

```jsx
import axios from 'axios';

// Interceptor de peticiones
axios.interceptors.request.use(
  request => {
    console.log('Request:', request);
    // Devolvemos la petición para no bloquearla
    return request;
  },
  error => {
    console.log('Request Error:', error);
    return Promise.reject(error);
  }
);

// Interceptor de respuestas
axios.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  error => {
    console.log('Response Error:', error);
    return Promise.reject(error);
  }
);
```

**Utilidad:** Podemos transformar datos, añadir tokens de autenticación, gestionar errores globalmente, etc.

---

## 4. Comparativa: Axios vs Fetch

| Característica | Axios | Fetch |
|---------------|-------|-------|
| **Instalación** | Requiere instalación (`npm install axios`) | Nativo del navegador |
| **Sintaxis** | Más concisa | Requiere más pasos (conversión a JSON) |
| **Manejo de errores** | Rechaza promesas en errores HTTP | Solo rechaza en errores de red |
| **Interceptores** | Sí | No (requiere implementación manual) |
| **Transformación automática de JSON** | Sí | No |
| **Compatibilidad con navegadores antiguos** | Mejor | Requiere polyfills |

---

## 5. Ejercicio Práctico: FitLife Gym 🏋️

### Descripción

Desarrollar un formulario de registro intuitivo y atractivo para que los nuevos miembros puedan unirse al gimnasio FitLife.

### Requisitos del Formulario

#### Componentes
- Crear componentes reutilizables para cada sección (datos personales, contacto, preferencias, etc.)
- Implementar la lógica de cada sección como componente independiente

#### Props y State
- Pasar datos entre componentes utilizando props
- Gestionar estado interno con `useState`

#### Manejo de Eventos
- Validar entrada del usuario en tiempo real
- Mostrar mensajes de error y éxito

#### Comunicación hijo-padre
- Enviar datos desde componente hijo al padre al completar el formulario

#### Condicionales y Listas
- Mostrar/ocultar elementos según opciones del usuario
- Mostrar lista de opciones de entrenamiento disponibles

#### Estilos
- Aplicar CSS a los componentes
- Usar clases CSS para diferentes estados (activo, inactivo, error)
- Implementar estilos dinámicos
- **Opcional:** Usar styled-components o CSS Modules

#### Peticiones HTTP
- Enviar datos del formulario al servidor (preparar la llamada aunque no haya servidor real)

#### Librerías
- Implementar **Formik** o **React Hook Form** para gestión de formularios

### Secciones del Formulario

1. **Datos personales:** nombre, correo electrónico, teléfono
2. **Información de contacto:** dirección, ciudad, código postal
3. **Preferencias de entrenamiento:** tipo de entrenamiento, objetivos, disponibilidad
4. **Datos de pago:** método de pago, información de tarjeta

### Recursos Adicionales

- Documentación de React: [https://es.reactjs.org/docs/](https://es.reactjs.org/docs/)
- Formik: [https://formik.org/](https://formik.org/)
- React Hook Form: [https://react-hook-form.com/](https://react-hook-form.com/)
- Yup: [https://github.com/jquense/yup](https://github.com/jquense/yup)

### Consejos

- Divide el formulario en secciones pequeñas y manejables
- Comienza con una versión simple y agrega funcionalidades gradualmente
- Prueba con diferentes casos de uso
- Pide feedback a compañeros o profesores

---

## 6. Cuestionario de Autoevaluación

### Pregunta 1
**¿Cuál es la función principal de `componentDidMount` y `componentDidUpdate` en el contexto de peticiones HTTP?**

a) Iniciar el proceso de solicitud al servidor
b) Actualizar el estado después de una solicitud
c) Realizar operaciones de limpieza después de montar o actualizar el componente
d) Ninguna de las anteriores

✅ **Respuesta correcta:** c)

---

### Pregunta 2
**¿Cuál describe mejor el propósito de un interceptor en Axios?**

a) Manejar errores de red en peticiones HTTP
b) Modificar globalmente las solicitudes o respuestas antes de que se envíen o procesen
c) Controlar la autenticación de usuarios en el servidor
d) Gestionar la presentación de datos en la UI

✅ **Respuesta correcta:** b)

---

### Pregunta 3
**¿Qué método de Axios se utiliza para enviar una solicitud HTTP tipo POST?**

a) `axios.post()`
b) `axios.get()`
c) `axios.request()`
d) `axios.send()`

✅ **Respuesta correcta:** a)

---

### Pregunta 4
**¿Cuál es la forma más común de manejar respuestas de peticiones HTTP en React?**

a) Usando la función `fetch()` de React
b) Actualizando directamente el estado con los datos recibidos
c) Usando el hook `useEffect()` para actualizar el estado
d) Usando callbacks dentro de `then()` y `catch()`

✅ **Respuesta correcta:** d)

---

### Pregunta 5
**¿Qué es CORS y cómo afecta a las peticiones HTTP en React?**

a) Es una técnica para compartir recursos entre diferentes dominios, y puede causar problemas con políticas restrictivas
b) Es una característica de React para compartir recursos entre componentes
c) Es un tipo de autenticación que requiere credenciales
d) Es un formato de datos para transmitir información

✅ **Respuesta correcta:** a)

---

### Pregunta 6
**¿Cuál describe mejor el propósito del método DELETE en HTTP?**

a) Actualiza los datos en el servidor
b) Recupera datos del servidor
c) Elimina datos en el servidor
d) Envía datos al servidor

✅ **Respuesta correcta:** c)

---

### Pregunta 7
**¿Cuál es la ventaja principal de usar axios sobre fetch?**

a) axios ofrece una sintaxis más simple
b) axios proporciona una gestión más avanzada de errores
c) fetch está obsoleto
d) fetch tiene mejor soporte para peticiones asíncronas

✅ **Respuesta correcta:** b)

---

### Pregunta 8
**¿Qué hook se utiliza comúnmente para manejar autenticación antes de enviar peticiones HTTP?**

a) `useEffect`
b) `useState`
c) `useContext`
d) `useReducer`

✅ **Respuesta correcta:** c)

---

### Pregunta 9
**¿Cuál es el propósito de `fetch()` en JavaScript?**

a) Enviar solicitudes a servidores remotos y recibir respuestas
b) Manipular datos en la base de datos local
c) Ejecutar operaciones matemáticas en el navegador
d) Ninguna de las anteriores

✅ **Respuesta correcta:** a)

---

### Pregunta 10
**¿Es válido este código para una petición UPDATE con Axios?**

```jsx
const [data, setData] = useState([]);

const handleUpdate = () => {
  axios.put(`/api/users/${id}`, {
    name: "Nuevo nombre",
    email: "nuevo@email.com",
  }).then((response) => {
    setData(response.data);
  });
};
```

a) Sí, es válido
b) No, falta el hook `useEffect`
c) No, falta el hook `useReducer`
d) No, falta el hook `useMemo`

✅ **Respuesta correcta:** a)

---

## 7. Para Saber Más

### Formik
- 📺 [Guía de Formik - Librería para Formularios en React](https://formik.org/docs/overview)

### React Hook Form
- 📺 [Tutorial Completo de React Hook Form](https://react-hook-form.com/get-started)

### Peticiones HTTP
- 📺 [Axios.js - Curso Práctico de Peticiones HTTP](https://axios-http.com/docs/intro)

---

## Resumen Final

En esta unidad hemos aprendido:

✅ Cómo crear formularios con **Formik** y **React Hook Form**
✅ Validaciones personalizadas y con **Yup**
✅ El hook **useEffect** y sus dependencias
✅ Realizar peticiones HTTP con **Axios** y **Fetch**
✅ Métodos GET, POST, PUT, DELETE
✅ Gestión de errores en peticiones HTTP
✅ Interceptores de Axios
✅ Buenas prácticas en formularios y peticiones

---

**¡Éxito en tu proyecto FitLife! 🏋️‍♀️💪**
