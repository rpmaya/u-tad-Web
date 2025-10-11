import Paisaje from './Paisaje'
import './Estaciones.css'

function Estaciones() {
  return (
    <div className="estaciones">
      <h1>Galería de Estaciones</h1>
      <div className="galeria">
        <Paisaje
          nombre="Invierno"
          urlImagen="/invierno.jpg"
        />
        <Paisaje
          nombre="Primavera"
          urlImagen="/primavera.jpg"
        />
        <Paisaje
          nombre="Verano"
          urlImagen="/verano.jpg"
        />
        <Paisaje
          nombre="Otoño"
          urlImagen="/otono.jpg"
        />
      </div>
    </div>
  )
}

export default Estaciones
