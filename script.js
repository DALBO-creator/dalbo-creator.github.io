// Messaggi interattivi
document.getElementById("joinBtn").addEventListener("click", () => {
  alert("Grazie per l’interesse! Ti contatteremo presto 💪");
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Messaggio inviato! Ti risponderemo entro 24 ore.");
  e.target.reset();
});

// Effetto fade-in quando si scorre la pagina
const fadeElements = document.querySelectorAll('.fade');

const fadeInOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.8;

  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
