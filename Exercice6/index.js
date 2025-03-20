// Sélection de l'élément d'affichage
const display = document.getElementById('display');

// Fonction pour ajouter une valeur à l'affichage
function appendToDisplay(value) {
  display.value += value; // Ajoute les chiffres ou opérateurs à l'écran
}

// Fonction pour effacer l'affichage
function clearDisplay() {
  display.value = ''; // Réinitialise l'affichage
}

// Fonction pour calculer le résultat
// Fonction pour calculer le résultat
function calculateResult() {
  try {
    // Vérifie si l'utilisateur tente une division par zéro
    if (display.value.includes('/0')) {
      display.value = 'Division by zero is not allowed';
      return;
    }
    // Évalue l'expression mathématique
    display.value = eval(display.value);
  } catch (error) {
    // Si une erreur se produit (exemple : syntaxe incorrecte), afficher un message d'erreur
    display.value = 'Erreur';
  }
}

