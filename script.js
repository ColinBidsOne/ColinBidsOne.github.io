// script.js

// Select the elements that need their colors swapped
const bright = document.getElementById('bright');
const wright = document.getElementById('wright');
const button = document.getElementById('changeColorBtn');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Swap the colors by directly toggling the styles
    if (bright.style.color === 'purple') {
        bright.style.color = 'pink';
        wright.style.color = 'purple';
    } else {
        bright.style.color = 'purple';
        wright.style.color = 'pink';
    }
});
