// A basic script to log a message in the console
console.log("Welcome to my portfolio site!");
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random size for each particle
    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Adjust particle to position relative to scrolling offset
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Append particle to body and set auto-removal
    document.body.appendChild(particle);
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

// Event listener to create particle based on mouse position and scroll offset
document.addEventListener('mousemove', (e) => {
    createParticle(e.clientX, e.clientY); // Use clientX/clientY for viewport positioning
});

