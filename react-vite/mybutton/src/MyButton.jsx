// Importamos React para crear el componente funcional
import React from 'react';

/**
 * Componente MyButton
 * @param {Object} props - Propiedades del componente
 * @param {string} props.nombre - Nombre del botón que se mostrará como texto
 * @param {string} props.mensaje - Mensaje que se mostrará en el alert al hacer click
 * @returns {JSX.Element} Un botón que muestra un alert con el mensaje al hacer click
 */
function MyButton({ nombre, mensaje }) {
  // Función manejadora del evento click
  // Cuando se hace click en el botón, muestra un alert con el mensaje recibido por props
  const handleClick = () => {
    alert(mensaje);
  };

  const handleClick2 = (message) => {
    alert(message)
  }

  return (
    // Botón que ejecuta handleClick al hacer click
    // El texto del botón es el valor de la prop "nombre"
    //<button onClick={() => handleClick2('hola')}>
    <button onClick={handleClick}> 
      {nombre}
    </button>
  );
}

// Exportamos el componente para poder usarlo en otros archivos
export default MyButton;
