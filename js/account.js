auth.onAuthStateChanged(function(user) {
    if (user) {
        document.querySelector('#emailTarget').innerHTML = user.email
    }
})