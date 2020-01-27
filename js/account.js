auth.onAuthStateChanged(function(user) {
    if (user) {
        document.querySelector('#emailTarget').innerHTML = user.email
        document.querySelector('#messageTarget').innerHTML = 'You are now logged in.'
    }
})

//todo: make logout work, add account error messages if user inst loggied in, fix logs and alerts.
