// Select DOM elements
const button = document.getElementById('actionBtn');
const title = document.getElementById('title');
const description = document.getElementById('description');

let isDarkMode = false;

// Event listener for button click
button.addEventListener('click', () => {
    isDarkMode = !isDarkMode;

    // Toggle dark mode class on body element
    document.body.classList.toggle('dark-mode');

    // Update text content dynamically
    if (isDarkMode) {
        title.textContent = 'Dark Mode Active';
        description.textContent = 'The interface theme has been updated dynamically using JavaScript.';
        button.textContent = 'Switch to Light Mode';
    } else {
        title.textContent = 'Hello World';
        description.textContent = 'Click the button below to change the theme and update the content.';
        button.textContent = 'Click Me';
    }
});