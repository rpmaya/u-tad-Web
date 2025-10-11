import MyButton from './MyButton'
import './App.css'

function App() {
  return (
    <div className="card">
      <h1>Mis Botones</h1>
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', alignItems: 'center' }}>
        <MyButton
          nombre="Saludar"
          mensaje="¡Hola! Bienvenido a la aplicación"
        />
        <MyButton
          nombre="Despedir"
          mensaje="¡Adiós! Hasta la próxima"
        />
        <MyButton
          nombre="Información"
          mensaje="Este es un ejemplo de componente MyButton con props"
        />
      </div>
    </div>
  )
}

export default App
