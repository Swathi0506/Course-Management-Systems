document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        document.getElementById("emailError").innerHTML = "";
        document.getElementById("passwordError").innerHTML = "";

        let valid = true;

        if (email === "") {
            document.getElementById("emailError").innerHTML = "Email is required";
            valid = false;
        }

        if (password === "") {
            document.getElementById("passwordError").innerHTML = "Password is required";
            valid = false;
        } 
        else if (password.length < 6) {
            document.getElementById("passwordError").innerHTML =
                "Password must be at least 6 characters";
            valid = false;
        }

        if (valid) {
            alert("Login Successful");
            window.location.href = "dashboard.html";
        }

    });

});