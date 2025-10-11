// Componente para cada tarea individual
// Recibe el objeto todo y las funciones para toggle y delete
function ToDo({ todo, onToggle, onDelete }) {
  return (
    // Div con clase dinámica: añade 'completed' si la tarea está completada
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {/* Texto de la tarea: al hacer click se marca como completada/no completada */}
      <span onClick={() => onToggle(todo.id)} className="todo-text">
        {todo.text}
      </span>
      {/* Botón para eliminar la tarea con símbolo ✕ */}
      <button onClick={() => onDelete(todo.id)} className="btn-delete">
        ✕
      </button>
    </div>
  )
}

export default ToDo
