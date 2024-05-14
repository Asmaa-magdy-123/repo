var registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

document.getElementById("softwaresignup").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("Confirmpassword").value;

    if (password !== confirmPassword) {
        document.getElementById("errorMessage").style.display = "block";
        return;
    } else {
        document.getElementById("errorMessage").style.display = "none";
    }

    var emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook)\.[a-zA-Z]{2,}$/;
    var usernameRegex = /^[a-zA-Z0-9]{1,10}$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email from Gmail, Yahoo, or Outlook.");
        return;
    }

    if (username.length > 10 || username.length === 0) {
        alert("Please enter a username containing between 1 and 10 characters or numbers.");
        return;
    }

    var existingUser = registeredUsers.find(function(user) {
        return user.username === username || user.email === email;
    });

    if (existingUser) {
        alert("Username or email already exists. Please choose another one.");
        return;
    }

    var userData = {
        username: username,
        email: email,
        password: password
    };

    registeredUsers.push(userData);

    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("Confirmpassword").value = "";

    alert("Registration successful!");
});