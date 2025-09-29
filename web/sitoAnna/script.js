// Petali che cadono automaticamente
const petalsContainer = document.getElementById('petals-container');
const petalTypes = ['🌸', '🌺', '🌼', '🌻', '💐'];

// Funzione per creare un petalo
function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.textContent = petalTypes[Math.floor(Math.random() * petalTypes.length)];
    
    // Posizione iniziale random
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDuration = (Math.random() * 6 + 4) + 's'; // 4-10 secondi
    petal.style.animationDelay = Math.random() * 2 + 's';
    
    petalsContainer.appendChild(petal);
    
    // Rimuovi il petalo dopo l'animazione
    setTimeout(() => {
        if (petal.parentNode) {
            petal.parentNode.removeChild(petal);
        }
    }, 12000);
}

// Crea petali continuamente
function startPetalRain() {
    setInterval(() => {
        createPetal();
    }, 800); // Ogni 800ms
    
    // Burst iniziale
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createPetal();
        }, i * 200);
    }
}

// Funzione per esplosione di petali (pulsante)
function createPetalBurst() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createPetal();
        }, i * 50);
    }
    
    // Aggiungi effetto al pulsante
    const button = document.querySelector('.more-petals-btn');
    button.style.transform = 'scale(1.2)';
    button.innerHTML = 'Petali magici per Anna! ✨🌸';
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.innerHTML = 'Più petali per Anna 🌸';
    }, 1000);
}

// Funzione per far sbocciare i fiori nel giardino
function bloomFlower(flowerId) {
    const flower = document.querySelector(`.flower-${flowerId}`);
    const message = document.getElementById(`message-${flowerId}`);
    
    // Animazione del fiore
    flower.classList.add('blooming');
    
    // Mostra il messaggio
    message.classList.remove('hidden');
    message.classList.add('show');
    
    // Crea petali intorno al fiore
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.textContent = '🌸';
            petal.style.position = 'absolute';
            petal.style.left = flower.offsetLeft + 'px';
            petal.style.top = flower.offsetTop + 'px';
            petal.style.animationDuration = '2s';
            petal.style.zIndex = '1000';
            
            flower.parentNode.appendChild(petal);
            
            setTimeout(() => {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }, 2000);
        }, i * 100);
    }
    
    // Nascondi il messaggio dopo 4 secondi
    setTimeout(() => {
        message.classList.remove('show');
        message.classList.add('hidden');
    }, 4000);
    
    // Rimuovi la classe blooming
    setTimeout(() => {
        flower.classList.remove('blooming');
    }, 1000);
}

// Effetti hover per le card degli animali
document.addEventListener('DOMContentLoaded', function() {
    const animalCards = document.querySelectorAll('.animal-card');
    
    animalCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Crea cuoricini volanti
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.textContent = '💕';
                    heart.style.position = 'absolute';
                    heart.style.fontSize = '1.5rem';
                    heart.style.pointerEvents = 'none';
                    heart.style.animation = 'floatUp 2s ease-out forwards';
                    heart.style.left = Math.random() * card.offsetWidth + 'px';
                    heart.style.top = card.offsetHeight + 'px';
                    
                    card.style.position = 'relative';
                    card.appendChild(heart);
                    
                    setTimeout(() => {
                        if (heart.parentNode) {
                            heart.parentNode.removeChild(heart);
                        }
                    }, 2000);
                }, i * 200);
            }
        });
    });
});

// Animazione CSS per i cuoricini che volano
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px);
        }
    }
