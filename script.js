// script.js

// Select the elements that need their colors swapped
const bright = document.getElementById('bright');
const wright = document.getElementById('wright');
const button = document.getElementById('changeColorBtn');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Get the computed styles for both elements
    const brightColor = getComputedStyle(bright).color;
    const wrightColor = getComputedStyle(wright).color;

    // Swap the colors
    bright.style.color = wrightColor;
    wright.style.color = brightColor;
});
