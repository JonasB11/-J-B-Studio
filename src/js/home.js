// Smooth scrolling for navigation
export function setupSmoothScroll() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Navbar background change on scroll
export function setupNavbarScroll() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        } else {
            header.style.backgroundColor = 'var(--primary-color)';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupSmoothScroll();
    setupNavbarScroll();
});
