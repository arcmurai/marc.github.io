// Add interactive features like smooth scrolling for better user experience
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
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
    function showJoke() {
        var joke = document.getElementById('joke');
        if (joke.style.display === 'none') {
            joke.style.display = 'block';
        } else {
            joke.style.display = 'none';
        }
    }

    // Show another random joke
    function showAnotherJoke() {
        var jokeContainer = document.getElementById('another-joke');
        var jokes = [
            "Why was the math book sad? Because it had too many problems.",
            "I told my computer I needed a break, and now it won't stop sending me Kit-Kats.",
            "Why don't scientists trust atoms? Because they make up everything!",
            "Why do cows have hooves instead of feet? Because they lactose.",
            "Why don't skeletons fight each other? They don't have the guts."
        ];
        jokeContainer.textContent = jokes[Math.floor(Math.random() * jokes.length)];
        jokeContainer.style.display = 'block';
    }

    document.querySelector('button').addEventListener('click', showJoke);

    // Add button for more jokes
    var anotherJokeButton = document.createElement('button');
    anotherJokeButton.textContent = "Click for another joke!";
    anotherJokeButton.style.marginTop = "1em";
    anotherJokeButton.style.padding = "0.7em";
    anotherJokeButton.style.background = "#ffd700";
    anotherJokeButton.style.color = "#002366";
    anotherJokeButton.style.border = "none";
    anotherJokeButton.style.cursor = "pointer";
    anotherJokeButton.style.transition = "background 0.3s ease";
    anotherJokeButton.addEventListener('mouseenter', function() {
        anotherJokeButton.style.background = "#ffc300";
    });
    anotherJokeButton.addEventListener('mouseleave', function() {
        anotherJokeButton.style.background = "#ffd700";
    });
    anotherJokeButton.addEventListener('click', showAnotherJoke);

    document.querySelector('.intro').appendChild(anotherJokeButton);

    // Add a container for another joke
    var anotherJokeContainer = document.createElement('p');
    anotherJokeContainer.id = 'another-joke';
    anotherJokeContainer.style.display = 'none';
    anotherJokeContainer.style.marginTop = '1em';
    anotherJokeContainer.style.fontStyle = 'italic';

    document.querySelector('.intro').appendChild(anotherJokeContainer);
});
