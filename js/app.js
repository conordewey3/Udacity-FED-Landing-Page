/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// listens for click on nav
function scrollToClick(clicked) {
    clicked.scrollIntoView();
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function addSections() {
    for (let item of sections) {
        let section = document.createElement('li');
        section.className = 'menu__link';
        section.dataset.nav = item.id;
        section.innerText = item.dataset.nav;
        navbar.appendChild(section);
    };
};

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function listenForClicks() {
    navbar.addEventListener('click', function (event) {
        const clicked = document.querySelector('#' + event.target.dataset.nav)
        scrollToClick(clicked);
    });
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
addSections();

// Scroll to section on link click
listenForClicks();

// Set sections as active


