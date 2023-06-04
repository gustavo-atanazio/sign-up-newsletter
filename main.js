const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const invalidAdvice = document.getElementById("invalid");

form.addEventListener("submit", event => {
    event.preventDefault();

    sessionStorage.setItem("Email", emailInput.value);

    if (emailInput.value === "") {
        
        invalidAdvice.style.display = "block";
        emailInput.classList.add("invalid");

    } else {
        window.location.href = "success.html";
    }

})