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
function addSections(navbar, num) {
    // loop through sections
    for (let i = 1; i <= num; i++) {
        let section = document.createElement('li');
        section.className = 'menu__link';
        section.innerText = 'Section ' + i;
        navbar.appendChild(section);
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
addSections(navbar, sections.length);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


