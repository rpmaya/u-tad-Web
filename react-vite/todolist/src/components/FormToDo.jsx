import { useState } from 'react'

// Componente del formulario para añadir tareas
// Recibe onAddTodo como prop desde App
function FormToDo({ onAddTodo }) {
  // Estado local para el valor del input
  const [inputValue, setInputValue] = useState('')

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault() // Prevenir el comportamiento por defecto del formulario
    // Validar que el input no esté vacío (después de quitar espacios)
    if (inputValue.trim() !== '') {
      onAddTodo(inputValue) // Llamar a la función del componente padre para añadir la tarea
      setInputValue('') // Limpiar el input después de añadir
    }
  }

  return (
    <form className="form-todo" onSubmit={handleSubmit}>
      {/* Input para escribir la tarea */}
      <input
        type="text"
        placeholder="Escriba una tarea"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Actualizar el estado con cada cambio
        className="input-todo"
      />
      {/* Botón para añadir la tarea */}
      <button type="submit" className="btn-add">
        Añadir Tarea
      </button>
    </form>
  )
}

export default FormToDo
