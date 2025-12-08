// TYPING EFFECT
const text = "Initializing Portfolio...\nLoading UI/UX Projects...\nWelcome, User.";
let i = 0;
const speed = 40;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}

window.onload = typeEffect;
