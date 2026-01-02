// 1. Premium Scroll Reveal (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 2. Sticky Navbar & Background Change
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(8, 8, 8, 0.98)';
        nav.style.backdropFilter = 'blur(20px)';
        nav.style.height = '70px';
    } else {
        nav.style.background = 'transparent';
        nav.style.height = '90px';
    }
});

// 3. Mobile Menu Toggle Logic
const mobileMenu = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-list');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
        
        // Toggle Icon
        const icon = mobileMenu.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');

        // Prevent background scrolling when menu is open
        if (navList.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
}

// Ensure clicking a link closes the menu and restores scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        document.body.style.overflow = 'auto';
        const icon = mobileMenu.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        document.body.style.overflow = 'auto';
        const icon = mobileMenu.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// 4. Button Interaction Effect (Ripple)
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
    });

});

const yearSpan = document.querySelector('#year');
if (yearSpan) {
    yearSpan.textContext = new Date().getFullYear();
};

