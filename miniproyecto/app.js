// API de Gatos - URLs alternativas confiables
const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';
const FALLBACK_CAT_API = 'https://cataas.com/api/cats';

// Datos locales para generar información curiosa
const catBreeds = [
    'Persa',
    'Siamés',
    'Maine Coon',
    'Bengalí',
    'Ragdoll',
    'Sphynx',
    'Gato Callejero',
    'Británico de Pelo Corto',
    'Abisinio',
    'Bombay',
    'Cornish Rex',
    'Devon Rex',
    'Scottish Fold',
    'Munchkin',
    'Ragamuffin'
];

const catNames = [
    'Misi', 'Félix', 'Luna', 'Noche', 'Tigre', 'Shadow', 'Whiskers', 'Garfield',
    'Snowball', 'Mittens', 'Simba', 'Leo', 'Manchas', 'Bigotes', 'Minina',
    'Pelusa', 'Sombra', 'Gata', 'Gatita', 'Maullido', 'Zarpazo', 'Michis'
];

const catAges = [
    'Gatito (0-3 meses)',
    'Joven (3-12 meses)',
    'Adulto joven (1-3 años)',
    'Adulto (3-6 años)',
    'Adulto maduro (6-10 años)',
    'Gato Mayor (10+ años)'
];

const curiosities = [
    'Los gatos pueden saltar hasta 6 veces su propio tamaño',
    'Un gato tiene aproximadamente 20 músculos en cada oreja',
    'Los gatos duermen entre 12 y 16 horas al día',
    'Un gato puede ronronear entre 20 y 150 veces por segundo',
    'Los gatos tienen una visión 6 veces mejor que los humanos en la oscuridad',
    'Los bigotes del gato ayudan a detectar cambios en el entorno',
    'Los gatos tienen un reflejo vestibular que los ayuda a caer de pie',
    'Un gato domesticado típicamente pesa entre 3 y 5 kg',
    'Los gatos tienen una estructura ósea flexible que les permite pasar por espacios pequeños',
    'Los gatos son animales crepusculares, más activos al amanecer y atardecer',
    'Un gato puede girar sus orejas 180 grados de forma independiente',
    'Los gatos tienen glándulas odoríferas en sus patas y mejillas',
    'Un gato doméstico vive en promedio entre 12 y 18 años',
    'Los gatos tienen una estructura vocal muy sofisticada con más de 100 sonidos',
    'Los gatos tienen una memoria a corto plazo de 16 horas',
    'El ronroneo del gato puede ayudar a cicatrizar huesos y músculos',
    'Los gatos tienen una matriz cristalina en sus ojos que les ayuda a ver en la oscuridad',
    'Los gatos pueden alcanzar velocidades de hasta 48 km/h',
    'Los gatos tienen el mismo número de vértebras que los humanos en la columna vertebral',
    'Un gato mucho más antiguo que un perro de la misma edad en términos de desarrollo'
];

// Función para obtener una imagen de gato aleatororia
async function fetchCatImage() {
    const loadingElement = document.getElementById('loading');
    const errorContainer = document.getElementById('error-container');
    const catImage = document.getElementById('cat-image');

    loadingElement.style.display = 'block';
    errorContainer.innerHTML = '';

    try {
        // Intentar con la API principal
        const response = await fetch(CAT_API_URL);
        
        if (!response.ok) throw new Error('Error en la API');

        const data = await response.json();

        if (data && data.length > 0) {
            catImage.src = data[0].url;
            loadingElement.style.display = 'none';
            return true;
        }
    } catch (error) {
        console.log('Intentando con API alternativa...', error);
        
        // Si la API principal falla, intentar con la alternativa
        try {
            const fallbackResponse = await fetch(FALLBACK_CAT_API);
            if (fallbackResponse.ok) {
                const fallbackData = await fallbackResponse.json();
                catImage.src = `https://cataas.com/cat/${fallbackData._id}`;
                loadingElement.style.display = 'none';
                return true;
            }
        } catch (fallbackError) {
            console.error('Ambas APIs fallaron:', fallbackError);
            errorContainer.innerHTML = `
                <div class="error">
                    ⚠️ No se pudo cargar la imagen. Usando imagen de demostración.
                </div>
            `;
            catImage.src = `https://via.placeholder.com/600x400?text=Gato+${Math.random()}`;
            loadingElement.style.display = 'none';
            return false;
        }
    }

    loadingElement.style.display = 'none';
    return false;
}

// Función para generar una raza aleatoria
function generateBreed() {
    return catBreeds[Math.floor(Math.random() * catBreeds.length)];
}

// Función para generar una edad aleatoria
function generateAge() {
    return catAges[Math.floor(Math.random() * catAges.length)];
}

// Función para generar un nombre aleatorio
function generateName() {
    return catNames[Math.floor(Math.random() * catNames.length)];
}

// Función para generar un dato curioso aleatorio
function generateCuriosingData() {
    return curiosities[Math.floor(Math.random() * curiosities.length)];
}

// Función para generar un nuevo gato
async function generateNewCat() {
    await fetchCatImage();
    generateAllData();
}

// Función para generar solo un dato curioso
function generateCuriosity() {
    const curiosity = generateCuriosingData();
    document.getElementById('curiosity').textContent = curiosity;
}

// Función para generar todos los datos
function generateAllData() {
    document.getElementById('breed').textContent = generateBreed();
    document.getElementById('age').textContent = generateAge();
    document.getElementById('name').textContent = generateName();
    document.getElementById('curiosity').textContent = generateCuriosingData();
}

// Inicializar la aplicación cuando carga la página
document.addEventListener('DOMContentLoaded', function() {
    generateNewCat();
});
