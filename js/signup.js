function signupFunction(event) {
    event.preventDefault()
       
    // window.location.replace("/account.html");

    const form = document.querySelector('#signupForm')

    const user = form['signupUsername'].value
    const pass = form['signupPassword'].value

    console.log(user, pass);  

    auth.createUserWithEmailAndPassword(user, pass).catch(error => {
        // console.log(error);
        console.log(error.message);
        
        
    })

}