document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const errorModal = document.getElementById("errorModal");
    const errorClose = document.getElementById("errorClose");
    const errorText = document.getElementById("errorText");
    const welcomeModal = document.getElementById("welcomeModal");
    const welcomeClose = document.getElementById("welcomeClose");
    const welcomeText = document.getElementById("welcomeText");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // declarer les variables name et email et les initialiser avec les valeurs des champs du formulaire

        
        // verifier si les champs name et email sont vides ou si l'email n'est pas valide avec la fonction validateEmail
        if (name.trim() === "" || email.trim() === "" || !validateEmail(email)) {
            // Afficher le modal d'erreur
            // ajouter le message d'erreur dans le modal d'erreur "Veuillez remplir tous les champs correctement."


        } else {
            // Afficher le modal de bienvenue
            // ajouter le message de bienvenue dans le modal de bienvenue "Bienvenue <name> !"


        }
    });

    // Fermer le modal d'erreur


    // Fermer le modal de bienvenue


    function validateEmail(email) {
        // Ajouter la validation de l'email par regex
        // returner le résultat de la validation en booléen

        
    }
});
