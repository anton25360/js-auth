function signupFunction(event) {
    event.preventDefault()

    let form = document.querySelector('#signupForm')

    let email = form['signupEmail'].value
    let password = form['signupPassword'].value

    auth.createUserWithEmailAndPassword(email, password)
        .catch(error => {

            alert(error.message);
            
        })

        .then(cred => {
            
            if (cred == null) {} else {
                alert('Account created, you may now log in.')
                window.location.replace("/index.html");
            }
        })

}