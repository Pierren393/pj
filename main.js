// Jeu de devinette de nombre entre 1 et 100
let randomNumber;
let attempts;

// Initialise le jeu
function initGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    console.log("Nouveau jeu commencé! (Nombre secret: " + randomNumber + ")");
}

// Vérifie la tentative de l'utilisateur
function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const messageDiv = document.getElementById('message');
    const attemptsDiv = document.getElementById('attempts');
    
    const userGuess = parseInt(guessInput.value);
    
    // Validation de l'entrée
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageDiv.textContent = "Veuillez entrer un nombre entre 1 et 100";
        messageDiv.className = "hint";
        return;
    }
    
    attempts++;
    
    if (userGuess === randomNumber) {
        messageDiv.textContent = "🎉 Bravo ! Vous avez trouvé le nombre " + randomNumber + " !";
        messageDiv.className = "success";
        attemptsDiv.textContent = "Vous avez gagné en " + attempts + " tentative(s) !";
        guessInput.disabled = true;
    } else if (userGuess < randomNumber) {
        messageDiv.textContent = "C'est plus ! 📈";
        messageDiv.className = "hint";
        attemptsDiv.textContent = "Tentative(s) : " + attempts;
    } else {
        messageDiv.textContent = "C'est moins ! 📉";
        messageDiv.className = "hint";
        attemptsDiv.textContent = "Tentative(s) : " + attempts;
    }
    
    // Efface l'input pour la prochaine tentative
    guessInput.value = "";
    guessInput.focus();
}

// Réinitialise le jeu
function resetGame() {
    initGame();
    document.getElementById('guessInput').disabled = false;
    document.getElementById('guessInput').value = "";
    document.getElementById('message').textContent = "";
    document.getElementById('attempts').textContent = "";
    document.getElementById('guessInput').focus();
}

// Permet de soumettre avec la touche Entrée
document.addEventListener('DOMContentLoaded', function() {
    const guessInput = document.getElementById('guessInput');
    if (guessInput) {
        guessInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                checkGuess();
            }
        });
    }
    // Démarre le jeu au chargement de la page
    initGame();
});