`;
document.head.appendChild(style);

// Effetti di scintillio per il titolo
function addSparkleEffect() {
    const title = document.querySelector('.highlight');
    setInterval(() => {
        title.style.textShadow = `
            0 0 20px rgba(255, 105, 180, ${Math.random() * 0.5 + 0.5}),
            0 0 40px rgba(255, 105, 180, ${Math.random() * 0.3 + 0.2}),
            0 0 60px rgba(255, 105, 180, ${Math.random() * 0.2 + 0.1})
        `;
    }, 1000);
}

// Effetto parallasse per lo scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImg = document.querySelector('.hero-img');
    const footerImg = document.querySelector('.footer-img');
    
    if (heroImg) {
        heroImg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    if (footerImg) {
        footerImg.style.transform = `translateY(${scrolled * -0.2}px)`;
    }
});

// Messaggio speciale quando si carica la pagina
window.addEventListener('load', function() {
    setTimeout(() => {
        const specialMessage = document.createElement('div');
        specialMessage.innerHTML = '✨ Benvenuta nel tuo giardino magico, Anna! ✨';
        specialMessage.style.position = 'fixed';
        specialMessage.style.top = '50%';
        specialMessage.style.left = '50%';
        specialMessage.style.transform = 'translate(-50%, -50%)';
        specialMessage.style.background = 'linear-gradient(135deg, #ff69b4, #d147a3)';
        specialMessage.style.color = 'white';
        specialMessage.style.padding = '20px 40px';
        specialMessage.style.borderRadius = '50px';
        specialMessage.style.fontSize = '1.5rem';
        specialMessage.style.fontFamily = 'Dancing Script, cursive';
        specialMessage.style.fontWeight = '600';
        specialMessage.style.boxShadow = '0 20px 40px rgba(255, 105, 180, 0.4)';
        specialMessage.style.zIndex = '10000';
        specialMessage.style.animation = 'fadeIn 1s ease-out';
        
        document.body.appendChild(specialMessage);
        
        // Rimuovi il messaggio dopo 4 secondi
        setTimeout(() => {
            specialMessage.style.animation = 'fadeOut 1s ease-out';
            setTimeout(() => {
                if (specialMessage.parentNode) {
                    specialMessage.parentNode.removeChild(specialMessage);
                }
            }, 1000);
        }, 4000);
        
        // Aggiungi le animazioni di fade
        const fadeStyle = document.createElement('style');
        fadeStyle.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            }
            @keyframes fadeOut {
                from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            }
        `;
        document.head.appendChild(fadeStyle);
    }, 2000);
    
    // Avvia la pioggia di petali
    startPetalRain();
    
    // Aggiungi effetto scintillio
    addSparkleEffect();
});

// Effetto click speciale per le card degli interessi
document.querySelectorAll('.interest-card').forEach(card => {
    card.addEventListener('click', function() {
        // Crea esplosione di emoji
        const emojis = ['💕', '🌸', '✨', '💖', '🌺'];
        
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const emoji = document.createElement('div');
                emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                emoji.style.position = 'absolute';
                emoji.style.fontSize = '2rem';
                emoji.style.pointerEvents = 'none';
                emoji.style.left = Math.random() * card.offsetWidth + 'px';
                emoji.style.top = Math.random() * card.offsetHeight + 'px';
                emoji.style.animation = 'explode 1.5s ease-out forwards';
                emoji.style.zIndex = '1000';
                
                card.style.position = 'relative';
                card.appendChild(emoji);
                
                setTimeout(() => {
                    if (emoji.parentNode) {
                        emoji.parentNode.removeChild(emoji);
                    }
                }, 1500);
            }, i * 100);
        }
    });
});

// Animazione CSS per l'esplosione di emoji
const explodeStyle = document.createElement('style');
explodeStyle.textContent = `
    @keyframes explode {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg) translateY(-50px);
        }
    }
`;
document.head.appendChild(explodeStyle);

// Musica di sottofondo (opzionale - commentata)

function playBackgroundMusic() {
    const audio = new Audio();
    audio.src = 'https://www.soundjay.com/misc/sounds-of-nature-forest-background.mp3';
    audio.loop = true;
    audio.volume = 0.1;
    
    document.addEventListener('click', function() {
        audio.play().catch(e => console.log('Audio non disponibile'));
    }, { once: true });
}
 playBackgroundMusic();
