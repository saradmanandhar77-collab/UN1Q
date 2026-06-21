function showMessage() {
    alert("Welcome to SoleX Shoes!");
}

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "☀️";
    }
    else {
        themeBtn.innerHTML = "🌙";
    }

});

document.getElementById("contactForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Message Sent Successfully!");

    });