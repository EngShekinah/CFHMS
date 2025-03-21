// Hardcoded credentials for demonstration purposes
const validUsername = "user";
const validPassword = "pass";

function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === validUsername && password === validPassword) {
        // Simulate successful login
        sessionStorage.setItem("loggedIn", "true"); // Store login status
        window.location.href = "index.html"; // Redirect to main page
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }

    return false; // Prevent form submission
}

// Check if user is logged in when loading the main page
if (window.location.pathname.endsWith("index.html")) {
    if (sessionStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html"; // Redirect to login if not logged in
    }
}