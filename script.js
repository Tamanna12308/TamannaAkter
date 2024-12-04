document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio loaded!");
});
<script>
    // Add event listeners to all "View More" buttons
    document.querySelectorAll('.btn-primary').forEach((button) =
    {
        button.addEventListener('click', (e) => {
            // Find the parent card and toggle the 'flip' class
            const card = e.target.closest('.card');
            card.classList.toggle('flipped');
        })
    })
    document.querySelectorAll('.nav-link').forEach(link = {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent immediate navigation
            const content = document.querySelector('.content');
            content.classList.add('rotate'); // Add the rotation class

            // Wait for the animation to finish before navigating
            setTimeout(() => {
                window.location.href = link.href;
            }, 800); // Match the transition duration in CSS
        })
    })


</script>
