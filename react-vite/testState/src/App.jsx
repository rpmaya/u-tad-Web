import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => {
        // setCount con función: recibe el último valor actualizado (n)
        // n comienza en 0, suma 1 → resultado: 1
        setCount(n => n + 1);

        // setCount con valor directo: usa el valor de 'count' capturado al renderizar (0)
        // 0 + 5 → resultado: 5 (sobreescribe el setCount anterior)
        setCount(count + 5);

        // Resultado final: 5 (el segundo setCount reemplaza al primero)
        // Si se intercambian, el resultado sería 5+1 porque el segundo setCount usaría la función actualizadora
      }}> Incrementa el contador</button>
    </>
  )
}

export default App
