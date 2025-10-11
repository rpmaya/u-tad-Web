// Importamos React y el componente MyButton que creamos
import React from 'react';
import MyButton from './MyButton';
import './App.css';

/**
 * Componente principal App
 * Contiene tres instancias del componente MyButton, cada una con diferente nombre y mensaje
 * @returns {JSX.Element} Contenedor con 3 botones
 */
function App() {
  return (
    <div className="App">
      {/* Título de la aplicación */}
      <h1>Ejercicio MyButton</h1>

      <div className="card">
        {/* Primer botón: Saludo */}
        {/* Props: nombre="Saludar" y mensaje="¡Hola! Bienvenido a React" */}
        <MyButton
          nombre="Saludar"
          mensaje="¡Hola! Bienvenido a React"
        />

        {/* Segundo botón: Despedida */}
        {/* Props: nombre="Despedir" y mensaje="¡Adiós! Hasta pronto" */}
        <MyButton
          nombre="Despedir"
          mensaje="¡Adiós! Hasta pronto"
        />

        {/* Tercer botón: Información */}
        {/* Props: nombre="Info" y mensaje="Este es un componente personalizado" */}
        <MyButton
          nombre="Info"
          mensaje="Este es un componente personalizado"
        />
      </div>
    </div>
  );
}

// Exportamos el componente App como exportación por defecto
export default App;
