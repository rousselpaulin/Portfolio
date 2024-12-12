let lastScrollTop = 0; // Position précédente du scroll
const navbar = document.getElementsByClassName("navbar")[0]; // Sélectionne la barre de navigation

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll vers le bas -> cache la barre
        navbar.style.top = "-80px";
    } else {
        // Scroll vers le haut -> affiche la barre
        navbar.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Empêche les valeurs négatives
});

// Fonction pour ouvrir/fermer le menu sur mobile
document.getElementById('burger').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
});

// Fermer le menu quand un élément est cliqué
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.remove('show'); // Ferme le menu
    });
});
