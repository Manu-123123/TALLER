//Crea una funcion para calcular el area de un ciruclo dado su radio
/**
 * Calcula el área de un círculo dado su radio.
 * 
 * Utiliza la fórmula matemática: A = π * r²
 * 
 * @param {number} radio - El radio del círculo en unidades de medida
 * @returns {number} El área del círculo calculada
 * 
 * @example
 * // Retorna el área de un círculo con radio 5
 * areaCirculo(5); // 78.53981633974483
 */
function areaCirculo(radio) {
    var area = Math.PI * Math.pow(radio, 2);
    return area;
}
//Crea una founcion para calculoar el area de un rectangulo dado su base y altura
/**
 * Calcula el área de un rectángulo dado su base y altura.
 *
 * @param {number} base - La longitud de la base del rectángulo.
 * @param {number} altura - La altura del rectángulo.
 * @returns {number} El área calculada del rectángulo.
 */
function areaRectangulo(base, altura) {
    var area = base * altura;
    return area;
}
//Vamos a calcular el volumen de un silindro
//El volumen es Area de la base(circulo) * altura
/**
 * Calcula el volumen de un cilindro dado su radio y altura.
 *
 * @param {number} radio - El radio de la base del cilindro.
 * @param {number} altura - La altura del cilindro.
 * @returns {number} El volumen del cilindro.
 *
 * @example
 * // Para un cilindro con radio 3 y altura 10:
 * // volumenSilindro(3, 10) devuelve aproximadamente 282.74
 */
function volumenSilindro(radio, altura) {
    var areaBase = areaCirculo(radio);
    var volumen = areaBase * altura;
    return volumen;
}
//Cra una funcion para calular una derivada simple de un funcion polinomial de la forma an^n.
/**
 * Calcula la derivada de un término de un polinomio dado su coeficiente y exponente.
 * Por ejemplo, para el término 3x^4, la derivada sería 12x^3.
 *
 * @param {number} coeficiente - El coeficiente del término original.
 * @param {number} exponente - El exponente del término original.
 * @returns {{coeficiente: number, exponente: number}} Un objeto con el nuevo coeficiente y exponente del término derivado.
 *
 * @example
 * // Derivada de 5x^3
 * const resultado = derivadaPolinomio(5, 3);
 * // resultado: { coeficiente: 15, exponente: 2 }
 */
function derivadaPolinomio(coeficiente, exponente) {
    var nuevoCoeficiente = coeficiente * exponente;
    var nuevoExponente = exponente - 1;
    return {
        coeficiente: nuevoCoeficiente,
        exponente: nuevoExponente
    };
}   
//crea una funcion para calcular un integral simple de la funcion polimonial de la funcion a x^n
/**
 * Calcula la integral indefinida de un término polinómico.
 * 
 * Dado un término de la forma a*x^n, calcula su integral resultando en
 * (a/(n+1))*x^(n+1) + C
 * 
 * @param {number} a - El coeficiente del término polinómico
 * @param {number} n - El exponente del término polinómico
 * @returns {Object} Objeto con las propiedades:
 *   - {number} coeficiente - El nuevo coeficiente resultante de la integración (a/(n+1))
 *   - {number} exponente - El nuevo exponente resultante de la integración (n+1)
 * 
 * @example
 * // Para integrar 3*x^2, se pasa a=3, n=2
 * integralPolinomio(3, 2);
 * // Retorna: { coeficiente: 1, exponente: 3 }
 * // Resultado: x^3 + C
 */
function integralPolinomio(a, n) {
    var nuevoExponente = n + 1;
    var nuevoCoeficiente = a / nuevoExponente;
    return {
        coeficiente: nuevoCoeficiente,
        exponente: nuevoExponente
    };
}
