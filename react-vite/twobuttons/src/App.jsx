import { useState, useRef } from 'react'
import './App.css'

function App() {
  // ============================================================
  // SOLUCIÓN CON useRef: El contador NO causa re-renderizados
  // ============================================================
  // useRef crea una referencia mutable que persiste entre renderizados
  // A diferencia de useState, modificar .current NO causa re-renderizado
  // Es perfecto para contar clicks sin actualizar la UI automáticamente
  const contadorRef = useRef(0);

  // Estado solo para forzar re-renderizado cuando queremos mostrar el contador
  // Este es el "truco": usamos useState solo para controlar cuándo actualizar la UI
  const [, setRenderTrigger] = useState(0);

  // ============================================================
  // BOTÓN 1: Contar sin mostrar
  // ============================================================
  // Incrementa contadorRef.current directamente
  // NO causa re-renderizado, por lo que la UI no se actualiza
  // El valor se guarda en memoria y persiste entre renders
  const contarClick = () => {
    contadorRef.current++;
    console.log('Clicks contados:', contadorRef.current);
    // La UI NO se actualiza aquí porque no cambiamos ningún estado
  };

  // ============================================================
  // BOTÓN 2: Mostrar clicks
  // ============================================================
  // Fuerza un re-renderizado cambiando el estado
  // Al re-renderizarse, React lee contadorRef.current y lo muestra
  // El valor de contadorRef.current se mantiene intacto
  const mostrarClicks = () => {
    setRenderTrigger(prev => prev + 1); // Incrementa para forzar re-render
    console.log('Mostrando contador:', contadorRef.current);
  };

  // ============================================================
  // BOTÓN 3: Reset
  // ============================================================
  // Reinicia el contador a 0 y fuerza re-renderizado para actualizar la UI
  const resetContador = () => {
    contadorRef.current = 0;
    setRenderTrigger(prev => prev + 1); // Fuerza re-render para mostrar el reset
    console.log('Contador reseteado a 0');
  };

  return (
    <div className="App">
      <h1>Contador con useRef</h1>

      <div className="botones">
        {/* Botón 1: Incrementa contadorRef.current pero NO causa re-render */}
        <button onClick={contarClick}>
          Contar Click (sin mostrar)
        </button>

        {/* Botón 2: Fuerza re-render para mostrar el valor actual de contadorRef */}
        <button onClick={mostrarClicks}>
          Mostrar Clicks
        </button>

        {/* Botón 3: Reset el contador a 0 */}
        <button onClick={resetContador} className="reset">
          Reset
        </button>
      </div>

      {/* El contador se muestra SIEMPRE, pero solo se actualiza cuando hacemos re-render */}
      <div className="resultado">
        {/* Muestra contadorRef.current - se actualiza solo cuando hay re-render */}
        <h2>Clicks contados: {contadorRef.current}</h2>
        <p className="nota">
          ¡El contador sigue incrementándose aunque no lo veas! Pulsa "Mostrar Clicks" para ver el valor actualizado.
        </p>
      </div>

      <div className="explicacion">
        <h3>✅ Solución con useRef</h3>
        <p>
          <strong>¿Qué es useRef?</strong> Una referencia mutable que persiste entre renderizados
          pero NO causa re-renderizado al modificarse.
        </p>
        <p>
          <strong>Diferencia con useState:</strong>
        </p>
        <ul>
          <li><code>useState</code>: Al cambiar → re-renderizado automático → UI se actualiza</li>
          <li><code>useRef</code>: Al cambiar .current → NO re-renderiza → UI no se actualiza hasta el próximo render</li>
        </ul>
        <p>
          <strong>Secuencia de eventos:</strong>
        </p>
        <ol>
          <li>Haces 5 clicks en "Contar Click" → contadorRef.current = 5 (pero la UI no cambia)</li>
          <li>Pulsas "Mostrar Clicks" → Forzamos re-render con setRenderTrigger</li>
          <li>React re-renderiza y lee contadorRef.current → Muestra 5 ✅</li>
          <li>Sigues haciendo clicks → 6, 7, 8... (guardados pero no visibles)</li>
          <li>Pulsas "Mostrar Clicks" de nuevo → Ahora muestra 8 ✅</li>
          <li>Pulsas "Reset" → contadorRef.current = 0 y fuerza re-render → Muestra 0 ✅</li>
        </ol>
        <p>
          <strong>Conclusión:</strong> useRef es ideal para valores que cambian frecuentemente
          pero no necesitan actualizar la UI en cada cambio.
        </p>
      </div>
    </div>
  )
}

export default App
