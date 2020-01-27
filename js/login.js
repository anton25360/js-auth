function loginFunction(event) {
    event.preventDefault()
       
    // window.location.replace("/account.html");

    const form = document.querySelector('#loginForm')

    const user = form['loginUsername'].value
    const pass = form['loginPassword'].value

    console.log(user, pass);  

    auth.createUserWithEmailAndPassword(user, pass).then(cred => {
        console.log(cred);
    })

}