function addStudent() {

    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let dept = document.getElementById("dept").value;
    let email = document.getElementById("email").value;

    if (id === "" || name === "" || dept === "" || email === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("studentTable");

    let row = table.insertRow();

    row.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${dept}</td>
        <td>${email}</td>
        <td>
            <button class="btn btn-warning btn-sm">Edit</button>
            <button class="btn btn-danger btn-sm">Delete</button>
        </td>
    `;

    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("email").value = "";

    alert("Student Added Successfully");
}