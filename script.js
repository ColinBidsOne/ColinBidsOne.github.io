// script.js

// Select the button and the paragraph
const button = document.getElementById('changeTextBtn');
const message = document.getElementById('message');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Change the text content of the paragraph
    message.textContent = 'You have clicked the button! The text has changed.';
});
