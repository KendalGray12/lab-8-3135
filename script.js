
'use strict';

// Get the root element
const root = document.documentElement;

// Get all button elements
const buttons = document.querySelectorAll('.accordion-label');

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});

function buttonClick(event) {
    // Get the button being clicked
    const btn = event.target;
    
    // Toggle the open class on the button and its corresponding content
    btn.classList.toggle('open');
    btn.nextElementSibling.classList.toggle('open');
    
    // Collapse other open sections
    buttons.forEach(button => {
        if (button !== btn && button.classList.contains('open')) {
            button.classList.remove('open');
            button.nextElementSibling.classList.remove('open');
        }
    });
    
    // Set the content height CSS variable
    root.style.setProperty('--content-height', btn.nextElementSibling.scrollHeight + 'px');
}

