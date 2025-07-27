/**
 * Mobile menu functionality for Divadlo bez zákulisí
 * Optimized for performance and accessibility
 */

// Mobile menu toggle with accessibility support
function toggleMenu() {
    const menu = document.getElementById('menu-iconHamburger');
    const toggleButton = document.querySelector('.menu-iconHamburger');
    
    if (!menu || !toggleButton) return;
    
    const isHidden = menu.classList.contains('d-none');
    
    if (isHidden) {
        menu.classList.remove('d-none');
        menu.classList.add('show');
        toggleButton.setAttribute('aria-expanded', 'true');
        toggleButton.setAttribute('aria-label', 'Zavřít mobilní menu');
        
        // Focus management for accessibility
        menu.focus();
    } else {
        menu.classList.add('d-none');
        menu.classList.remove('show');
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleButton.setAttribute('aria-label', 'Otevřít mobilní menu');
    }
}

// Close menu when clicking outside (improved UX)
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu-iconHamburger');
    const toggleButton = document.querySelector('.menu-iconHamburger');
    
    if (!menu || !toggleButton) return;
    
    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        if (!menu.classList.contains('d-none')) {
            toggleMenu();
        }
    }
});

// Close menu with Escape key (accessibility)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const menu = document.getElementById('menu-iconHamburger');
        if (menu && !menu.classList.contains('d-none')) {
            toggleMenu();
        }
    }
});

// Performance optimization: Debounced resize handler
let resizeTimeout;
function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const menu = document.getElementById('menu-iconHamburger');
        if (window.innerWidth > 1274 && menu && !menu.classList.contains('d-none')) {
            toggleMenu(); // Close mobile menu on desktop
        }
    }, 150);
}

window.addEventListener('resize', handleResize);

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Divadlo bez zákulisí - Mobile menu initialized');
});

