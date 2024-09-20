const password_field = document.querySelector('#password');
const lenght_field = document.querySelector('#length');
const uppercase_field = document.querySelector('#uppercase');
const lowercase_field = document.querySelector('#lowercase');
const numbers_field = document.querySelector('#numbers');
const symbols_field = document.querySelector('#symbols');

const copy_btn = document.querySelector('#copy');
const generate_btn = document.querySelector('#generate');

// password characteres
const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const numbers_chars = "0123456789";
const symbols_chars = "!@#$%^&*()";

generate_btn.addEventListener('click', generatePassword);
copy_btn.addEventListener('click', copyPassword);

// generate password function
function generatePassword() {

    let password = '';
    let lenght = lenght_field.value;
    let chars = '';

    // password generation options
    chars += uppercase_field.checked ? uppercase_chars : '';
    chars += lowercase_field.checked ? lowercase_chars : '';
    chars += numbers_field.checked ? numbers_chars : '';
    chars += symbols_field.checked ? symbols_chars : '';

    for(let i = 0; i <= lenght; i++) {
        let rand = Math.floor(Math.random() * chars.length);
        password += chars.substring(rand, rand + 1);
    }

    password_field.value = password;
}

// copy password function
async function copyPassword() {

    if((navigator.clipboard) && (password_field.value !== '')) {

        navigator.clipboard.writeText(password_field.value);
        alert("Password copied to clipboard !");
    } else {

        alert("Please generate a secure password before it !");
    }

}