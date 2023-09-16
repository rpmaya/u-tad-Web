// Una función de orden superior que devuelve una función
function contador() {
    let cuenta = 0;
    return function() {
      cuenta++;
      return cuenta;
    };
  }
  
  const miContador = contador();
  
  // Manipulación del DOM y manejo de eventos
  document.addEventListener("DOMContentLoaded", function() {
    const boton = document.createElement('button');
    boton.innerText = 'Haz clic en mí';
    document.body.appendChild(boton);
  
    boton.addEventListener('click', function() {
      const cuenta = miContador();
      alert('Has hecho clic ' + cuenta + ' veces.');
    });
  });
  