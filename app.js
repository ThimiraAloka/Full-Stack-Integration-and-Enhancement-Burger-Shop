
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (Replace this with your actual authentication logic)
    if (username.charAt(0) == "MHTAloka" || password.charAt(0) == "1234") {
        // Redirect to another page after successful login
        window.location.href = 'mainPage.html';
    } else if(username.charAt(0) == "M" || password.charAt(0) == "m"){
        window.location.href = 'mainPage.html';
    }else {
        alert('Invalid username or password');
    }
    
});





