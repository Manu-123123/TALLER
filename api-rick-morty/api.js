const API_URL = 'https://rickandmortyapi.com/api/character';
const container = document.getElementById('coteiner');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('searchbn');

let allCharacters = [];

// Función para obtener personajes de la API
async function fetchCharacters(url = API_URL) {
    try {
        container.innerHTML = '<div class="loading">Cargando personajes...</div>';
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        
        const data = await response.json();
        allCharacters = data.results || [];
        renderCharacters(allCharacters);
    } catch (error) {
        container.innerHTML = `<div class="error">❌ Error: ${error.message}</div>`;
        console.error('Error:', error);
    }
}

// Función para renderizar personajes
function renderCharacters(characters) {
    if (characters.length === 0) {
        container.innerHTML = '<div class="error">No se encontraron personajes</div>';
        return;
    }

    container.innerHTML = characters.map(character => `
        <div class="character-card">
            <img src="${character.image}" alt="${character.name}" class="character-image">
            <div class="character-info">
                <div class="character-name">
                    ${character.name}
                    <span class="status ${character.status.toLowerCase()}">
                        ${character.status}
                    </span>
                </div>
                <div class="character-detail">
                    <strong>Estado:</strong> ${character.status}
                </div>
                <div class="character-detail">
                    <strong>Ubicación:</strong> ${character.location.name}
                </div>
                <div class="character-detail">
                    <strong>Especie:</strong> ${character.species}
                </div>
                <div class="character-detail">
                    <strong>Género:</strong> ${character.gender}
                </div>
            </div>
        </div>
    `).join('');
}

// Función para buscar personajes
function searchCharacters() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        renderCharacters(allCharacters);
        return;
    }

    const filtered = allCharacters.filter(character =>
        character.name.toLowerCase().includes(searchTerm) ||
        character.location.name.toLowerCase().includes(searchTerm)
    );

    renderCharacters(filtered);
}

// Función para limpiar búsqueda
function clearSearch() {
    searchInput.value = '';
    renderCharacters(allCharacters);
}

// Event Listeners
searchBtn.addEventListener('click', searchCharacters);
clearBtn.addEventListener('click', clearSearch);

// Buscar al presionar Enter
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchCharacters();
    }
});

// Cargar personajes al iniciar
document.addEventListener('DOMContentLoaded', () => {
    fetchCharacters();
});
