document.getElementById("loginBtn").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email && password) {
        window.location.href = "homepage.html";
    } else {
        alert("Please fill out both fields.");
    }
});
