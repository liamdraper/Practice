

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'orange'];

function getRandomIndex() {
    return Math.floor(Math.random() * colors.length);
}

// HTML Elements

const body = document.querySelector('body');
const colorName = document.querySelector('h1 > span');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const color = colors[getRandomIndex()];
    body.style.backgroundColor = `${color}`;
    // Add the selected color's name on screen
    colorName.innerText = `${color}`;
})