import Square from './Square';

/**
 * Componente Board - Representa el tablero completo del TicTacToe
 * @param {Object} props - Props del componente
 * @param {Array} props.squares - Array con el estado actual del tablero (9 posiciones)
 * @param {Function} props.onPlay - Función callback que se ejecuta al hacer click en una casilla
 * @param {boolean} props.disabled - Indica si el tablero está deshabilitado (juego terminado)
 */
function Board({ squares, onPlay, disabled }) {
  /**
   * Maneja el click en una casilla
   * @param {number} i - Índice de la casilla clickeada
   */
  function handleClick(i) {
    // Si el tablero está deshabilitado, no hacer nada
    if (disabled) return;
    // Llamar a la función onPlay pasada por props
    onPlay(i);
  }

  return (
    <div className="board">
      {/* Generamos 3 filas del tablero */}
      {[0, 1, 2].map((row) => (
        <div key={row} className="board-row">
          {/* Generamos 3 columnas por cada fila */}
          {[0, 1, 2].map((col) => {
            // Calculamos el índice lineal (0-8) a partir de fila y columna
            const index = row * 3 + col;
            return (
              <Square
                key={index}
                value={squares[index]} // Valor de la casilla ('X', 'O' o null)
                onSquareClick={() => handleClick(index)} // Función a ejecutar al hacer click
                disabled={disabled} // Indica si la casilla está deshabilitada
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;
