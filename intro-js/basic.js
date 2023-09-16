// Declaración de una función para sumar un array
function sumaArray(numeros) {
    let suma = 0;
    for(let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma;
  }
  
  // Uso de la función
  const miArray = [1, 2, 3, 4, 5];
  const resultado = sumaArray(miArray);
  console.log("La suma es: " + resultado); // Output: La suma es: 15
  