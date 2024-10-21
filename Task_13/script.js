function validateForm() {
    // Input fields
    var loginInput = document.getElementById('loginInput').value;
    var password = document.getElementById('password').value;

    // Error spans
    var loginError = document.getElementById('loginError');
    var passwordError = document.getElementById('passwordError');

    // Clear previous error messages
    loginError.textContent = "";
    passwordError.textContent = "";

    // Regular expressions for validation
    var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    var usernameRegex = /^[a-zA-Z]+$/; // Username: No spaces, no digits
    var mobileRegex = /^[0-9]{10}$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate login input (email, username, or mobile)
    if (emailRegex.test(loginInput) || usernameRegex.test(loginInput) || mobileRegex.test(loginInput)) {
        // valid login input
    } else {
        loginError.textContent = "Enter a valid email (@gmail.com), username (no spaces/digits), or 10-digit mobile.";
        return false;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters, with upper, lower, digit, and special character.";
        return false;
    }

    // If all validations pass, submit the form
    return true;
}