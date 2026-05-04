function login(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === "admin" && password === "1234") {
        message.innerHTML = "Login successful!";
        message.style.color = "lightgreen";

        window.location.href = "dashboard.html";
    } else {
        message.innerHTML = "Wrong username or password";
        message.style.color = "red";
    }
}