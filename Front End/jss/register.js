document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let fullname = document.getElementById("fullname").value.trim();
        let email = document.getElementById("email").value.trim();
        let mobile = document.getElementById("mobile").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();

        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("mobileError").textContent = "";
        document.getElementById("passwordError").textContent = "";
        document.getElementById("confirmError").textContent = "";

        let valid = true;

        if (fullname === "") {
            document.getElementById("nameError").textContent = "Full Name is required";
            valid = false;
        }

        if (email === "") {
            document.getElementById("emailError").textContent = "Email is required";
            valid = false;
        }

        if (mobile === "") {
            document.getElementById("mobileError").textContent = "Mobile Number is required";
            valid = false;
        } else if (mobile.length !== 10) {
            document.getElementById("mobileError").textContent = "Enter a valid 10-digit mobile number";
            valid = false;
        }

        if (password === "") {
            document.getElementById("passwordError").textContent = "Password is required";
            valid = false;
        } else if (password.length < 6) {
            document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
            valid = false;
        }

        if (confirmPassword === "") {
            document.getElementById("confirmError").textContent = "Confirm Password is required";
            valid = false;
        } else if (password !== confirmPassword) {
            document.getElementById("confirmError").textContent = "Passwords do not match";
            valid = false;
        }

        if (valid) {
            alert("Registration Successful");
            window.location.href = "login.html";
        }

    });

});