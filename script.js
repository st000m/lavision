console.log("Script chargé");

// Toggle pour chaque question de la FAQ
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
        
        faqs.forEach(otherFaq => {
            if (otherFaq !== faq) {
                otherFaq.classList.remove("active");
            }
        });
    });
});

// Toggle pour le menu de navigation
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");  // Sélectionner le formulaire par ID
    
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();  // Empêcher la soumission du formulaire et le rafraîchissement de la page
            alert("Le pseudo ou le mot de passe n'est pas reconnu. Si vous n'avez pas encore de compte inscrivez vous!");
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const sliderImages = document.querySelectorAll('.slider-image');

    sliderImages.forEach(image => {
        const width = image.offsetWidth;
        image.style.height = `${(width * 9) / 7}px`;
    });

    window.addEventListener('resize', () => {
        sliderImages.forEach(image => {
            const width = image.offsetWidth;
            image.style.height = `${(width * 9) / 7}px`;
        });
    });
});

document.querySelectorAll('.question-box').forEach(button => {
    button.addEventListener('click', () => {
        // Si ce bouton est déjà actif, on le désactive
        if (button.classList.contains('active')) {
            button.classList.remove('active');
        } else {
            // Désactive tous les autres boutons
            document.querySelectorAll('.question-box').forEach(btn => btn.classList.remove('active'));

            // Active le bouton cliqué
            button.classList.add('active');
        }
    });
});