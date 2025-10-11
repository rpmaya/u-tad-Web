import './Paisaje.css'

function Paisaje({ nombre, urlImagen }) {
  return (
    <div className="paisaje">
      <h2>{nombre}</h2>
      <img src={urlImagen} alt={nombre} />
    </div>
  )
}

export default Paisaje
