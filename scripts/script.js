document.addEventListener('DOMContentLoaded', function () {
    const inputUserName = document.querySelector('#username');
    const inputUserEmail = document.querySelector('#email');
    const inputUserPassword = document.querySelector('#password');
    const inputUserConfirmPassword = document.querySelector('#confirmpassword');

    const errorUserName = document.querySelector('#usernameerror');
    const errorUserEmail = document.querySelector('#useremailerror');
    const errorUserPassword = document.querySelector('#userpassworderror');
    const errorUserConfirmPassword = document.querySelector('#userconfirmpassworderror');

    inputUserName.addEventListener('blur', () => {
        const username = inputUserName.value
        if (username === '') {
            errorUserName.innerHTML = 'Digite um nome para o usuário';
            errorUserName.style.color = 'red';
            inputUserName.style.border = '2px solid red';
        } else {
            errorUserName.innerHTML = ''
            inputUserName.style.border = '2px solid green';
            userName = true;
        }
        checkInputs();
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
            userEmail = true;
        }
        checkInputs();
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
        checkInputs();
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
            userConfirmPassword = true;
        }
        checkInputs();
    });

    function checkInputs() {
        const userNameValue = inputUserName.value.trim();
        const userEmailValue = inputUserEmail.value.trim();
        const userPasswordValue = inputUserPassword.value.trim();
        const userConfirmPasswordValue = inputUserConfirmPassword.value.trim();

        userName = userNameValue !== '';
        userEmail = userEmailValue !== '';
        userConfirmPassword = userConfirmPasswordValue !== '' && userConfirmPasswordValue === userPasswordValue;

        if (userName && userEmail && userConfirmPassword) {
            document.querySelector('#register').removeAttribute('disabled');
        } else {
            document.querySelector('#register').setAttribute('disabled', 'true');
        }
    }

    inputUserName.addEventListener('input', checkInputs);
    inputUserEmail.addEventListener('input', checkInputs);
    inputUserPassword.addEventListener('input', checkInputs);
    inputUserConfirmPassword.addEventListener('input', checkInputs);

    document.querySelector('#register').addEventListener('click', function () {
        if (userName && userEmail && userConfirmPassword) {
            window.location.href = './map.html';
        }
    });
});
