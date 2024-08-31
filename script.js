// script.js

// Select the elements that need their colors swapped
const bright = document.getElementById('bright');
const wright = document.getElementById('wright');
const button = document.getElementById('changeColorBtn');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Swap the colors by directly toggling the styles
    if (bright.style.color === 'black') {
        bright.style.color = 'white';
        wright.style.color = 'black';
    } else {
        bright.style.color = 'black';
        wright.style.color = 'white';
    }
});
