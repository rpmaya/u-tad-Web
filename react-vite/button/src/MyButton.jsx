function MyButton({ nombre, mensaje }) {
  const handleClick = () => {
    alert(mensaje);
  };

  return (
    <button onClick={handleClick}>
      {nombre}
    </button>
  );
}

export default MyButton;
