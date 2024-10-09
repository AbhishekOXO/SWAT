// Function to handle smooth page transition
function transitionPage(newPageUrl) {
    // Fade out the page
    document.body.classList.remove("fade");
    document.body.classList.add("fade");

    // Wait for the fade transition to complete, then navigate
    setTimeout(function() {
        window.location.href = newPageUrl;
    }, 1000); // Wait 1 second before changing page
}

// Handle the contact page button click
document.getElementById("contact").addEventListener("click", function(event) {
    event.preventDefault();
    transitionPage("contact.html");  // Simulate smooth page transition
});

// Preload contact page content before fully navigating
window.addEventListener('load', function() {
    setTimeout(function() {
        document.body.classList.add("show");  // Apply fade-in effect after content is loaded
    }, 100);  // Slight delay before starting the fade-in
});

// Get the input fields and login button
const emailInput = document.querySelector('#login-section input[type="email"]');
const passwordInput = document.querySelector('#login-section input[type="password"]');
const loginButton = document.querySelector('#login-section button');

// Function to check if both email and password are filled
function checkFormCompletion() {
    if (emailInput.value !== '' && passwordInput.value !== '') {
        // Add 'moved' class if both fields are filled, allowing the hover effect
        loginButton.classList.add('moved');
    } else {
        // Remove 'moved' class if any field is empty
        loginButton.classList.remove('moved');
    }
}

// Event listeners to check the form every time the input values change
emailInput.addEventListener('input', checkFormCompletion);
passwordInput.addEventListener('input', checkFormCompletion);

// Prevent hover movement on active button (added based on updated CSS)
loginButton.addEventListener('click', function() {
    loginButton.classList.remove('moved'); // Prevents movement once clicked
});

