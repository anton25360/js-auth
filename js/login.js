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

            if (cred == null) { } else {
                alert('Success! You are now logged in.')
                window.location.replace("account.html");
            }
        })
}

function loginFunctionGoogle() {
    // alert('google!')
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        //redirect...
        window.location.replace("account.html");
        
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}