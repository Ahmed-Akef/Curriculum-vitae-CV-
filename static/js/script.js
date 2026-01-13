// Smooth scrolling for navigation links
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

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
                navbar.style.background = 'rgba(15, 15, 30, 0.95)';
                navbar.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.1)';
        } else {
                navbar.style.background = 'rgba(15, 15, 30, 0.8)';
                navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
        hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                });
        });
}

// Intersection Observer for scroll animations
const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
                if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                }
        });
}, observerOptions);

// Observe all sections and cards
const animateElements = document.querySelectorAll(`
    .timeline-item,
    .education-card,
    .skill-card,
    .project-card,
    .stat-card,
    .info-item,
    .contact-method
`);

animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
});

// Skill bars animation
const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
                if (entry.isIntersecting) {
                        const progressBar = entry.target.querySelector('.skill-progress');
                        if (progressBar) {
                                progressBar.style.width = progressBar.style.getPropertyValue('--skill-level') || '0%';
                        }
                }
        });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => {
        skillObserver.observe(card);
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        navLinks.forEach(link => {
                                link.classList.remove('active');
                                if (link.getAttribute('href') === `#${sectionId}`) {
                                        link.classList.add('active');
                                }
                        });
                }
        });
}

window.addEventListener('scroll', highlightNavigation);

// Parallax effect for gradient orbs
window.addEventListener('mousemove', (e) => {
        const orbs = document.querySelectorAll('.gradient-orb');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        orbs.forEach((orb, index) => {
                const speed = (index + 1) * 20;
                const xMove = (x - 0.5) * speed;
                const yMove = (y - 0.5) * speed;

                orb.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
});

// Add loading animation
window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '1';
        }, 100);
});

// Project card click effect
document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function () {
                // Add a pulse animation
                this.style.animation = 'pulse 0.5s ease';
                setTimeout(() => {
                        this.style.animation = '';
                }, 500);
        });
});

// Typing effect for hero tagline (optional enhancement)
function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';

        function type() {
                if (i < text.length) {
                        element.textContent += text.charAt(i);
                        i++;
                        setTimeout(type, speed);
                }
        }

        type();
}

// Uncomment to enable typing effect
// const tagline = document.querySelector('.hero-tagline');
// if (tagline) {
//     const originalText = tagline.textContent;
//     typeWriter(tagline, originalText, 30);
// }

// Console message
console.log('%c👋 Welcome to my CV!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cInterested in the code? Check out the repository!', 'font-size: 14px; color: #4facfe;');
