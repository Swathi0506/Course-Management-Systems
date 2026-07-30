function getProfile() {
    window.location.href = "profile.html";
}

function logOut() {
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {

    let form = document.getElementById("loginForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            let isValid = true;

            document.getElementById("usererror").innerHTML = "";
            document.getElementById("passworderror").innerHTML = "";

            if (username === "") {
                document.getElementById("usererror").innerHTML = "Username is required";
                isValid = false;
            }

            if (password === "") {
                document.getElementById("passworderror").innerHTML = "Password is required";
                isValid = false;
            }

            else if (password.length < 6) {
                document.getElementById("passworderror").innerHTML = "Password must contain at least 6 characters";
                isValid = false;
            }

            if (isValid) {
                alert("Login Successful");
                window.location.href = "home.html";
            }

        });

    }

});