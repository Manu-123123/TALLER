//Ejercicio: Detector de Polindromos
//Objetivo: crea una logica compleja encapsulada en una funcion
//Un ejemplo de polindromo es "anilina" o "reconocer", oso 
// 1. Crea una funcion llamada esPalindromo que reciba un texto y retorne true si es palindromo o false si no lo es
/**
 * Verifica si una cadena de texto es un palíndromo.
 * 
 * Un palíndromo es una palabra, frase o número que se lee igual 
 * hacia adelante y hacia atrás, ignorando espacios y mayúsculas.
 * 
 * @param {string} texto - La cadena de texto a verificar
 * @returns {boolean} true si el texto es un palíndromo, false en caso contrario
 * 
 * @example
 * // Ejemplo 1: Palíndromo simple
 * esPalindromo("ama"); // retorna true
 * 
 * @example
 * // Ejemplo 2: Palíndromo con espacios
 * esPalindromo("La ruta nos aporta otro paso natural"); // retorna true
 * 
 * @example
 * // Ejemplo 3: No es palíndromo
 * esPalindromo("javascript"); // retorna false
 */
function esPalindromo(texto) {
    // Elimina espacios en blanco y convierte a minúsculas
    const textoLimpio = texto.replace(/\s+/g, '').toLowerCase();
    const longitud = textoLimpio.length;
    
    // Compara caracteres desde el inicio y el final hacia el centro
    for (let i = 0; i < longitud / 2; i++) {
        if (textoLimpio[i] !== textoLimpio[longitud - 1 - i]) {
            return false; // No es palíndromo
        }
    }
    
    return true; // Es palíndromo
}
