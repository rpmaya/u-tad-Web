/**
 * Componente Square - Representa una casilla individual del tablero
 * @param {Object} props - Props del componente
 * @param {string|null} props.value - Valor de la casilla ('X', 'O' o null si está vacía)
 * @param {Function} props.onSquareClick - Función a ejecutar cuando se hace click en la casilla
 * @param {boolean} props.disabled - Indica si el tablero está deshabilitado (juego terminado)
 */
function Square({ value, onSquareClick, disabled }) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
      // Se deshabilita si el juego terminó O si la casilla ya tiene un valor
      disabled={disabled || value !== null}
    >
      {/* Mostramos el valor ('X', 'O' o nada si es null) */}
      {value}
    </button>
  );
}

export default Square;
