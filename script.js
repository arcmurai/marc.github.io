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
    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    document.body.appendChild(progressBar);

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

    // Dynamic Form Validation
    const form = document.querySelector('form');
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
            // Form is valid, submit the form or send an AJAX request
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Back to Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopButton);

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
    const modal = document.createElement('div');
    modal.id = 'joke-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <p id="random-joke"></p>
            <button id="new-joke">Another Joke</button>
        </div>
    `;
    document.body.appendChild(modal);

    const modalContent = modal.querySelector('.modal-content');
    const closeBtn = modal.querySelector('.close');
    const newJokeBtn = modal.querySelector('#new-joke');
    const randomJoke = modal.querySelector('#random-joke');

    const moreJokesButton = document.createElement('button');
    moreJokesButton.id = 'more-jokes';
    moreJokesButton.innerHTML = 'More Jokes!';
    document.querySelector('.intro').appendChild(moreJokesButton);

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
        const jokes = [
            "Why was the math book sad? Because it had too many problems.",
            "Why don't scientists trust atoms? Because they make up everything!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!"
        ];
        randomJoke.textContent = jokes[Math.floor(Math.random() * jokes.length)];
    }
});
/* Scroll Progress Bar */
#progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 5px;
    background: #005bb5;
    z-index: 9999;
    transition: width 0.2s;
}

/* Sticky Header Resize */
header.header-small {
    padding: 0.5em 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

header.header-small h1 {
    font-size: 1.5em;
}

/* Form Error Styles */
input.error, textarea.error {
    border-color: #ff0000;
}

/* Back to Top Button */
#back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 0.7em;
    background: #005bb5;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    display: none;
    z-index: 999;
    transition: transform 0.3s ease;
}

#back-to-top:hover {
    transform: scale(1.1);
}

/* Modal Styles */
#joke-modal {
    display: none;
    position: fixed;
    z-index: 10000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    animation: fadeIn 0.3s;
}

#joke-modal .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
    text-align: center;
    border-radius: 8px;
}

#joke-modal .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

#joke-modal .close:hover,
#joke-modal .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

/* Button to Show More Jokes */
#more-jokes {
    padding: 0.7em;
    background: #005bb5;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
    margin-top: 1em;
}

#more-jokes:hover {
    background: #004a9b;
    transform: scale(1.05);
}
