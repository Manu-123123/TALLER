// Reloj Virtual con Alarma - DOM Control

let alarmaActiva = false;
let horaAlarma = null;
let audioAlarma = null;

// Función para actualizar la hora del reloj
function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const horaActual = `${horas}:${minutos}:${segundos}`;
    document.getElementById('reloj').textContent = horaActual;
    
    // Verificar si la alarma debe sonar
    verificarAlarma(ahora);
}

// Función para verificar si la alarma debe sonar
function verificarAlarma(ahora) {
    if (!alarmaActiva || !horaAlarma) return;
    
    const horaActualFormat = `${String(ahora.getHours()).padStart(2, '0')}:${String(ahora.getMinutes()).padStart(2, '0')}`;
    
    if (horaActualFormat === horaAlarma) {
        sonarAlarma();
        alarmaActiva = false;
        document.getElementById('btnAlarma').textContent = 'Programar Alarma';
        document.getElementById('statusAlarma').textContent = '¡Alarma sonó!';
        document.getElementById('statusAlarma').style.color = '#ff6b6b';
    }
}

// Función para sonar la alarma
function sonarAlarma() {
    // Crear una alarma visual y de sonido
    const elemento = document.getElementById('reloj');
    elemento.classList.add('alarma-activa');
    
    // Efecto de vibración y sonido con Web Audio API
    if (audioAlarma) audioAlarma.play();
    
    // Crear sonido de alarma usando Web Audio API
    crearSonidoAlarma();
    
    // Mostrar notificación
    mostrarNotificacion('¡Alarma!', '¡La hora ha llegado!');
    
    // Remover clase después de 5 segundos
    setTimeout(() => {
        elemento.classList.remove('alarma-activa');
    }, 5000);
}

// Función para crear sonido de alarma con Web Audio API
function crearSonidoAlarma() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscilador = audioContext.createOscillator();
        const ganancia = audioContext.createGain();
        
        oscilador.connect(ganancia);
        ganancia.connect(audioContext.destination);
        
        oscilador.frequency.value = 800; // Frecuencia en Hz
        oscilador.type = 'sine';
        
        ganancia.gain.setValueAtTime(0.3, audioContext.currentTime);
        ganancia.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscilador.start(audioContext.currentTime);
        oscilador.stop(audioContext.currentTime + 0.5);
        
        // Repetir 3 veces
        for (let i = 1; i < 3; i++) {
            const tiempoInicio = audioContext.currentTime + (i * 0.7);
            oscilador.frequency.setValueAtTime(800, tiempoInicio);
            ganancia.gain.setValueAtTime(0.3, tiempoInicio);
            ganancia.gain.exponentialRampToValueAtTime(0.01, tiempoInicio + 0.5);
            oscilador.start(tiempoInicio);
            oscilador.stop(tiempoInicio + 0.5);
        }
    } catch (e) {
        console.log('No se pudo reproducir el sonido de alarma');
    }
}

// Función para mostrar notificación del navegador
function mostrarNotificacion(titulo, mensaje) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(titulo, {
            body: mensaje,
            icon: '⏰'
        });
    }
}

// Función para programar la alarma
function programarAlarma() {
    const inputHora = document.getElementById('inputAlarma').value;
    
    if (!inputHora) {
        alert('Por favor, selecciona una hora');
        return;
    }
    
    horaAlarma = inputHora;
    alarmaActiva = true;
    
    document.getElementById('btnAlarma').textContent = 'Cancelar Alarma';
    document.getElementById('statusAlarma').textContent = `Alarma programada para: ${inputHora}`;
    document.getElementById('statusAlarma').style.color = '#51cf66';
}

// Función para cancelar la alarma
function cancelarAlarma() {
    alarmaActiva = false;
    horaAlarma = null;
    
    document.getElementById('btnAlarma').textContent = 'Programar Alarma';
    document.getElementById('statusAlarma').textContent = 'Sin alarma';
    document.getElementById('statusAlarma').style.color = '#888';
    document.getElementById('inputAlarma').value = '';
}

// Toggle para programar o cancelar alarma
function toggleAlarma() {
    if (alarmaActiva) {
        cancelarAlarma();
    } else {
        programarAlarma();
    }
}

// Solicitar permiso para notificaciones
if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
}

// Actualizar reloj cada segundo
setInterval(actualizarReloj, 1000);
actualizarReloj();
