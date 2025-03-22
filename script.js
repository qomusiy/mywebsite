// Form submission (basic example)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted! We will contact you soon.');
    this.reset();
});

// Smooth scrolling for nav links
document.querySelectorAll('.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Smooth scrolling for other links (e.g., Hero "Men haqimda qisqacha")
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});