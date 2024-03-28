document.addEventListener('DOMContentLoaded', function() {
    
    let loginButton = document.getElementById('loginButton'); //log in
    let signUpButton = document.getElementById('signupButton'); // sign up
    let getStartedButton = document.getElementById('getStartedButton'); 

    let newFamilyButton = document.getElementById('newFamilyButton');

    if (loginButton) {
        loginButton.addEventListener('click', function() {
            window.location.href = 'loginPage.html';
        });
    }

    if (signUpButton) {
        signUpButton.addEventListener('click', function() {
            window.location.href = 'signupPage.html';
        });
    }

    if (getStartedButton) {
        getStartedButton.addEventListener('click', function() {
            console.log('clicking');
            window.location.href = 'newUserPage.html';
        });
    }


    if (newFamilyButton) {
        newFamilyButton.addEventListener('click', function() {
            window.location.href = 'registerUserPage.html';
        });
    }
});
