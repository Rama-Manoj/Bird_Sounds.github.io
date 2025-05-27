document.addEventListener('DOMContentLoaded', function() {
    // Handle image loading animations
    const images = document.querySelectorAll('.div2 img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                img.classList.add('loaded');
            });
        }
    });

    // Handle audio loading animations
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        audio.addEventListener('loadeddata', function() {
            audio.classList.add('loaded');
        });
    });

    // Add smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll-based animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add scroll animation classes to elements
    document.querySelectorAll('h1:not(.hed)').forEach(heading => {
        heading.classList.add('scroll-slide-up');
        observer.observe(heading);
    });

    document.querySelectorAll('.bird-description').forEach(desc => {
        desc.classList.add('scroll-fade');
        observer.observe(desc);
    });

    document.querySelectorAll('.div2').forEach((card, index) => {
        // Alternate between different animations for cards
        if (index % 3 === 0) {
            card.classList.add('scroll-slide-up');
        } else if (index % 3 === 1) {
            card.classList.add('scroll-slide-right');
        } else {
            card.classList.add('scroll-scale');
        }
        observer.observe(card);
    });

    // Enhanced footer animations
    const footer = document.querySelector('footer');
    const footerContainer = document.querySelector('.footer-container');
    const lastDiv = document.querySelector('.lastdiv');
    const socialIcons = document.querySelector('.social-icons');

    if (footer && footerContainer && lastDiv) {
        observer.observe(footer);
        observer.observe(footerContainer);
        observer.observe(lastDiv);
        
        if (socialIcons) {
            observer.observe(socialIcons);
        }
    }
}); 