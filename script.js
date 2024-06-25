document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Show a joke
    const jokeButton = document.getElementById('joke-button');
    jokeButton.addEventListener('click', () => {
        const joke = document.getElementById('joke');
        joke.style.display = joke.style.display === 'none' ? 'block' : 'none';
    });

    // Scroll Progress Indicator
    const progressBar = document.getElementById('progress-bar');
    window.addEventListener('scroll', function() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });

    // Sticky Header Resize
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-small');
        } else {
            header.classList.remove('header-small');
        }
    });

    // Dynamic Form Validation and AJAX Submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        let isValid = true;

        if (name.value.trim() === '') {
            isValid = false;
            name.classList.add('error');
        } else {
            name.classList.remove('error');
        }

        if (!validateEmail(email.value)) {
            isValid = false;
            email.classList.add('error');
        } else {
            email.classList.remove('error');
        }

        if (message.value.trim() === '') {
            isValid = false;
            message.classList.add('error');
        } else {
            message.classList.remove('error');
        }

        if (isValid) {
            // Form is valid, submit via AJAX
            fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    message: message.value,
                }),
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                form.reset();
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Modal for More Jokes
    const modal = document.getElementById('joke-modal');
    const closeBtn = modal.querySelector('.close');
    const newJokeBtn = modal.querySelector('#new-joke');
    const randomJoke = modal.querySelector('#random-joke');

    const moreJokesButton = document.getElementById('more-jokes');
    moreJokesButton.addEventListener('click', () => {
        modal.style.display = 'block';
        showRandomJoke();
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    newJokeBtn.addEventListener('click', showRandomJoke);

    function showRandomJoke() {
        fetch('/joke')
            .then(response => response.json())
            .then(data => {
                randomJoke.textContent = data.joke;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});

