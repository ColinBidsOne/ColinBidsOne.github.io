// script.js

// Select the elements that need their colors swapped
const bright = document.getElementById('bright');
const wright = document.getElementById('wright');
const button = document.getElementById('changeColorBtn');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Swap the colors of 'Bright' and 'Wright'
    const brightColor = bright.style.color;
    bright.style.color = wright.style.color;
    wright.style.color = brightColor;
});
