const form = document.querySelector('#form');

const inputUserName = document.querySelector('#username');
const inputUserEmail = document.querySelector('#email');
const inputUserPassword = document.querySelector('#password');
const inputUserConfirmPassword = document.querySelector('#confirmpassword');

const errorUserName = document.querySelector('#usernameerror')
const errorUserEmail = document.querySelector('#useremailerror')
const errorUserPassword = document.querySelector('#userpassworderror')
const errorUserConfirmPassword = document.querySelector('#userconfirmpassworderror')


const inputUserRegister = document.querySelector('#register')
const errorUserRegister = document.querySelector('#userregistererror')





inputUserName.addEventListener('blur', () => {
    const username = inputUserName.value
    if (username === '') {
        errorUserName.innerHTML = 'Digite um nome para o usuário';
        errorUserName.style.color = 'red';
        inputUserName.style.border = '2px solid red';
    } else {
        errorUserName.innerHTML = ''
        inputUserName.style.border = '2px solid green';
    }
});

inputUserEmail.addEventListener('blur', () => {
    const useremail = inputUserEmail.value
    if (useremail === '') {
        errorUserEmail.innerHTML = 'Digite um email para o usuário';
        errorUserEmail.style.color = 'red';
        inputUserEmail.style.border = '2px solid red';
    } else {
        errorUserEmail.innerHTML = ''
        inputUserEmail.style.border = '2px solid green';
    }
});

inputUserPassword.addEventListener('blur', () => {
    const userpassword = inputUserPassword.value
    if (userpassword === '') {
        errorUserPassword.innerHTML = 'Digite uma senha para o usuário';
        errorUserPassword.style.color = 'red';
        inputUserPassword.style.border = '2px solid red';
    } else {
        errorUserPassword.innerHTML = ''
        inputUserPassword.style.border = '2px solid green';
    }
});

inputUserConfirmPassword.addEventListener('blur', () => {
    const userconfirmpassword = inputUserConfirmPassword.value
    const userpassword = inputUserPassword.value
    if (userconfirmpassword === '' || userconfirmpassword != userpassword) {
        errorUserConfirmPassword.innerHTML = 'Confirme a senha para o usuário';
        errorUserConfirmPassword.style.color = 'red';
        inputUserConfirmPassword.style.border = '2px solid red';
    } else {
        errorUserConfirmPassword.innerHTML = ''
        inputUserConfirmPassword.style.border = '2px solid green';
    }
});

inputUserRegister.addEventListener('click', () => {
    if (errorUserName.innerHTML === '' &&
        errorUserEmail.innerHTML === '' &&
        errorUserConfirmPassword.innerHTML === '') {
        inputUserRegister.setAttribute('href', './map.html');

    }

});