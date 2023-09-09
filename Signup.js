document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Here you can add code to handle form submission and signup process.
        // For the sake of this example, we'll simply redirect to the homepage after 2 seconds.

        // Simulating a form submission process with a 2-second delay
        setTimeout(function() {
            window.location.href = "index.html"; // Replace "homepage.html" with the actual URL of your homepage.
        }, 2000);
    });
});
