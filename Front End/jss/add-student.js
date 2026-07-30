document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("studentForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let id = document.getElementById("studentId").value.trim();
        let name = document.getElementById("studentName").value.trim();
        let dept = document.getElementById("department").value.trim();
        let email = document.getElementById("email").value.trim();
        let mobile = document.getElementById("mobile").value.trim();

        document.getElementById("idError").textContent = "";
        document.getElementById("nameError").textContent = "";
        document.getElementById("deptError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("mobileError").textContent = "";

        let valid = true;

        if(id === ""){
            document.getElementById("idError").textContent = "Student ID is required";
            valid = false;
        }

        if(name === ""){
            document.getElementById("nameError").textContent = "Student Name is required";
            valid = false;
        }

        if(dept === ""){
            document.getElementById("deptError").textContent = "Department is required";
            valid = false;
        }

        if(email === ""){
            document.getElementById("emailError").textContent = "Email is required";
            valid = false;
        }

        if(mobile === ""){
            document.getElementById("mobileError").textContent = "Mobile Number is required";
            valid = false;
        }

        if(valid){
            alert("Student Added Successfully");
            form.reset();
        }

    });

});