   // Smooth Scroll to Top Button
    const backToTopBtn = document.getElementById('back-to-top');

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Progress Bar
    window.addEventListener('scroll', function() {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollableHeight) * 100;
        document.getElementById('progress-bar').style.width = `${scrolled}%`;
    });

    // Form Submission
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Replace with your form handling logic (e.g., sending data to a backend)
        // For demo purposes, alert the user
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset(); // Reset form after submission
    });
});
