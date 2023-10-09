const password = document.getElementById('password')
const submit_button = document.getElementById('signup-btn')
let is_submit = false
function checkPasswordStrength(password) {
    // Define regular expressions for various password criteria
    const lowercase_check = /^(?=.*[a-z])/;
    const uppercase_check = /^(?=.*[A-Z])/;
    const digit_check = /^(?=.*[0-9])/;
    const password_length = password.length;
    const special_character_check = /^(?=.*[$!@#])/
    const dot_check = /.*\..*/
    // The above regex expression ensures that for a  password it must contain ->
    /*
        1 . Atleast One lowerCase Letter
        2 . Atleast One Upper Case letter
        3 . Atleast One  digit in it
        4 . Atleast One Special Character
        5 . Must be Of 8 Letters
    */

    // Test for string password\
    const strongPassword = (lowercase_check.test(password)) &&
    (uppercase_check.test(password)) &&
    (digit_check.test(password) ) &&
    (password_length >= 8 ) &&
    (special_character_check.test(password)) &&
    (dot_check.test (password) );

    // checking for criteria of medium password
    const mediumPassword = (lowercase_check.test(password)) &&
    (password_length >= 8 ) &&
    (dot_check.test(password)) ;


    if (strongPassword) {
        is_submit =true ;
        return 'strong Password Well Done !';
    } else if (mediumPassword) {
        is_submit = true ;
        let uppercase_message = '' ;
        let digit_message = '' ;
        let special_character_message = '' ;
        if (!(uppercase_check.test(password))) uppercase_message = 'UpperCase Letter'
        if(!((digit_check.test(password)))) digit_message = 'digit from 0-9'
        if (!((special_character_check.test(password)))) special_character_message = 'special character' 
        return ` medium Password Try to add ${uppercase_message} ${digit_message} ${special_character_message} `;
    } else {
        return 'weak Password Try to add special characters , dots , numbers and much more ! ';
    }
}
const password_span = document.getElementById('password-span')
password.addEventListener('input', function (event) {
    const password_text = document.getElementById('password').value;
    let strength = checkPasswordStrength(password_text)
    password_span.innerText = strength
})

submit_button.addEventListener('click', function (event) {
    const password_text = document.getElementById('password').value;
    // preventing deafualt bahaviour of the submit button
    event.preventDefault();
    let strength = checkPasswordStrength(password_text)
    password_span.innerText = strength
    if (is_submit) {
        document.getElementById('singup-form').submit();
    }
    else 
    {
        document.getElementById('btn-span').innerText='Try to reach atleast Medium Level Password'
    }
})