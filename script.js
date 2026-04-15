document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.4rem 0';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
        } else {
            navbar.style.padding = '0.6rem 0';
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach(el => revealObserver.observe(el));

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Change icon if needed
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });
    }

    // CloseF mobile menu on link click
    const navLinksList = document.querySelectorAll('.nav-links a');
    navLinksList.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                if (icon) icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        });
    });

    // Dropdown Click Toggle (for mobile/touch)
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('a');
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth < 968) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                const content = dropdown.querySelector('.dropdown-content');
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Language Switcher Placeholder
    const langSwitch = document.querySelector('.floating-lang-switch');
    if (langSwitch) {
        langSwitch.addEventListener('click', () => {
            alert('Switching Language / Ganti Bahasa...');
        });
    }

    // Safety check for Lucide icons
    lucide.createIcons();
});
