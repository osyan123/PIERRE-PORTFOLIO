// script.js

document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling & Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    // Toggle the hamburger menu on click
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Handle smooth scrolling and close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = header.offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }

            // Close the nav menu on link click (for mobile)
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // --- Intersection Observer for Scroll Animations ---
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.2
    });

    const elementsToAnimate = document.querySelectorAll('.fade-in-on-scroll');

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

});