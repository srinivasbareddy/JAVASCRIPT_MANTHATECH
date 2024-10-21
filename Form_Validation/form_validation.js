/* Take  other file and add validations  as follows :
Password should have atleast one upper case, one lower case , one digit.
email should end with "@gmail.com"
Mobile number length should be 10 digits exactly .
Username should not have space
Over all for all fileds shouldnt be empty. */

function validateForm() {
    const username = document.getElementById("name").value;
    const mobileNumber = document.getElementById("mobile-number");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const usernameError = document.getElementById("name-error");
    const mobileNumberError = document.getElementById("mobile-number-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    usernameError.textContent = "";
    mobileNumberError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    
    let isValid = true;

    if (username === "" || !username.includes(" ")) {
        nameError.textContent = "Please enter your name properly.";
        isValid = false;
    }

    if(mobileNumber === "" || mobileNumber.length() === 10){
        mobileNumberError.textContent = "Please enter valid mobile number";
        isValid = false;
    }

    if (email === "" || email.endsWith("@gmail.com")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.includes()) {
        passwordError.textContent = "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    return isValid;
}