//Ejercicio: Array Objetos 
//1. array( listas)
//crea una lista de tus 3 comidas favoritas
var comidasFavoritas = ["Pizza", "Sushi", "Tacos"];

//2. objeto (caracteristicas)
var persona = {
  nombre: "Manuel",
  edad: 25,
  ciudad: "Valladolid",
  habilidades: ["programación", "dibujo",
  "cocina"],
  estructura: 1.75,
  programador: true
  
};
// como accedo a la propiedad nombre de mi objeto persona
console.log("Nombre: " + persona.nombre);
//Como accedo alas propiedaddes habilidades de mi objeto persona
console.log("Habilidades: " + persona.habilidades.join(", "));
// Como accedo  la habilidad de dibujo del objeto persona
console.log("Habilidad de dibujo: " + persona.habilidades[1]);

//3. array de objetos
//Crea una lista de 3 alumnos (Objetos) con nombre y calificacion
var alumnos = [
  { nombre: "Ana", calificacion: 85 },
  { nombre: "Luis", calificacion: 92 },
  { nombre: "Marta", calificacion: 78 },
  { nombre: "Carlos", calificacion: 88 }
];
//Escribe un buble que recora el array de alumno e imprima solo los que tenga una calificacion mayora 80
for (var i = 0; i < alumnos.length; i++) {
  if (alumnos[i].calificacion > 80) {
    console.log("Alumno: " + alumnos[i].nombre + ", Calificación: " + alumnos[i].calificacion);
  }

}










