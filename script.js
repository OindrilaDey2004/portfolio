document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // --- Smooth Email Scroller with Visual Highlight Effect ---
    const emailScrollers = document.querySelectorAll('.scroll-to-email');
    const targetCard = document.getElementById('main-email-card');
    
    emailScrollers.forEach(scroller => {
        scroller.addEventListener('click', (e) => {
            e.preventDefault();
            const targetAnchor = document.getElementById('contact-card-anchor');
            if (targetAnchor) {
                targetAnchor.scrollIntoView({ behavior: 'smooth' });
                
                // Once the page finishes sliding down, add an attention-grabbing scale/pulse effect to the email box
                setTimeout(() => {
                    if (targetCard) {
                        targetCard.classList.add('pulse-highlight');
                        
                        // Clean up animation class so it can be re-triggered on next click
                        targetCard.addEventListener('animationend', () => {
                            targetCard.classList.remove('pulse-highlight');
                        }, { once: true });
                    }
                }, 600);
            }
        });
    });

    // --- Active Link Highlight on Scrolling ---
    const sections = document.querySelectorAll('section[id]');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 110; 
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                const activeLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
                if (activeLink) {
                    navLinks.forEach(el => el.classList.remove('active'));
                    activeLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);
});