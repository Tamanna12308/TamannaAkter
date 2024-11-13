// Function to load comments from localStorage
function loadComments() {
    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = ''; // Clear existing comments

    // Retrieve the comments array from localStorage
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    comments.forEach(({ name, comment }) => {
        const commentElement = document.createElement('div');
        commentElement.style.border = '1px solid #ddd';
        commentElement.style.padding = '10px';
        commentElement.style.marginTop = '10px';
        commentElement.style.borderRadius = '5px';
        commentElement.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;
        commentsList.appendChild(commentElement);
    });
}

// Function to save a new comment to localStorage
function saveComment(name, comment) {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({ name, comment });
    localStorage.setItem('comments', JSON.stringify(comments));
    loadComments();
}

// Handle form submission
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    saveComment(name, comment);

    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
});

// Clear all comments
document.getElementById('clear-comments').addEventListener('click', function() {
    localStorage.removeItem('comments');
    loadComments();
});

// Load comments on page load
window.onload = loadComments;
