// A basic script to log a message in the console
console.log("Welcome to my portfolio site!");
// Particle effect on mouse movement with trail
document.addEventListener('mousemove', (e) => {
    createParticle(e.pageX, e.pageY);
});

// Handles scrolling as well as mouse movement
document.addEventListener('scroll', (e) => {
    createParticle(event.clientX, event.clientY);
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 10 + 5; // Random size between 5 and 15
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${x}px`; // Corrected particle positioning
    particle.style.top = `${y}px`;

    document.body.appendChild(particle);

    // Fade out and remove particle after animation
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

