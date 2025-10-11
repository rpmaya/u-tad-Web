// Importación del hook useState para manejar el estado
import { useState } from 'react'
import './App.css'
// Importación de componentes
import Logo from './components/Logo'
import FormToDo from './components/FormToDo'
import ListToDo from './components/ListToDo'

function App() {
  // Estado que almacena el array de tareas
  const [todos, setTodos] = useState([])

  // Función para añadir una nueva tarea
  const addTodo = (text) => {
    // Crear un objeto de tarea con id único, texto y estado no completado
    const newTodo = {
      id: Date.now(), // Usa timestamp como id único
      text: text,
      completed: false
    }
    // Añadir la nueva tarea al array existente
    setTodos([...todos, newTodo])
  }

  // Función para cambiar el estado completado/no completado de una tarea
  const toggleTodo = (id) => {
    // Mapear todas las tareas y cambiar el estado de la tarea con el id correspondiente
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Función para eliminar una tarea
  const deleteTodo = (id) => {
    // Filtrar el array eliminando la tarea con el id correspondiente
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="app">
      {/* Componente del logo U-tad */}
      <Logo />
      <div className="container">
        <h1>Mis Tareas</h1>
        {/* Formulario para añadir tareas, recibe la función addTodo */}
        <FormToDo onAddTodo={addTodo} />
        {/* Lista de tareas, recibe el array de tareas y las funciones para toggle y delete */}
        <ListToDo todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  )
}

export default App
