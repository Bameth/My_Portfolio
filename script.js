document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert(data.message);
            this.reset();
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
    });
});


document.getElementById('scrollLeft').addEventListener('click', function () {
    document.querySelector('.projects-wrapper').scrollBy({ left: -300, behavior: 'smooth' });
});
document.getElementById('scrollRight').addEventListener('click', function () {
    document.querySelector('.projects-wrapper').scrollBy({ left: 300, behavior: 'smooth' });
});