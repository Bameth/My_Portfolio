// Validation simple pour le formulaire
document.getElementById('contactForm').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Tous les champs doivent être remplis!");
        e.preventDefault();
    }
});
