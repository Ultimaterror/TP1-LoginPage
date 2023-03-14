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
    db.forEach(element => {
        if (myForm.email.value === element.email && myForm.password.value === element.password) {
            return console.log("Vous pouvez passer");
        } else {
            // Normalement return un message d'erreur
            return console.log("Interdit de passer");
        }
    });
}