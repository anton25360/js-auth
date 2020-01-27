function signupFunction(event) {
    event.preventDefault()
       
    // window.location.replace("/account.html");

    let form = document.querySelector('#signupForm')

    let email = form['signupEmail'].value
    let password = form['signupPassword'].value

    console.log(email, password);  

    auth.createUserWithEmailAndPassword(email, password).catch(error => {
        // console.log(error);
        console.log(error.message);
        
        
    })

}