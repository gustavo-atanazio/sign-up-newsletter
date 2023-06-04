const form = document.getElementById("form");
const emailInput = document.getElementById("email");

form.addEventListener("submit", event => {
    event.preventDefault();

    sessionStorage.setItem("Email", emailInput.value);

    if (emailInput.value === "") {
        console.log("Input empty");
    } else {
        window.location.href = "success.html";
    }

})