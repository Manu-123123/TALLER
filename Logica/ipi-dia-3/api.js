//Ejercicio: Consumo de APIs con fetch
// Objetivo: buscar un Pokemon con PokeAPI y mostrar su nombre, imagen y características
//1. Crea una funcion llamada obtenerPokemon que reciba un nombre de pokemon, consulte la pokeAPI y devuelva los datos en JSON
function obtenerPokemon(nombrePokemon) {
    // La URL de la PokeAPI para obtener datos de un Pokémon específico
    var url = 'https://pokeapi.co/api/v2/pokemon/' + nombrePokemon.toLowerCase();
    // Usamos fetch para hacer la solicitud a la API y devolvemos la Promise
    return fetch(url)
        .then(function(response) {
            // Verificamos si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Pokémon no encontrado: ' + nombrePokemon);
            }                       
            return response.json(); // Convertimos la respuesta a JSON
        })
        .then(function(data) {
            // Extraemos datos completos del Pokémon
            var pokemon = {
                nombre: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                imagen: data.sprites.front_default,
                tipo: data.types.map(function(t) { return t.type.name; }).join(', '),
                peso: (data.weight / 10).toFixed(1) + ' kg',
                altura: (data.height / 10).toFixed(1) + ' m',
                habilidades: data.abilities.map(function(a) { return a.ability.name; }).join(', ')
            };
            console.log('Pokémon encontrado:', pokemon);
            return pokemon;
        })
        .catch(function(error) {
            // Manejamos cualquier error que ocurra durante la solicitud
            console.error('Error al obtener el Pokémon:', error.message);
            throw error;
        });
}
// 2. Ejemplo: descomentar para probar
// obtenerPokemon('Pikachu').then(function(data) { console.log(data); });