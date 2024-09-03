const slides = document.querySelector('.slides');
const progressBar = document.getElementById('progressBar');
const slideCount = slides.children.length;
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateCarousel();
});

function updateCarousel() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    progressBar.style.width = `${((currentIndex + 1) / slideCount) * 100}%`;
}

// Inicializar el progreso
updateCarousel();
