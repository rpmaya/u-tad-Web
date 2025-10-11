import ToDo from './ToDo'

// Componente que muestra la lista de tareas
// Recibe el array de tareas y las funciones toggle/delete como props
function ListToDo({ todos, onToggle, onDelete }) {
  return (
    <div className="list-todo">
      {/* Mapear el array de tareas para crear un componente ToDo por cada tarea */}
      {todos.map(todo => (
        <ToDo
          key={todo.id} // Key única para optimizar el renderizado de React
          todo={todo} // Objeto con los datos de la tarea
          onToggle={onToggle} // Función para marcar como completada
          onDelete={onDelete} // Función para eliminar
        />
      ))}
    </div>
  )
}

export default ListToDo
