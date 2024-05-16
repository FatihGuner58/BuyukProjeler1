document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('basliklar');

    hamburgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
