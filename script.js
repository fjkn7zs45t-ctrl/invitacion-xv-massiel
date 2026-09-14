// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    setupMusicPlayer();
});

// Crear partículas flotantes
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = 4 + Math.random() * 4;
        const delay = Math.random() * 2;
        
        particle.style.left = left + '%';
        particle.style.top = top + '%';
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';
        
        container.appendChild(particle);
    }
}

// Configurar reproductor de música
function setupMusicPlayer() {
    const musicToggle = document.getElementById('musicToggle');
    const iframeMusic = document.querySelector('.music-player iframe');
    
    musicToggle.addEventListener('click', () => {
        musicToggle.classList.toggle('playing');
    });

    // Auto-añadir clase playing al cargar
    setTimeout(() => {
        musicToggle.classList.add('playing');
    }, 1000);
}

// Actualizar contador regresivo
function updateCountdown() {
    const eventDate = new Date('2026-10-17T15:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        if (distance > 0) {
            countdownElement.innerHTML = `
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; font-size: 16px;">
                    <div style="background: rgba(212, 175, 55, 0.1); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 24px; font-weight: bold; color: #daa520;">${days}</div>
                        <div style="color: #c9a961; font-size: 12px;">DÍAS</div>
                    </div>
                    <div style="background: rgba(212, 175, 55, 0.1); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 24px; font-weight: bold; color: #daa520;">${hours}</div>
                        <div style="color: #c9a961; font-size: 12px;">HORAS</div>
                    </div>
                    <div style="background: rgba(212, 175, 55, 0.1); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 24px; font-weight: bold; color: #daa520;">${minutes}</div>
                        <div style="color: #c9a961; font-size: 12px;">MINUTOS</div>
                    </div>
                    <div style="background: rgba(212, 175, 55, 0.1); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 24px; font-weight: bold; color: #daa520;">${seconds}</div>
                        <div style="color: #c9a961; font-size: 12px;">SEGUNDOS</div>
                    </div>
                </div>
            `;
        } else {
            countdownElement.innerHTML = '<p style="color: #daa520; font-size: 20px; font-weight: bold;">¡El evento está aquí!</p>';
        }
    }
}

// Desplazarse a una sección
function scrollToSection(index) {
    const sections = document.querySelectorAll('.section');
    if (sections[index]) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    }
}

// Abrir mapa
function openMap() {
    const address = 'Colegio de Abogados de Honduras, 2ª Avenida, carretera CA-5, Colonia 15 de Septiembre, Comayagüela';
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/${encodedAddress}`, '_blank');
}

// Confirmar asistencia
function confirmAsistencia() {
    const message = 'Hola, confirmo mi asistencia a los XV años de MASSIEL BERENICE MEJÍA PONCE.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/50494990567?text=${encodedMessage}`, '_blank');
}

// Función para cambiar imágenes de fondo
function setBackgroundImage(sectionIndex, imageUrl) {
    const sections = document.querySelectorAll('.section');
    if (sections[sectionIndex]) {
        sections[sectionIndex].style.backgroundImage = `url('${imageUrl}')`;
    }
}

// Función para cambiar foto de presentación
function setProfilePhoto(imageUrl) {
    const fotoPresentacion = document.getElementById('fotoPresentacion');
    if (fotoPresentacion) {
        fotoPresentacion.src = imageUrl;
    }
}

// Función para cambiar foto de bebé
function setPhotoBeautifulMemory(imageUrl) {
    const fotoBebe = document.getElementById('fotoBebe');
    if (fotoBebe) {
        fotoBebe.src = imageUrl;
    }
}
