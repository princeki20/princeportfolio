// TYPING EFFECT
const text = "Initializing Portfolio System...\nLoading UI/UX Projects...\nWelcome, User.";
let index = 0;
const speed = 40;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}
window.onload = typeEffect;


// MATRIX ANIMATION
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const drops = Array(Math.floor(canvas.width / 15)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff88";
    ctx.font = "15px Courier";

    drops.forEach((y, x) => {
        const char = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(char, x * 15, y * 15);

        if (y * 15 > canvas.height && Math.random() > 0.975) {
            drops[x] = 0;
        }
        drops[x]++;
    });
}
setInterval(drawMatrix, 40);


// LIGHT MODE TOGGLE
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode", themeToggle.checked);
});
