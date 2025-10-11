import { useState } from 'react';
import Board from './Board';
import './App.css';

/**
 * Función que calcula si hay un ganador en el tablero
 * @param {Array} squares - Array de 9 posiciones con los valores del tablero ('X', 'O', o null)
 * @returns {string|null} - Retorna 'X' u 'O' si hay ganador, o null si no hay ganador
 */
function calculateWinner(squares) {
  // Definimos todas las combinaciones posibles para ganar (filas, columnas y diagonales)
  const lines = [
    [0, 1, 2], // Fila superior
    [3, 4, 5], // Fila media
    [6, 7, 8], // Fila inferior
    [0, 3, 6], // Columna izquierda
    [1, 4, 7], // Columna central
    [2, 5, 8], // Columna derecha
    [0, 4, 8], // Diagonal principal
    [2, 4, 6], // Diagonal secundaria
  ];

  // Recorremos todas las líneas ganadoras posibles
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // Si las tres posiciones tienen el mismo valor (y no son null), hay ganador
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Retornamos 'X' u 'O'
    }
  }
  return null; // No hay ganador
}

/**
 * Componente que muestra el siguiente jugador
 * @param {Object} props - Props del componente
 * @param {string} props.player - Jugador actual ('X' u 'O')
 */
function NextPlayer({ player }) {
  return (
    <div className="next-player">
      Siguiente jugador: <strong>{player}</strong>
    </div>
  );
}

/**
 * Componente principal de la aplicación TicTacToe
 * Gestiona el estado del juego y coordina los componentes
 */
function App() {
  // Estado: historial de movimientos
  // Cada elemento es un array de dos posiciones: [índice, jugador]
  // Ejemplo: [[0, 'X'], [4, 'O'], [1, 'X']]
  const [history, setHistory] = useState([]);

  // Calculamos el tablero actual a partir del historial
  // Creamos un array de 9 posiciones inicializado a null
  const currentSquares = Array(9).fill(null);
  // Recorremos el historial y vamos rellenando el tablero
  history.forEach(([index, player]) => {
    currentSquares[index] = player;
  });

  // Determinamos quién es el jugador actual
  // Si el historial tiene longitud par, le toca a X; si es impar, le toca a O
  const xIsNext = history.length % 2 === 0;
  const currentPlayer = xIsNext ? 'X' : 'O';

  // Calculamos si hay un ganador usando la función calculateWinner
  const winner = calculateWinner(currentSquares);

  // Verificamos si el tablero está completo (todas las casillas ocupadas)
  const isBoardComplete = currentSquares.every(square => square !== null);
  // Hay empate si el tablero está completo y no hay ganador
  const isDraw = !winner && isBoardComplete;

  // El juego termina si hay un ganador o hay empate
  const isGameOver = winner || isDraw;

  /**
   * Maneja el click en una casilla del tablero
   * @param {number} i - Índice de la casilla clickeada (0-8)
   */
  function handlePlay(i) {
    // No hacer nada si la casilla ya está ocupada o el juego ha terminado
    if (currentSquares[i] || isGameOver) {
      return;
    }

    // Añadimos el movimiento al historial
    // Creamos un nuevo array con el historial anterior más el nuevo movimiento
    setHistory([...history, [i, currentPlayer]]);
  }

  /**
   * Reinicia el juego limpiando el historial
   */
  function resetGame() {
    setHistory([]);
  }

  // Determinamos qué mensaje mostrar según el estado del juego
  let status;
  if (winner) {
    // Si hay ganador, mostramos quién ha ganado
    status = `Ganador: ${winner}`;
  } else if (isDraw) {
    // Si hay empate, lo indicamos
    status = 'Empate';
  } else {
    // Si el juego continúa, mostramos el componente NextPlayer
    status = <NextPlayer player={currentPlayer} />;
  }

  return (
    <div className="game">
      <h1>TicTacToe</h1>
      {/* Tablero: recibe el estado actual, la función para manejar clicks y si está deshabilitado */}
      <Board
        squares={currentSquares}
        onPlay={handlePlay}
        disabled={isGameOver}
      />
      {/* Mensaje de estado: muestra el siguiente jugador, ganador o empate */}
      <div className="status">{status}</div>
      {/* Botón de reiniciar: solo se muestra cuando el juego termina */}
      {isGameOver && (
        <button className="reset-button" onClick={resetGame}>
          Reiniciar
        </button>
      )}
    </div>
  );
}

export default App;
