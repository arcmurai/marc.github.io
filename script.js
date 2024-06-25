// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Joke Modal
    const jokeButton = document.getElementById('joke-button');
    const jokeModal = document.getElementById('joke-modal');
    const closeBtn = document.querySelector('.close');
    const randomJoke = document.getElementById('random-joke');
    const newJokeBtn = document.getElementById('new-joke');

    jokeButton.addEventListener('click', function() {
        jokeModal.style.display = 'block';
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => {
                randomJoke.textContent = `${data.setup} ${data.punchline}`;
            });
    });

    closeBtn.addEventListener('click', function() {
        jokeModal.style.display = 'none';
    });

    newJokeBtn.addEventListener('click', function() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => {
                randomJoke.textContent = `${data.setup} ${data.punchline}`;
            });
    });

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

