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

// --- New Search Bar Features ---
// Array of documents with name and link
const documents = [
    { name: 'Team SWAT Google Sheet', link: 'https://docs.google.com/spreadsheets/d/1example123' },
    { name: 'Company Policy Google Doc', link: 'https://docs.google.com/document/d/1example456' },
    { name: 'Project Overview Google Site', link: 'https://sites.google.com/view/example-site' },
    { name: 'Financial Report Google Sheet', link: 'https://docs.google.com/spreadsheets/d/1example789' },
    { name: 'HR Guidelines Google Doc', link: 'https://docs.google.com/document/d/1example101' }
];

let selectedDocumentLink = '';

// Function to handle document search and show suggestions
function searchDocuments() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';  // Clear previous results
    searchResults.style.display = 'none';  // Hide results if no query

    if (query.length > 0) {
        searchResults.style.display = 'block';  // Show results if query is not empty

        documents.forEach(doc => {
            if (doc.name.toLowerCase().includes(query)) {
                const li = document.createElement('li');
                li.textContent = doc.name;
                li.onclick = () => {
                    selectedDocumentLink = doc.link;
                    document.getElementById('search-bar').value = doc.name;
                    searchResults.innerHTML = ''; // Clear results after selection
                    searchResults.style.display = 'none';  // Hide suggestions
                };
                searchResults.appendChild(li);
            }
        });
    }
}

// Function to open selected document link
function openDocument() {
    if (selectedDocumentLink) {
        window.open(selectedDocumentLink, '_blank');
    }
}

// Event listener to handle input on the search bar
document.getElementById('search-bar').addEventListener('input', searchDocuments);

// Event listener to open the document when the "Go" button is clicked
document.getElementById('go-button').addEventListener('click', openDocument);
