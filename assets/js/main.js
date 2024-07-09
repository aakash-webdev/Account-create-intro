
//  Get references to input elements
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Get references to error elements
const usernameError = document.getElementById('username_error');
const emailError = document.getElementById('email_error');
const passwordError = document.getElementById('password_error');

// Add event listeners for input events
usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);


// Function to validate username
function validateUsername() {
    const username = usernameInput.value.trim();
    usernameError.innerText = '';
    usernameInput.style.borderColor = '';

    if (username === '') {
        usernameError.innerText = 'Username is required';
        usernameInput.style.borderColor = 'red';
    }
    else if (!/^[a-zA-Z][a-zA-Z0-9_]*[a-zA-Z0-9]$/.test(username)) {
        usernameError.innerText = 'Username must start and end with a letter, and only contain letters, numbers, or underscore (_)';
        usernameInput.style.borderColor = 'red';
    } else {
        usernameInput.style.borderColor = 'green';
    }
}


// Function to validate email
function validateEmail() {
    const email = emailInput.value.trim();
    emailError.innerText = '';
    emailInput.style.borderColor = '';

    if (email === '') {
        emailError.innerText = 'Email address is required';
        emailInput.style.borderColor = 'red';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.innerText = 'Please enter a valid email address';
        emailInput.style.borderColor = 'red';
    } else {
        emailInput.style.borderColor = 'green';
    }
}


// Function to validate password
function validatePassword() {
    const password = passwordInput.value.trim();
    passwordError.innerText = '';
    passwordInput.style.borderColor = '';

    if (password === '') {
        passwordError.innerText = 'Password is required';
        passwordInput.style.borderColor = 'red';
    } else if (password.length < 8) {
        passwordError.innerText = 'Password must be at least 8 characters long';
        passwordInput.style.borderColor = 'red';
    } else {
        passwordInput.style.borderColor = 'green';
    }
}


// Function to validate the entire form on submit
function validateForm() {

    validateUsername();
    validateEmail();
    validatePassword();

    // Check if any errors exist
    if (usernameError.innerText || emailError.innerText || passwordError.innerText) {
        event.preventDefault(); // Prevent form submission if there are errors
        alert('Please fix the errors on the form');
        return false;
    }

    return true; // Return true to allow form submission
}