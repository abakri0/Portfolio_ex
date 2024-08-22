// script.js

// Function to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('تم إرسال رسالتك بنجاح!');
    this.reset(); // Reset the form fields
});

// Function to handle scroll effects
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (scrollPosition > section.offsetTop) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });

    // Highlight the active link in the navbar
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (scrollPosition > section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
