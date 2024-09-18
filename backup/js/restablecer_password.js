alert("restablecer password ");

document.getElementById("passwordResetForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    fetch("/user/reset", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("message").innerText = data;
    })
    .catch(error => {
        document.getElementById("message").innerText = "Error al procesar la solicitud";
    });
});
