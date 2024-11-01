// Fonction pour détecter les éléments visibles lors du défilement
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour ajouter la classe fade-in lorsque l'élément est visible
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.skill-card, .project-card');

    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('fade-in');
        }
    });
}

// Événement de défilement
window.addEventListener('scroll', fadeInOnScroll);

// Vérification initiale lors du chargement de la page
document.addEventListener('DOMContentLoaded', fadeInOnScroll);

