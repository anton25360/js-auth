function loginFunction(event) {
    event.preventDefault()

    let form = document.querySelector('#loginForm')

    let email = form['loginEmail'].value
    let password = form['loginPassword'].value

    auth.signInWithEmailAndPassword(email, password)
        .catch(error => {

            alert(error.message);
            
        })

        .then(cred => {
            
            if (cred == null) {} else {
                alert('Success! You are now logged in.')
                window.location.replace("account.html");
            }
        })
}

function loginFunctionGoogle() {
    alert('google!')
}