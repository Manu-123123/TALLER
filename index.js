// Aquí definimos una FUNCIÓN que suma dos números
// Una función es un bloque de código que podemos reutilizar muchas veces
function sumarDosNumeros(numero1, numero2) {
  
  // Dentro de los paréntesis van los PARÁMETROS (numero1 y numero2)
  // Los parámetros son como variables que reciben valores cuando llamamos la función
  
  // Calculamos la suma usando el operador + (más)
  var resultado = numero1 + numero2;
  
  // La palabra RETURN devuelve el resultado al lugar donde se llamó la función
  // Sin RETURN, la función no nos daría ningún valor
  return resultado;
}

// Ahora LLAMAMOS la función con dos números específicos: 5 y 3
// El resultado se guarda en la variable suma
var suma = sumarDosNumeros(5, 3);

// Mostramos el resultado en la consola usando console.log()
console.log("La suma de 5 + 3 es: " + suma);

// Podemos llamar la función cuantas veces queramos con números diferentes
var suma2 = sumarDosNumeros(10, 20);
console.log("La suma de 10 + 20 es: " + suma2);

var suma3 = sumarDosNumeros(100, 50);
console.log("La suma de 100 + 50 es: " + suma3);