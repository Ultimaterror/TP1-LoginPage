let myForm = document.querySelector("form");


myForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (myForm.email.value === "" || myForm.password.value === "") {
        return console.log("Vos champs sont vides");
    }

    authenticate();
})