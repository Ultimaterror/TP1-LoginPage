const db = [
    {
        email: "alexandre.luis.dev@gmail.com",
        password: "12345"
    },
    {
        email: "majidismagic@gmail.com",
        password: "12345"
    }
]

function authenticate() {
    for (let index = 0; index < db.length; index++) {
        const element = db[index];
        if (myForm.email.value === element.email && myForm.password.value === element.password) {
            return console.log("Vous pouvez passer");
        }
    }
    // Normalement return un message d'erreur
    return console.log("Interdit de passer");
}

let myForm = document.querySelector("form");


myForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (myForm.email.value === "" || myForm.password.value === "") {
        return console.log("Vos champs sont vides");
    }

    authenticate();
})
