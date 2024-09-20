//  Variables selection on DOM
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');
const form = document.getElementById('form');


// stop form submit action for validate fields
form.addEventListener('submit', (e) => {

    e.preventDefault();

    if (form.className === 'login') {
        
        validateLoginInputs();

    } else if(form.className === 'register') {

        validateRegisterInputs();

    } else {
        alert("Error in form class name it's inconrect !");
    }
});

// Login form validation function
function validateLoginInputs() {

    const email_value = email.value.trim();
    const password_value = password.value.trim();

       // for email
       if (email_value == '') {
        setError(email, 'Email is required');
    } else if(!isValidEmail(email_value)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    // for password
    if(password_value == '') {
        setError(password, 'Password is required');
        // console.log(passwordValue.length)
    } else if (password_value.length < 8) {
        setError(password, 'Password must be contain 8 characters');
    } else {
        setSuccess(password);
    }
};

// Register validation function
function validateRegisterInputs() {

    const firstname_value = firstname.value.trim();
    const lastname_value = lastname.value.trim();
    const email_value = email.value.trim();
    const password_value = password.value.trim();
    const confirm_password_value = confirm_password.value.trim();

    // for firstname
    if (firstname_value == '') {
        setError(firstname, 'Firstname is required');
    } else {
        setSuccess(firstname);
    }

    // for lastname
    if (lastname_value == '') {
        setError(lastname, 'Lastname is required');
    } else {
        setSuccess(lastname);
    }

    // for email
    if (email_value == '') {
        setError(email, 'Email is required');
    } else if(!isValidEmail(email_value)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    // for password
    if(password_value == '') {
        setError(password, 'Password is required');
    } else if (password_value.length < 8) {
        setError(password, 'Password must be contain 8 characters');
    } else {
        setSuccess(password);
    }

    // for password2 for confirm first password
    if (confirm_password_value == '') {
        setError(confirm_password, 'Please confirm your password');
    } else if(password_value != confirm_password_value) {
        setError(confirm_password, 'Passwords doesn\'t match');
    } else {
        setSuccess(confirm_password);
    }

};

// Function than return error messages
function setError(element, message) {
    // on revient selectionner l'element parent de l'element passer en param(la div )
    const inputControl = element.parentElement;

    // on revient dans l'element courrant input-control et on selectionne la div error
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.textContent = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

// Function than return successful messages
function setSuccess(element) {

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
    errorDisplay.innerText = '';
};

// Email verification
function isValidEmail(email) {
    // par default la fonction retourne false
    return true;
    // copier le code de expression reguliere et plaquer ici
    // const re = /^(([^<>()[\]\\.,;:s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\]]))
};


