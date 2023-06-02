const form = document.getElementById("form");
const emailInput = document.getElementById("email");

form.addEventListener("submit", event => {
    event.preventDefault();

    if (emailInput.value === "") {
        console.log("Input empty");
    } else {
        window.location.href = "success.html";
    }

})

export default emailInput;