// HTML elements
const home = document.querySelector('.link1');
const about = document.querySelector('.link2');
const projects = document.querySelector('.link3');
const contact = document.querySelector('.link4');

const btn = document.querySelector('button');

// State variables
let isMenuOpen = false;

// Event listeners

btn.addEventListener('click', () => {
    if (!isMenuOpen) {
        openMenu();
    }
    else {
        closeMenu();
    }
    isMenuOpen = !isMenuOpen;
})

// Functions

function closeMenu() {
    home.style.display = 'none';
    about.style.display = 'none';
    projects.style.display = 'none';
    contact.style.display = 'none';
}

function openMenu() {
    home.style.display = '';
    about.style.display = '';
    projects.style.display = '';
    contact.style.display = '';
}


// Initializes menu as closed
closeMenu();