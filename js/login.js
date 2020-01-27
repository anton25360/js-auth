function loginFunction(event) {
    event.preventDefault()
       
    // window.location.replace("/account.html");

    let form = document.querySelector('#loginForm')

    let email = form['loginEmail'].value
    let password = form['loginPassword'].value

    console.log(email, password);  

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
    })

}