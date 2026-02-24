// Toggle Navbar Menu
document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Form Validation
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.querySelector('input[placeholder="Full Name"]');
    const email = document.querySelector('input[placeholder="Email"]');
    const phone = document.querySelector('input[placeholder="Phone Number"]');
    const subject = document.querySelector('input[placeholder="Subject"]');
    const message = document.querySelector('textarea[placeholder="Your Message"]');
    
    if (!name.value || !email.value || !phone.value || !subject.value || !message.value) {
        alert('Please fill out all fields.');
        event.preventDefault();
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
