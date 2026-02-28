// Toggle Navbar Menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', function() {
    navbar.classList.toggle('active');
});

// Close navbar when a link is clicked
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navbar.classList.remove('active');
    });
});

// Active Navigation Link
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Form Validation and Submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(event) {
        const name = document.querySelector('input[placeholder="Full Name"]');
        const email = document.querySelector('input[placeholder="Email Address"]');
        const phone = document.querySelector('input[placeholder="Phone Number"]');
        const subject = document.querySelector('input[placeholder="Subject"]');
        const message = document.querySelector('textarea[placeholder="Your Message"]');
        
        if (!name.value.trim() || !email.value.trim() || !phone.value.trim() || !subject.value.trim() || !message.value.trim()) {
            event.preventDefault();
            alert('Please fill out all fields.');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
    });
}

// Scroll Animation Observable
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

