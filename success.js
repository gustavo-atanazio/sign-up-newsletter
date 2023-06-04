const emailView = document.getElementById("email-view");
const email = sessionStorage.getItem("Email");

emailView.innerText = email;